import{h as b,k as B,s as W,d as u,_ as i,r as C,i as M,m as P,e as R,j as U,f as _,g as j}from"./index-7862eb00.js";function N(t){return b("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:e,variant:o,classes:p}=t,s={root:["root",o,t.align!=="inherit"&&`align${u(a)}`,r&&"gutterBottom",n&&"noWrap",e&&"paragraph"]};return j(s,N,p)},k=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${u(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>w[t]||t,A=C.forwardRef(function(a,r){const n=M({props:a,name:"MuiTypography"}),e=z(n.color),o=P(i({},n,{color:e})),{align:p="inherit",className:s,component:h,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:g="body1",variantMapping:c=y}=o,v=R(o,$),m=i({},o,{align:p,color:e,className:s,component:h,gutterBottom:d,noWrap:f,paragraph:l,variant:g,variantMapping:c}),x=h||(l?"p":c[g]||y[g])||"span",T=L(m);return U(k,i({as:x,ref:r,ownerState:m,className:_(T.root,s)},v))}),E=A;export{E as T};
