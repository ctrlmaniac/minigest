import{a as y,_ as i,l as T,m as B,c as f,r as C,u as W,j as _}from"./index-f5e212dc.js";import{g as M,a as $,s as j,c as R,b as U}from"./styled-f0c7c2b7.js";const A=["sx"],N=a=>{var t,r;const e={systemProps:{},otherProps:{}},n=(t=a==null||(r=a.theme)==null?void 0:r.unstable_sxConfig)!=null?t:T;return Object.keys(a).forEach(o=>{n[o]?e.systemProps[o]=a[o]:e.otherProps[o]=a[o]}),e};function O(a){const{sx:t}=a,r=y(a,A),{systemProps:e,otherProps:n}=N(r);let o;return Array.isArray(t)?o=[e,...t]:typeof t=="function"?o=(...p)=>{const s=t(...p);return B(s)?i({},e,s):e}:o=i({},e,t),i({},n,{sx:o})}function E(a){return M("MuiTypography",a)}$("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],S=a=>{const{align:t,gutterBottom:r,noWrap:e,paragraph:n,variant:o,classes:p}=a,s={root:["root",o,a.align!=="inherit"&&`align${f(t)}`,r&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return U(s,E,p)},k=j("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${f(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>i({margin:0},t.variant&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=a=>w[a]||a,D=C.forwardRef(function(t,r){const e=W({props:t,name:"MuiTypography"}),n=z(e.color),o=O(i({},e,{color:n})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:x=!1,paragraph:c=!1,variant:l="body1",variantMapping:g=m}=o,v=y(o,L),u=i({},o,{align:p,color:n,className:s,component:h,gutterBottom:d,noWrap:x,paragraph:c,variant:l,variantMapping:g}),b=h||(c?"p":g[l]||m[l])||"span",P=S(u);return _(k,i({as:b,ref:r,ownerState:u,className:R(P.root,s)},v))}),q=D;export{q as T,O as e};