import{r as K,_ as V,o as J,c as Q,a as r,X as j,Y as _,Z as ee,R as f,j as S,F as ne,$ as re}from"./index-219ee0a2.js";import{b as te,c as H,E as X,d as ie,e as L,g as oe,T as h}from"./exists-8f849b0d.js";import{g as se,d as ae,s as ce,f as le,a as ue,b as de,B as $,T}from"./Box-64d9b7dc.js";import{P as G,A as U}from"./Alert-5e36736c.js";import"./ButtonBase-c4df7e59.js";const pe=K.createContext(),Z=pe;function me(e){return se("MuiGrid",e)}const ge=[0,1,2,3,4,5,6,7,8,9,10],he=["column-reverse","column","row-reverse","row"],fe=["nowrap","wrap-reverse","wrap"],N=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=ae("MuiGrid",["root","container","item","zeroMinWidth",...ge.map(e=>`spacing-xs-${e}`),...he.map(e=>`direction-xs-${e}`),...fe.map(e=>`wrap-xs-${e}`),...N.map(e=>`grid-xs-${e}`),...N.map(e=>`grid-sm-${e}`),...N.map(e=>`grid-md-${e}`),...N.map(e=>`grid-lg-${e}`),...N.map(e=>`grid-xl-${e}`)]),xe=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function E(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ve({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce((n,s)=>{let o={};if(t[s]&&(i=t[s]),!i)return n;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=j({values:t.columns,breakpoints:e.breakpoints.values}),u=typeof d=="object"?d[s]:d;if(u==null)return n;const c=`${Math.round(i/u*1e8)/1e6}%`;let m={};if(t.container&&t.item&&t.columnSpacing!==0){const a=e.spacing(t.columnSpacing);if(a!=="0px"){const v=`calc(${c} + ${E(a)})`;m={flexBasis:v,maxWidth:v}}}o=V({flexBasis:c,flexGrow:0,maxWidth:c},m)}return e.breakpoints.values[s]===0?Object.assign(n,o):n[e.breakpoints.up(s)]=o,n},{})}function we({theme:e,ownerState:t}){const i=j({values:t.direction,breakpoints:e.breakpoints.values});return _({theme:e},i,n=>{const s={flexDirection:n};return n.indexOf("column")===0&&(s[`& > .${k.item}`]={maxWidth:"none"}),s})}function Y({breakpoints:e,values:t}){let i="";Object.keys(t).forEach(s=>{i===""&&t[s]!==0&&(i=s)});const n=Object.keys(e).sort((s,o)=>e[s]-e[o]);return n.slice(0,n.indexOf(i))}function ze({theme:e,ownerState:t}){const{container:i,rowSpacing:n}=t;let s={};if(i&&n!==0){const o=j({values:n,breakpoints:e.breakpoints.values});let d;typeof o=="object"&&(d=Y({breakpoints:e.breakpoints.values,values:o})),s=_({theme:e},o,(u,c)=>{var m;const a=e.spacing(u);return a!=="0px"?{marginTop:`-${E(a)}`,[`& > .${k.item}`]:{paddingTop:E(a)}}:(m=d)!=null&&m.includes(c)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}})}return s}function Ce({theme:e,ownerState:t}){const{container:i,columnSpacing:n}=t;let s={};if(i&&n!==0){const o=j({values:n,breakpoints:e.breakpoints.values});let d;typeof o=="object"&&(d=Y({breakpoints:e.breakpoints.values,values:o})),s=_({theme:e},o,(u,c)=>{var m;const a=e.spacing(u);return a!=="0px"?{width:`calc(100% + ${E(a)})`,marginLeft:`-${E(a)}`,[`& > .${k.item}`]:{paddingLeft:E(a)}}:(m=d)!=null&&m.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}})}return s}function be(e,t,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const n=[];return t.forEach(s=>{const o=e[s];Number(o)>0&&n.push(i[`spacing-${s}-${String(o)}`])}),n}const Se=ce("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{container:n,direction:s,item:o,spacing:d,wrap:u,zeroMinWidth:c,breakpoints:m}=i;let a=[];n&&(a=be(d,m,t));const v=[];return m.forEach(x=>{const g=i[x];g&&v.push(t[`grid-${x}-${String(g)}`])}),[t.root,n&&t.container,o&&t.item,c&&t.zeroMinWidth,...a,s!=="row"&&t[`direction-xs-${String(s)}`],u!=="wrap"&&t[`wrap-xs-${String(u)}`],...v]}})(({ownerState:e})=>V({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),we,ze,Ce,ve);function $e(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return t.forEach(n=>{const s=e[n];if(Number(s)>0){const o=`spacing-${n}-${String(s)}`;i.push(o)}}),i}const Ae=e=>{const{classes:t,container:i,direction:n,item:s,spacing:o,wrap:d,zeroMinWidth:u,breakpoints:c}=e;let m=[];i&&(m=$e(o,c));const a=[];c.forEach(x=>{const g=e[x];g&&a.push(`grid-${x}-${String(g)}`)});const v={root:["root",i&&"container",s&&"item",u&&"zeroMinWidth",...m,n!=="row"&&`direction-xs-${String(n)}`,d!=="wrap"&&`wrap-xs-${String(d)}`,...a]};return de(v,me,t)},ye=K.forwardRef(function(t,i){const n=J({props:t,name:"MuiGrid"}),{breakpoints:s}=te(),o=le(n),{className:d,columns:u,columnSpacing:c,component:m="div",container:a=!1,direction:v="row",item:x=!1,rowSpacing:g,spacing:W=0,wrap:w="wrap",zeroMinWidth:O=!1}=o,z=Q(o,xe),I=g||W,M=c||W,y=K.useContext(Z),F=a?u||12:y,P={},B=V({},z);s.keys.forEach(l=>{z[l]!=null&&(P[l]=z[l],delete B[l])});const R=V({},o,{columns:F,container:a,direction:v,item:x,rowSpacing:I,columnSpacing:M,wrap:w,zeroMinWidth:O,spacing:W},P,{breakpoints:s.keys}),q=Ae(R);return r(Z.Provider,{value:F,children:r(Se,V({ownerState:R,className:ue(q.root,d),as:m,ref:i},B))})}),p=ye;function Ee(e="IT",t=""){return async i=>{H.get(`${X.AZIENDE}/exists?nazione=${e}&codice=${t}`).then(n=>{i(ee(n.data))}).catch(n=>{let s=!1;n.response?s=n.response.data:s=!1,console.log(s)})}}function We(e){return async t=>{H.post(`${X.AUTH}/register`,e).then(i=>{console.log(i),window.location.href="/app"}).catch(i=>{console.log(i);let n="Errore";i.response?n=i.response.data:n="Errore",console.log(n)})}}const Pe=()=>{const e=ie(),{exists:t}=L(l=>l.account),{exists:i}=L(l=>l.aziende),[n,s]=f.useState({nome:"",cognome:"",email:"",password:"",passwordRepeat:""}),[o,d]=f.useState({nome:!0,cognome:!0,email:!0,password:!0,passwordRepeat:!0});f.useEffect(()=>{e(oe(n.email))},[n]);const u=l=>{const{value:C,name:b}=l.target;s({...n,[b]:C}),d({...o,[b]:C.toString().length<1})};f.useEffect(()=>{d({...o,password:n.password!==n.passwordRepeat||n.password.toString().length<1,passwordRepeat:n.password!==n.passwordRepeat||n.passwordRepeat.toString().length<1})},[n]);const[c,m]=f.useState({denominazione:"",idFiscaleIVAPaese:"IT",idFiscaleIVACodice:"",codiceFiscale:""}),[a,v]=f.useState({denominazione:!0,idFiscaleIVAPaese:!1,idFiscaleIVACodice:!0,codiceFiscale:!0});f.useEffect(()=>{e(Ee(c.idFiscaleIVAPaese,c.idFiscaleIVACodice))},[c]);const x=l=>{const{name:C,value:b}=l.target;m({...c,[C]:b}),v({...a,[C]:b.toString().length<1})},[g,W]=f.useState({indirizzo:"",numeroCivico:"",cap:"",comune:"",provincia:"",nazione:"IT"}),[w,O]=f.useState({indirizzo:!0,numeroCivico:!1,cap:!0,comune:!0,provincia:!1,nazione:!1}),z=l=>{const{name:C,value:b,required:D}=l.target;W({...g,[C]:b}),D&&O({...w,[C]:b.toString().length<1})},[I,M]=f.useState({nome:""}),[y,F]=f.useState({nome:!0}),P=l=>{M({...I,nome:l.target.value}),F({...y,nome:l.target.value.toString().length<1})},[B,R]=f.useState(!0);f.useEffect(()=>{const l=!Object.values(o).every(A=>A===!1),C=!Object.values(a).every(A=>A===!1),b=!Object.values(w).every(A=>A===!1),D=!Object.values(y).every(A=>A===!1);R(l||C||b||D)},[o,a,w,y]);const q=()=>{const l={nome:n.nome,cognome:n.cognome,email:n.email,password:n.password,aziende:[{...c,sede:{...g},negozi:[{...I}]}]};e(We(l))};return S(ne,{children:[r($,{mb:3,children:r(G,{children:S($,{p:2,children:[r(T,{variant:"h6",gutterBottom:!0,children:"Dati Personali"}),S(p,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"flex-start",spacing:2,children:[r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Nome",name:"nome",value:n.nome,error:o.nome,onChange:u,required:!0})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Cognome",name:"cognome",value:n.cognome,error:o.cognome,onChange:u,required:!0})}),S(p,{item:!0,xs:12,children:[r(h,{fullWidth:!0,label:"Email",name:"email",value:n.email,error:o.email,onChange:u,type:"email",required:!0}),n.email.toString().length>0&&r(U,{severity:t?"error":"success",children:t?"Account già registrato!":"Account disponibile"})]}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Password",name:"password",value:n.password,error:o.password,onChange:u,type:"password",helperText:o.password?"le password devono coincidere":"password conforme",required:!0})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Ripeti Password",name:"passwordRepeat",value:n.passwordRepeat,error:o.passwordRepeat,onChange:u,type:"password",helperText:o.password?"le password devono coincidere":"password conforme",required:!0})})]})]})})}),r($,{mb:3,children:r(G,{children:S($,{p:2,children:[r(T,{variant:"h6",gutterBottom:!0,children:"Aggiungi la tua azienda"}),S(p,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[r(p,{item:!0,xs:12,children:r(h,{label:"Denominazione o Nome e Cognome",name:"denominazione",value:c.denominazione,error:a.denominazione,fullWidth:!0,onChange:x})}),r(p,{item:!0,xs:2,children:r(h,{label:"Nazione",name:"idFiscaleIVAPaese",value:c.idFiscaleIVAPaese,error:a.idFiscaleIVAPaese,fullWidth:!0,onChange:x})}),r(p,{item:!0,xs:10,children:r(h,{label:"Partita IVA",name:"idFiscaleIVACodice",value:c.idFiscaleIVACodice,error:a.idFiscaleIVACodice,fullWidth:!0,onChange:x})}),r(p,{item:!0,xs:12,children:c.idFiscaleIVAPaese.toString().length>0&&c.idFiscaleIVACodice.toString().length>0&&r(U,{severity:i?"error":"success",children:i?"Azienda già esistente!":"Azienda disponibile"})}),r(p,{item:!0,xs:12,children:r(h,{label:"Codice Fiscale",name:"codiceFiscale",value:c.codiceFiscale,error:a.codiceFiscale,fullWidth:!0,onChange:x})})]})]})})}),r($,{mb:3,children:r(G,{children:S($,{p:2,children:[r(T,{gutterBottom:!0,variant:"h6",children:"Aggiungi la sede della tua azienda"}),S(p,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[r(p,{item:!0,xs:10,children:r(h,{fullWidth:!0,label:"Indirizzo",name:"indirizzo",value:g.indirizzo,error:w.indirizzo,required:!0,onChange:z})}),r(p,{item:!0,xs:2,children:r(h,{fullWidth:!0,label:"N. Civico",name:"numeroCivico",value:g.numeroCivico,error:w.numeroCivico,onChange:z})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"CAP",name:"cap",value:g.cap,error:w.cap,required:!0,onChange:z})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Comune",name:"comune",value:g.comune,error:w.comune,required:!0,onChange:z})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Provincia",name:"provincia",value:g.provincia,error:w.provincia,onChange:z,helperText:"Esempio: BS"})}),r(p,{item:!0,xs:12,sm:6,children:r(h,{fullWidth:!0,label:"Nazione",name:"nazione",value:g.nazione,error:w.nazione,onChange:z,required:!0,helperText:"Esempio: IT"})})]})]})})}),r($,{mb:16,children:r(G,{children:S($,{p:2,children:[r(T,{gutterBottom:!0,variant:"h6",children:"Aggiungi il nome del tuo negozio"}),r(h,{fullWidth:!0,label:"Nome Negozio",name:"nome",value:I.nome,error:y.nome,onChange:P})]})})}),r(re,{handleClick:q,disabled:B||i||t})]})};export{Pe as default};
