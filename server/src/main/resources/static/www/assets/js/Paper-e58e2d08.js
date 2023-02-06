import{f as h,r as S,g as R,_ as w,b as d,j as q,a as y,y as b}from"./index-438df3f0.js";import{g as C,a as P,b as M,c as N,d as k}from"./styled-64622049.js";const A=o=>{let e;return o<1?e=5.11916*o**2:e=4.5*Math.log(o+1)+2,(e/100).toFixed(2)},z=A;function B(o){return C("MuiSvgIcon",o)}P("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const T=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],j=o=>{const{color:e,fontSize:t,classes:a}=o,n={root:["root",e!=="inherit"&&`color${h(e)}`,`fontSize${h(t)}`]};return k(n,B,a)},V=M("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${h(t.color)}`],e[`fontSize${h(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,a,n,i,s,c,v,u,r,l,p,m,f,g,$,x,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(a=t.create)==null?void 0:a.call(t,"fill",{duration:(n=o.transitions)==null||(i=n.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((s=o.typography)==null||(c=s.pxToRem)==null?void 0:c.call(s,20))||"1.25rem",medium:((v=o.typography)==null||(u=v.pxToRem)==null?void 0:u.call(v,24))||"1.5rem",large:((r=o.typography)==null||(l=r.pxToRem)==null?void 0:l.call(r,35))||"2.1875rem"}[e.fontSize],color:(p=(m=(o.vars||o).palette)==null||(f=m[e.color])==null?void 0:f.main)!=null?p:{action:(g=(o.vars||o).palette)==null||($=g.action)==null?void 0:$.active,disabled:(x=(o.vars||o).palette)==null||(_=x.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),U=S.forwardRef(function(e,t){const a=R({props:e,name:"MuiSvgIcon"}),{children:n,className:i,color:s="inherit",component:c="svg",fontSize:v="medium",htmlColor:u,inheritViewBox:r=!1,titleAccess:l,viewBox:p="0 0 24 24"}=a,m=w(a,T),f=d({},a,{color:s,component:c,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:r,viewBox:p}),g={};r||(g.viewBox=p);const $=j(f);return q(V,d({as:c,className:N($.root,i),focusable:"false",color:u,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t},g,m,{ownerState:f,children:[n,l?y("title",{children:l}):null]}))});U.muiName="SvgIcon";const I=U;function H(o,e){function t(a,n){return y(I,d({"data-testid":`${e}Icon`,ref:n},a,{children:o}))}return t.muiName=I.muiName,S.memo(S.forwardRef(t))}function E(o){return C("MuiPaper",o)}P("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const F=["className","component","elevation","square","variant"],L=o=>{const{square:e,elevation:t,variant:a,classes:n}=o,i={root:["root",a,!e&&"rounded",a==="elevation"&&`elevation${t}`]};return k(i,E,n)},O=M("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],!t.square&&e.rounded,t.variant==="elevation"&&e[`elevation${t.elevation}`]]}})(({theme:o,ownerState:e})=>{var t;return d({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!e.square&&{borderRadius:o.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},e.variant==="elevation"&&d({boxShadow:(o.vars||o).shadows[e.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${b("#fff",z(e.elevation))}, ${b("#fff",z(e.elevation))})`},o.vars&&{backgroundImage:(t=o.vars.overlays)==null?void 0:t[e.elevation]}))}),D=S.forwardRef(function(e,t){const a=R({props:e,name:"MuiPaper"}),{className:n,component:i="div",elevation:s=1,square:c=!1,variant:v="elevation"}=a,u=w(a,F),r=d({},a,{component:i,elevation:s,square:c,variant:v}),l=L(r);return y(O,d({as:i,ownerState:r,className:N(l.root,n),ref:t},u))}),J=D;export{J as P,H as c};