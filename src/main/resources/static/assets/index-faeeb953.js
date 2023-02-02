import{R as i,a,j as e,aB as W,aC as j,F as P,B as p,L as w}from"./index-2b476c4b.js";import{S as k}from"./SaveFab-7be37dee.js";import{u as H,a as O}from"./hooks-d0ca0f61.js";import{a as z,b as G}from"./DialogContent-45283352.js";import{T as g}from"./TextField-54299ec3.js";import{D as L}from"./DialogActions-4b35f48e.js";import{B as E}from"./Button-13d62d0a.js";import{a as U,E as V}from"./index-e540bbee.js";import{T as y}from"./Typography-47ae6b5f.js";import{P as F}from"./Paper-8f109e83.js";import{G as A}from"./Grid-97347802.js";import{A as $,I as N}from"./Alert-638b19da.js";import{T as _,a as T,b as l,c as J}from"./TableRow-e0e8211d.js";import{T as K}from"./TableHead-309921e7.js";import{I as x}from"./IconTrash-accd6628.js";import"./Container-e52cae71.js";import"./Fab-b0ce07b6.js";import"./ButtonBase-7fb0decf.js";import"./createReactComponent-c8daf7a1.js";import"./useTheme-79cbfa36.js";import"./Modal-bacbe3c4.js";import"./utils-13c11dba.js";import"./Grow-e54fd436.js";import"./List-f6115eb5.js";import"./createSvgIcon-a1cd4e8e.js";const M=({open:f,handleClose:d,handleSubmit:u})=>{const[o,m]=i.useState({aliquota:22,totale:0,totaleAnnulli:0,totaleResi:0}),[n,s]=i.useState({aliquota:!1,totale:!1,totaleAnnulli:!1,totaleResi:!1}),h=v=>{const{name:C,value:S,required:q}=v.target;m({...o,[C]:S}),q&&s({...n,[C]:S.length<1})},[c,D]=i.useState(!0);i.useEffect(()=>{D(!Object.values(n).every(v=>v===!1))},[n]);const b=()=>{d(!1),u(o)};return a(z,{open:f,onClose:()=>d(!1),children:[a(G,{children:[e(g,{label:"aliquota",name:"aliquota",value:o.aliquota,error:n.aliquota,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale",name:"totale",value:o.totale,error:n.totale,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale annulli",name:"totaleAnnulli",value:o.totaleAnnulli,error:n.totaleAnnulli,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale resi",name:"totaleResi",value:o.totaleResi,error:n.totaleResi,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(L,{children:e(E,{disabled:c,onClick:b,children:"Salva"})})]})};function Q(f){return async d=>{U.post(`${V.CHIUSURE_FISCALI}`,f).then(u=>{d(W(u.data)),window.location.href=`/app/docfisc/chiusure-fiscali/dettagli/${u.data.id}`}).catch(u=>{d(j(u.message))})}}const qe=()=>{const f=H(),{selected:d}=O(t=>t.negozi),[u,o]=i.useState(!1),[m,n]=i.useState({data:"",totale:0,numeroDocFisc:0}),[s,h]=i.useState([]),[c,D]=i.useState({data:!0,totale:!1,numeroDocFisc:!1}),b=t=>{const{name:r,value:R,required:B}=t.target;n({...m,[r]:R}),B&&D({...c,[r]:R.length<1})},[v,C]=i.useState(!0);i.useEffect(()=>{const t=!Object.values(c).every(r=>r===!1);C(t||s.length<1)},[c,s]);const S=t=>{h([...s,t])},q=t=>{const r=[...s];r.splice(t,1),h(r)},I=()=>{const t={negozio:d,...m,reparti:[...s]};f(Q(t))};return a(P,{children:[e(p,{mb:3,children:e(y,{variant:"h3",children:"Aggiungi Chiusura Fiscale"})}),e(p,{mb:3,children:e(F,{children:a(p,{p:2,children:[e(g,{label:"Data",name:"data",value:m.data,error:c.data,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"date"}),e(g,{label:"Totale",name:"totale",value:m.totale,error:c.totale,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"}),e(g,{label:"Num. D.F.",name:"numeroDocFisc",value:m.numeroDocFisc,error:c.numeroDocFisc,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"})]})})}),e(p,{children:e(F,{children:a(p,{p:2,children:[a(A,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(A,{item:!0,xs:6,children:e(y,{variant:"h6",gutterBottom:!0,children:"Reparti"})}),e(A,{item:!0,xs:6,children:e(p,{sx:{textAlign:"right"},children:e(E,{onClick:()=>o(!0),children:"aggiungi"})})})]}),e(p,{mt:2,children:w.isEmpty(s)?e($,{severity:"error",children:"Devi aggiungere almeno un reparto!"}):a(_,{children:[e(K,{children:a(T,{children:[e(l,{children:"Aliquota"}),e(l,{children:"Totale"}),e(l,{children:"Annulli"}),e(l,{children:"Resi"}),e(l,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(J,{children:s.map((t,r)=>a(T,{children:[a(l,{children:[t.aliquota," %"]}),a(l,{children:[t.totale," €"]}),a(l,{children:[t.totaleAnnulli," €"]}),a(l,{children:[t.totaleResi," €"]}),e(l,{align:"center",children:e(N,{color:"error",onClick:()=>q(r),children:e(x,{})})})]},r))})]})})]})})}),e(M,{open:u,handleClose:o,handleSubmit:S}),e(k,{handleClick:I,disabled:v})]})};export{qe as default};