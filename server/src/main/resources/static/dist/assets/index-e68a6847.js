import{au as E,av as b,R as i,a as v,F,j as e,B as c,ac as x,Z as z}from"./index-7862eb00.js";import{E as N}from"./ErrorScreen-eca8d1bc.js";import{g as j}from"./get-2f8a5342.js";import{u as l,a as y}from"./hooks-d3ca2a4c.js";import{S as T}from"./SaveFab-d7db3c27.js";import{a as C,E as D}from"./index-30e337fd.js";import{T as M}from"./Typography-a27d4a59.js";import{P}from"./Paper-7dd8998f.js";import{T as $}from"./TextField-1bd45967.js";import"./Container-ae15322d.js";import"./Alert-5fa013c6.js";import"./createSvgIcon-8230f01b.js";import"./ButtonBase-52577508.js";import"./Fab-7f11b1aa.js";import"./createReactComponent-ec120697.js";import"./Grow-c742a7e6.js";import"./useTheme-eae15486.js";import"./utils-682c87a5.js";import"./Modal-d6c190e6.js";import"./List-1ac29d19.js";function q(t,s){return async r=>{C.put(`${D.NEGOZI}/${t}`,s).then(a=>{r(E()),window.location.href=`/app/negozi/dettagli/${a.data.id}`}).catch(a=>{r(b(a.message))})}}const w=({dettagli:t})=>{const s=l(),[r,a]=i.useState({...t}),[o,n]=i.useState({nome:!1}),d=m=>{const{name:p,value:u,required:S}=m.target;a({...r,[p]:u}),S&&n({...o,[p]:u.length<1})},[f,g]=i.useState(!0);i.useEffect(()=>{g(!Object.values(o).every(m=>m===!1))},[o]);const h=()=>{s(q(t.id,r))};return v(F,{children:[e(c,{mb:3,children:e(M,{variant:"h3",children:"Modifica Negozio"})}),e(c,{children:e(P,{children:e(c,{p:2,children:e($,{label:"Nome",name:"nome",value:r.nome,error:o.nome,required:!0,fullWidth:!0,onChange:d})})})}),e(T,{disabled:f,handleClick:h})]})},te=()=>{const{id:t}=x(),s=l(),{dettagli:r,getting:a,getError:o}=y(n=>n.negozi);return i.useEffect(()=>{t&&s(j(t))},[t]),a?e(z,{}):o?e(N,{message:o}):e(w,{dettagli:r})};export{te as default};
