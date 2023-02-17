import{aE as k,aF as w,aG as K,i as $,R as h,d as W,F as M,j as e,l as A,ai as Z,av as H,at as J,B as L,V as Q}from"./index-600e2e19.js";import{g as U}from"./get-414588f0.js";import{f as j,e as N,B as F,T as X,P as Y}from"./hooks-4e339f0f.js";import{a as _}from"./exists-155cc2ff.js";import{a as ee,E as ie}from"./index-222b85ca.js";import{G as s}from"./Grid-a71463aa.js";import{T as l}from"./TextField-2c91fc21.js";import{A as T}from"./Alert-1f877bb0.js";import{S as ae}from"./Snackbar-d83d4867.js";import"./Grow-d6a31e64.js";import"./useFormControl-0532ce36.js";function ne(i,f){return async t=>{t(k()),ee.put(`${ie.AZIENDE}/${i}`,f).then(c=>{t(w(c.data))}).catch(c=>{let u="Errore";c.response?u=c.response.data:u="Errore",t(K(u))})}}const re=({dettagli:i})=>{var S,V,b,x,P,y;const f=$(),t=j(),{exists:c,putting:u,putError:C,putResponse:I}=N(d=>d.aziende),[o,q]=h.useState({denominazione:i.denominazione,idFiscaleIVAPaese:i.idFiscaleIVAPaese,idFiscaleIVACodice:i.idFiscaleIVACodice,codiceFiscale:i.codiceFiscale}),[m,E]=h.useState({denominazione:!1,idFiscaleIVAPaese:!1,idFiscaleIVACodice:!1,codiceFiscale:!1});h.useEffect(()=>{t(_(o.idFiscaleIVAPaese,o.idFiscaleIVACodice))},[o]);const v=d=>{const{name:a,value:n}=d.target;q({...o,[a]:n}),E({...m,[a]:n.toString().length<1}),a==="idFiscaleIVAPaese"&&E({...m,idFiscaleIVAPaese:n.toString().length!=2})},[p,B]=h.useState({indirizzo:(S=i.sede)==null?void 0:S.indirizzo,numeroCivico:(V=i.sede)==null?void 0:V.numeroCivico,cap:(b=i.sede)==null?void 0:b.cap,comune:(x=i.sede)==null?void 0:x.comune,provincia:(P=i.sede)==null?void 0:P.provincia,nazione:(y=i.sede)==null?void 0:y.nazione}),[r,g]=h.useState({indirizzo:!1,numeroCivico:!1,cap:!1,comune:!1,provincia:!1,nazione:!1}),z=d=>{const{name:a,value:n,required:G}=d.target;B({...p,[a]:n}),g({...r,[a]:G&&n.toString().length<1}),a==="cap"&&g({...r,cap:n.toString().length!==5}),a==="provincia"&&g({...r,provincia:n.toString().length>0?n.toString().length!==2:!1}),a==="nazione"&&g({...r,nazione:n.toString().length!==2})},[D,O]=h.useState(!0);h.useEffect(()=>{const d=!Object.values(m).every(n=>n===!1),a=!Object.values(r).every(n=>n===!1);O(d||a)},[m,r]);const R=()=>{var a;const d={...o,sede:{id:(a=i.sede)==null?void 0:a.id,...p}};t(ne(i.id,d)),setTimeout(()=>{t(H()),f("/aziende")},1e3)};return W(M,{children:[e(F,{mb:3,children:e(X,{variant:"h3",children:"Aggiungi Azienda"})}),e(F,{mb:3,children:e(Y,{children:e(F,{p:2,children:W(s,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[e(s,{item:!0,xs:12,children:e(l,{label:"Denominazione o Nome e Cognome",name:"denominazione",value:o.denominazione,error:m.denominazione,fullWidth:!0,onChange:v})}),e(s,{item:!0,xs:2,children:e(l,{label:"Nazione",name:"idFiscaleIVAPaese",value:o.idFiscaleIVAPaese,error:m.idFiscaleIVAPaese,fullWidth:!0,onChange:v})}),e(s,{item:!0,xs:10,children:e(l,{label:"Partita IVA",name:"idFiscaleIVACodice",value:o.idFiscaleIVACodice,error:m.idFiscaleIVACodice,fullWidth:!0,onChange:v})}),e(s,{item:!0,xs:12,children:o.idFiscaleIVAPaese!==i.idFiscaleIVAPaese&&o.idFiscaleIVACodice!==i.idFiscaleIVACodice&&e(T,{severity:c?"error":"success",children:c?"Azienda già esistente!":"Azienda disponibile"})}),e(s,{item:!0,xs:12,children:e(l,{label:"Codice Fiscale",name:"codiceFiscale",value:o.codiceFiscale,error:m.codiceFiscale,fullWidth:!0,onChange:v})}),e(s,{item:!0,xs:10,children:e(l,{fullWidth:!0,label:"Indirizzo",name:"indirizzo",value:p.indirizzo,error:r.indirizzo,required:!0,onChange:z})}),e(s,{item:!0,xs:2,children:e(l,{fullWidth:!0,label:"N. Civico",name:"numeroCivico",value:p.numeroCivico,error:r.numeroCivico,onChange:z})}),e(s,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"CAP",name:"cap",value:p.cap,error:r.cap,required:!0,onChange:z})}),e(s,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Comune",name:"comune",value:p.comune,error:r.comune,required:!0,onChange:z})}),e(s,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Provincia",name:"provincia",value:p.provincia,error:r.provincia,onChange:z,helperText:"Esempio: BS"})}),e(s,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Nazione",name:"nazione",value:p.nazione,error:r.nazione,onChange:z,required:!0,helperText:"Esempio: IT"})})]})})})}),e(ae,{open:!A.isEmpty(I),children:e(T,{severity:C?"error":"info",children:I})}),e(Z,{onClick:R,disabled:c||D,loading:u})]})},ze=()=>{const i=j(),{id:f}=J(),{dettagli:t,getting:c,getError:u}=N(C=>C.aziende);return h.useEffect(()=>{A.isEmpty(f)||i(U(f))},[]),c?e(L,{}):!A.isEmpty(u)||A.isEmpty(t)?e(Q,{message:u||"Errore di caricamento"}):e(re,{dettagli:t})};export{ze as default};
