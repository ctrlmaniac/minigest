import{a as s,E as n}from"./index-e540bbee.js";import{aE as o,aF as r}from"./index-f45c03a1.js";function i(e){return async t=>{s.get(`${n.CHIUSURE_FISCALI}/${e}`).then(a=>{t(o(a.data))}).catch(a=>{t(r(a.message))})}}export{i as g};
