import{a as e,E as r}from"./index-d540e9b2.js";import{a5 as o,a6 as i,a7 as n}from"./index-2aee8fbc.js";function p(){return async a=>{a(o()),e.get(`${r.SCADENZARIO}`).then(s=>{a(i(s.data))}).catch(s=>{let t="Errore";s.response?t=s.response.data:t="Errore",a(n(t))})}}export{p as l};
