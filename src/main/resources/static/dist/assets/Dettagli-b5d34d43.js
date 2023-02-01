import{H as b,a8 as x,R as D,j as i,a as e,F as A}from"./index-f45c03a1.js";import{E as C}from"./ErrorScreen-23109fc3.js";import{L as F}from"./LoadingScreen-7795ebdd.js";import{u as S,a as g}from"./hooks-71074923.js";import{g as R}from"./get-d6f769d0.js";import{r as v}from"./remove-8084d40d.js";import{B as c,T as I}from"./Box-3112786e.js";import{P as m}from"./Paper-c542b63c.js";import{T as d,c as p,a as n,b as o}from"./TableRow-aa552d5a.js";import{T as w}from"./TableHead-f12ffb5d.js";import{C as E}from"./Container-b2c8bae1.js";import{S as P,I as j,a as u,b as y}from"./IconSettings-af62bd11.js";import{I as B}from"./IconTrash-34d4add2.js";import"./Splash-c0a4ca1f.js";import"./Alert-9ab8b305.js";import"./createSvgIcon-5f7bcaef.js";import"./ButtonBase-07c320ab.js";import"./index-e540bbee.js";import"./useTheme-7ac3100d.js";import"./Fab-8a5b0f7e.js";import"./Grow-46dd7ada.js";import"./utils-856da27c.js";import"./Popper-6fbc53ae.js";import"./createReactComponent-19830811.js";const ai=()=>{const l=b(),t=S(),{id:s}=x(),{dettagli:r,getting:f,getError:h}=g(a=>a.chiusureFiscali);D.useEffect(()=>{s&&t(R(s))},[s]);const T=a=>{t(v(a)),l("/app/docfisc/chiusure-fiscali")};return f?i(F,{}):h?i(C,{message:h}):e(A,{children:[i(c,{mb:3,children:i(I,{variant:"h3",children:"Dettagli Chiusura Fiscale"})}),i(c,{mb:3,children:i(m,{children:i(c,{p:2,children:i(d,{children:e(p,{children:[e(n,{children:[i(o,{sx:{width:150},children:"Data"}),i(o,{children:r==null?void 0:r.data})]}),e(n,{children:[i(o,{sx:{width:150},children:"Totale"}),e(o,{children:["€ ",r==null?void 0:r.totale]})]}),e(n,{children:[i(o,{sx:{width:150},children:"Num. D.F."}),i(o,{children:r==null?void 0:r.numeroDocFisc})]})]})})})})}),r==null?void 0:r.reparti.map(a=>i(c,{mb:3,children:i(m,{children:i(c,{p:2,children:e(d,{children:[i(w,{children:e(n,{children:[i(o,{children:"Aliquota"}),i(o,{children:"Totale"}),i(o,{children:"Annulli"}),i(o,{children:"Resi"})]})}),i(p,{children:e(n,{children:[e(o,{children:["% ",a.aliquota]}),e(o,{children:["€ ",a.totale]}),e(o,{children:["€ ",a.totaleAnnulli]}),e(o,{children:["€ ",a.totaleResi]})]})})]})})})},a.id)),i(c,{sx:{position:"fixed",bottom:16,right:16},children:i(E,{sx:{textAlign:"right"},children:e(P,{ariaLabel:"azioni su chiusure fiscali",icon:i(j,{}),children:[i(u,{icon:i(y,{}),tooltipTitle:"modifica",onClick:()=>l(`/app/docfisc/chiusure-fiscali/modifica/${r==null?void 0:r.id}`)}),i(u,{icon:i(B,{}),tooltipTitle:"elimina",onClick:()=>T(r==null?void 0:r.id)})]})})})]})};export{ai as default};
