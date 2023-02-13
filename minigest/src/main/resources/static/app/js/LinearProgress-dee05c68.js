import{G as h,a as t,_ as s,ae as C,r as q,e as M,b as z,d as D,j as g,a4 as T,a3 as j}from"./index-e10d2f7b.js";import{g as U,d as O,s as b,a as A,b as K}from"./hooks-9ce743d9.js";import{u as w}from"./Grow-b1a229d9.js";function X(r){return U("MuiLinearProgress",r)}O("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const E=["className","color","value","valueBuffer","variant"];let l=r=>r,x,L,k,B,I,_;const v=4,G=h(x||(x=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=h(L||(L=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),W=h(k||(k=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),F=r=>{const{classes:a,variant:e,color:o}=r,m={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return K(m,X,a)},y=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?T(r.palette[a].main,.62):j(r.palette[a].main,.5),H=b("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:y(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),J=b("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=y(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},C(B||(B=l`
    animation: ${0} 3s infinite linear;
  `),W)),Q=b("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${v}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),G)),V=b("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:y(a,r.color),transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(_||(_=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S)),Y=q.forwardRef(function(a,e){const o=M({props:a,name:"MuiLinearProgress"}),{className:m,color:N="primary",value:p,valueBuffer:P,variant:i="indeterminate"}=o,R=z(o,E),c=s({},o,{color:N,variant:i}),f=F(c),$=w(),u={},d={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&p!==void 0){u["aria-valuenow"]=Math.round(p),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let n=p-100;$.direction==="rtl"&&(n=-n),d.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&P!==void 0){let n=(P||0)-100;$.direction==="rtl"&&(n=-n),d.bar2.transform=`translateX(${n}%)`}return D(H,s({className:A(f.root,m),ownerState:c,role:"progressbar"},u,{ref:e},R,{children:[i==="buffer"?g(J,{className:f.dashed,ownerState:c}):null,g(Q,{className:f.bar1,ownerState:c,style:d.bar1}),i==="determinate"?null:g(V,{className:f.bar2,ownerState:c,style:d.bar2})]}))}),er=Y;export{er as L};
