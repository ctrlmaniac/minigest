import{aj as _,ak as D,al as S,R as h,b as g,F as R,j as i,ai as y}from"./index-67254d02.js";import{a as V,E as W}from"./index-c44c1a12.js";import{u as $,a as j,B as t,T as E}from"./hooks-fccfb499.js";import{P as z}from"./Paper-3e81e2e3.js";import{T as n}from"./TextField-4add7af0.js";import"./Grow-de51d2e5.js";import"./useTheme-b4ae5703.js";import"./utils-2b3ff743.js";import"./TransitionGroupContext-9ce3bcfc.js";import"./Modal-36c42f6c.js";import"./List-02219cef.js";import"./createSvgIcon-6b855daf.js";function O(l){return async r=>{V.post(`${W.AZIENDE}`,l).then(e=>{r(_(e.data)),window.location.href=`/app/aziende/dettagli/${e.data.id}`}).catch(e=>{r(D(e.message))})}}function N(l,r){return async e=>{V.get(`${W.AZIENDE}/esiste?paese=${l}&codice=${r}`).then(c=>{c.data,e(S(c.data))})}}const X=()=>{var f,v,I,F,A,b;const l=$(),{esiste:r}=j(o=>o.aziende),[e,c]=h.useState({titolo:"",denominazione:"",codiceEORI:"",idFiscaleIVAPaese:"",idFiscaleIVACodice:"",codiceFiscale:"",sede:{indirizzo:"",numeroCivico:"",provincia:"",nazione:"",comune:"",cap:""}}),[a,C]=h.useState({denominazione:!0,codiceFiscale:!0,idFiscaleIVAPaese:!0,idFiscaleIVACodice:!0,sede_indirizzo:!0,sede_cap:!0,sede_comune:!0,sede_nazione:!0});h.useEffect(()=>{l(N(e.idFiscaleIVAPaese,e.idFiscaleIVACodice))},[e]);const s=o=>{const{value:u,name:m,required:p}=o.target;c({...e,[m]:u}),p&&C({...a,[m]:u.length<1})},d=o=>{const{value:u,name:m,required:p}=o.target;if(c({...e,sede:{...e.sede,[m]:u}}),p){const T=`sede_${m}`;C({...a,[T]:u.length<1})}},[P,q]=h.useState(!0);h.useEffect(()=>{q(!Object.values(a).every(o=>o===!1))},[a]);const x=()=>{l(O(e))};return g(R,{children:[i(t,{mb:3,children:i(E,{variant:"h3",children:"Aggiungi Azienda"})}),i(t,{mb:3,children:i(z,{children:g(t,{p:2,children:[i(n,{label:"Titolo",name:"titolo",value:e.titolo,onChange:s,fullWidth:!0,margin:"normal"}),i(n,{label:"Denominazione, nome o cognome",name:"denominazione",value:e.denominazione,onChange:s,fullWidth:!0,margin:"normal",required:!0,error:a.denominazione})]})})}),i(t,{mb:3,children:i(z,{children:g(t,{p:2,children:[i(n,{label:"Codice EORI",name:"codiceEORI",value:e.codiceEORI,onChange:s,fullWidth:!0,margin:"normal"}),i(n,{label:"Codice Fiscale",name:"codiceFiscale",value:e.codiceFiscale,onChange:s,fullWidth:!0,margin:"normal",required:!0,error:a.codiceFiscale}),i(n,{label:"ID Fiscale IVA Paese",name:"idFiscaleIVAPaese",value:e.idFiscaleIVAPaese,onChange:s,fullWidth:!0,margin:"normal",error:a.idFiscaleIVAPaese,required:!0,helperText:r?"azienda già esistente":""}),i(n,{label:"ID Fiscale IVA Codice",name:"idFiscaleIVACodice",value:e.idFiscaleIVACodice,onChange:s,fullWidth:!0,margin:"normal",error:a.idFiscaleIVACodice,required:!0,helperText:r?"azienda già esistente":""})]})})}),i(t,{children:i(z,{children:g(t,{p:2,children:[i(E,{variant:"h6",gutterBottom:!0,children:"Sede:"}),i(n,{label:"Indirizzo",name:"indirizzo",value:(f=e.sede)==null?void 0:f.indirizzo,onChange:d,fullWidth:!0,margin:"normal",error:a.sede_indirizzo,required:!0}),i(n,{label:"Num. Civico",name:"numeroCivico",value:(v=e.sede)==null?void 0:v.numeroCivico,onChange:d,fullWidth:!0,margin:"normal"}),i(n,{label:"CAP",name:"cap",value:(I=e.sede)==null?void 0:I.cap,onChange:d,fullWidth:!0,margin:"normal",required:!0,error:a.sede_cap}),i(n,{label:"Comune",name:"comune",value:(F=e.sede)==null?void 0:F.comune,onChange:d,fullWidth:!0,margin:"normal",required:!0,error:a.sede_comune}),i(n,{label:"Provincia",name:"provincia",value:(A=e.sede)==null?void 0:A.provincia,onChange:d,fullWidth:!0,margin:"normal"}),i(n,{label:"Nazione",name:"nazione",value:(b=e.sede)==null?void 0:b.nazione,onChange:d,fullWidth:!0,margin:"normal",helperText:"Es. IT",required:!0,error:a.sede_nazione})]})})}),i(y,{handleClick:x,disabled:P||r})]})};export{X as default};
