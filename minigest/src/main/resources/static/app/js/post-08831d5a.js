import{a as e,E as r}from"./index-369028e4.js";import{Q as p,S as n,U as i,W as m}from"./index-8d810eb5.js";function c(t){return async s=>{s(p()),e.post(`${r.NEGOZI}`,t).then(a=>{s(n(a.data)),s(i(a.data))}).catch(a=>{let o="Errore";a.response?o=a.response.data:o="Errore",s(m(o))})}}export{c as p};
