import{a as s,E as o}from"./index-30e337fd.js";import{a5 as m,a6 as n}from"./index-761b4989.js";function p(e){return async a=>{s.delete(`${o.CHIUSURE_FISCALI}/${e}`).then(r=>{a(m(e))}).catch(r=>{a(n(r.message))})}}export{p as r};