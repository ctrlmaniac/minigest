import{a as r,E as o}from"./index-cc2949c7.js";import{aW as n,aX as g,aY as i}from"./index-8a79851f.js";function E(s){return async a=>{a(n()),r.get(`${o.CHIUSURE_FISCALI}/${s}`).then(e=>{a(g(e.data))}).catch(e=>{let t="Errore";e.response?t=e.response.data:t="Errore",a(i(t))})}}export{E as g};