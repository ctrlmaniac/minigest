import{R as c,j as e,F as w,d as r,ba as oe,bb as le,bc as se,i as ce,l as x,ai as de,b6 as Q,B as me}from"./index-8a79851f.js";import{l as ue}from"./list-0a697d13.js";import{A as P,l as he}from"./list-421d5791.js";import{f as $,e as V,B as p,T as A,P as O}from"./hooks-ce677624.js";import{a as L,b as G}from"./DialogContent-c93ce930.js";import{T as g}from"./TextField-78036570.js";import{D as H}from"./DialogActions-47bf22c4.js";import{B as T}from"./Button-9693a81a.js";import{a as pe,E as ge,I as j}from"./index-cc2949c7.js";import{G as m}from"./Grid-537bb4e4.js";import{A as W}from"./Alert-80b7652b.js";import{T as k,a as y,b as s,c as B}from"./TableRow-e9d61cb4.js";import{T as R}from"./TableHead-391d31f0.js";import{I as E}from"./IconTrash-624cace1.js";import{S as fe}from"./Snackbar-fcd96b2d.js";import"./Grow-1ef8b3d3.js";import"./ListSubheader-b7515291.js";import"./useFormControl-611426ec.js";import"./createReactComponent-b6bd9a56.js";const be=({open:f,handleClose:d,onSubmit:h})=>{const[l,C]=c.useState({aliquota:22,imponibile:0,imposta:0}),[i,I]=c.useState({aliquota:!1,imponibile:!1,imposta:!1}),[a,u]=c.useState(!0);c.useEffect(()=>{u(!Object.values(i).every(b=>b===!1))},[i]);const o=b=>{const{value:v,name:D,required:z}=b.target;C({...l,[D]:v}),z&&I({...i,[D]:v.toString().length<1})},S=()=>{d(!1),h(l)};return e(w,{children:r(L,{open:f,onClose:()=>d(!1),children:[r(G,{children:[e(g,{fullWidth:!0,label:"Aliquota IVA",name:"aliquota",margin:"normal",value:l.aliquota,error:i.aliquota,onChange:o}),e(g,{fullWidth:!0,label:"Imponibile",name:"imponibile",margin:"normal",value:l.imponibile,error:i.imponibile,onChange:o}),e(g,{fullWidth:!0,label:"Imposta",name:"imposta",margin:"normal",value:l.imposta,error:i.imposta,onChange:o})]}),e(H,{children:e(T,{disabled:a,onClick:S,children:"salva"})})]})})};function Se(f){return async d=>{d(oe()),pe.post(`${ge.FATTURE}`,f).then(h=>{d(le(h.data))}).catch(h=>{let l="Errore";h.response?l=h.response.data:l="Errore",d(se(l))})}}const ve=({open:f,handleClose:d,onSubmit:h})=>{const[l,C]=c.useState({data:new Date().toISOString().split("T")[0],importo:0}),[i,I]=c.useState({data:!1,importo:!1}),[a,u]=c.useState(!0);c.useEffect(()=>{u(!Object.values(i).every(b=>b===!1))},[i]);const o=b=>{const{value:v,name:D,required:z}=b.target;C({...l,[D]:v}),z&&I({...i,[D]:v.toString().length<1})},S=()=>{d(!1),h(l)};return e(w,{children:r(L,{open:f,onClose:()=>d(!1),children:[r(G,{children:[e(g,{fullWidth:!0,label:"Data Scadenza",name:"data",margin:"normal",value:l.data,error:i.data,onChange:o,type:"date"}),e(g,{fullWidth:!0,label:"Importo",name:"importo",margin:"normal",value:l.importo,error:i.importo,onChange:o})]}),e(H,{children:e(T,{disabled:a,onClick:S,children:"salva"})})]})})},De=({open:f,handleClose:d,onSubmit:h})=>{const[l,C]=c.useState({data:new Date().toISOString().split("T")[0],importo:0}),[i,I]=c.useState({data:!1,importo:!1}),[a,u]=c.useState(!0);c.useEffect(()=>{u(!Object.values(i).every(b=>b===!1))},[i]);const o=b=>{const{value:v,name:D,required:z}=b.target;C({...l,[D]:v}),z&&I({...i,[D]:v.toString().length<1})},S=()=>{d(!1),h(l)};return e(w,{children:r(L,{open:f,onClose:()=>d(!1),children:[r(G,{children:[e(g,{fullWidth:!0,label:"Data Pagamento",name:"data",margin:"normal",value:l.data,error:i.data,onChange:o,type:"date"}),e(g,{fullWidth:!0,label:"Importo",name:"importo",margin:"normal",value:l.importo,error:i.importo,onChange:o})]}),e(H,{children:e(T,{disabled:a,onClick:S,children:"salva"})})]})})},Ce=({tipiDocumento:f,aziende:d})=>{const h=$(),l=ce(),{posting:C,postError:i,response:I}=V(t=>t.fatture),[a,u]=c.useState({cedente:null,committente:null,tipoDocumento:x.find(f,["descrizione","fattura"])||null,data:new Date().toISOString().split("T")[0],dataSDI:"",numero:"",totale:0,reparti:[],scadenze:[],pagamenti:[]}),[o,S]=c.useState({cedente:!0,committente:!0,tipoDocumento:!1,data:!1,dataSDI:!1,numero:!0,totale:!1,reparti:!0,scadenze:!1,pagamenti:!1}),[b,v]=c.useState(!1),[D,z]=c.useState(!1),[U,N]=c.useState(!1),[J,K]=c.useState(!0);c.useEffect(()=>{K(!Object.values(o).every(t=>t===!1))},[o]);const M=(t,n,q)=>{u({...a,cedente:n}),S({...o,cedente:x.isEmpty(n)})},X=(t,n,q)=>{u({...a,committente:n}),S({...o,committente:x.isEmpty(n)})},Y=(t,n,q)=>{u({...a,tipoDocumento:n}),S({...o,tipoDocumento:x.isEmpty(n)})},F=t=>{const{value:n,name:q,required:ie}=t.target;u({...a,[q]:n}),ie&&S({...o,[q]:n.length<1})},Z=t=>{const n=[...a.reparti,t];u({...a,reparti:n}),S({...o,reparti:n.length<1})},_=t=>{const n=[...a.reparti];n.splice(t,1),u({...a,reparti:n}),S({...o,reparti:n.length<1})},ee=t=>{const n=[...a.scadenze,t];u({...a,scadenze:n})},te=t=>{const n=[...a.scadenze];n.splice(t,1),u({...a,scadenze:n})},ae=t=>{const n=[...a.pagamenti,t];u({...a,pagamenti:n})},ne=t=>{const n=[...a.pagamenti];n.splice(t,1),u({...a,pagamenti:n})},re=()=>{const t={cedente:a.cedente,committente:a.committente,tipoDocumento:a.tipoDocumento,data:a.data,dataSDI:a.dataSDI,numero:a.numero,totale:a.totale,reparti:a.reparti,scadenze:a.scadenze,pagamenti:a.pagamenti};h(Se(t)),setTimeout(()=>{Q(),i||l(-1)},1e3)};return r(w,{children:[e(p,{mb:3,children:e(A,{variant:"h3",children:"Aggiungi Fattura"})}),e(p,{mb:3,children:e(O,{children:e(p,{p:2,children:r(m,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[e(m,{item:!0,xs:12,children:e(P,{fullWidth:!0,disablePortal:!0,options:f,getOptionLabel:t=>t.descrizione,value:a.tipoDocumento,isOptionEqualToValue:(t,n)=>t.descrizione===n.descrizione,onChange:Y,renderInput:t=>e(g,{...t,label:"Tipo Doc. Fisc.",name:"tipoDocumento",required:!0,error:o.tipoDocumento})})}),e(m,{item:!0,xs:12,sm:6,children:e(P,{fullWidth:!0,disablePortal:!0,options:d,getOptionLabel:t=>t.denominazione,value:a.cedente,isOptionEqualToValue:(t,n)=>t.denominazione===n.denominazione,onChange:M,renderInput:t=>e(g,{...t,label:"Cedente",name:"cedente",required:!0,error:o.cedente})})}),e(m,{item:!0,xs:12,sm:6,children:e(P,{fullWidth:!0,disablePortal:!0,options:d,getOptionLabel:t=>t.denominazione,value:a.committente,isOptionEqualToValue:(t,n)=>t.denominazione===n.denominazione,onChange:X,renderInput:t=>e(g,{...t,label:"Committente",name:"committente",required:!0,error:o.committente})})}),e(m,{item:!0,xs:12,sm:6,children:e(g,{fullWidth:!0,label:"Data",name:"data",value:a.data,error:o.data,onChange:F,type:"date",required:!0})}),e(m,{item:!0,xs:12,sm:6,children:e(g,{fullWidth:!0,label:"Data SDI",name:"dataSDI",value:a.dataSDI,error:o.dataSDI,onChange:F,type:"date"})}),e(m,{item:!0,xs:12,children:e(g,{fullWidth:!0,label:"Numero",name:"numero",value:a.numero,error:o.numero,onChange:F,required:!0})}),e(m,{item:!0,xs:12,children:e(g,{fullWidth:!0,label:"Totale documento",name:"totale",value:a.totale,error:o.totale,onChange:F,type:"number",inputProps:{step:.01},required:!0})})]})})})}),e(p,{mb:3,children:e(O,{children:r(p,{p:2,children:[r(m,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(m,{item:!0,xs:6,children:e(A,{variant:"h6",gutterBottom:!0,children:"Reparti"})}),e(m,{item:!0,xs:6,children:e(p,{sx:{textAlign:"right"},children:e(T,{onClick:()=>v(!0),children:"aggiungi"})})})]}),e(p,{mt:2,children:x.isEmpty(a.reparti)?e(W,{severity:"error",variant:"outlined",children:"Devi aggiungere almeno un reparto!"}):r(k,{children:[e(R,{children:r(y,{children:[e(s,{children:"Aliquota"}),e(s,{children:"Imponibile"}),e(s,{children:"Imposta"}),e(s,{sx:{width:50},align:"center",children:e(E,{})})]})}),e(B,{children:a.reparti.map((t,n)=>r(y,{children:[r(s,{children:["% ",t.aliquota]}),r(s,{children:["€ ",t.imponibile]}),r(s,{children:["€ ",t.imposta]}),e(s,{children:e(j,{color:"error",onClick:()=>_(n),children:e(E,{})})})]},n))})]})})]})})}),e(p,{mb:3,children:e(O,{children:r(p,{p:2,children:[r(m,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(m,{item:!0,xs:6,children:e(A,{variant:"h6",gutterBottom:!0,children:"Scadenze"})}),e(m,{item:!0,xs:6,children:e(p,{sx:{textAlign:"right"},children:e(T,{onClick:()=>z(!0),children:"aggiungi"})})})]}),e(p,{mt:2,children:x.isEmpty(a.scadenze)?e(W,{severity:"warning",variant:"outlined",children:"Questa fattura non ha scadenze! Verrà contata la data del documento come scadenza unica!"}):r(k,{children:[e(R,{children:r(y,{children:[e(s,{children:"Data"}),e(s,{children:"Importo"}),e(s,{sx:{width:50},align:"center",children:e(E,{})})]})}),e(B,{children:a.scadenze.map((t,n)=>r(y,{children:[e(s,{children:t.data}),r(s,{children:["€ ",t.importo]}),e(s,{children:e(j,{color:"error",onClick:()=>te(n),children:e(E,{})})})]},n))})]})})]})})}),e(p,{children:e(O,{children:r(p,{p:2,children:[r(m,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(m,{item:!0,xs:6,children:e(A,{variant:"h6",gutterBottom:!0,children:"Pagamenti"})}),e(m,{item:!0,xs:6,children:e(p,{sx:{textAlign:"right"},children:e(T,{onClick:()=>N(!0),children:"aggiungi"})})})]}),e(p,{mt:2,children:x.isEmpty(a.pagamenti)?e(W,{severity:"warning",variant:"outlined",children:"Questa fattura non ha pagamenti registrati"}):r(k,{children:[e(R,{children:r(y,{children:[e(s,{children:"Data"}),e(s,{children:"Importo"}),e(s,{sx:{width:50},align:"center",children:e(E,{})})]})}),e(B,{children:a.pagamenti.map((t,n)=>r(y,{children:[e(s,{children:t.data}),r(s,{children:["€ ",t.importo]}),e(s,{children:e(j,{color:"error",onClick:()=>ne(n),children:e(E,{})})})]},n))})]})})]})})}),e(be,{open:b,handleClose:v,onSubmit:Z}),e(ve,{open:D,handleClose:z,onSubmit:ee}),e(De,{open:U,handleClose:N,onSubmit:ae}),e(de,{disabled:J,onClick:re,loading:C}),e(fe,{open:!x.isEmpty(I),autoHideDuration:2e3,onClose:()=>h(Q()),children:e(W,{severity:i?"error":"success",children:I})})]})},Ge=()=>{const f=$(),{list:d,listing:h}=V(i=>i.aziende),{list:l,listing:C}=V(i=>i.tipiDocFisc);return c.useEffect(()=>{f(ue()),f(he())},[]),h&&C?e(me,{}):e(Ce,{aziende:d,tipiDocumento:l})};export{Ge as default};