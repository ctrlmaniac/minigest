import{a as e,r as u,u as f,_ as w,b as F}from"./index-d882999b.js";import{g as d,a as C,s as x,b as G,c as y}from"./hooks-15d50f7a.js";import{u as g}from"./useFormControl-55db2a8e.js";import{f as v}from"./TextField-3f0953ff.js";import{c as M}from"./createReactComponent-ffa67357.js";function h(o){return d("MuiFormGroup",o)}C("MuiFormGroup",["root","row","error"]);const R=["className","row"],P=o=>{const{classes:r,row:t,error:s}=o;return y({root:["root",t&&"row",s&&"error"]},h,r)},S=x("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),U=u.forwardRef(function(r,t){const s=f({props:r,name:"MuiFormGroup"}),{className:a,row:n=!1}=s,l=w(s,R),m=g(),i=v({props:s,muiFormControl:m,states:["error"]}),c=e({},s,{row:n,error:i.error}),p=P(c);return F(S,e({className:G(p.root,a),ownerState:c,ref:t},l))}),j=U;var D=M("circle-plus","IconCirclePlus",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l6 0",key:"svg-1"}],["path",{d:"M12 9l0 6",key:"svg-2"}]]);export{j as F,D as I};
