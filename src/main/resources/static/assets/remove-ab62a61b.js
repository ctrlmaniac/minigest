import{a as s,E as o}from"./index-e540bbee.js";import{a3 as m,a4 as n}from"./index-f96e3560.js";function p(e){return async a=>{s.delete(`${o.CHIUSURE_FISCALI}/${e}`).then(r=>{a(m(e))}).catch(r=>{a(n(r.message))})}}export{p as r};