import{a4 as R,a5 as j,a6 as D,a7 as W,a8 as L,R as d,a as e,F as S,j as c}from"./index-109fa365.js";import{a as x,E as C,u as V,b as H,T as b}from"./index-96fd6905.js";import{F as U,C as $}from"./FormControlLabel-94bf9785.js";import{B as T}from"./Box-f775012d.js";import{B as q}from"./Button-57b58dd9.js";import{C as I}from"./Container-787b60a2.js";import{P as O,A as u}from"./Alert-969113fe.js";import{T as k}from"./Typography-6933398f.js";import{L as Q}from"./LinearProgress-c7417323.js";import"./ButtonBase-0a28f6da.js";function z(p=""){return async r=>{x.post(`${C.AUTH}/password/token`,{token:p}).then(a=>{r(R(a.data))}).catch(a=>{let t=!1;a.response?t=a.response.data:t=!1,R(t)})}}function G(p){return async r=>{r(j()),x.post(`${C.AUTH}/password/reset`,p).then(a=>{r(D(a.data)),setTimeout(()=>{window.location.href="/app"},1e3)}).catch(a=>{let t="Errore";a.response?t=a.response.data:t="Errore",r(W(t))})}}const ae=()=>{const p=V(),[r,a]=L(),{isTokenValid:t,resetting:P,resetError:m,resetResponse:w}=H(o=>o.account);d.useEffect(()=>{p(z(r.get("token")||""))},[r]);const[s,E]=d.useState({password:"",passwordRepeat:""}),[n,h]=d.useState({password:!0,passwordRepeat:!0}),[A,F]=d.useState(!0),f=o=>{const{name:i,value:y}=o.target;E({...s,[i]:y}),h({...n,[i]:y.toString().length<1})};d.useEffect(()=>{F(!Object.values(n).every(o=>o===!1))},[n]);const[g,B]=d.useState(!1);d.useEffect(()=>{h({...n,password:s.password!==s.passwordRepeat||s.password.toString().length<1,passwordRepeat:s.password!==s.passwordRepeat||s.passwordRepeat.toString().length<1})},[s]);const v=o=>{o.preventDefault();const i={token:r.get("token"),password:s.password};p(G(i))};let l=e(k,{children:"Caricamento in corso..."});return t?l=e(S,{children:c("form",{action:"",method:"post",onSubmit:v,children:[e(b,{fullWidth:!0,label:"Password",name:"password",value:s.password,error:n.password,onChange:f,type:g?"text":"password",margin:"normal",helperText:n.password?"le password devono coincidere ed essere conformi":""}),e(b,{fullWidth:!0,label:"Ripeti Password",name:"passwordRepeat",value:s.passwordRepeat,error:n.passwordRepeat,onChange:f,type:g?"text":"password",margin:"normal",helperText:n.passwordRepeat?"le password devono coincidere ed essere conformi":""}),e(U,{value:"mostra password",control:e($,{onChange:o=>B(o.target.checked)}),label:"mostra password"}),e(T,{mt:1,children:e(q,{type:"submit",fullWidth:!0,variant:"contained",disabled:A,onClick:v,children:"cambia password"})})]})}):l=e(u,{severity:"error",children:"Token non valido o scaduto!"}),e(S,{children:c(I,{maxWidth:"xs",children:[e(O,{children:c(T,{p:2,children:[e(k,{variant:"h6",gutterBottom:!0,children:"Scegli la tua nuova password"}),l]})}),P&&e(Q,{}),m&&e(u,{severity:"error",children:m}),w&&e(u,{severity:"success",children:w})]})})};export{ae as default};
