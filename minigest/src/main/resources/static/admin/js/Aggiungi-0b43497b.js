import{al as y,am as T,an as j,f as N,R as m,e as A,F as q,j as e,E as D,a4 as O,ah as R}from"./index-90347663.js";import{a as B,G as i}from"./exists-73a53eae.js";import{a as k,E as w,u as G,b as K,A as C}from"./hooks-5570b2fb.js";import{B as f,T as Z}from"./Box-50540c80.js";import{P as $}from"./List-2ba894ac.js";import{T as n}from"./TextField-44a01678.js";import{S as H}from"./Snackbar-387b353c.js";import"./Modal-2dc358af.js";function J(z){return async c=>{c(y()),k.post(`${w.AZIENDE}`,z).then(o=>{c(T(o.data))}).catch(o=>{let p="Errore";o.response?p=o.response.data:p="Errore",c(j(p))})}}const ie=()=>{const z=N(),c=G(),{exists:o,posting:p,postError:F,postResponse:v}=K(s=>s.aziende),[a,b]=m.useState({denominazione:"",idFiscaleIVAPaese:"IT",idFiscaleIVACodice:"",codiceFiscale:""}),[d,I]=m.useState({denominazione:!0,idFiscaleIVAPaese:!1,idFiscaleIVACodice:!0,codiceFiscale:!0});m.useEffect(()=>{c(B(a.idFiscaleIVAPaese,a.idFiscaleIVACodice))},[a]);const g=s=>{const{name:u,value:t}=s.target;b({...a,[u]:t}),I({...d,[u]:t.toString().length<1})},[l,x]=m.useState({indirizzo:"",numeroCivico:"",cap:"",comune:"",provincia:"",nazione:"IT"}),[r,S]=m.useState({indirizzo:!0,numeroCivico:!1,cap:!0,comune:!0,provincia:!1,nazione:!1}),h=s=>{const{name:u,value:t,required:W}=s.target;x({...l,[u]:t}),W&&S({...r,[u]:t.toString().length<1})},[E,V]=m.useState(!0);m.useEffect(()=>{const s=!Object.values(d).every(t=>t===!1),u=!Object.values(r).every(t=>t===!1);V(s||u)},[d,r]);const P=()=>{const s={...a,sede:l};c(J(s)),setTimeout(()=>{c(R()),z("/aziende")},1e3)};return A(q,{children:[e(f,{mb:3,children:e(Z,{variant:"h3",children:"Aggiungi Azienda"})}),e(f,{mb:3,children:e($,{children:e(f,{p:2,children:A(i,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[e(i,{item:!0,xs:12,children:e(n,{label:"Denominazione o Nome e Cognome",name:"denominazione",value:a.denominazione,error:d.denominazione,fullWidth:!0,onChange:g})}),e(i,{item:!0,xs:2,children:e(n,{label:"Nazione",name:"idFiscaleIVAPaese",value:a.idFiscaleIVAPaese,error:d.idFiscaleIVAPaese,fullWidth:!0,onChange:g})}),e(i,{item:!0,xs:10,children:e(n,{label:"Partita IVA",name:"idFiscaleIVACodice",value:a.idFiscaleIVACodice,error:d.idFiscaleIVACodice,fullWidth:!0,onChange:g})}),e(i,{item:!0,xs:12,children:a.idFiscaleIVAPaese.toString().length>0&&a.idFiscaleIVACodice.toString().length>0&&e(C,{severity:o?"error":"success",children:o?"Azienda già esistente!":"Azienda disponibile"})}),e(i,{item:!0,xs:12,children:e(n,{label:"Codice Fiscale",name:"codiceFiscale",value:a.codiceFiscale,error:d.codiceFiscale,fullWidth:!0,onChange:g})}),e(i,{item:!0,xs:10,children:e(n,{fullWidth:!0,label:"Indirizzo",name:"indirizzo",value:l.indirizzo,error:r.indirizzo,required:!0,onChange:h})}),e(i,{item:!0,xs:2,children:e(n,{fullWidth:!0,label:"N. Civico",name:"numeroCivico",value:l.numeroCivico,error:r.numeroCivico,onChange:h})}),e(i,{item:!0,xs:12,sm:6,children:e(n,{fullWidth:!0,label:"CAP",name:"cap",value:l.cap,error:r.cap,required:!0,onChange:h})}),e(i,{item:!0,xs:12,sm:6,children:e(n,{fullWidth:!0,label:"Comune",name:"comune",value:l.comune,error:r.comune,required:!0,onChange:h})}),e(i,{item:!0,xs:12,sm:6,children:e(n,{fullWidth:!0,label:"Provincia",name:"provincia",value:l.provincia,error:r.provincia,onChange:h,helperText:"Esempio: BS"})}),e(i,{item:!0,xs:12,sm:6,children:e(n,{fullWidth:!0,label:"Nazione",name:"nazione",value:l.nazione,error:r.nazione,onChange:h,required:!0,helperText:"Esempio: IT"})})]})})})}),e(H,{open:!D.isEmpty(v),children:e(C,{severity:F?"error":"info",children:v})}),e(O,{onClick:P,disabled:o||E,loading:p})]})};export{ie as default};