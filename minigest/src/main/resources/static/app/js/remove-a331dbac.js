import{a as s,E as t}from"./index-2f79fbb1.js";import{aN as m,aO as n,aP as v,aQ as E}from"./index-e10d2f7b.js";function l(o){return async e=>{e(m()),s.delete(`${t.CHIUSURE_FISCALI}/${o}`).then(r=>{e(n(r.data)),e(v(o))}).catch(r=>{let a="Errore";r.response?a=r.response.data:a="Errore",e(E(a))})}}export{l as r};