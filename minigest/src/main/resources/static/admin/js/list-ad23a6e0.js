import{a as r,E as n}from"./hooks-5570b2fb.js";import{a6 as o,a7 as i,a8 as l}from"./index-90347663.js";function p(t=""){return async s=>{s(o()),r.get(`${n.AZIENDE}?denominazione=${t}`).then(a=>{s(i(a.data))}).catch(a=>{let e="Errore";a.response?e=a.response.data:e="Errore",s(l(e))})}}export{p as l};