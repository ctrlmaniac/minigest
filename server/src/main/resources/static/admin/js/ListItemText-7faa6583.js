import{_ as c,p as b,r as m,u as h,a as N,j as I,b as G}from"./index-7ea7d510.js";import{a as P,g as M,s as F,r as S,c as B,b as V}from"./styled-fd732b21.js";import{L as O}from"./List-57e10bd2.js";import{B as U}from"./IconButton-e7225337.js";import{b as j,u as _}from"./TransitionGroupContext-a30ccc2c.js";import{T as x}from"./Typography-c6dbe1eb.js";function E(t){return M("MuiListItemButton",t)}const W=P("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),g=W,D=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],z=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},A=t=>{const{alignItems:e,classes:s,dense:o,disabled:r,disableGutters:d,divider:i,selected:y}=t,n=V({root:["root",o&&"dense",!d&&"gutters",i&&"divider",r&&"disabled",e==="flex-start"&&"alignItemsFlexStart",y&&"selected"]},E,s);return c({},s,n)},q=F(U,{shouldForwardProp:t=>S(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:z})(({theme:t,ownerState:e})=>c({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${g.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${g.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${g.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),H=m.forwardRef(function(e,s){const o=h({props:e,name:"MuiListItemButton"}),{alignItems:r="center",autoFocus:d=!1,component:i="div",children:y,dense:u=!1,disableGutters:n=!1,divider:C=!1,focusVisibleClassName:L,selected:T=!1,className:v}=o,a=N(o,D),l=m.useContext(O),f=m.useMemo(()=>({dense:u||l.dense||!1,alignItems:r,disableGutters:n}),[r,l.dense,u,n]),p=m.useRef(null);j(()=>{d&&p.current&&p.current.focus()},[d]);const R=c({},o,{alignItems:r,dense:f.dense,disableGutters:n,divider:C,selected:T}),$=A(R),w=_(p,s);return I(O.Provider,{value:f,children:I(q,c({ref:w,href:a.href||a.to,component:(a.href||a.to)&&i==="div"?"a":i,focusVisibleClassName:B($.focusVisible,L),ownerState:R,className:B($.root,v)},a,{classes:$,children:y}))})}),it=H;function J(t){return M("MuiListItemText",t)}const K=P("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=K,Q=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],X=t=>{const{classes:e,inset:s,primary:o,secondary:r,dense:d}=t;return V({root:["root",s&&"inset",d&&"dense",o&&r&&"multiline"],primary:["primary"],secondary:["secondary"]},J,e)},Y=F("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${k.primary}`]:e.primary},{[`& .${k.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>c({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Z=m.forwardRef(function(e,s){const o=h({props:e,name:"MuiListItemText"}),{children:r,className:d,disableTypography:i=!1,inset:y=!1,primary:u,primaryTypographyProps:n,secondary:C,secondaryTypographyProps:L}=o,T=N(o,Q),{dense:v}=m.useContext(O);let a=u??r,l=C;const f=c({},o,{disableTypography:i,inset:y,primary:!!a,secondary:!!l,dense:v}),p=X(f);return a!=null&&a.type!==x&&!i&&(a=I(x,c({variant:v?"body2":"body1",className:p.primary,component:n!=null&&n.variant?void 0:"span",display:"block"},n,{children:a}))),l!=null&&l.type!==x&&!i&&(l=I(x,c({variant:"body2",className:p.secondary,color:"text.secondary",display:"block"},L,{children:l}))),G(Y,c({className:B(p.root,d),ownerState:f,ref:s},T,{children:[a,l]}))}),nt=Z;export{it as L,nt as a};
