import{r as v,a as u,_ as r,x as O,au as uo,d as F,b as N,j as n,e as S,av as go,aw as vo,ax as bo,ay as xo,az as ho,aA as fo,aB as mo,aC as Co,aD as yo,aE as $o,aF as zo,aG as ko,R as W,a2 as Do,E as K,a3 as So,F as Io,aa as To,aH as Q}from"./index-8eaaa921.js";import{a as U,E as V,u as Wo,b as Mo,A as Ro}from"./hooks-ee0b5995.js";import{d as M,g as A,s as b,r as Bo,a as y,b as L,B as X,T as Eo}from"./Box-09e48a02.js";import{B as Po,P as J,u as Fo,I as Z}from"./List-d4d3ded6.js";import{d as No,T as Ao,b as oo,c as C,a as Lo}from"./TableRow-d685add3.js";import{c as ro}from"./createReactComponent-fc667192.js";import{B as wo,M as Oo,F as Ho}from"./Modal-a4b169cd.js";import{u as Uo,T as ao}from"./TextField-08f5c149.js";import{L as Vo}from"./LinearProgress-296611fc.js";import{S as _o}from"./Snackbar-9450f231.js";function jo(o){return A("MuiButton",o)}const Yo=M("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),H=Yo,Go=v.createContext({}),Ko=Go,Xo=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],qo=o=>{const{color:a,disableElevation:e,fullWidth:i,size:t,variant:l,classes:d}=o,s={root:["root",l,`${l}${u(a)}`,`size${u(t)}`,`${l}Size${u(t)}`,a==="inherit"&&"colorInherit",e&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${u(t)}`],endIcon:["endIcon",`iconSize${u(t)}`]},p=L(s,jo,d);return r({},d,p)},to=o=>r({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Jo=b(Po,{shouldForwardProp:o=>Bo(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,a[e.variant],a[`${e.variant}${u(e.color)}`],a[`size${u(e.size)}`],a[`${e.variant}Size${u(e.size)}`],e.color==="inherit"&&a.colorInherit,e.disableElevation&&a.disableElevation,e.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var e,i;return r({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:O(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:O(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:O(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:(o.vars||o).palette.grey.A100,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${H.focusVisible}`]:r({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${H.disabled}`]:r({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${O(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(e=(i=o.palette).getContrastText)==null?void 0:e.call(i,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${H.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${H.disabled}`]:{boxShadow:"none"}}),Qo=b("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.startIcon,a[`iconSize${u(e.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},to(o))),Zo=b("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.endIcon,a[`iconSize${u(e.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},to(o))),oa=v.forwardRef(function(a,e){const i=v.useContext(Ko),t=uo(i,a),l=F({props:t,name:"MuiButton"}),{children:d,color:s="primary",component:p="button",className:x,disabled:f=!1,disableElevation:R=!1,disableFocusRipple:$=!1,endIcon:z,focusVisibleClassName:B,fullWidth:k=!1,size:I="medium",startIcon:m,type:h,variant:E="text"}=l,T=N(l,Xo),c=r({},l,{color:s,component:p,disabled:f,disableElevation:R,disableFocusRipple:$,fullWidth:k,size:I,type:h,variant:E}),g=qo(c),D=m&&n(Qo,{className:g.startIcon,ownerState:c,children:m}),_=z&&n(Zo,{className:g.endIcon,ownerState:c,children:z});return S(Jo,r({ownerState:c,className:y(i.className,g.root,x),component:p,disabled:f,focusRipple:!$,focusVisibleClassName:y(g.focusVisible,B),ref:e,type:h},T,{classes:g,children:[D,d,_]}))}),aa=oa;function ea(o){return A("MuiDialog",o)}const ia=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),q=ia,na=v.createContext({}),ra=na,ta=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],sa=b(wo,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),la=o=>{const{classes:a,scroll:e,maxWidth:i,fullWidth:t,fullScreen:l}=o,d={root:["root"],container:["container",`scroll${u(e)}`],paper:["paper",`paperScroll${u(e)}`,`paperWidth${u(String(i))}`,t&&"paperFullWidth",l&&"paperFullScreen"]};return L(d,ea,a)},ca=b(Oo,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),da=b("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${u(e.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),pa=b(J,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${u(e.scroll)}`],a[`paperWidth${u(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${q.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${q.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${q.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ua=v.forwardRef(function(a,e){const i=F({props:a,name:"MuiDialog"}),t=Fo(),l={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":s,BackdropComponent:p,BackdropProps:x,children:f,className:R,disableEscapeKeyDown:$=!1,fullScreen:z=!1,fullWidth:B=!1,maxWidth:k="sm",onBackdropClick:I,onClose:m,open:h,PaperComponent:E=J,PaperProps:T={},scroll:c="paper",TransitionComponent:g=Ho,transitionDuration:D=l,TransitionProps:_}=i,so=N(i,ta),w=r({},i,{disableEscapeKeyDown:$,fullScreen:z,fullWidth:B,maxWidth:k,scroll:c}),j=la(w),Y=v.useRef(),lo=P=>{Y.current=P.target===P.currentTarget},co=P=>{Y.current&&(Y.current=null,I&&I(P),m&&m(P,"backdropClick"))},G=Uo(s),po=v.useMemo(()=>({titleId:G}),[G]);return n(ca,r({className:y(j.root,R),closeAfterTransition:!0,components:{Backdrop:sa},componentsProps:{backdrop:r({transitionDuration:D,as:p},x)},disableEscapeKeyDown:$,onClose:m,open:h,ref:e,onClick:co,ownerState:w},so,{children:n(g,r({appear:!0,in:h,timeout:D,role:"presentation"},_,{children:n(da,{className:y(j.container),onMouseDown:lo,ownerState:w,children:n(pa,r({as:E,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":G},T,{className:y(j.paper,T.className),ownerState:w,children:n(ra.Provider,{value:po,children:f})}))})}))}))}),ga=ua;function va(o){return A("MuiDialogActions",o)}M("MuiDialogActions",["root","spacing"]);const ba=["className","disableSpacing"],xa=o=>{const{classes:a,disableSpacing:e}=o;return L({root:["root",!e&&"spacing"]},va,a)},ha=b("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,!e.disableSpacing&&a.spacing]}})(({ownerState:o})=>r({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),fa=v.forwardRef(function(a,e){const i=F({props:a,name:"MuiDialogActions"}),{className:t,disableSpacing:l=!1}=i,d=N(i,ba),s=r({},i,{disableSpacing:l}),p=xa(s);return n(ha,r({className:y(p.root,t),ownerState:s,ref:e},d))}),ma=fa;function Ca(o){return A("MuiDialogContent",o)}M("MuiDialogContent",["root","dividers"]);const ya=M("MuiDialogTitle",["root"]),$a=ya,za=["className","dividers"],ka=o=>{const{classes:a,dividers:e}=o;return L({root:["root",e&&"dividers"]},Ca,a)},Da=b("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.dividers&&a.dividers]}})(({theme:o,ownerState:a})=>r({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${$a.root} + &`]:{paddingTop:0}})),Sa=v.forwardRef(function(a,e){const i=F({props:a,name:"MuiDialogContent"}),{className:t,dividers:l=!1}=i,d=N(i,za),s=r({},i,{dividers:l}),p=ka(s);return n(Da,r({className:y(p.root,t),ownerState:s,ref:e},d))}),Ia=Sa;function Ta(o){return A("MuiTableHead",o)}M("MuiTableHead",["root"]);const Wa=["className","component"],Ma=o=>{const{classes:a}=o;return L({root:["root"]},Ta,a)},Ra=b("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(o,a)=>a.root})({display:"table-header-group"}),Ba={variant:"head"},eo="thead",Ea=v.forwardRef(function(a,e){const i=F({props:a,name:"MuiTableHead"}),{className:t,component:l=eo}=i,d=N(i,Wa),s=r({},i,{component:l}),p=Ma(s);return n(No.Provider,{value:Ba,children:n(Ra,r({as:l,className:y(p.root,t),ref:e,role:l===eo?null:"rowgroup",ownerState:s},d))})}),Pa=Ea;var io=ro("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]]),no=ro("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]);function Fa(){return async o=>{o(go()),U.get(`${V.TIPIDOCFISC}`).then(a=>{o(vo(a.data))}).catch(a=>{let e="Errore";a.response?e=a.response.data:e="Errore",o(bo(e))})}}function Na(o){return async a=>{a(xo()),U.post(`${V.TIPIDOCFISC}`,o).then(e=>{a(ho(e.data))}).catch(e=>{let i="Errore";e.response?i=e.response.data:i="Errore",a(fo(i))})}}function Aa(o,a){return async e=>{e(mo()),U.put(`${V.TIPIDOCFISC}/${o}`,a).then(i=>{e(Co(i.data))}).catch(i=>{let t="Errore";i.response?t=i.response.data:t="Errore",e(yo(t))})}}function La(o){return async a=>{a($o()),U.delete(`${V.TIPIDOCFISC}/${o}`).then(e=>{a(zo(o))}).catch(e=>{let i="Errore";e.response?i=e.response.data:i="Errore",a(ko(i))})}}const Xa=()=>{const o=Wo(),{list:a,listing:e,listError:i,response:t,posting:l,putting:d}=Mo(c=>c.tipiDocFisc);W.useEffect(()=>{o(Fa())},[]);const[s,p]=W.useState({id:void 0,codice:"",descrizione:""}),[x,f]=W.useState({codice:!0,descrizione:!0}),[R,$]=W.useState(!0);W.useEffect(()=>{$(!Object.values(x).every(c=>c===!1))},[x]);const z=c=>{const{name:g,value:D}=c.target;p({...s,[g]:D}),f({...x,[g]:D.toString().length<1})},[B,k]=W.useState(!1),I=c=>{p({...s,...c}),f({codice:!1,descrizione:!1}),k(!0)},m=()=>{p({id:void 0,codice:"",descrizione:""}),f({codice:!0,descrizione:!0})},h=()=>{k(!1),m()},E=()=>{K.isEmpty(s.id)?(o(Na(s)),l||h()):(o(Aa(s.id,s)),d||h()),setTimeout(()=>{o(Q())},1e3)},T=c=>{o(La(c)),setTimeout(()=>{o(Q())},1e3)};return e?n(Do,{}):i||K.isEmpty(a)?n(So,{message:t||"Errore di caricamento"}):S(Io,{children:[n(X,{mb:3,children:n(Eo,{variant:"h3",children:"Tipo di Doc. Fisc."})}),n(X,{children:n(J,{children:n(X,{p:2,children:S(Ao,{children:[n(Pa,{children:S(oo,{children:[n(C,{sx:{width:50},children:"Codice"}),n(C,{children:"Descrizione"}),n(C,{sx:{width:50},align:"center",children:n(io,{})}),n(C,{sx:{width:50},align:"center",children:n(no,{})})]})}),n(Lo,{children:a==null?void 0:a.map(c=>S(oo,{children:[n(C,{children:c.codice}),n(C,{children:c.descrizione}),n(C,{sx:{width:50},align:"center",children:n(Z,{color:"warning",onClick:()=>I(c),children:n(io,{})})}),n(C,{sx:{width:50},align:"center",onClick:()=>T(c.id),children:n(Z,{color:"error",children:n(no,{})})})]},c.id))})]})})})}),S(ga,{open:B,onClose:h,children:[S(Ia,{children:[n(ao,{fullWidth:!0,label:"Codice",name:"codice",value:s.codice,error:x.codice,margin:"normal",onChange:z}),n(ao,{fullWidth:!0,label:"Descrizione",name:"descrizione",value:s.descrizione,error:x.descrizione,margin:"normal",onChange:z}),(l||d)&&n(Vo,{})]}),n(ma,{children:n(aa,{fullWidth:!0,variant:"contained",disabled:R,onClick:E,children:"salva"})})]}),n(To,{onClick:()=>k(!0)}),n(_o,{open:!K.isEmpty(t),children:n(Ro,{severity:"info",children:t||"Errore"})})]})};export{Xa as default};
