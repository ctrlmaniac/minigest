import{r as O,_ as P,v as Y,c as J,a as i,Y as G,Z as D,$ as Q,R as b,j as C,F as q,a0 as X}from"./index-238283c1.js";import{e as ee,a as U,E as Z,u as ne,b as K,T as x}from"./index-f0dc1343.js";import{a as ie}from"./exists-cefee72a.js";import{l as te}from"./lodash-d0fa4ec6.js";import{g as re,a as oe,s as ae,e as se,c as ce,b as le,B as A}from"./Box-5629869d.js";import{P as R}from"./ButtonBase-7d301f46.js";import{T as V}from"./Typography-19065848.js";import{A as _}from"./Alert-5b7fcd54.js";const ue=O.createContext(),L=ue;function de(e){return re("MuiGrid",e)}const pe=[0,1,2,3,4,5,6,7,8,9,10],me=["column-reverse","column","row-reverse","row"],ge=["nowrap","wrap-reverse","wrap"],F=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],N=oe("MuiGrid",["root","container","item","zeroMinWidth",...pe.map(e=>`spacing-xs-${e}`),...me.map(e=>`direction-xs-${e}`),...ge.map(e=>`wrap-xs-${e}`),...F.map(e=>`grid-xs-${e}`),...F.map(e=>`grid-sm-${e}`),...F.map(e=>`grid-md-${e}`),...F.map(e=>`grid-lg-${e}`),...F.map(e=>`grid-xl-${e}`)]),fe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function I(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function he({theme:e,ownerState:r}){let t;return e.breakpoints.keys.reduce((n,a)=>{let o={};if(r[a]&&(t=r[a]),!t)return n;if(t===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(t==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const p=G({values:r.columns,breakpoints:e.breakpoints.values}),m=typeof p=="object"?p[a]:p;if(m==null)return n;const c=`${Math.round(t/m*1e8)/1e6}%`;let f={};if(r.container&&r.item&&r.columnSpacing!==0){const s=e.spacing(r.columnSpacing);if(s!=="0px"){const z=`calc(${c} + ${I(s)})`;f={flexBasis:z,maxWidth:z}}}o=P({flexBasis:c,flexGrow:0,maxWidth:c},f)}return e.breakpoints.values[a]===0?Object.assign(n,o):n[e.breakpoints.up(a)]=o,n},{})}function xe({theme:e,ownerState:r}){const t=G({values:r.direction,breakpoints:e.breakpoints.values});return D({theme:e},t,n=>{const a={flexDirection:n};return n.indexOf("column")===0&&(a[`& > .${N.item}`]={maxWidth:"none"}),a})}function H({breakpoints:e,values:r}){let t="";Object.keys(r).forEach(a=>{t===""&&r[a]!==0&&(t=a)});const n=Object.keys(e).sort((a,o)=>e[a]-e[o]);return n.slice(0,n.indexOf(t))}function ve({theme:e,ownerState:r}){const{container:t,rowSpacing:n}=r;let a={};if(t&&n!==0){const o=G({values:n,breakpoints:e.breakpoints.values});let p;typeof o=="object"&&(p=H({breakpoints:e.breakpoints.values,values:o})),a=D({theme:e},o,(m,c)=>{var f;const s=e.spacing(m);return s!=="0px"?{marginTop:`-${I(s)}`,[`& > .${N.item}`]:{paddingTop:I(s)}}:(f=p)!=null&&f.includes(c)?{}:{marginTop:0,[`& > .${N.item}`]:{paddingTop:0}}})}return a}function ze({theme:e,ownerState:r}){const{container:t,columnSpacing:n}=r;let a={};if(t&&n!==0){const o=G({values:n,breakpoints:e.breakpoints.values});let p;typeof o=="object"&&(p=H({breakpoints:e.breakpoints.values,values:o})),a=D({theme:e},o,(m,c)=>{var f;const s=e.spacing(m);return s!=="0px"?{width:`calc(100% + ${I(s)})`,marginLeft:`-${I(s)}`,[`& > .${N.item}`]:{paddingLeft:I(s)}}:(f=p)!=null&&f.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${N.item}`]:{paddingLeft:0}}})}return a}function we(e,r,t={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[t[`spacing-xs-${String(e)}`]];const n=[];return r.forEach(a=>{const o=e[a];Number(o)>0&&n.push(t[`spacing-${a}-${String(o)}`])}),n}const be=ae("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e,{container:n,direction:a,item:o,spacing:p,wrap:m,zeroMinWidth:c,breakpoints:f}=t;let s=[];n&&(s=we(p,f,r));const z=[];return f.forEach(w=>{const h=t[w];h&&z.push(r[`grid-${w}-${String(h)}`])}),[r.root,n&&r.container,o&&r.item,c&&r.zeroMinWidth,...s,a!=="row"&&r[`direction-xs-${String(a)}`],m!=="wrap"&&r[`wrap-xs-${String(m)}`],...z]}})(({ownerState:e})=>P({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),xe,ve,ze,he);function Se(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const t=[];return r.forEach(n=>{const a=e[n];if(Number(a)>0){const o=`spacing-${n}-${String(a)}`;t.push(o)}}),t}const Ce=e=>{const{classes:r,container:t,direction:n,item:a,spacing:o,wrap:p,zeroMinWidth:m,breakpoints:c}=e;let f=[];t&&(f=Se(o,c));const s=[];c.forEach(w=>{const h=e[w];h&&s.push(`grid-${w}-${String(h)}`)});const z={root:["root",t&&"container",a&&"item",m&&"zeroMinWidth",...f,n!=="row"&&`direction-xs-${String(n)}`,p!=="wrap"&&`wrap-xs-${String(p)}`,...s]};return le(z,de,r)},$e=O.forwardRef(function(r,t){const n=Y({props:r,name:"MuiGrid"}),{breakpoints:a}=ee(),o=se(n),{className:p,columns:m,columnSpacing:c,component:f="div",container:s=!1,direction:z="row",item:w=!1,rowSpacing:h,spacing:W=0,wrap:v="wrap",zeroMinWidth:y=!1}=o,S=J(o,fe),E=h||W,j=c||W,M=O.useContext(L),k=s?m||12:M,T={},B=P({},S);a.keys.forEach(d=>{S[d]!=null&&(T[d]=S[d],delete B[d])});const u=P({},o,{columns:k,container:s,direction:z,item:w,rowSpacing:E,columnSpacing:j,wrap:v,zeroMinWidth:y,spacing:W},T,{breakpoints:a.keys}),l=Ce(u);return i(L.Provider,{value:k,children:i(be,P({ownerState:u,className:ce(l.root,p),as:f,ref:t},B))})}),g=$e;function Ae(e="IT",r=""){return async t=>{U.get(`${Z.AZIENDE}/exists?nazione=${e}&codice=${r}`).then(n=>{t(Q(n.data))}).catch(n=>{let a=!1;n.response?a=n.response.data:a=!1,console.log(a)})}}function ye(e){return async r=>{U.post(`${Z.AUTH}/register`,e).then(t=>{console.log(t),window.location.href="/app"}).catch(t=>{console.log(t);let n="Errore";t.response?n=t.response.data:n="Errore",console.log(n)})}}const Te=()=>{const e=ne(),{exists:r}=K(u=>u.account),{exists:t}=K(u=>u.aziende),[n,a]=b.useState({nome:"",cognome:"",email:"",password:"",passwordRepeat:""}),[o,p]=b.useState({nome:!0,cognome:!0,email:!0,password:!0,passwordRepeat:!0});b.useEffect(()=>{e(ie(n.email))},[n]);const m=u=>{const{value:l,name:d}=u.target;a({...n,[d]:l}),p(d==="email"?{...o,email:!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(l)}:{...o,[d]:l.toString().length<1})};b.useEffect(()=>{p({...o,password:n.password!==n.passwordRepeat||n.password.toString().length<1,passwordRepeat:n.password!==n.passwordRepeat||n.passwordRepeat.toString().length<1})},[n]);const[c,f]=b.useState({denominazione:"",idFiscaleIVAPaese:"IT",idFiscaleIVACodice:"",codiceFiscale:""}),[s,z]=b.useState({denominazione:!0,idFiscaleIVAPaese:!1,idFiscaleIVACodice:!0,codiceFiscale:!0});b.useEffect(()=>{e(Ae(c.idFiscaleIVAPaese,c.idFiscaleIVACodice))},[c]);const w=u=>{const{name:l,value:d}=u.target;f({...c,[l]:d}),z(t?{...s,denominazione:!1,codiceFiscale:!1,[l]:d.toString().length<1}:{...s,[l]:d.toString().length<1}),l==="idFiscaleIVAPaese"&&z({...s,idFiscaleIVAPaese:d.toString().length!==2})},[h,W]=b.useState({indirizzo:"",numeroCivico:"",cap:"",comune:"",provincia:"",nazione:"IT"}),[v,y]=b.useState({indirizzo:!0,numeroCivico:!1,cap:!0,comune:!0,provincia:!1,nazione:!1}),S=u=>{const{name:l,value:d,required:$}=u.target;W({...h,[l]:d}),y({...v,[l]:$&&d.toString().length<1}),l==="cap"&&y({...v,cap:d.toString().length!==5}),l==="provincia"&&y({...v,provincia:d.toString().length>0?d.toString().length!==2:!1}),l==="nazione"&&y({...v,nazione:d.toString().length!==2})},[E,j]=b.useState({nome:""}),M=u=>{const{value:l}=u.target;j({...E,nome:l})},[k,T]=b.useState(!0);b.useEffect(()=>{const u=!Object.values(o).every($=>$===!1),l=t?!1:!Object.values(s).every($=>$===!1),d=t?!1:!Object.values(v).every($=>$===!1);console.log(u,l,d),T(u||l||d)},[t,o,s,v]);const B=()=>{let u={nome:n.nome,cognome:n.cognome,email:n.email,password:n.password};if(t)u={...u,addMeTo:{idFiscaleIVAPaese:c.idFiscaleIVAPaese,idFiscaleIVACodice:c.idFiscaleIVACodice}};else{let l={...c,sede:{...h}};te.isEmpty(E.nome)||(l={...l,negozi:[{...E}]}),u={...u,azienda:{...c,sede:{...h}}}}e(ye(u))};return C(q,{children:[i(A,{mb:3,children:i(R,{children:C(A,{p:2,children:[i(V,{variant:"h6",gutterBottom:!0,children:"Dati Personali"}),C(g,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"flex-start",spacing:2,children:[i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Nome",name:"nome",value:n.nome,error:o.nome,onChange:m,required:!0})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Cognome",name:"cognome",value:n.cognome,error:o.cognome,onChange:m,required:!0})}),C(g,{item:!0,xs:12,children:[i(x,{fullWidth:!0,label:"Email",name:"email",value:n.email,error:o.email,onChange:m,type:"email",required:!0,helperText:o.email?"Email non conforme":""}),n.email.toString().length>0&&i(_,{sx:{marginTop:2},severity:r?"error":"success",variant:"outlined",children:r?"Account già registrato!":"Account disponibile"})]}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Password",name:"password",value:n.password,error:o.password,onChange:m,type:"password",helperText:o.password?"le password devono coincidere":"password conforme",required:!0})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Ripeti Password",name:"passwordRepeat",value:n.passwordRepeat,error:o.passwordRepeat,onChange:m,type:"password",helperText:o.password?"le password devono coincidere":"password conforme",required:!0})})]})]})})}),i(A,{mb:3,children:i(R,{children:C(A,{p:2,children:[i(V,{variant:"h6",gutterBottom:!0,children:"Aggiungi la tua azienda"}),C(g,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[i(g,{item:!0,xs:12,children:i(x,{label:"Denominazione o Nome e Cognome",name:"denominazione",value:c.denominazione,error:s.denominazione,fullWidth:!0,onChange:w})}),i(g,{item:!0,xs:2,children:i(x,{label:"Nazione",name:"idFiscaleIVAPaese",value:c.idFiscaleIVAPaese,error:s.idFiscaleIVAPaese,fullWidth:!0,onChange:w})}),i(g,{item:!0,xs:10,children:i(x,{label:"Partita IVA",name:"idFiscaleIVACodice",value:c.idFiscaleIVACodice,error:s.idFiscaleIVACodice,fullWidth:!0,onChange:w})}),i(g,{item:!0,xs:12,children:c.idFiscaleIVAPaese.toString().length>0&&c.idFiscaleIVACodice.toString().length>0&&i(_,{severity:t?"error":"success",variant:"outlined",children:t?"Azienda già esistente! Dovrai essere aggiunto manualmente da un nostro moderatore!":"Azienda disponibile"})}),i(g,{item:!0,xs:12,children:i(x,{label:"Codice Fiscale",name:"codiceFiscale",value:c.codiceFiscale,error:s.codiceFiscale,fullWidth:!0,onChange:w})})]})]})})}),!t&&C(q,{children:[i(A,{mb:3,children:i(R,{children:C(A,{p:2,children:[i(V,{gutterBottom:!0,variant:"h6",children:"Aggiungi la sede della tua azienda"}),C(g,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[i(g,{item:!0,xs:10,children:i(x,{fullWidth:!0,label:"Indirizzo",name:"indirizzo",value:h.indirizzo,error:v.indirizzo,required:!0,onChange:S})}),i(g,{item:!0,xs:2,children:i(x,{fullWidth:!0,label:"N. Civico",name:"numeroCivico",value:h.numeroCivico,error:v.numeroCivico,onChange:S})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"CAP",name:"cap",value:h.cap,error:v.cap,required:!0,onChange:S})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Comune",name:"comune",value:h.comune,error:v.comune,required:!0,onChange:S})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Provincia",name:"provincia",value:h.provincia,error:v.provincia,onChange:S,helperText:"Esempio: BS"})}),i(g,{item:!0,xs:12,sm:6,children:i(x,{fullWidth:!0,label:"Nazione",name:"nazione",value:h.nazione,error:v.nazione,onChange:S,required:!0,helperText:"Esempio: IT"})})]})]})})}),i(A,{mb:16,children:i(R,{children:C(A,{p:2,children:[i(V,{gutterBottom:!0,variant:"h6",children:"Aggiungi il nome del tuo negozio"}),i(V,{variant:"subtitle1",gutterBottom:!0,children:"Se non hai un negozio non aggiungerlo"}),i(x,{fullWidth:!0,label:"Nome Negozio",name:"nome",value:E.nome,onChange:M})]})})})]}),i(X,{onClick:B,disabled:k||r})]})};export{Te as default};
