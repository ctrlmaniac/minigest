import{E as e,a as i}from"./index-c44c1a12.js";import{$ as n,a0 as o}from"./index-222da0ba.js";function c(){return async a=>{let s=`${e.SCADENZARIO}`;i.get(s).then(t=>{a(n(t.data))}).catch(t=>{a(o(t.message))})}}export{c as l};