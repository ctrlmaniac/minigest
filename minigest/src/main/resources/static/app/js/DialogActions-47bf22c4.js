import{_ as a,r as g,e as p,b as d,j as u}from"./index-8a79851f.js";import{g as f,d as m,s as D,a as x,b as A}from"./hooks-ce677624.js";function b(s){return f("MuiDialogActions",s)}m("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],y=s=>{const{classes:o,disableSpacing:t}=s;return A({root:["root",!t&&"spacing"]},b,o)},C=D("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),j=g.forwardRef(function(o,t){const e=p({props:o,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=e,r=d(e,S),i=a({},e,{disableSpacing:c}),l=y(i);return u(C,a({className:x(l.root,n),ownerState:i,ref:t},r))}),R=j;export{R as D};