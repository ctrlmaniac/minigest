import{a9 as m,R as g,l as d,j as r,F as P,b as C}from"./index-222da0ba.js";import{u as W,a as b,T as l,B as u}from"./hooks-db4dee7a.js";import{a as x,E as y}from"./index-c44c1a12.js";import{C as w}from"./Container-99c548f4.js";import{P as B}from"./Paper-96727556.js";import{T as c}from"./TextField-9f2cfd53.js";import{B as q}from"./Button-30f411bc.js";import"./Grow-dd1bfbaf.js";import"./useTheme-88693805.js";import"./utils-50920ebd.js";import"./TransitionGroupContext-58f02f0d.js";import"./Modal-821d5a1c.js";import"./List-670810c7.js";import"./createSvgIcon-208d5829.js";import"./ButtonBase-f82ec6e5.js";function R(s){return async e=>{x.post(`${y.ACCOUNT}/request-password-reset`,{email:s}).then(a=>{e(m(a.data))}).catch(a=>{let t="errore";a.response?t=a.response.data:t=a.message,e(m(t))})}}function M(s){return async e=>{x.put(`${y.ACCOUNT}`,s).then(a=>{e(m(a.data))}).catch(a=>{let t="errore";a.response?t=a.response.data:t=a.message,e(m(t))})}}const K=()=>{const s=W(),{dettagli:e,reqPwResetMessage:a,reqUpdateMessage:t}=b(p=>p.account),[n,v]=g.useState({fname:e==null?void 0:e.fname,lname:e==null?void 0:e.lname,email:e==null?void 0:e.email}),[i,A]=g.useState({fname:!1,lname:!1,email:!1}),o=p=>{const{name:h,value:f}=p.target;v({...n,[h]:f}),A({...i,[h]:f.toString().length<1})},E=()=>{s(R(e==null?void 0:e.email))},T=()=>{s(M({fname:n.fname,lname:n.lname,email:n.email}))};return d.isEmpty(e)?r(l,{children:"caricamento in corso..."}):r(P,{children:r(w,{maxWidth:"xs",children:r(u,{mb:3,children:r(B,{children:C(u,{p:2,children:[r(l,{variant:"h6",gutterBottom:!0,children:"Dati Personali"}),r(c,{fullWidth:!0,label:"nome",name:"fname",value:n.fname,error:i.fname,onChange:o,required:!0,margin:"normal"}),r(c,{fullWidth:!0,label:"Cognome",name:"lname",value:n.lname,error:i.lname,onChange:o,required:!0,margin:"normal"}),r(c,{fullWidth:!0,label:"email",name:"email",value:n.email,error:i.email,onChange:o,required:!0,margin:"normal",type:"email"}),r(q,{fullWidth:!0,variant:"contained",onClick:()=>T(),children:"Aggiorna dati"}),C(u,{mt:2,children:[r(q,{onClick:()=>E(),fullWidth:!0,children:"resetta password"}),!d.isEmpty(a)&&r(l,{align:"center",children:a}),!d.isEmpty(t)&&r(l,{align:"center",children:t})]})]})})})})})};export{K as default};