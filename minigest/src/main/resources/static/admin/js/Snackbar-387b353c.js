import{r as a,j as k,a9 as ie,_ as p,d as _,b as z,e as ce,a as T}from"./index-90347663.js";import{g as I,d as G,s as M,a as X,b as K}from"./Box-50540c80.js";import{a as le,d as A,o as P,P as ue,u as de}from"./List-2ba894ac.js";import{G as fe}from"./hooks-5570b2fb.js";function W(e){return e.substring(2).toLowerCase()}function pe(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function me(e){const{children:n,disableReactTree:r=!1,mouseEvent:s="onClick",onClickAway:g,touchEvent:f="onTouchEnd"}=e,b=a.useRef(!1),l=a.useRef(null),v=a.useRef(!1),i=a.useRef(!1);a.useEffect(()=>(setTimeout(()=>{v.current=!0},0),()=>{v.current=!1}),[]);const C=le(n.ref,l),m=A(o=>{const c=i.current;i.current=!1;const d=P(l.current);if(!v.current||!l.current||"clientX"in o&&pe(o,d))return;if(b.current){b.current=!1;return}let u;o.composedPath?u=o.composedPath().indexOf(l.current)>-1:u=!d.documentElement.contains(o.target)||l.current.contains(o.target),!u&&(r||!c)&&g(o)}),y=o=>c=>{i.current=!0;const d=n.props[o];d&&d(c)},w={ref:C};return f!==!1&&(w[f]=y(f)),a.useEffect(()=>{if(f!==!1){const o=W(f),c=P(l.current),d=()=>{b.current=!0};return c.addEventListener(o,m),c.addEventListener("touchmove",d),()=>{c.removeEventListener(o,m),c.removeEventListener("touchmove",d)}}},[m,f]),s!==!1&&(w[s]=y(s)),a.useEffect(()=>{if(s!==!1){const o=W(s),c=P(l.current);return c.addEventListener(o,m),()=>{c.removeEventListener(o,m)}}},[m,s]),k(a.Fragment,{children:a.cloneElement(n,w)})}function he(e){return I("MuiSnackbarContent",e)}G("MuiSnackbarContent",["root","message","action"]);const ge=["action","className","message","role"],be=e=>{const{classes:n}=e;return K({root:["root"],action:["action"],message:["message"]},he,n)},ve=M(ue,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,r=ie(e.palette.background.default,n);return p({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Ce=M("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),ke=M("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ee=a.forwardRef(function(n,r){const s=_({props:n,name:"MuiSnackbarContent"}),{action:g,className:f,message:b,role:l="alert"}=s,v=z(s,ge),i=s,C=be(i);return ce(ve,p({role:l,square:!0,elevation:6,className:X(C.root,f),ownerState:i,ref:r},v,{children:[k(Ce,{className:C.message,ownerState:i,children:b}),g?k(ke,{className:C.action,ownerState:i,children:g}):null]}))}),we=Ee;function xe(e){return I("MuiSnackbar",e)}G("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ye=["onEnter","onExited"],Se=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Re=e=>{const{classes:n,anchorOrigin:r}=e,s={root:["root",`anchorOrigin${T(r.vertical)}${T(r.horizontal)}`]};return K(s,xe,n)},Le=M("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`anchorOrigin${T(r.anchorOrigin.vertical)}${T(r.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const r={left:"50%",right:"auto",transform:"translateX(-50%)"};return p({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:p({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&r,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Te=a.forwardRef(function(n,r){const s=_({props:n,name:"MuiSnackbar"}),g=de(),f={enter:g.transitions.duration.enteringScreen,exit:g.transitions.duration.leavingScreen},{action:b,anchorOrigin:{vertical:l,horizontal:v}={vertical:"bottom",horizontal:"left"},autoHideDuration:i=null,children:C,className:m,ClickAwayListenerProps:y,ContentProps:w,disableWindowBlurListener:o=!1,message:c,onBlur:d,onClose:u,onFocus:D,onMouseEnter:B,onMouseLeave:H,open:h,resumeHideDuration:O,TransitionComponent:q=fe,transitionDuration:Y=f,TransitionProps:{onEnter:N,onExited:$}={}}=s,J=z(s.TransitionProps,ye),Q=z(s,Se),j=p({},s,{anchorOrigin:{vertical:l,horizontal:v}}),V=Re(j),S=a.useRef(),[F,U]=a.useState(!0),Z=A((...t)=>{u&&u(...t)}),R=A(t=>{!u||t==null||(clearTimeout(S.current),S.current=setTimeout(()=>{Z(null,"timeout")},t))});a.useEffect(()=>(h&&R(i),()=>{clearTimeout(S.current)}),[h,i,R]);const L=()=>{clearTimeout(S.current)},x=a.useCallback(()=>{i!=null&&R(O??i*.5)},[i,O,R]),ee=t=>{D&&D(t),L()},ne=t=>{B&&B(t),L()},te=t=>{d&&d(t),x()},oe=t=>{H&&H(t),x()},re=t=>{u&&u(t,"clickaway")},se=t=>{U(!0),$&&$(t)},ae=(t,E)=>{U(!1),N&&N(t,E)};return a.useEffect(()=>{if(!o&&h)return window.addEventListener("focus",x),window.addEventListener("blur",L),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",L)}},[o,x,h]),a.useEffect(()=>{if(!h)return;function t(E){E.defaultPrevented||(E.key==="Escape"||E.key==="Esc")&&u&&u(E,"escapeKeyDown")}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[F,h,u]),!h&&F?null:k(me,p({onClickAway:re},y,{children:k(Le,p({className:X(V.root,m),onBlur:te,onFocus:ee,onMouseEnter:ne,onMouseLeave:oe,ownerState:j,ref:r,role:"presentation"},Q,{children:k(q,p({appear:!0,in:h,timeout:Y,direction:l==="top"?"down":"up",onEnter:ae,onExited:se},J,{children:C||k(we,p({message:c,action:b},w))}))}))}))}),Ae=Te;export{Ae as S};