import{bG as we,bH as ke,bI as Oe,R as d,j as t,b as e,f as Fe,F as Le,l as y,ai as je,bz as K,at as Ve,B as Ye,V as Me}from"./index-d882999b.js";import{g as Ne}from"./get-76d5caf1.js";import{e as se,d as ue,B as f,T as F,P as L}from"./hooks-15d50f7a.js";import{a as Be,E as Ue,I as z}from"./index-26de8948.js";import{a as B,b as U}from"./DialogContent-b269b26e.js";import{T as l}from"./TextField-3f0953ff.js";import{G as u}from"./Grid-b855ca7a.js";import{D as X}from"./DialogActions-b99e84da.js";import{B as G}from"./Button-0c31dfc0.js";import{F as Xe,I as V}from"./IconCirclePlus-5ff6ce44.js";import{F as J}from"./FormControlLabel-406defd5.js";import{C as O}from"./Checkbox-d0556efa.js";import{A as j}from"./Alert-37711bff.js";import{T as Y,a as A,b as i,c as M}from"./TableRow-d1dbbd36.js";import{T as N}from"./TableHead-90aebb17.js";import{I as x}from"./IconTrash-ade98aaf.js";import{S as Ge}from"./Snackbar-f93723c4.js";import{c as He}from"./createReactComponent-ffa67357.js";import"./Grow-59285a38.js";import"./Portal-cac5f17a.js";import"./useFormControl-55db2a8e.js";import"./useControlled-de568f22.js";var $e=He("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);function Je(s,C){return async v=>{v(we()),Be.put(`${Ue.FISCO}/f24/${s}`,C).then(n=>{v(ke(n.data))}).catch(n=>{let h="Errore";n.response?h=n.response.data:h="Errore",v(Oe(h))})}}const Ke=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceEnte:"",codiceSede:"",causaleContributo:"",codicePosizione:"",meseRiferimentoDa:"01",annoRiferimentoDa:new Date().getFullYear(),meseRiferimentoA:"12",annoRiferimentoA:new Date().getFullYear(),importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceEnte:!0,codiceSede:!0,causaleContributo:!0,codicePosizione:!0,meseRiferimentoDa:!1,annoRiferimentoDa:!1,meseRiferimentoA:!1,annoRiferimentoA:!1,importoDebito:!0,importoCredito:!1}),a=b=>{const{required:R,name:m,value:g}=b.target;h({...n,[m]:g}),R&&p({...o,[m]:g.toString().length<1})},[D,I]=d.useState(!0);d.useEffect(()=>{I(!Object.values(o).every(b=>b===!1))},[o]);const S=()=>{C(!1),h({codiceEnte:"",codiceSede:"",causaleContributo:"",codicePosizione:"",meseRiferimentoDa:"01",annoRiferimentoDa:new Date().getFullYear(),meseRiferimentoA:"12",annoRiferimentoA:new Date().getFullYear(),importoDebito:"",importoCredito:0}),p({codiceEnte:!0,codiceSede:!0,causaleContributo:!0,codicePosizione:!0,meseRiferimentoDa:!1,annoRiferimentoDa:!1,meseRiferimentoA:!1,annoRiferimentoA:!1,importoDebito:!0,importoCredito:!1})},E=()=>{v(n),S()};return t(B,{open:s,onClose:S,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Ente",name:"codiceEnte",value:n.codiceEnte,error:o.codiceEnte,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Codice Sede",name:"codiceSede",value:n.codiceSede,error:o.codiceSede,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Causale Contributo",name:"causaleContributo",value:n.causaleContributo,error:o.causaleContributo,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Codice Posizione",name:"codicePosizione",value:n.codicePosizione,error:o.codicePosizione,onChange:a,margin:"normal"}),t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{mt:.5},children:[e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Dal mese",name:"meseRiferimentoDa",value:n.meseRiferimentoDa,error:o.meseRiferimentoDa,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Dall'anno",name:"annoRiferimentoDa",value:n.annoRiferimentoDa,error:o.annoRiferimentoDa,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Al mese",name:"meseRiferimentoA",value:n.meseRiferimentoA,error:o.meseRiferimentoA,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"All'anno",name:"annoRiferimentoA",value:n.annoRiferimentoA,error:o.annoRiferimentoA,onChange:a})})]}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,disabled:D,onClick:E,children:"salva"})})]})},Qe=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1}),a=b=>{const{required:R,name:m,value:g}=b.target;h({...n,[m]:g}),R&&p({...o,[m]:g.toString().length<1})},[D,I]=d.useState(!0);d.useEffect(()=>{I(!Object.values(o).every(b=>b===!1))},[o]);const S=()=>{C(!1),h({codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),p({codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1})},E=()=>{v(n),S()};return t(B,{open:s,onClose:S,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Tributo",name:"codiceTributo",value:n.codiceTributo,error:o.codiceTributo,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,label:"Rateazione/regione/prov./mese rif.",name:"riferimento",value:n.riferimento,error:o.riferimento,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Anno di riferimento",name:"anno",value:n.anno,error:o.anno,onChange:a,margin:"normal",inputProps:{step:1}}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,disabled:D,onClick:E,children:"salva"})})]})},Ze=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceSede:"",codiceDitta:"",cc:"",riferimento:"",causale:"",importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceSede:!0,codiceDitta:!0,cc:!0,riferimento:!1,causale:!0,importoDebito:!0,importoCredito:!1}),a=b=>{const{required:R,name:m,value:g}=b.target;h({...n,[m]:g}),R&&p({...o,[m]:g.toString().length<1})},[D,I]=d.useState(!0);d.useEffect(()=>{I(!Object.values(o).every(b=>b===!1))},[o]);const S=()=>{C(!1),h({codiceSede:"",codiceDitta:"",cc:"",riferimento:"",causale:"",importoDebito:"",importoCredito:0}),p({codiceSede:!0,codiceDitta:!0,cc:!0,riferimento:!1,causale:!0,importoDebito:!0,importoCredito:!1})},E=()=>{v(n),S()};return t(B,{open:s,onClose:S,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Sede",name:"codiceSede",value:n.codiceSede,error:o.codiceSede,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Codice Ditta",name:"codiceDitta",value:n.codiceDitta,error:o.codiceDitta,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"C.C.",name:"cc",value:n.cc,error:o.cc,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,label:"Numero di riferimento",name:"riferimento",value:n.riferimento,error:o.riferimento,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Causale",name:"causale",value:n.causale,error:o.causale,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,disabled:D,onClick:E,children:"salva"})})]})},_e=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceSede:"",causaleContributo:"",matricola:"",meseRiferimentoDa:"01",annoRiferimentoDa:new Date().getFullYear(),meseRiferimentoA:"12",annoRiferimentoA:new Date().getFullYear(),importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceSede:!0,causaleContributo:!0,matricola:!0,meseRiferimentoDa:!1,annoRiferimentoDa:!1,meseRiferimentoA:!1,annoRiferimentoA:!1,importoDebito:!0,importoCredito:!1}),a=b=>{const{required:R,name:m,value:g}=b.target;h({...n,[m]:g}),R&&p({...o,[m]:g.toString().length<1})},D=()=>{C(!1),h({codiceSede:"",causaleContributo:"",matricola:"",meseRiferimentoDa:"01",annoRiferimentoDa:new Date().getFullYear(),meseRiferimentoA:"12",annoRiferimentoA:new Date().getFullYear(),importoDebito:"",importoCredito:0}),p({codiceSede:!0,causaleContributo:!0,matricola:!0,meseRiferimentoDa:!1,annoRiferimentoDa:!1,meseRiferimentoA:!1,annoRiferimentoA:!1,importoDebito:!0,importoCredito:!1})},I=()=>{v(n),D()},[S,E]=d.useState(!0);return d.useEffect(()=>{E(!Object.values(o).every(b=>b===!1))},[o]),t(B,{open:s,onClose:D,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Sede",name:"codiceSede",value:n.codiceSede,error:o.codiceSede,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Causale Contributo",name:"causaleContributo",value:n.causaleContributo,error:o.causaleContributo,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Matricola/Codice INPS o filiale azienda",name:"matricola",value:n.matricola,error:o.matricola,onChange:a,margin:"normal"}),t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{mt:.5},children:[e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Dal mese",name:"meseRiferimentoDa",value:n.meseRiferimentoDa,error:o.meseRiferimentoDa,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Dall'anno",name:"annoRiferimentoDa",value:n.annoRiferimentoDa,error:o.annoRiferimentoDa,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"Al mese",name:"meseRiferimentoA",value:n.meseRiferimentoA,error:o.meseRiferimentoA,onChange:a})}),e(u,{item:!0,xs:6,children:e(l,{fullWidth:!0,required:!0,label:"All'anno",name:"annoRiferimentoA",value:n.annoRiferimentoA,error:o.annoRiferimentoA,onChange:a})})]}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,onClick:I,disabled:S,children:"salva"})})]})},ei=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceEnte:"",ravvedimento:!1,immobiliVariati:!1,acconto:!1,saldo:!1,numeroImmobili:"",codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceEnte:!0,ravvedimento:!1,immobiliVariati:!1,acconto:!1,saldo:!1,numeroImmobili:!1,codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1}),a=R=>{const{required:m,name:g,value:H}=R.target;h({...n,[g]:H}),m&&p({...o,[g]:H.toString().length<1})},D=R=>{const{name:m,checked:g}=R.target;h({...n,[m]:g})},[I,S]=d.useState(!0);d.useEffect(()=>{S(!Object.values(o).every(R=>R===!1))},[o]);const E=()=>{C(!1),h({codiceEnte:"",ravvedimento:!1,immobiliVariati:!1,acconto:!1,saldo:!1,numeroImmobili:"",codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),p({codiceEnte:!0,ravvedimento:!1,immobiliVariati:!1,acconto:!1,saldo:!1,numeroImmobili:!1,codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1})},b=()=>{v(n),E()};return t(B,{open:s,onClose:E,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Ente",name:"codiceEnte",value:n.codiceEnte,error:o.codiceEnte,onChange:a,margin:"normal"}),t(Xe,{children:[e(J,{control:e(O,{name:"ravvedimento",onChange:D}),label:"Ravv."}),e(J,{control:e(O,{name:"immobiliVariati",onChange:D}),label:"Immob. Variati"}),e(J,{control:e(O,{name:"acconto",onChange:D}),label:"Acc."}),e(J,{control:e(O,{name:"saldo",onChange:D}),label:"Saldo"})]}),e(l,{fullWidth:!0,label:"Numero Immobili",name:"numeroImmobili",value:n.numeroImmobili,error:o.numeroImmobili,onChange:a,margin:"normal",type:"number",inputProps:{step:1}}),e(l,{fullWidth:!0,required:!0,label:"Codice Tributo",name:"codiceTributo",value:n.codiceTributo,error:o.codiceTributo,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,label:"Rateazione/mese rif.",name:"riferimento",value:n.riferimento,error:o.riferimento,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Anno di riferimento",name:"anno",value:n.anno,error:o.anno,onChange:a,margin:"normal",type:"number",inputProps:{step:1}}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,disabled:I,onClick:b,children:"salva"})})]})},ii=({open:s,onClose:C,onSave:v})=>{const[n,h]=d.useState({codiceRegione:"",codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),[o,p]=d.useState({codiceRegione:!0,codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1}),a=b=>{const{required:R,name:m,value:g}=b.target;h({...n,[m]:g}),R&&p({...o,[m]:g.toString().length<1})},[D,I]=d.useState(!0);d.useEffect(()=>{I(!Object.values(o).every(b=>b===!1))},[o]);const S=()=>{C(!1),h({codiceRegione:"",codiceTributo:"",riferimento:"",anno:new Date().getFullYear(),importoDebito:"",importoCredito:0}),p({codiceRegione:!0,codiceTributo:!0,riferimento:!1,anno:!1,importoDebito:!0,importoCredito:!1})},E=()=>{v(n),S()};return t(B,{open:s,onClose:S,children:[t(U,{children:[e(l,{fullWidth:!0,required:!0,label:"Codice Regione",name:"codiceRegione",value:n.codiceRegione,error:o.codiceRegione,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Codice Tributo",name:"codiceTributo",value:n.codiceTributo,error:o.codiceTributo,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,label:"Rateazione/regione/prov./mese rif.",name:"riferimento",value:n.riferimento,error:o.riferimento,onChange:a,margin:"normal"}),e(l,{fullWidth:!0,required:!0,label:"Anno di riferimento",name:"anno",value:n.anno,error:o.anno,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a debito",name:"importoDebito",value:n.importoDebito,error:o.importoDebito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}}),e(l,{fullWidth:!0,required:!0,label:"Importo a credito",name:"importoCredito",value:n.importoCredito,error:o.importoCredito,onChange:a,margin:"normal",type:"number",inputProps:{step:.01}})]}),e(X,{children:e(G,{fullWidth:!0,disabled:D,onClick:E,children:"salva"})})]})},ri=({dettagli:s})=>{const C=se(),v=Fe(),{putting:n,putError:h,response:o}=ue(r=>r.f24),[p,a]=d.useState({dataScadenza:s.dataScadenza}),[D,I]=d.useState({dataScadenza:!1}),S=r=>{const{required:c,value:k,name:de}=r.target;a({...p,[de]:k}),c&&I({...D,[de]:k.toString().length<1})},[E,b]=d.useState({codiceUfficio:s.sezioneErario?s.sezioneErario.codiceUfficio:"",codiceAtto:s.sezioneErario?s.sezioneErario.codiceAtto:""}),R=r=>{const{value:c,name:k}=r.target;b({...E,[k]:c})},[m,g]=d.useState(s.sezioneErario?s.sezioneErario.reparti:[]),[H,Q]=d.useState(!1),me=r=>{g([...m,r])},he=r=>{const c=[...m];c.splice(r,1),g(c)},[W,Z]=d.useState(s.sezioneInps),[fe,_]=d.useState(!1),pe=r=>{Z([...W,r])},be=r=>{const c=[...W];c.splice(r,1),Z(c)},[T,ee]=d.useState(s.sezioneRegioni),[ge,ie]=d.useState(!1),Ce=r=>{ee([...T,r])},ve=r=>{const c=[...T];c.splice(r,1),ee(c)},[$,De]=d.useState({detrazione:s.sezioneTributiLocali?s.sezioneTributiLocali.detrazione:"",identificativoOperazione:s.sezioneTributiLocali?s.sezioneTributiLocali.identificativoOperazione:""}),re=r=>{const{value:c,name:k}=r.target;De({...$,[k]:c})},[q,oe]=d.useState(s.sezioneTributiLocali?s.sezioneTributiLocali.reparti:[]),[Re,ne]=d.useState(!1),Se=r=>{oe([...q,r])},Ee=r=>{const c=[...q];c.splice(r,1),oe(c)},[P,te]=d.useState(s.sezioneInail),[Ie,ae]=d.useState(!1),ze=r=>{te([...P,r])},Ae=r=>{const c=[...P];c.splice(r,1),te(c)},[w,le]=d.useState(s.sezioneAltriEnti),[xe,ce]=d.useState(!1),ye=r=>{le([...w,r])},We=r=>{const c=[...w];c.splice(r,1),le(c)},[Te,qe]=d.useState(!0);d.useEffect(()=>{const r=!Object.values(D).every(k=>k===!1),c=w.length>0||m.length>0||P.length>0||W.length>0||q.length>0||T.lenght>0;qe(r||!c)},[D,w,m,P,W,q,T]);const Pe=()=>{const r={...p,sezioneErario:null,sezioneInps:[],sezioneRegioni:[],sezioneTributiLocali:null,sezioneInail:[],sezioneAltriEnti:[]};m.length>0&&(r.sezioneErario={...E,reparti:m},y.isEmpty(s.sezioneErario)||(r.sezioneErario={...r.sezioneErario,id:s.sezioneErario.id})),W.length>0&&(r.sezioneInps=W),T.length>0&&(r.sezioneRegioni=T),q.length>0&&(r.sezioneTributiLocali={...$,reparti:q},y.isEmpty(s.sezioneTributiLocali)||(r.sezioneTributiLocali={...r.sezioneTributiLocali,id:s.sezioneTributiLocali.id})),P.length>0&&(r.sezioneInail=P),w.length>0&&(r.sezioneAltriEnti=w),C(Je(s.id,r)),h||(C(K()),v("/fisco/f24/dettagli/"+s.id))};return t(Le,{children:[e(f,{mb:3,children:e(F,{variant:"h3",children:"Modifica F24"})}),e(f,{mb:3,children:e(L,{children:e(f,{p:2,children:e(l,{fullWidth:!0,label:"Data di Scadenza",name:"dataScadenza",value:p.dataScadenza,error:D.dataScadenza,onChange:S,required:!0,type:"date"})})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione Erario"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>Q(!0),children:e(V,{})})}),e(u,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Codice Ufficio",name:"codiceUfficio",value:E.codiceUfficio,onChange:R})}),e(u,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Codice Atto",name:"codiceAtto",value:E.codiceAtto,onChange:R})})]}),e(f,{mt:2,children:y.isEmpty(m)?e(j,{severity:"info",variant:"outlined",children:"Sezione Erario vuota"}):t(Y,{children:[e(N,{children:t(A,{children:[e(i,{children:"Codice Tributo"}),e(i,{children:"Rat./Reg./Prov./Mese rif."}),e(i,{children:"Anno rif."}),e(i,{align:"right",children:"Importi a debito"}),e(i,{align:"right",children:"Importi a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:m.map((r,c)=>t(A,{children:[e(i,{children:r.codiceTributo}),e(i,{children:r.riferimento}),e(i,{children:r.anno}),t(i,{align:"right",children:[r.importoDebito," €"]}),t(i,{align:"right",children:[r.importoCredito," €"]}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>he(c),children:e(x,{})})})]},c))})]})})]})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione INPS"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>_(!0),children:e(V,{})})})]}),e(f,{mt:2,children:y.isEmpty(W)?e(j,{severity:"info",variant:"outlined",children:"Sezione INPS vuota"}):e(f,{sx:{overflowX:"auto"},children:t(Y,{children:[e(N,{children:t(A,{children:[e(i,{sx:{width:80},children:"Codice sede"}),e(i,{sx:{width:80},children:"Causale contributo"}),e(i,{children:"Matricola/codice/filiale azienda"}),e(i,{children:"Periodo di rif. da"}),e(i,{children:"Periodo di rif. a"}),e(i,{align:"right",children:"Importo a debito"}),e(i,{align:"right",children:"Importo a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:W.map((r,c)=>t(A,{children:[e(i,{children:r.codiceSede}),e(i,{children:r.causaleContributo}),e(i,{children:r.matricola}),t(i,{children:[r.meseRiferimentoDa,"-",r.annoRiferimentoDa]}),t(i,{children:[r.meseRiferimentoA,"-",r.annoRiferimentoA]}),e(i,{children:r.importoDebito}),e(i,{children:r.importoCredito}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>be(c),children:e(x,{})})})]},c))})]})})})]})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione Regioni"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>ie(!0),children:e(V,{})})})]}),e(f,{mt:2,children:y.isEmpty(T)?e(j,{severity:"info",variant:"outlined",children:"Sezione Regioni vuota"}):t(Y,{children:[e(N,{children:t(A,{children:[e(i,{children:"Codice Regione"}),e(i,{children:"Codice Tributo"}),e(i,{children:"Rat./Reg./Prov./Mese rif."}),e(i,{children:"Anno rif."}),e(i,{align:"right",children:"Importi a debito"}),e(i,{align:"right",children:"Importi a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:T.map((r,c)=>t(A,{children:[e(i,{children:r.codiceRegione}),e(i,{children:r.codiceTributo}),e(i,{children:r.riferimento}),e(i,{children:r.anno}),t(i,{align:"right",children:[r.importoDebito," €"]}),t(i,{align:"right",children:[r.importoCredito," €"]}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>ve(c),children:e(x,{})})})]},c))})]})})]})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione IMU e Altri Tributi Locali"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>ne(!0),children:e(V,{})})}),e(u,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Identificativo Operazione",name:"identificativoOperazione",value:$.identificativoOperazione,onChange:re})}),e(u,{item:!0,xs:12,sm:6,children:e(l,{fullWidth:!0,label:"Detrazione",name:"detrazione",value:$.detrazione,onChange:re,type:"number",inputProps:{step:.01}})})]}),e(f,{mt:2,children:y.isEmpty(q)?e(j,{severity:"info",variant:"outlined",children:"Sezione IMU e Altri Tributi Locali vuota"}):e(f,{sx:{overflowX:"auto"},children:t(Y,{children:[e(N,{children:t(A,{children:[e(i,{children:"Codice ente"}),e(i,{children:"Ravv."}),e(i,{children:"immob. var."}),e(i,{children:"Acc."}),e(i,{children:"Saldo"}),e(i,{children:"N. immb."}),e(i,{children:"Codice tributo"}),e(i,{children:"Rat./Mese"}),e(i,{children:"Anno"}),e(i,{align:"right",children:"Importo a debito"}),e(i,{align:"right",children:"Importo a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:q.map((r,c)=>t(A,{children:[e(i,{children:r.codiceEnte}),e(i,{children:e(O,{checked:r.ravvedimento})}),e(i,{children:e(O,{checked:r.immobiliVariati})}),e(i,{children:e(O,{checked:r.acconto})}),e(i,{children:e(O,{checked:r.saldo})}),e(i,{children:r.numeroImmobili}),e(i,{children:r.codiceTributo}),e(i,{children:r.riferimento}),e(i,{children:r.anno}),t(i,{align:"right",children:[r.importoDebito," €"]}),t(i,{align:"right",children:[r.importoCredito," €"]}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>Ee(c),children:e(x,{})})})]},c))})]})})})]})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione INAIL"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>ae(!0),children:e(V,{})})})]}),e(f,{mt:2,children:y.isEmpty(P)?e(j,{severity:"info",variant:"outlined",children:"Sezione INAIL vuota"}):e(f,{sx:{overflowX:"auto"},children:t(Y,{children:[e(N,{children:t(A,{children:[e(i,{children:"Codice sede"}),e(i,{children:"Codice Ditta"}),e(i,{children:"C.C."}),e(i,{children:"Numero rif."}),e(i,{children:"Causale"}),e(i,{align:"right",children:"Importo a debito"}),e(i,{align:"right",children:"Importo a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:P.map((r,c)=>t(A,{children:[e(i,{children:r.codiceSede}),e(i,{children:r.codiceDitta}),e(i,{children:r.cc}),e(i,{children:r.riferimento}),e(i,{children:r.causale}),e(i,{children:r.importoDebito}),e(i,{children:r.importoCredito}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>Ae(c),children:e(x,{})})})]},c))})]})})})]})})}),e(f,{mb:3,children:e(L,{children:t(f,{p:2,children:[t(u,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(u,{item:!0,xs:10,children:e(F,{variant:"h6",children:"Sezione Altri Enti Previdenziali e Assicurativi"})}),e(u,{item:!0,xs:2,sx:{textAlign:"right"},children:e(z,{color:"info",onClick:()=>ce(!0),children:e(V,{})})})]}),e(f,{mt:2,children:y.isEmpty(w)?e(j,{severity:"info",variant:"outlined",children:"Sezione Altri Enti Previdenziali e Assicurativi vuota"}):e(f,{sx:{overflowX:"auto"},children:t(Y,{children:[e(N,{children:t(A,{children:[e(i,{children:"Codice Ente"}),e(i,{children:"Codice Sede"}),e(i,{children:"Causale contributo"}),e(i,{children:"Codice posizione"}),e(i,{children:"Periodo di rif. da"}),e(i,{children:"Periodo di rif. a"}),e(i,{align:"right",children:"Importo a debito"}),e(i,{align:"right",children:"Importo a credito"}),e(i,{sx:{width:50},align:"center",children:e(x,{})})]})}),e(M,{children:w.map((r,c)=>t(A,{children:[e(i,{children:r.codiceEnte}),e(i,{children:r.codiceSede}),e(i,{children:r.causaleContributo}),e(i,{children:r.codicePosizione}),t(i,{children:[r.meseRiferimentoDa,"-",r.annoRiferimentoDa]}),t(i,{children:[r.meseRiferimentoA,"-",r.annoRiferimentoA]}),e(i,{children:r.importoDebito}),e(i,{children:r.importoCredito}),e(i,{align:"center",children:e(z,{color:"error",onClick:()=>We(c),children:e(x,{})})})]},c))})]})})})]})})}),e(Qe,{open:H,onClose:Q,onSave:me}),e(_e,{open:fe,onClose:_,onSave:pe}),e(ii,{open:ge,onClose:ie,onSave:Ce}),e(ei,{open:Re,onClose:ne,onSave:Se}),e(Ze,{open:Ie,onClose:ae,onSave:ze}),e(Ke,{open:xe,onClose:ce,onSave:ye}),e(je,{disabled:Te,onClick:Pe}),e(Ge,{open:!y.isEmpty(o),autoHideDuration:1e3,onClose:()=>C(K()),action:e(z,{onClick:()=>C(K()),children:e($e,{})}),children:e(j,{severity:"info",children:o})})]})},zi=()=>{const{id:s}=Ve(),C=se(),{dettagli:v,getting:n,getError:h,response:o}=ue(p=>p.f24);return d.useEffect(()=>{y.isEmpty(s)||C(Ne(s))},[s]),n?e(Ye,{}):y.isEmpty(v)||h?e(Me,{message:o||"Errore di caricamento"}):e(ri,{dettagli:v})};export{zi as default};
