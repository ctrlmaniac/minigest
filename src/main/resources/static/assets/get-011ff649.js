import{a as s,E as n}from"./index-30e337fd.js";import{aS as o,aT as r}from"./index-761b4989.js";function i(e){return async t=>{s.get(`${n.FATTURE}/${e}`).then(a=>{t(o(a.data))}).catch(a=>{t(r(a.message))})}}export{i as g};