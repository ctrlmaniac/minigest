import{af as P,ag as S,R as u,a as m,F as _,j as e,B as o}from"./index-10c94bff.js";import{S as D}from"./SaveFab-de76f147.js";import{a as T,E as x}from"./index-e540bbee.js";import{u as R}from"./hooks-9397b445.js";import{T as A}from"./Typography-95a1612a.js";import{P as g}from"./Paper-46a58f5a.js";import{T as r}from"./TextField-eb3a3c5b.js";import"./Container-bd6f4fdc.js";import"./Fab-f0961ac3.js";import"./ButtonBase-6e0e1411.js";import"./createReactComponent-ad886392.js";import"./Grow-0fe9c25b.js";import"./useTheme-75ea811f.js";import"./utils-b32b3a94.js";import"./Modal-2991f9ad.js";import"./List-b82d4e7d.js";import"./createSvgIcon-46abf9a7.js";function y(h){return async i=>{T.post(`${x.AZIENDE}`,h).then(n=>{i(P(n.data)),window.location.href=`/app/aziende/dettagli/${n.data.id}`}).catch(n=>{i(S(n.message))})}}const Y=()=>{var C,v,z,F,I,b;const h=R(),[i,n]=u.useState({titolo:"",denominazione:"",codiceEORI:"",idFiscaleIVAPaese:"",idFiscaleIVACodice:"",codiceFiscale:"",sede:{indirizzo:"",numeroCivico:"",provincia:"",nazione:"",comune:"",cap:""}}),[a,f]=u.useState({denominazione:!0,codiceFiscale:!0,idFiscaleIVAPaese:!0,idFiscaleIVACodice:!0,sede_indirizzo:!0,sede_cap:!0,sede_comune:!0,sede_nazione:!0}),l=d=>{const{value:s,name:c,required:p}=d.target;n({...i,[c]:s}),p&&f({...a,[c]:s.length<1})},t=d=>{const{value:s,name:c,required:p}=d.target;if(n({...i,sede:{...i.sede,[c]:s}}),p){const q=`sede_${c}`;f({...a,[q]:s.length<1})}},[V,W]=u.useState(!0);u.useEffect(()=>{W(!Object.values(a).every(d=>d===!1))},[a]);const E=()=>{h(y(i))};return m(_,{children:[e(o,{mb:3,children:e(A,{variant:"h3",children:"Modifica Azienda"})}),e(o,{mb:3,children:e(g,{children:m(o,{p:2,children:[e(r,{label:"Titolo",name:"titolo",value:i.titolo,onChange:l,fullWidth:!0,margin:"normal"}),e(r,{label:"Denominazione, nome o cognome",name:"denominazione",value:i.denominazione,onChange:l,fullWidth:!0,margin:"normal",required:!0,error:a.denominazione})]})})}),e(o,{mb:3,children:e(g,{children:m(o,{p:2,children:[e(r,{label:"Codice EORI",name:"codiceEORI",value:i.codiceEORI,onChange:l,fullWidth:!0,margin:"normal"}),e(r,{label:"Codice Fiscale",name:"codiceFiscale",value:i.codiceFiscale,onChange:l,fullWidth:!0,margin:"normal",required:!0,error:a.codiceFiscale}),e(r,{label:"ID Fiscale IVA Paese",name:"idFiscaleIVAPaese",value:i.idFiscaleIVAPaese,onChange:l,fullWidth:!0,margin:"normal",error:a.idFiscaleIVAPaese,required:!0}),e(r,{label:"ID Fiscale IVA Codice",name:"idFiscaleIVACodice",value:i.idFiscaleIVACodice,onChange:l,fullWidth:!0,margin:"normal",error:a.idFiscaleIVACodice,required:!0})]})})}),e(o,{children:e(g,{children:m(o,{p:2,children:[e(A,{variant:"h6",gutterBottom:!0,children:"Sede:"}),e(r,{label:"Indirizzo",name:"indirizzo",value:(C=i.sede)==null?void 0:C.indirizzo,onChange:t,fullWidth:!0,margin:"normal",error:a.sede_indirizzo,required:!0}),e(r,{label:"Num. Civico",name:"numeroCivico",value:(v=i.sede)==null?void 0:v.numeroCivico,onChange:t,fullWidth:!0,margin:"normal"}),e(r,{label:"CAP",name:"cap",value:(z=i.sede)==null?void 0:z.cap,onChange:t,fullWidth:!0,margin:"normal",required:!0,error:a.sede_cap}),e(r,{label:"Comune",name:"comune",value:(F=i.sede)==null?void 0:F.comune,onChange:t,fullWidth:!0,margin:"normal",required:!0,error:a.sede_comune}),e(r,{label:"Provincia",name:"provincia",value:(I=i.sede)==null?void 0:I.provincia,onChange:t,fullWidth:!0,margin:"normal"}),e(r,{label:"Nazione",name:"nazione",value:(b=i.sede)==null?void 0:b.nazione,onChange:t,fullWidth:!0,margin:"normal",helperText:"Es. IT",required:!0,error:a.sede_nazione})]})})}),e(D,{handleClick:E,disabled:V})]})};export{Y as default};
