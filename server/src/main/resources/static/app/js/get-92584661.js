import{a as s,E as n}from"./index-c44c1a12.js";import{aA as o,aB as r}from"./index-222da0ba.js";function i(e){return async t=>{s.get(`${n.CHIUSURE_FISCALI}/${e}`).then(a=>{t(o(a.data))}).catch(a=>{t(r(a.message))})}}export{i as g};
