import{aq as g,ar as d,d as h,aa as f,R as u,j as i,o as x,C as z,b as s,F as v}from"./index-67254d02.js";import{g as C}from"./get-d6942be2.js";import{a as I,E as S}from"./index-c44c1a12.js";import{u as b,a as D,B as a,T as c}from"./hooks-fccfb499.js";import{P as E}from"./Paper-3e81e2e3.js";import{C as N}from"./Container-29ac1da5.js";import{S as T,I as A,a as m,b as P}from"./IconSettings-cfce8334.js";import{I as j}from"./IconTrash-ef31679c.js";import"./useTheme-b4ae5703.js";import"./Grow-de51d2e5.js";import"./utils-2b3ff743.js";import"./TransitionGroupContext-9ce3bcfc.js";import"./ButtonBase-4000f0af.js";import"./Popper-7938f39d.js";import"./createReactComponent-d33df1ab.js";function y(r){return async e=>{I.delete(`${S.NEGOZI}/${r}`).then(o=>{e(g()),window.location.href="/app/negozi"}).catch(o=>{e(d(o.message))})}}const M=()=>{const r=h(),{id:e}=f(),o=b(),{dettagli:t,getting:p,getError:n}=D(l=>l.negozi);return u.useEffect(()=>{e&&o(C(e))},[e]),p?i(x,{}):n?i(z,{message:n}):s(v,{children:[i(a,{mb:3,children:i(c,{variant:"h3",children:"Dettagli Negozio"})}),i(a,{children:i(E,{children:i(a,{p:2,children:s(c,{children:[i("strong",{children:"Nome:"})," ",t==null?void 0:t.nome]})})})}),i(a,{sx:{position:"fixed",bottom:16,right:16},children:i(N,{sx:{textAlign:"right"},children:s(T,{ariaLabel:"azioni su negozi",icon:i(A,{}),children:[i(m,{icon:i(P,{}),tooltipTitle:"modifica",onClick:()=>r(`/negozi/modifica/${e}`)}),i(m,{icon:i(j,{}),tooltipTitle:"elimina",onClick:()=>o(y(e))})]})})})]})};export{M as default};
