import{_ as t,r as u,e as f,b as w,j as d}from"./index-4508a384.js";import{g as F,d as C,s as x,a as G,b as y}from"./hooks-feb29949.js";import{u as g}from"./useFormControl-3c13f0cf.js";import{f as v}from"./TextField-0bc7661e.js";import{c as M}from"./createReactComponent-3ef021e5.js";function h(o){return F("MuiFormGroup",o)}C("MuiFormGroup",["root","row","error"]);const R=["className","row"],P=o=>{const{classes:r,row:e,error:s}=o;return y({root:["root",e&&"row",s&&"error"]},h,r)},S=x("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.root,e.row&&r.row]}})(({ownerState:o})=>t({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),U=u.forwardRef(function(r,e){const s=f({props:r,name:"MuiFormGroup"}),{className:a,row:c=!1}=s,l=w(s,R),m=g(),i=v({props:s,muiFormControl:m,states:["error"]}),n=t({},s,{row:c,error:i.error}),p=P(n);return d(S,t({className:G(p.root,a),ownerState:n,ref:e},l))}),N=U;var D=M("circle-plus","IconCirclePlus",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l6 0",key:"svg-1"}],["path",{d:"M12 9l0 6",key:"svg-2"}]]);export{N as F,D as I};
