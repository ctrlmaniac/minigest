import{ar as w,as as G,at as K,f as $,R as p,e as P,F as M,j as e,E as A,a4 as Z,ah as H,a1 as J,a2 as L,a3 as Q}from"./index-8eaaa921.js";import{g as U}from"./get-3064e7e5.js";import{a as X,E as Y,u as W,b as T,A as y}from"./hooks-ee0b5995.js";import{a as _,G as a}from"./exists-b3a68c23.js";import{B as F,T as ee}from"./Box-09e48a02.js";import{P as ie}from"./List-d4d3ded6.js";import{T as t}from"./TextField-08f5c149.js";import{S as ae}from"./Snackbar-9450f231.js";import"./Modal-a4b169cd.js";function ne(i,f){return async s=>{s(w()),X.put(`${Y.AZIENDE}/${i}`,f).then(r=>{s(G(r.data))}).catch(r=>{let u="Errore";r.response?u=r.response.data:u="Errore",s(K(u))})}}const se=({dettagli:i})=>{var E,I,b,x,V,S;const f=$(),s=W(),{exists:r,putting:u,putError:C,putResponse:g}=T(l=>l.aziende),[n,j]=p.useState({denominazione:i.denominazione,idFiscaleIVAPaese:i.idFiscaleIVAPaese,idFiscaleIVACodice:i.idFiscaleIVACodice,codiceFiscale:i.codiceFiscale}),[h,N]=p.useState({denominazione:!1,idFiscaleIVAPaese:!1,idFiscaleIVACodice:!1,codiceFiscale:!1});p.useEffect(()=>{s(_(n.idFiscaleIVAPaese,n.idFiscaleIVACodice))},[n]);const v=l=>{const{name:o,value:d}=l.target;j({...n,[o]:d}),N({...h,[o]:d.toString().length<1})},[m,q]=p.useState({indirizzo:(E=i.sede)==null?void 0:E.indirizzo,numeroCivico:(I=i.sede)==null?void 0:I.numeroCivico,cap:(b=i.sede)==null?void 0:b.cap,comune:(x=i.sede)==null?void 0:x.comune,provincia:(V=i.sede)==null?void 0:V.provincia,nazione:(S=i.sede)==null?void 0:S.nazione}),[c,D]=p.useState({indirizzo:!1,numeroCivico:!1,cap:!1,comune:!1,provincia:!1,nazione:!1}),z=l=>{const{name:o,value:d,required:k}=l.target;q({...m,[o]:d}),k&&D({...c,[o]:d.toString().length<1})},[B,O]=p.useState(!0);p.useEffect(()=>{const l=!Object.values(h).every(d=>d===!1),o=!Object.values(c).every(d=>d===!1);O(l||o)},[h,c]);const R=()=>{var o;const l={...n,sede:{id:(o=i.sede)==null?void 0:o.id,...m}};s(ne(i.id,l)),setTimeout(()=>{s(H()),f("/aziende")},1e3)};return P(M,{children:[e(F,{mb:3,children:e(ee,{variant:"h3",children:"Aggiungi Azienda"})}),e(F,{mb:3,children:e(ie,{children:e(F,{p:2,children:P(a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[e(a,{item:!0,xs:12,children:e(t,{label:"Denominazione o Nome e Cognome",name:"denominazione",value:n.denominazione,error:h.denominazione,fullWidth:!0,onChange:v})}),e(a,{item:!0,xs:2,children:e(t,{label:"Nazione",name:"idFiscaleIVAPaese",value:n.idFiscaleIVAPaese,error:h.idFiscaleIVAPaese,fullWidth:!0,onChange:v})}),e(a,{item:!0,xs:10,children:e(t,{label:"Partita IVA",name:"idFiscaleIVACodice",value:n.idFiscaleIVACodice,error:h.idFiscaleIVACodice,fullWidth:!0,onChange:v})}),e(a,{item:!0,xs:12,children:n.idFiscaleIVAPaese!==i.idFiscaleIVAPaese&&n.idFiscaleIVACodice!==i.idFiscaleIVACodice&&e(y,{severity:r?"error":"success",children:r?"Azienda già esistente!":"Azienda disponibile"})}),e(a,{item:!0,xs:12,children:e(t,{label:"Codice Fiscale",name:"codiceFiscale",value:n.codiceFiscale,error:h.codiceFiscale,fullWidth:!0,onChange:v})}),e(a,{item:!0,xs:10,children:e(t,{fullWidth:!0,label:"Indirizzo",name:"indirizzo",value:m.indirizzo,error:c.indirizzo,required:!0,onChange:z})}),e(a,{item:!0,xs:2,children:e(t,{fullWidth:!0,label:"N. Civico",name:"numeroCivico",value:m.numeroCivico,error:c.numeroCivico,onChange:z})}),e(a,{item:!0,xs:12,sm:6,children:e(t,{fullWidth:!0,label:"CAP",name:"cap",value:m.cap,error:c.cap,required:!0,onChange:z})}),e(a,{item:!0,xs:12,sm:6,children:e(t,{fullWidth:!0,label:"Comune",name:"comune",value:m.comune,error:c.comune,required:!0,onChange:z})}),e(a,{item:!0,xs:12,sm:6,children:e(t,{fullWidth:!0,label:"Provincia",name:"provincia",value:m.provincia,error:c.provincia,onChange:z,helperText:"Esempio: BS"})}),e(a,{item:!0,xs:12,sm:6,children:e(t,{fullWidth:!0,label:"Nazione",name:"nazione",value:m.nazione,error:c.nazione,onChange:z,required:!0,helperText:"Esempio: IT"})})]})})})}),e(ae,{open:!A.isEmpty(g),children:e(y,{severity:C?"error":"info",children:g})}),e(Z,{onClick:R,disabled:r||B,loading:u})]})},he=()=>{const i=W(),{id:f}=J(),{dettagli:s,getting:r,getError:u}=T(C=>C.aziende);return p.useEffect(()=>{A.isEmpty(f)||i(U(f))},[]),r?e(L,{}):!A.isEmpty(u)||A.isEmpty(s)?e(Q,{message:u||"Errore di caricamento"}):e(se,{dettagli:s})};export{he as default};
