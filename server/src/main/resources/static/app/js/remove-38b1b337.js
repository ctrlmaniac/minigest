import{a as s,E as o}from"./index-c44c1a12.js";import{a3 as m,a4 as n}from"./index-222da0ba.js";function p(e){return async a=>{s.delete(`${o.CHIUSURE_FISCALI}/${e}`).then(r=>{a(m(e))}).catch(r=>{a(n(r.message))})}}export{p as r};