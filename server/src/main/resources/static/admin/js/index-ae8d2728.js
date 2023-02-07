import{c as T,_ as n,r as g,u as A,a as M,j as s,b as W,d as S,e as ht,R as bt,F as xt,O as kt}from"./index-f5e212dc.js";import{B as q}from"./Box-29b6b5b0.js";import{g as w,a as N,s as D,c as $,b as O,r as it}from"./styled-f0c7c2b7.js";import{P as lt,u as ct,a as It}from"./Paper-02d8886c.js";import{B as Ct,I as Z}from"./IconButton-ac0c2485.js";import{c as X}from"./createReactComponent-cbdaf1b4.js";import{T as G}from"./Typography-1ac95247.js";import{u as dt,o as pt,T as $t,d as Bt,r as Tt,g as tt,M as Rt,L as Y,a as ot}from"./List-a91e6c3e.js";import{C as Lt}from"./Container-02ab5c9c.js";function Mt(t){return w("MuiAppBar",t)}N("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const Dt=["className","color","enableColorOnDark","position"],Pt=t=>{const{color:o,position:e,classes:r}=t,a={root:["root",`color${T(o)}`,`position${T(e)}`]};return O(a,Mt,r)},j=(t,o)=>`${t==null?void 0:t.replace(")","")}, ${o})`,Et=D(lt,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${T(e.position)}`],o[`color${T(e.color)}`]]}})(({theme:t,ownerState:o})=>{const e=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return n({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&n({},o.color==="default"&&{backgroundColor:e,color:t.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&n({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&n({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:j(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:j(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:j(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:j(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),At=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiAppBar"}),{className:a,color:d="primary",enableColorOnDark:l=!1,position:u="fixed"}=r,p=M(r,Dt),i=n({},r,{color:d,position:u,enableColorOnDark:l}),f=Pt(i);return s(Et,n({square:!0,component:"header",ownerState:i,elevation:4,className:$(f.root,a,u==="fixed"&&"mui-fixed"),ref:e},p))}),wt=At;function Nt(t){return w("MuiListSubheader",t)}N("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Ot=["className","color","component","disableGutters","disableSticky","inset"],zt=t=>{const{classes:o,color:e,disableGutters:r,inset:a,disableSticky:d}=t,l={root:["root",e!=="default"&&`color${T(e)}`,!r&&"gutters",a&&"inset",!d&&"sticky"]};return O(l,Nt,o)},St=D("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.color!=="default"&&o[`color${T(e.color)}`],!e.disableGutters&&o.gutters,e.inset&&o.inset,!e.disableSticky&&o.sticky]}})(({theme:t,ownerState:o})=>n({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},o.color==="primary"&&{color:(t.vars||t).palette.primary.main},o.color==="inherit"&&{color:"inherit"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.inset&&{paddingLeft:72},!o.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper})),Ft=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiListSubheader"}),{className:a,color:d="default",component:l="li",disableGutters:u=!1,disableSticky:p=!1,inset:i=!1}=r,f=M(r,Ot),C=n({},r,{color:d,component:l,disableGutters:u,disableSticky:p,inset:i}),y=zt(C);return s(St,n({as:l,className:$(y.root,a),ref:e,ownerState:C},f))}),Gt=Ft,Ut=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Vt(t,o,e){const r=o.getBoundingClientRect(),a=e&&e.getBoundingClientRect(),d=pt(o);let l;if(o.fakeTransform)l=o.fakeTransform;else{const i=d.getComputedStyle(o);l=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let u=0,p=0;if(l&&l!=="none"&&typeof l=="string"){const i=l.split("(")[1].split(")")[0].split(",");u=parseInt(i[4],10),p=parseInt(i[5],10)}return t==="left"?a?`translateX(${a.right+u-r.left}px)`:`translateX(${d.innerWidth+u-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-u}px)`:`translateX(-${r.left+r.width-u}px)`:t==="up"?a?`translateY(${a.bottom+p-r.top}px)`:`translateY(${d.innerHeight+p-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function _t(t){return typeof t=="function"?t():t}function H(t,o,e){const r=_t(e),a=Vt(t,o,r);a&&(o.style.webkitTransform=a,o.style.transform=a)}const Wt=g.forwardRef(function(o,e){const r=dt(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},d={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:l,appear:u=!0,children:p,container:i,direction:f="down",easing:C=a,in:y,onEnter:R,onEntered:m,onEntering:v,onExit:B,onExited:b,onExiting:P,style:x,timeout:E=d,TransitionComponent:z=$t}=o,U=M(o,Ut),k=g.useRef(null),J=ct(p.ref,k,e),I=c=>h=>{c&&(h===void 0?c(k.current):c(k.current,h))},L=I((c,h)=>{H(f,c,i),Tt(c),R&&R(c,h)}),V=I((c,h)=>{const Q=tt({timeout:E,style:x,easing:C},{mode:"enter"});c.style.webkitTransition=r.transitions.create("-webkit-transform",n({},Q)),c.style.transition=r.transitions.create("transform",n({},Q)),c.style.webkitTransform="none",c.style.transform="none",v&&v(c,h)}),_=I(m),gt=I(P),mt=I(c=>{const h=tt({timeout:E,style:x,easing:C},{mode:"exit"});c.style.webkitTransition=r.transitions.create("-webkit-transform",h),c.style.transition=r.transitions.create("transform",h),H(f,c,i),B&&B(c)}),vt=I(c=>{c.style.webkitTransition="",c.style.transition="",b&&b(c)}),yt=c=>{l&&l(k.current,c)},K=g.useCallback(()=>{k.current&&H(f,k.current,i)},[f,i]);return g.useEffect(()=>{if(y||f==="down"||f==="right")return;const c=Bt(()=>{k.current&&H(f,k.current,i)}),h=pt(k.current);return h.addEventListener("resize",c),()=>{c.clear(),h.removeEventListener("resize",c)}},[f,y,i]),g.useEffect(()=>{y||K()},[y,K]),s(z,n({nodeRef:k,onEnter:L,onEntered:_,onEntering:V,onExit:mt,onExited:vt,onExiting:gt,addEndListener:yt,appear:u,in:y,timeout:E},U,{children:(c,h)=>g.cloneElement(p,n({ref:J,style:n({visibility:c==="exited"&&!y?"hidden":void 0},x,p.props.style)},h))}))}),jt=Wt;function Ht(t){return w("MuiDrawer",t)}N("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Yt=["BackdropProps"],Xt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ut=(t,o)=>{const{ownerState:e}=t;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},qt=t=>{const{classes:o,anchor:e,variant:r}=t,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${T(e)}`,r!=="temporary"&&`paperAnchorDocked${T(e)}`]};return O(a,Ht,o)},Jt=D(Rt,{name:"MuiDrawer",slot:"Root",overridesResolver:ut})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),et=D("div",{shouldForwardProp:it,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ut})({flex:"0 0 auto"}),Kt=D(lt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`paperAnchor${T(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${T(e.anchor)}`]]}})(({theme:t,ownerState:o})=>n({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),ft={left:"right",right:"left",top:"down",bottom:"up"};function Qt(t){return["left","right"].indexOf(t)!==-1}function Zt(t,o){return t.direction==="rtl"&&Qt(o)?ft[o]:o}const to=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiDrawer"}),a=dt(),d={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:u,children:p,className:i,elevation:f=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:y}={},onClose:R,open:m=!1,PaperProps:v={},SlideProps:B,TransitionComponent:b=jt,transitionDuration:P=d,variant:x="temporary"}=r,E=M(r.ModalProps,Yt),z=M(r,Xt),U=g.useRef(!1);g.useEffect(()=>{U.current=!0},[]);const k=Zt(a,l),I=n({},r,{anchor:l,elevation:f,open:m,variant:x},z),L=qt(I),V=s(Kt,n({elevation:x==="temporary"?f:0,square:!0},v,{className:$(L.paper,v.className),ownerState:I,children:p}));if(x==="permanent")return s(et,n({className:$(L.root,L.docked,i),ownerState:I,ref:e},z,{children:V}));const _=s(b,n({in:m,direction:ft[k],timeout:P,appear:U.current},B,{children:V}));return x==="persistent"?s(et,n({className:$(L.root,L.docked,i),ownerState:I,ref:e},z,{children:_})):s(Jt,n({BackdropProps:n({},u,y,{transitionDuration:P}),className:$(L.root,L.modal,i),open:m,ownerState:I,onClose:R,hideBackdrop:C,ref:e},z,E,{children:_}))}),oo=to;function eo(t){return w("MuiListItemButton",t)}const ro=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),F=ro,ao=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],no=(t,o)=>{const{ownerState:e}=t;return[o.root,e.dense&&o.dense,e.alignItems==="flex-start"&&o.alignItemsFlexStart,e.divider&&o.divider,!e.disableGutters&&o.gutters]},so=t=>{const{alignItems:o,classes:e,dense:r,disabled:a,disableGutters:d,divider:l,selected:u}=t,i=O({root:["root",r&&"dense",!d&&"gutters",l&&"divider",a&&"disabled",o==="flex-start"&&"alignItemsFlexStart",u&&"selected"]},eo,e);return n({},e,i)},io=D(Ct,{shouldForwardProp:t=>it(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:no})(({theme:t,ownerState:o})=>n({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:W(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${F.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:W(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${F.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:W(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:W(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${F.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${F.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},o.alignItems==="flex-start"&&{alignItems:"flex-start"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.dense&&{paddingTop:4,paddingBottom:4})),lo=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:d=!1,component:l="div",children:u,dense:p=!1,disableGutters:i=!1,divider:f=!1,focusVisibleClassName:C,selected:y=!1,className:R}=r,m=M(r,ao),v=g.useContext(Y),B=g.useMemo(()=>({dense:p||v.dense||!1,alignItems:a,disableGutters:i}),[a,v.dense,p,i]),b=g.useRef(null);It(()=>{d&&b.current&&b.current.focus()},[d]);const P=n({},r,{alignItems:a,dense:B.dense,disableGutters:i,divider:f,selected:y}),x=so(P),E=ct(b,e);return s(Y.Provider,{value:B,children:s(io,n({ref:E,href:m.href||m.to,component:(m.href||m.to)&&l==="div"?"a":l,focusVisibleClassName:$(x.focusVisible,C),ownerState:P,className:$(x.root,R)},m,{classes:x,children:u}))})}),rt=lo;function co(t){return w("MuiListItemIcon",t)}N("MuiListItemIcon",["root","alignItemsFlexStart"]);const po=["className"],uo=t=>{const{alignItems:o,classes:e}=t;return O({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},co,e)},fo=D("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:t,ownerState:o})=>n({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),go=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiListItemIcon"}),{className:a}=r,d=M(r,po),l=g.useContext(Y),u=n({},r,{alignItems:l.alignItems}),p=uo(u);return s(fo,n({className:$(p.root,a),ownerState:u,ref:e},d))}),at=go;function mo(t){return w("MuiListItemText",t)}const vo=N("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),nt=vo,yo=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ho=t=>{const{classes:o,inset:e,primary:r,secondary:a,dense:d}=t;return O({root:["root",e&&"inset",d&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},mo,o)},bo=D("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[{[`& .${nt.primary}`]:o.primary},{[`& .${nt.secondary}`]:o.secondary},o.root,e.inset&&o.inset,e.primary&&e.secondary&&o.multiline,e.dense&&o.dense]}})(({ownerState:t})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),xo=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiListItemText"}),{children:a,className:d,disableTypography:l=!1,inset:u=!1,primary:p,primaryTypographyProps:i,secondary:f,secondaryTypographyProps:C}=r,y=M(r,yo),{dense:R}=g.useContext(Y);let m=p??a,v=f;const B=n({},r,{disableTypography:l,inset:u,primary:!!m,secondary:!!v,dense:R}),b=ho(B);return m!=null&&m.type!==G&&!l&&(m=s(G,n({variant:R?"body2":"body1",className:b.primary,component:i!=null&&i.variant?void 0:"span",display:"block"},i,{children:m}))),v!=null&&v.type!==G&&!l&&(v=s(G,n({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},C,{children:v}))),S(bo,n({className:$(b.root,d),ownerState:B,ref:e},y,{children:[m,v]}))}),st=xo;function ko(t){return w("MuiToolbar",t)}N("MuiToolbar",["root","gutters","regular","dense"]);const Io=["className","component","disableGutters","variant"],Co=t=>{const{classes:o,disableGutters:e,variant:r}=t;return O({root:["root",!e&&"gutters",r]},ko,o)},$o=D("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})(({theme:t,ownerState:o})=>n({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:o})=>o.variant==="regular"&&t.mixins.toolbar),Bo=g.forwardRef(function(o,e){const r=A({props:o,name:"MuiToolbar"}),{className:a,component:d="div",disableGutters:l=!1,variant:u="regular"}=r,p=M(r,Io),i=n({},r,{component:d,disableGutters:l,variant:u}),f=Co(i);return s($o,n({as:d,className:$(f.root,a),ref:e,ownerState:i},p))}),To=Bo;var Ro=X("file","IconFile",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}]]),Lo=X("layout-dashboard","IconLayoutDashboard",[["path",{d:"M4 4h6v8h-6z",key:"svg-0"}],["path",{d:"M4 16h6v4h-6z",key:"svg-1"}],["path",{d:"M14 12h6v8h-6z",key:"svg-2"}],["path",{d:"M14 4h6v4h-6z",key:"svg-3"}]]),Mo=X("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 12h14l-3 -3m0 6l3 -3",key:"svg-1"}]]),Do=X("menu-2","IconMenu2",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l16 0",key:"svg-2"}]]);const Po=t=>s(q,{sx:{flexGrow:1},children:s(wt,{position:"fixed",children:S(To,{children:[s(Z,{onClick:()=>t.handleDrawerOpen(!0),sx:{mr:2},children:s(Do,{})}),s(G,{variant:"h6",sx:{flexGrow:1},children:"admin"}),s(Z,{color:"error",onClick:()=>window.location.href="/esci",children:s(Mo,{})})]})})}),Eo=({open:t,handleOpen:o})=>{const e=ht(),r=a=>{e(`${a}`),o(!1)};return s(oo,{anchor:"left",open:t,onClose:()=>o(!1),children:S(q,{sx:{width:250},children:[s(ot,{children:S(rt,{onClick:()=>r("/"),children:[s(at,{children:s(Lo,{})}),s(st,{primary:"Dashboard"})]})}),s(ot,{subheader:s(Gt,{children:"Documenti Fiscali"}),children:S(rt,{onClick:()=>r("/docfisc/tipi"),children:[s(at,{children:s(Ro,{})}),s(st,{primary:"Tipo Doc. Fisc."})]})})]})})},Vo=()=>{const[t,o]=bt.useState(!1);return S(xt,{children:[s(Po,{handleDrawerOpen:o}),s(Eo,{open:t,handleOpen:o}),s(q,{mt:12,mb:12,children:s(Lt,{children:s(kt,{})})})]})};export{Vo as default};