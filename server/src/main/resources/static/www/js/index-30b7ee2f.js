import{$ as E,a0 as P,a1 as A,a2 as B,a3 as F,R as p,a,j as u,F as W}from"./index-93a658e1.js";import{l as h}from"./lodash-5cf28809.js";import{a as R,E as k,u as j,b as D,T as f}from"./index-662e9df6.js";import{C as g}from"./Container-4e698ef5.js";import{A as c}from"./Alert-6978e496.js";import{B as m}from"./Box-eb43530e.js";import{P as N}from"./Paper-7dd117f4.js";import{B as O}from"./Button-af37ef74.js";import"./ButtonBase-4f0918eb.js";function $(n){return async r=>{R.post(`${k.ACCOUNT}/token`,{token:n}).then(e=>{r(E(e.data))}).catch(e=>{let t="errore";e.response?t=e.response.data:t=e.message,r(P(t))})}}function U(n){return async r=>{R.post(`${k.ACCOUNT}/password-reset`,n).then(e=>{r(A(e.data)),setTimeout(()=>{window.location.href="/app"},1e3)}).catch(e=>{let t="errore";e.response?t=e.response.data:t=e.message,r(B(t))})}}const L=()=>{const n=j(),{isPwResetTokenValid:r,pwResetTokenMessage:e,isPwReset:t,pwReset:v}=D(o=>o.account),[d,V]=F(),[s,y]=p.useState({password:"",passwordRepeat:""}),[i,x]=p.useState({password:!0,passwordRepeat:!0});p.useEffect(()=>{h.isEmpty(d.get("token"))||n($(d.get("token")))},[d]);const w=o=>{const{name:S,value:b}=o.target;y({...s,[S]:b})};p.useEffect(()=>{x({...i,password:s.password!==s.passwordRepeat||s.password.toString().length<1,passwordRepeat:s.password!==s.passwordRepeat||s.passwordRepeat.toString().length<1})},[s]);const[l,T]=p.useState(!0);p.useEffect(()=>{T(!Object.values(i).every(o=>o===!1))},[i]);const C=()=>{const o={token:d.get("token"),password:s.password};n(U(o))};return h.isEmpty(d.get("token"))?a(g,{maxWidth:"xs",children:a(c,{severity:"error",children:"Token non valido!"})}):u(g,{maxWidth:"xs",children:[a(m,{mb:3,children:a(c,{severity:r?"success":"error",children:e})}),r&&u(W,{children:[a(N,{children:u(m,{p:2,children:[a(f,{fullWidth:!0,label:"Nuova Password",name:"password",value:s.password,error:i.password,margin:"normal",onChange:w,type:"password"}),a(f,{fullWidth:!0,label:"Ripeti Password",name:"passwordRepeat",value:s.passwordRepeat,error:i.passwordRepeat,margin:"normal",onChange:w,type:"password"}),a(c,{severity:l?"error":"success",sx:{marginBottom:2},children:l?"le password devono coincidere":"password conforme"}),a(O,{fullWidth:!0,variant:"contained",disabled:l,onClick:()=>C(),children:"Resetta password"})]})}),a(m,{mt:2,children:a(c,{severity:t?"success":"error",children:v})})]})]})};export{L as default};
