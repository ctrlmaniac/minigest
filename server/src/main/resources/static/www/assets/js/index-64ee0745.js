import{R as l,a as o,j as e,aL as j,aM as w,F as k,B as f,Y as z,ad as H,a1 as L}from"./index-5f51ca44.js";import{E as O}from"./ErrorScreen-79d85a92.js";import{g as $}from"./get-a94c8693.js";import{u as x,a as I}from"./hooks-1f293e4f.js";import{a as G,b as M}from"./DialogContent-113ce8ae.js";import{T as g}from"./TextField-fd5a3e96.js";import{D as U}from"./DialogActions-494308e9.js";import{B}from"./Button-5e49282d.js";import{S as V}from"./SaveFab-142d182a.js";import{a as N,E as Y}from"./index-30e337fd.js";import{T as y}from"./Typography-6ee06c79.js";import{P as A}from"./Paper-cffb93af.js";import{G as q}from"./Grid-8800b093.js";import{A as _,I as J}from"./Alert-368acf87.js";import{T as K,a as E,b as c,c as Q}from"./TableRow-500111fc.js";import{T as X}from"./TableHead-1b4dafed.js";import{I as T}from"./IconTrash-e38c8d7f.js";import"./Container-87c2bf1f.js";import"./useTheme-90c811d5.js";import"./Modal-3eb94ddf.js";import"./utils-7d94707b.js";import"./ButtonBase-8b0d506c.js";import"./Grow-62fe4847.js";import"./List-91c3af84.js";import"./createSvgIcon-1a708d24.js";import"./Fab-998d6591.js";import"./createReactComponent-ea0485c8.js";const Z=({open:r,handleClose:n,handleSubmit:d})=>{const[t,s]=l.useState({aliquota:22,totale:0,totaleAnnulli:0,totaleResi:0}),[i,m]=l.useState({aliquota:!1,totale:!1,totaleAnnulli:!1,totaleResi:!1}),h=v=>{const{name:C,value:S,required:F}=v.target;s({...t,[C]:S}),F&&m({...i,[C]:S.length<1})},[p,D]=l.useState(!0);l.useEffect(()=>{D(!Object.values(i).every(v=>v===!1))},[i]);const b=()=>{n(!1),d(t)};return o(G,{open:r,onClose:()=>n(!1),children:[o(M,{children:[e(g,{label:"aliquota",name:"aliquota",value:t.aliquota,error:i.aliquota,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale",name:"totale",value:t.totale,error:i.totale,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale annulli",name:"totaleAnnulli",value:t.totaleAnnulli,error:i.totaleAnnulli,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}}),e(g,{label:"totale resi",name:"totaleResi",value:t.totaleResi,error:i.totaleResi,fullWidth:!0,required:!0,onChange:h,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(U,{children:e(B,{disabled:p,onClick:b,children:"Salva"})})]})};function ee(r,n){return async d=>{N.put(`${Y.CHIUSURE_FISCALI}/${r}`,n).then(t=>{d(j(t.data)),window.location.href=`/app/docfisc/chiusure-fiscali/dettagli/${t.data.id}`}).catch(t=>{d(w(t.message))})}}const te=({dettagli:r})=>{const n=x(),[d,t]=l.useState(!1);I(a=>a.negozi);const[s,i]=l.useState({data:r.data,totale:r.totale,numeroDocFisc:r.numeroDocFisc}),[m,h]=l.useState([...r.reparti]),[p,D]=l.useState({data:!1,totale:!1,numeroDocFisc:!1}),b=a=>{const{name:u,value:R,required:W}=a.target;i({...s,[u]:R}),W&&D({...p,[u]:R.length<1})},[v,C]=l.useState(!0);l.useEffect(()=>{const a=!Object.values(p).every(u=>u===!1);C(a||m.length<1)},[p,m]);const S=a=>{h([...m,a])},F=a=>{const u=[...m];u.splice(a,1),h(u)},P=()=>{const a={negozio:r.negozio,...s,reparti:m};n(ee(r==null?void 0:r.id,a))};return o(k,{children:[e(f,{mb:3,children:e(y,{variant:"h3",children:"Aggiungi Chiusura Fiscale"})}),e(f,{mb:3,children:e(A,{children:o(f,{p:2,children:[e(g,{label:"Data",name:"data",value:s.data,error:p.data,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"date"}),e(g,{label:"Totale",name:"totale",value:s.totale,error:p.totale,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"}),e(g,{label:"Num. D.F.",name:"numeroDocFisc",value:s.numeroDocFisc,error:p.numeroDocFisc,fullWidth:!0,required:!0,onChange:b,margin:"normal",type:"number"})]})})}),e(f,{children:e(A,{children:o(f,{p:2,children:[o(q,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[e(q,{item:!0,xs:6,children:e(y,{variant:"h6",gutterBottom:!0,children:"Reparti"})}),e(q,{item:!0,xs:6,children:e(f,{sx:{textAlign:"right"},children:e(B,{onClick:()=>t(!0),children:"aggiungi"})})})]}),e(f,{mt:2,children:z.isEmpty(m)?e(_,{severity:"error",children:"Devi aggiungere almeno un reparto!"}):o(K,{children:[e(X,{children:o(E,{children:[e(c,{children:"Aliquota"}),e(c,{children:"Totale"}),e(c,{children:"Annulli"}),e(c,{children:"Resi"}),e(c,{sx:{width:50},align:"center",children:e(T,{})})]})}),e(Q,{children:m.map((a,u)=>o(E,{children:[o(c,{children:[a.aliquota," %"]}),o(c,{children:[a.totale," €"]}),o(c,{children:[a.totaleAnnulli," €"]}),o(c,{children:[a.totaleResi," €"]}),e(c,{align:"center",children:e(J,{color:"error",onClick:()=>F(u),children:e(T,{})})})]},u))})]})})]})})}),e(Z,{open:d,handleClose:t,handleSubmit:S}),e(V,{handleClick:P,disabled:v})]})},xe=()=>{const r=x(),{id:n}=H(),{dettagli:d,getting:t,getError:s}=I(i=>i.chiusureFiscali);return l.useEffect(()=>{n&&r($(n))},[n]),t?e(L,{}):s?e(O,{message:s}):e(te,{dettagli:d})};export{xe as default};