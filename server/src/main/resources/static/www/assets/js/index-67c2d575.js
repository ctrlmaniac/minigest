import{R as m,a as e,j as l}from"./index-d7aa2fc7.js";import{C as d}from"./Container-c2f3b83f.js";import{P as u}from"./Paper-c3ac5033.js";import{B as p}from"./Box-16327ee3.js";import{T as t}from"./TextField-3be57f62.js";import{B as c}from"./Button-26669098.js";import"./styled-5feea428.js";import"./ButtonBase-7d0beb75.js";const W=()=>{const[r,o]=m.useState({username:"",password:""}),a=s=>{const{name:n,value:i}=s.target;o({...r,[n]:i.trim()})};return e(d,{maxWidth:"xs",children:e(u,{children:e(p,{p:2,children:l("form",{action:"",method:"post",children:[e(t,{fullWidth:!0,label:"email",name:"username",type:"email",margin:"normal",value:r.username,onChange:a,error:r.username.length<1,required:!0}),e(t,{fullWidth:!0,name:"password",label:"password",type:"password",margin:"normal",value:r.password,onChange:a,error:r.password.length<1,required:!0}),e(c,{fullWidth:!0,variant:"contained",type:"submit",children:"accedi"})]})})})})};export{W as default};
