import{r as i,h as m,k as L,s as x,_ as d,i as f,e as C,j as P,a as v,f as M,g as j}from"./index-761b4989.js";const R=i.createContext({}),U=R;function _(s){return m("MuiList",s)}L("MuiList",["root","padding","dense","subheader"]);const w=["children","className","component","dense","disablePadding","subheader"],y=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return j({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},_,e)},N=x("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>d({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),S=i.forwardRef(function(e,t){const o=f({props:e,name:"MuiList"}),{children:a,className:r,component:c="ul",dense:n=!1,disablePadding:u=!1,subheader:p}=o,g=C(o,w),h=i.useMemo(()=>({dense:n}),[n]),l=d({},o,{component:c,dense:n,disablePadding:u}),b=y(l);return P(U.Provider,{value:h,children:v(N,d({as:c,className:M(b.root,r),ref:t,ownerState:l},g,{children:[p,a]}))})}),$=S;export{$ as L,U as a};