import{R as l,a as o,j as e,aF as j,aG as w,F as k,B as f,L as z,a7 as G,P as H}from"./index-2b476c4b.js";import{E as L}from"./ErrorScreen-77dd40d9.js";import{g as O}from"./get-40e15542.js";import{u as x,a as I}from"./hooks-d0ca0f61.js";import{a as $,b as U}from"./DialogContent-45283352.js";import{T as g}from"./TextField-54299ec3.js";import{D as V}from"./DialogActions-4b35f48e.js";import{B as P}from"./Button-13d62d0a.js";import{S as M}from"./SaveFab-7be37dee.js";import{a as N,E as _}from"./index-e540bbee.js";import{T as y}from"./Typography-47ae6b5f.js";import{P as A}from"./Paper-8f109e83.js";import{G as q}from"./Grid-97347802.js";import{A as J,I as K}from"./Alert-638b19da.js";import{T as Q,a as E,b as c,c as X}from"./TableRow-e0e8211d.js";import{T as Y}from"./TableHead-309921e7.js";import{I as T}from"./IconTrash-accd6628.js";import"./Container-e52cae71.js";import"./useTheme-79cbfa36.js";import"./Modal-bacbe3c4.js";import"./utils-13c11dba.js";import"./ButtonBase-7fb0decf.js";import"./Grow-e54fd436.js";import"./List-f6115eb5.js";import"./createSvgIcon-a1cd4e8e.js";import"./Fab-b0ce07b6.js";import"./createReactComponent-c8daf7a1.js";const Z=({open:r,handleClose:n,handleSubmit:d})=>{const[t,s]=l.useState({aliquota:22,totale:0,totaleAnnulli:0,totaleResi:0}),[i,m]=l.useState({aliquota:!1,totale:!1,totaleAnnulli:!1,totaleResi:!1}),h=v=>{const{name:C,value:S,required:F}=v.target;s({...t,[C]:S}),F&&m({...i,[C]:S.length<1})},[p,D]=l.useState(!0);l.useEffect(()=>{D(!Object.values(i).every(v=>v===!1))},[i]);const b=()=>{n(!1),d(t)};return o($,{open:r,onClose:()=>n(!1),children:[o(U,{children:[e(g,{label:"aliquota",name:"aliquota",value:t.aliquota,error:i.aliquota,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale",name:"totale",value:t.totale,error:i.totale,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale annulli",name:"totaleAnnulli",value:t.totaleAnnulli,error:i.totaleAnnulli,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale resi",name:"totaleResi",value:t.totaleResi,error:i.totaleResi,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(V,{children:e(P,{disabled:p,onClick:b,children:"Salva"})})]})};function ee(r,n){return async d=>{N.put(`${_.CHIUSURE_FISCALI}/${r}`,n).then(t=>{d(j(t.data)),window.location.href=`/app/docfisc/chiusure-fiscali/dettagli/${t.data.id}`}).catch(t=>{d(w(t.message))})}}const te=({dettagli:r})=>{const n=x(),[d,t]=l.useState(!1);I(a=>a.negozi);const[s,i]=l.useState({data:r.data,totale:r.totale,numeroDocFisc:r.numeroDocFisc}),[m,h]=l.useState([...r.reparti]),[p,D]=l.useState({data:!1,totale:!1,numeroDocFisc:!1}),b=a=>{const{name:u,value:R,required:W}=a.target;i({...s,[u]:R}),W&&D({...p,[u]:R.length<1})},[v,C]=l.useState(!0);l.useEffect(()=>{const a=!Object.values(p).every(u=>u===!1);C(a||m.length<1)},[p,m]);const S=a=>{h([...m,a])},F=a=>{const u=[...m];u.splice(a,1),h(u)},B=()=>{const a={negozio:r.negozio,...s,reparti:m};n(ee(r==null?void 0:r.id,a))};return o(k,{children:[e(f,{mb:3,children:e(y,{variant:"h3",children:"Aggiungi Chiusura Fiscale"})}),e(f,{mb:3,children:e(A,{children:o(f,{p:2,children:[e(g,{label:"Data",name:"data",value:s.data,error:p.data,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"date"}),e(g,{label:"Totale",name:"totale",value:s.totale,error:p.totale,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"}),e(g,{label:"Num. D.F.",name:"numeroDocFisc",value:s.numeroDocFisc,error:p.numeroDocFisc,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"})]})})}),e(f,{children:e(A,{children:o(f,{p:2,children:[o(q,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(q,{item:!0,xs:6,children:e(y,{variant:"h6",gutterBottom:!0,children:"Reparti"})}),e(q,{item:!0,xs:6,children:e(f,{sx:{textAlign:"right"},children:e(P,{onClick:()=>t(!0),children:"aggiungi"})})})]}),e(f,{mt:2,children:z.isEmpty(m)?e(J,{severity:"error",children:"Devi aggiungere almeno un reparto!"}):o(Q,{children:[e(Y,{children:o(E,{children:[e(c,{children:"Aliquota"}),e(c,{children:"Totale"}),e(c,{children:"Annulli"}),e(c,{children:"Resi"}),e(c,{sx:{width:50},align:"center",children:e(T,{})})]})}),e(X,{children:m.map((a,u)=>o(E,{children:[o(c,{children:[a.aliquota," %"]}),o(c,{children:[a.totale," €"]}),o(c,{children:[a.totaleAnnulli," €"]}),o(c,{children:[a.totaleResi," €"]}),e(c,{align:"center",children:e(K,{color:"error",onClick:()=>F(u),children:e(T,{})})})]},u))})]})})]})})}),e(Z,{open:d,handleClose:t,handleSubmit:S}),e(M,{handleClick:B,disabled:v})]})},xe=()=>{const r=x(),{id:n}=G(),{dettagli:d,getting:t,getError:s}=I(i=>i.chiusureFiscali);return l.useEffect(()=>{n&&r(O(n))},[n]),t?e(H,{}):s?e(L,{message:s}):e(te,{dettagli:d})};export{xe as default};