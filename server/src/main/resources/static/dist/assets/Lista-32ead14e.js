import{aM as z,aN as B,N as M,R as m,a7 as N,j as e,Z as V,a as i,F as j,B as l,V as R}from"./index-7862eb00.js";import{A as $}from"./AddFab-0816e9c4.js";import{E as L}from"./ErrorScreen-eca8d1bc.js";import{a as O,E as W}from"./index-30e337fd.js";import{u as Y,a as I}from"./hooks-d3ca2a4c.js";import{T}from"./Typography-a27d4a59.js";import{P as F}from"./Paper-7dd8998f.js";import{G as h}from"./Grid-242ecbb1.js";import{T as x,F as G,I as k,S as H}from"./TextField-1bd45967.js";import{M as E}from"./MenuItem-b1dd1e6e.js";import{A as U,I as Z}from"./Alert-5fa013c6.js";import{T as q,a as C,b as a,c as J}from"./TableRow-ee613352.js";import{T as K}from"./TableHead-a97793ca.js";import{I as y}from"./IconFile-e16c7ffb.js";import"./Container-ae15322d.js";import"./Fab-7f11b1aa.js";import"./ButtonBase-52577508.js";import"./createReactComponent-ec120697.js";import"./useTheme-eae15486.js";import"./Grow-c742a7e6.js";import"./utils-682c87a5.js";import"./Modal-d6c190e6.js";import"./List-1ac29d19.js";import"./createSvgIcon-8230f01b.js";import"./listItemIconClasses-91dfb537.js";import"./listItemTextClasses-66e1b50f.js";function Q(p,u){return async n=>{O.get(`${W.FATTURE}/vendita/${p}?${u}`).then(o=>n(z(o.data))).catch(o=>n(B(o.message)))}}const xe=()=>{const p=Y(),u=M(),{selected:n}=I(r=>r.aziende),{list:o,listError:g,listing:A}=I(r=>r.fatture),[t,f]=m.useState({anno:new Date().getFullYear(),mese:new Date().getMonth()+1,order:"data"}),[d,S]=m.useState({anno:!1,mese:!1});let[b,w]=N({anno:t.anno.toString(),mese:t.mese.toString(),order:"data"});const v=r=>{const{name:s,value:D}=r.target;f({...t,[s]:D});const c=parseInt(D);s==="anno"&&S({...d,anno:c<1970||c>new Date().getFullYear()}),s==="mese"&&S({...d,mese:c<1||c>12})},P=r=>{const{value:s}=r.target;f({...t,order:s})};return m.useEffect(()=>{w({anno:t.anno.toString(),mese:t.mese.toString(),order:t.order})},[n,t]),m.useEffect(()=>{n&&p(Q(n.id,b.toString()))},[n,b]),A?e(V,{}):g?e(L,{message:g}):i(j,{children:[i(l,{mb:3,children:[e(T,{variant:"h3",gutterBottom:!0,children:"Fatture Vendita"}),i(T,{children:["Stai visualizzando le fatture dell'azienda ",n==null?void 0:n.denominazione]})]}),e(l,{mb:3,children:e(F,{children:e(l,{p:2,children:i(h,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[e(h,{item:!0,xs:12,sm:6,children:e(x,{fullWidth:!0,type:"number",label:"Anno",name:"anno",value:t.anno,error:d.anno,onChange:v,inputProps:{max:new Date().getFullYear()}})}),e(h,{item:!0,xs:12,sm:6,children:e(x,{fullWidth:!0,type:"number",label:"Mese",name:"mese",value:t.mese,error:d.mese,onChange:v,inputProps:{min:1,max:12}})}),e(h,{item:!0,xs:12,sm:6,children:i(G,{fullWidth:!0,children:[e(k,{children:"Ordina per data/data SDI"}),i(H,{value:t.order,label:"Ordina per data/data SDI",name:"order",onChange:P,children:[e(E,{value:"data",children:"Data fattura"}),e(E,{value:"sdi",children:"Data SDI"})]})]})})]})})})}),e(l,{children:e(F,{children:e(l,{p:2,children:R.isEmpty(o)?e(U,{severity:"info",children:"Non ci sono fatture, aggiunge una!"}):i(q,{children:[e(K,{children:i(C,{children:[e(a,{children:"Tipo"}),e(a,{children:"Data"}),e(a,{children:"Data SDI"}),e(a,{children:"Committente"}),e(a,{children:"Numero"}),e(a,{children:"Totale"}),e(a,{sx:{width:50},align:"center",children:e(y,{})})]})}),e(J,{children:o==null?void 0:o.map(r=>i(C,{children:[e(a,{children:r.tipoDocumento.codice}),e(a,{children:r.data}),e(a,{children:r.dataSDI}),e(a,{children:r.committente.denominazione}),e(a,{children:r.numero}),i(a,{children:["€ ",r.totale]}),e(a,{align:"center",children:e(Z,{color:"info",onClick:()=>u(`/app/docfisc/fatture/dettagli/${r.id}`),children:e(y,{})})})]},r.id))})]})})})}),e($,{href:"/app/docfisc/fatture/aggiungi"})]})};export{xe as default};
