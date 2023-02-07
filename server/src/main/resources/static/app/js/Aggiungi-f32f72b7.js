import{al as _,am as D,an as S,R as h,b as g,F as y,j as i,ak as R}from"./index-222da0ba.js";import{a as V,E as W}from"./index-c44c1a12.js";import{u as $,a as O,B as t,T as E}from"./hooks-db4dee7a.js";import{P as z}from"./Paper-96727556.js";import{T as n}from"./TextField-9f2cfd53.js";import"./Grow-dd1bfbaf.js";import"./useTheme-88693805.js";import"./utils-50920ebd.js";import"./TransitionGroupContext-58f02f0d.js";import"./Modal-821d5a1c.js";import"./List-670810c7.js";import"./createSvgIcon-208d5829.js";function j(l){return async r=>{V.post(`${W.AZIENDE}`,l).then(e=>{r(_(e.data)),window.location.href=`/app/aziende/dettagli/${e.data.id}`}).catch(e=>{r(D(e.message))})}}function N(l,r){return async e=>{V.get(`${W.AZIENDE}/esiste?paese=${l}&codice=${r}`).then(c=>{c.data,e(S(c.data))})}}const X=()=>{var f,v,I,A,F,b;const l=$(),{esiste:r}=O(o=>o.aziende),[e,c]=h.useState({titolo:"",denominazione:"",codiceEORI:"",idFiscaleIVAPaese:"",idFiscaleIVACodice:"",codiceFiscale:"",sede:{indirizzo:"",numeroCivico:"",provincia:"",nazione:"",comune:"",cap:""}}),[a,C]=h.useState({denominazione:!0,codiceFiscale:!0,idFiscaleIVAPaese:!0,idFiscaleIVACodice:!0,sede_indirizzo:!0,sede_cap:!0,sede_comune:!0,sede_nazione:!0});h.useEffect(()=>{l(N(e.idFiscaleIVAPaese,e.idFiscaleIVACodice))},[e]);const s=o=>{const{value:u,name:m,required:p}=o.target;c({...e,[m]:u}),p&&C({...a,[m]:u.length<1})},d=o=>{const{value:u,name:m,required:p}=o.target;if(c({...e,sede:{...e.sede,[m]:u}}),p){const T=`sede_${m}`;C({...a,[T]:u.length<1})}},[P,q]=h.useState(!0);h.useEffect(()=>{q(!Object.values(a).every(o=>o===!1))},[a]);const x=()=>{l(j(e))};return g(y,{children:[i(t,{mb:3,children:i(E,{variant:"h3",children:"Aggiungi Azienda"})}),i(t,{mb:3,children:i(z,{children:g(t,{p:2,children:[i(n,{label:"Titolo",name:"titolo",value:e.titolo,onChange:s,fullWidth:!0,margin:"normal"}),i(n,{label:"Denominazione, nome o cognome",name:"denominazione",value:e.denominazione,onChange:s,fullWidth:!0,margin:"normal",required:!0,error:a.denominazione})]})})}),i(t,{mb:3,children:i(z,{children:g(t,{p:2,children:[i(n,{label:"Codice EORI",name:"codiceEORI",value:e.codiceEORI,onChange:s,fullWidth:!0,margin:"normal"}),i(n,{label:"Codice Fiscale",name:"codiceFiscale",value:e.codiceFiscale,onChange:s,fullWidth:!0,margin:"normal",required:!0,error:a.codiceFiscale}),i(n,{label:"ID Fiscale IVA Paese",name:"idFiscaleIVAPaese",value:e.idFiscaleIVAPaese,onChange:s,fullWidth:!0,margin:"normal",error:a.idFiscaleIVAPaese,required:!0,helperText:r?"azienda già esistente":""}),i(n,{label:"ID Fiscale IVA Codice",name:"idFiscaleIVACodice",value:e.idFiscaleIVACodice,onChange:s,fullWidth:!0,margin:"normal",error:a.idFiscaleIVACodice,required:!0,helperText:r?"azienda già esistente":""})]})})}),i(t,{children:i(z,{children:g(t,{p:2,children:[i(E,{variant:"h6",gutterBottom:!0,children:"Sede:"}),i(n,{label:"Indirizzo",name:"indirizzo",value:(f=e.sede)==null?void 0:f.indirizzo,onChange:d,fullWidth:!0,margin:"normal",error:a.sede_indirizzo,required:!0}),i(n,{label:"Num. Civico",name:"numeroCivico",value:(v=e.sede)==null?void 0:v.numeroCivico,onChange:d,fullWidth:!0,margin:"normal"}),i(n,{label:"CAP",name:"cap",value:(I=e.sede)==null?void 0:I.cap,onChange:d,fullWidth:!0,margin:"normal",required:!0,error:a.sede_cap}),i(n,{label:"Comune",name:"comune",value:(A=e.sede)==null?void 0:A.comune,onChange:d,fullWidth:!0,margin:"normal",required:!0,error:a.sede_comune}),i(n,{label:"Provincia",name:"provincia",value:(F=e.sede)==null?void 0:F.provincia,onChange:d,fullWidth:!0,margin:"normal"}),i(n,{label:"Nazione",name:"nazione",value:(b=e.sede)==null?void 0:b.nazione,onChange:d,fullWidth:!0,margin:"normal",helperText:"Es. IT",required:!0,error:a.sede_nazione})]})})}),i(R,{handleClick:x,disabled:P||r})]})};export{X as default};