import{e as W,c as k,b as v,g as $,s as G}from"./Paper-96727556.js";import{_ as c,z as R,c as l,A as S,r as y,a as T,j as M,u as P}from"./index-222da0ba.js";const j=W(),L=j,N=["className","component","disableGutters","fixed","maxWidth","classes"],_=R(),z=L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),U=a=>S({props:a,name:"MuiContainer",defaultTheme:_}),w=(a,e)=>{const o=i=>$(e,i),{classes:u,fixed:p,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,p&&"fixed",x&&"disableGutters"]};return v(s,o,u)};function A(a={}){const{createStyledComponent:e=z,useThemeProps:o=U,componentName:u="MuiContainer"}=a,p=e(({theme:t,ownerState:s})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>c({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return y.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=T(n,N),m=c({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=w(m,u);return M(p,c({as:r,ownerState:m,className:k(h.root,d),ref:i},g))})}const D=A({createStyledComponent:G("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>P({props:a,name:"MuiContainer"})}),q=D;export{q as C};