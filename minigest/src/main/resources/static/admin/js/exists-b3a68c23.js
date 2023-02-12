import{r as b,_ as x,d as T,b as I,j as N,ao as S,ap as k,aq as K}from"./index-8eaaa921.js";import{g as O,d as _,s as D,f as L,a as U,b as Z}from"./Box-09e48a02.js";import{u as A}from"./List-d4d3ded6.js";import{a as F,E as q}from"./hooks-ee0b5995.js";const H=b.createContext(),z=H;function J(e){return O("MuiGrid",e)}const Q=[0,1,2,3,4,5,6,7,8,9,10],X=["column-reverse","column","row-reverse","row"],Y=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=_("MuiGrid",["root","container","item","zeroMinWidth",...Q.map(e=>`spacing-xs-${e}`),...X.map(e=>`direction-xs-${e}`),...Y.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),ee=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function ne({theme:e,ownerState:n}){let s;return e.breakpoints.keys.reduce((r,t)=>{let i={};if(n[t]&&(s=n[t]),!s)return r;if(s===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=S({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[t]:a;if(u==null)return r;const l=`${Math.round(s/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const o=e.spacing(n.columnSpacing);if(o!=="0px"){const p=`calc(${l} + ${m(o)})`;c={flexBasis:p,maxWidth:p}}}i=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[t]===0?Object.assign(r,i):r[e.breakpoints.up(t)]=i,r},{})}function te({theme:e,ownerState:n}){const s=S({values:n.direction,breakpoints:e.breakpoints.values});return k({theme:e},s,r=>{const t={flexDirection:r};return r.indexOf("column")===0&&(t[`& > .${$.item}`]={maxWidth:"none"}),t})}function E({breakpoints:e,values:n}){let s="";Object.keys(n).forEach(t=>{s===""&&n[t]!==0&&(s=t)});const r=Object.keys(e).sort((t,i)=>e[t]-e[i]);return r.slice(0,r.indexOf(s))}function re({theme:e,ownerState:n}){const{container:s,rowSpacing:r}=n;let t={};if(s&&r!==0){const i=S({values:r,breakpoints:e.breakpoints.values});let a;typeof i=="object"&&(a=E({breakpoints:e.breakpoints.values,values:i})),t=k({theme:e},i,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{marginTop:`-${m(o)}`,[`& > .${$.item}`]:{paddingTop:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return t}function se({theme:e,ownerState:n}){const{container:s,columnSpacing:r}=n;let t={};if(s&&r!==0){const i=S({values:r,breakpoints:e.breakpoints.values});let a;typeof i=="object"&&(a=E({breakpoints:e.breakpoints.values,values:i})),t=k({theme:e},i,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{width:`calc(100% + ${m(o)})`,marginLeft:`-${m(o)}`,[`& > .${$.item}`]:{paddingLeft:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return t}function ie(e,n,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const r=[];return n.forEach(t=>{const i=e[t];Number(i)>0&&r.push(s[`spacing-${t}-${String(i)}`])}),r}const oe=D("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e,{container:r,direction:t,item:i,spacing:a,wrap:u,zeroMinWidth:l,breakpoints:c}=s;let o=[];r&&(o=ie(a,c,n));const p=[];return c.forEach(d=>{const f=s[d];f&&p.push(n[`grid-${d}-${String(f)}`])}),[n.root,r&&n.container,i&&n.item,l&&n.zeroMinWidth,...o,t!=="row"&&n[`direction-xs-${String(t)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),te,re,se,ne);function ae(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return n.forEach(r=>{const t=e[r];if(Number(t)>0){const i=`spacing-${r}-${String(t)}`;s.push(i)}}),s}const ce=e=>{const{classes:n,container:s,direction:r,item:t,spacing:i,wrap:a,zeroMinWidth:u,breakpoints:l}=e;let c=[];s&&(c=ae(i,l));const o=[];l.forEach(d=>{const f=e[d];f&&o.push(`grid-${d}-${String(f)}`)});const p={root:["root",s&&"container",t&&"item",u&&"zeroMinWidth",...c,r!=="row"&&`direction-xs-${String(r)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...o]};return Z(p,J,n)},ue=b.forwardRef(function(n,s){const r=T({props:n,name:"MuiGrid"}),{breakpoints:t}=A(),i=L(r),{className:a,columns:u,columnSpacing:l,component:c="div",container:o=!1,direction:p="row",item:d=!1,rowSpacing:f,spacing:w=0,wrap:B="wrap",zeroMinWidth:M=!1}=i,v=I(i,ee),V=f||w,P=l||w,j=b.useContext(z),G=o?u||12:j,y={},W=x({},v);t.keys.forEach(h=>{v[h]!=null&&(y[h]=v[h],delete W[h])});const C=x({},i,{columns:G,container:o,direction:p,item:d,rowSpacing:V,columnSpacing:P,wrap:B,zeroMinWidth:M,spacing:w},y,{breakpoints:t.keys}),R=ce(C);return N(z.Provider,{value:G,children:N(oe,x({ownerState:C,className:U(R.root,a),as:c,ref:s},W))})}),me=ue;function ge(e="IT",n=""){return async s=>{F.get(`${q.AZIENDE}/exists?nazione=${e}&codice=${n}`).then(r=>{s(K(r.data))}).catch(r=>{let t=!1;r.response?t=r.response.data:t=!1,console.log(t)})}}export{me as G,ge as a};
