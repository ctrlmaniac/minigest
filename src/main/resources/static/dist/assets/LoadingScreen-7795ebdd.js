import{z as D,b as l,_ as o,X as _,r as N,e as z,d as U,j as i}from"./index-f45c03a1.js";import{S as j}from"./Splash-c0a4ca1f.js";import{g as I,d as L,s as v,a as E,b as F}from"./Box-3112786e.js";function K(r){return I("MuiCircularProgress",r)}L("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let d=r=>r,S,P,b,$;const t=44,B=D(S||(S=d`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=D(P||(P=d`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),T=r=>{const{classes:e,variant:s,color:a,disableShrink:u}=r,m={root:["root",s,`color${l(a)}`],svg:["svg"],circle:["circle",`circle${l(s)}`,u&&"circleDisableShrink"]};return F(m,K,e)},V=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${l(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(b||(b=d`
      animation: ${0} 1.4s linear infinite;
    `),B)),X=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${l(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=d`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),q=N.forwardRef(function(e,s){const a=z({props:e,name:"MuiCircularProgress"}),{className:u,color:m="primary",disableShrink:M=!1,size:h=40,style:R,thickness:n=3.6,value:p=0,variant:k="indeterminate"}=a,w=U(a,W),c=o({},a,{color:m,disableShrink:M,size:h,thickness:n,value:p,variant:k}),f=T(c),g={},x={},y={};if(k==="determinate"){const C=2*Math.PI*((t-n)/2);g.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(p),g.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return i(V,o({className:E(f.root,u),style:o({width:h,height:h},x,R),ownerState:c,ref:s,role:"progressbar"},y,w,{children:i(X,{className:f.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:i(Z,{className:f.circle,style:g,ownerState:c,cx:t,cy:t,r:(t-n)/2,fill:"none",strokeWidth:n})})}))}),A=q,Q=()=>i(j,{children:i(A,{})});export{Q as L};
