import{a as o,E as i}from"./index-450aab6b.js";import{as as c}from"./index-c637eda0.js";function l(e="IT",t=""){return async n=>{o.get(`${i.AZIENDE}/exists?nazione=${e}&codice=${t}`).then(s=>{n(c(s.data))}).catch(s=>{let a=!1;s.response?a=s.response.data:a=!1,console.log(a)})}}export{l as a};
