import{r as d,_ as c,u as x,a as k,j as o,c as v,A as q,b as T,B as K,C as Q,D as V,E as X,G as Y,e as Z,R as ee,H as te,M as ae,d as _,F as oe,I as se}from"./index-f5e212dc.js";import{E as j,a as L,u as ne,b as re}from"./hooks-f59dde64.js";import{B}from"./Box-29b6b5b0.js";import{T as le}from"./Typography-1ac95247.js";import{P as ie}from"./Paper-02d8886c.js";import{g as R,a as $,s as M,c as w,b as z}from"./styled-f0c7c2b7.js";import{I as D}from"./IconButton-ac0c2485.js";import{c as W}from"./createReactComponent-cbdaf1b4.js";const ce=d.createContext(),G=ce;function de(e){return R("MuiTable",e)}$("MuiTable",["root","stickyHeader"]);const pe=["className","component","padding","size","stickyHeader"],ge=e=>{const{classes:t,stickyHeader:a}=e;return z({root:["root",a&&"stickyHeader"]},de,t)},ue=M("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":c({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),O="table",be=d.forwardRef(function(t,a){const s=x({props:t,name:"MuiTable"}),{className:l,component:r=O,padding:n="normal",size:i="medium",stickyHeader:p=!1}=s,u=k(s,pe),g=c({},s,{component:r,padding:n,size:i,stickyHeader:p}),y=ge(g),H=d.useMemo(()=>({padding:n,size:i,stickyHeader:p}),[n,i,p]);return o(G.Provider,{value:H,children:o(ue,c({as:r,role:r===O?null:"table",ref:a,className:w(y.root,l),ownerState:g},u))})}),ve=be,ye=d.createContext(),N=ye;function he(e){return R("MuiTableBody",e)}$("MuiTableBody",["root"]);const fe=["className","component"],me=e=>{const{classes:t}=e;return z({root:["root"]},he,t)},Ce=M("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Te={variant:"body"},U="tbody",xe=d.forwardRef(function(t,a){const s=x({props:t,name:"MuiTableBody"}),{className:l,component:r=U}=s,n=k(s,fe),i=c({},s,{component:r}),p=me(i);return o(N.Provider,{value:Te,children:o(Ce,c({className:w(p.root,l),as:r,ref:a,role:r===U?null:"rowgroup",ownerState:i},n))})}),ke=xe;function Re(e){return R("MuiTableCell",e)}const $e=$("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Me=$e,we=["align","className","component","padding","scope","size","sortDirection","variant"],ze=e=>{const{classes:t,variant:a,align:s,padding:l,size:r,stickyHeader:n}=e,i={root:["root",a,n&&"stickyHeader",s!=="inherit"&&`align${v(s)}`,l!=="normal"&&`padding${v(l)}`,`size${v(r)}`]};return z(i,Re,t)},He=M("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${v(a.size)}`],a.padding!=="normal"&&t[`padding${v(a.padding)}`],a.align!=="inherit"&&t[`align${v(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>c({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?q(T(e.palette.divider,1),.88):K(T(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Me.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Be=d.forwardRef(function(t,a){const s=x({props:t,name:"MuiTableCell"}),{align:l="inherit",className:r,component:n,padding:i,scope:p,size:u,sortDirection:g,variant:y}=s,H=k(s,we),b=d.useContext(G),f=d.useContext(N),P=f&&f.variant==="head";let h;n?h=n:h=P?"th":"td";let m=p;h==="td"?m=void 0:!m&&P&&(m="col");const I=y||f&&f.variant,A=c({},s,{align:l,component:h,padding:i||(b&&b.padding?b.padding:"normal"),size:u||(b&&b.size?b.size:"medium"),sortDirection:g,stickyHeader:I==="head"&&b&&b.stickyHeader,variant:I}),J=ze(A);let S=null;return g&&(S=g==="asc"?"ascending":"descending"),o(He,c({as:h,ref:a,className:w(J.root,r),"aria-sort":S,scope:m,ownerState:A},H))}),C=Be;function Ne(e){return R("MuiTableRow",e)}const Pe=$("MuiTableRow",["root","selected","hover","head","footer"]),F=Pe,Ie=["className","component","hover","selected"],Ae=e=>{const{classes:t,selected:a,hover:s,head:l,footer:r}=e;return z({root:["root",a&&"selected",s&&"hover",l&&"head",r&&"footer"]},Ne,t)},Se=M("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${F.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${F.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:T(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),E="tr",_e=d.forwardRef(function(t,a){const s=x({props:t,name:"MuiTableRow"}),{className:l,component:r=E,hover:n=!1,selected:i=!1}=s,p=k(s,Ie),u=d.useContext(N),g=c({},s,{component:r,hover:n,selected:i,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),y=Ae(g);return o(Se,c({as:r,ref:a,className:w(y.root,l),role:r===E?null:"row",ownerState:g},p))}),De=_e;var Oe=W("edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]),Ue=W("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]);function Fe(){return async e=>{let t=`${j.TIPO_DOC_FISC}`;L.get(t).then(a=>{e(Q(a.data))}).catch(a=>{e(V(a.message))})}}function Ee(e){return async t=>{L.delete(`${j.TIPO_DOC_FISC}/${e}`).then(a=>{t(X(e))}).catch(a=>{t(Y(a.message))})}}const Ve=()=>{const e=ne(),t=Z(),{list:a,listing:s,listError:l}=re(n=>n.tipiDocFisc);ee.useEffect(()=>{e(Fe())},[]);const r=n=>{e(Ee(n))};return s?o(te,{}):l?o(ae,{message:l}):_(oe,{children:[o(B,{mb:3,children:o(le,{variant:"h3",children:"Tipi di Documenti Fiscali"})}),o(B,{children:o(ie,{children:o(B,{p:2,children:o(ve,{children:o(ke,{children:a==null?void 0:a.map(n=>_(De,{children:[o(C,{children:n.codice}),o(C,{children:n.descrizione}),o(C,{sx:{width:50},align:"center",children:o(D,{color:"warning",onClick:()=>t("/docfisc/tipi/modifica/"+n.id),children:o(Oe,{})})}),o(C,{sx:{width:50},align:"center",children:o(D,{color:"error",onClick:()=>r(n.id),children:o(Ue,{})})})]},n.id))})})})})}),o(se,{href:"tipi/aggiungi"})]})};export{Ve as default};