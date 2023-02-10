import{_ as d,c as Ao,a as h,u as No,r as b,b as N,j as n,d as v,e as Y,g as Lo,f as Wo,h as So,l as A,i as Uo,s as wo,k as ko,R as J,F as Co,B as Fo,V as _o,O as Go}from"./index-2aee8fbc.js";import{c as Vo,a as T,b as G,g as q,d as K,s as L,P as $o,T as j,u as jo,r as Ho,e as H,B as uo,f as go}from"./hooks-ac52b7c3.js";import{a as Yo,E as qo,I as ao}from"./index-d540e9b2.js";import{u as fo,i as Zo,o as Bo,d as Xo,M as Jo,L as Ko,a as eo,T as Qo}from"./TextField-2b7385a2.js";import{u as Do,L as ho}from"./ListSubheader-e76041cd.js";import{c as Z}from"./createReactComponent-c382b839.js";import{I as Ro}from"./IconBuildingStore-d808538a.js";import{I as zo}from"./IconBuildingWarehouse-8d2522b9.js";import{u as Io,T as ot,r as tt,g as mo}from"./Grow-60e7aeaa.js";import{L as E,a as w}from"./ListItemText-b9742c00.js";import{D as et,g as rt,a as Oo,b as Po}from"./DialogContent-6c601b28.js";import{p as nt}from"./post-f213ac84.js";import{B as at}from"./Button-61285a26.js";const it=Vo(),st=it,lt=["className","component","disableGutters","fixed","maxWidth","classes"],ct=Ao(),dt=st("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`maxWidth${h(String(e.maxWidth))}`],e.fixed&&o.fixed,e.disableGutters&&o.disableGutters]}}),pt=t=>No({props:t,name:"MuiContainer",defaultTheme:ct}),ut=(t,o)=>{const e=p=>q(o,p),{classes:r,fixed:s,disableGutters:c,maxWidth:a}=t,i={root:["root",a&&`maxWidth${h(String(a))}`,s&&"fixed",c&&"disableGutters"]};return G(i,e,r)};function gt(t={}){const{createStyledComponent:o=dt,useThemeProps:e=pt,componentName:r="MuiContainer"}=t,s=o(({theme:a,ownerState:i})=>d({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}),({theme:a,ownerState:i})=>i.fixed&&Object.keys(a.breakpoints.values).reduce((p,l)=>{const g=l,m=a.breakpoints.values[g];return m!==0&&(p[a.breakpoints.up(g)]={maxWidth:`${m}${a.breakpoints.unit}`}),p},{}),({theme:a,ownerState:i})=>d({},i.maxWidth==="xs"&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[a.breakpoints.up(i.maxWidth)]:{maxWidth:`${a.breakpoints.values[i.maxWidth]}${a.breakpoints.unit}`}}));return b.forwardRef(function(i,p){const l=e(i),{className:g,component:m="div",disableGutters:x=!1,fixed:f=!1,maxWidth:y="lg"}=l,D=N(l,lt),R=d({},l,{component:m,disableGutters:x,fixed:f,maxWidth:y}),I=ut(R,r);return n(s,d({as:m,ownerState:R,className:T(I.root,g),ref:p},D))})}function ft(t){const{badgeContent:o,invisible:e=!1,max:r=99,showZero:s=!1}=t,c=Do({badgeContent:o,max:r});let a=e;e===!1&&o===0&&!s&&(a=!0);const{badgeContent:i,max:p=r}=a?c:t,l=i&&Number(i)>p?`${p}+`:i;return{badgeContent:i,invisible:a,max:p,displayValue:l}}function ht(t){return q("MuiBadge",t)}K("MuiBadge",["root","badge","invisible"]);const mt=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],vt=t=>{const{invisible:o}=t;return G({root:["root"],badge:["badge",o&&"invisible"]},ht,void 0)},bt=b.forwardRef(function(o,e){const{component:r,children:s,max:c=99,slotProps:a={},slots:i={},showZero:p=!1}=o,l=N(o,mt),{badgeContent:g,max:m,displayValue:x,invisible:f}=ft(d({},o,{max:c})),y=d({},o,{badgeContent:g,invisible:f,max:m,showZero:p}),D=vt(y),R=r||i.root||"span",I=fo({elementType:R,externalSlotProps:a.root,externalForwardedProps:l,additionalProps:{ref:e},ownerState:y,className:D.root}),O=i.badge||"span",C=fo({elementType:O,externalSlotProps:a.badge,ownerState:y,className:D.badge});return v(R,d({},I,{children:[s,n(O,d({},C,{children:x}))]}))}),xt=bt;function yt(t){return q("MuiAppBar",t)}K("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const kt=["className","color","enableColorOnDark","position"],Ct=t=>{const{color:o,position:e,classes:r}=t,s={root:["root",`color${h(o)}`,`position${h(e)}`]};return G(s,yt,r)},io=(t,o)=>`${t==null?void 0:t.replace(")","")}, ${o})`,$t=L($o,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${h(e.position)}`],o[`color${h(e.color)}`]]}})(({theme:t,ownerState:o})=>{const e=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return d({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&d({},o.color==="default"&&{backgroundColor:e,color:t.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&d({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&d({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:io(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:io(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:io(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:io(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Bt=b.forwardRef(function(o,e){const r=Y({props:o,name:"MuiAppBar"}),{className:s,color:c="primary",enableColorOnDark:a=!1,position:i="fixed"}=r,p=N(r,kt),l=d({},r,{color:c,position:i,enableColorOnDark:a}),g=Ct(l);return n($t,d({square:!0,component:"header",ownerState:l,elevation:4,className:T(g.root,s,i==="fixed"&&"mui-fixed"),ref:e},p))}),Dt=Bt,Rt=t=>!t||!Zo(t),vo=Rt;function zt(t){return q("MuiBadge",t)}const It=K("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),F=It,Ot=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],co=10,po=4,Pt=t=>{const{color:o,anchorOrigin:e,invisible:r,overlap:s,variant:c,classes:a={}}=t,i={root:["root"],badge:["badge",c,r&&"invisible",`anchorOrigin${h(e.vertical)}${h(e.horizontal)}`,`anchorOrigin${h(e.vertical)}${h(e.horizontal)}${h(s)}`,`overlap${h(s)}`,o!=="default"&&`color${h(o)}`]};return G(i,zt,a)},Tt=L("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Mt=L("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.badge,o[e.variant],o[`anchorOrigin${h(e.anchorOrigin.vertical)}${h(e.anchorOrigin.horizontal)}${h(e.overlap)}`],e.color!=="default"&&o[`color${h(e.color)}`],e.invisible&&o.invisible]}})(({theme:t,ownerState:o})=>d({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:co*2,lineHeight:1,padding:"0 6px",height:co*2,borderRadius:co,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},o.color!=="default"&&{backgroundColor:(t.vars||t).palette[o.color].main,color:(t.vars||t).palette[o.color].contrastText},o.variant==="dot"&&{borderRadius:po,height:po*2,minWidth:po*2,padding:0},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${F.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${F.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${F.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${F.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${F.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${F.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${F.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${F.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),Et=b.forwardRef(function(o,e){var r,s,c,a,i,p;const l=Y({props:o,name:"MuiBadge"}),{anchorOrigin:g={vertical:"top",horizontal:"right"},className:m,component:x="span",components:f={},componentsProps:y={},overlap:D="rectangular",color:R="default",invisible:I=!1,max:O,badgeContent:C,slots:M,slotProps:P,showZero:V=!1,variant:$="standard"}=l,ro=N(l,Ot),B=Do({anchorOrigin:g,color:R,overlap:D,variant:$});let z=I;I===!1&&(C===0&&!V||C==null&&$!=="dot")&&(z=!0);const{color:W=R,overlap:S=D,anchorOrigin:Q=g,variant:X=$}=z?B:l,lo=d({},l,{anchorOrigin:Q,invisible:z,color:W,overlap:S,variant:X}),no=Pt(lo);let oo;X!=="dot"&&(oo=C&&Number(C)>O?`${O}+`:C);const u=(r=(s=M==null?void 0:M.root)!=null?s:f.Root)!=null?r:Tt,k=(c=(a=M==null?void 0:M.badge)!=null?a:f.Badge)!=null?c:Mt,U=(i=P==null?void 0:P.root)!=null?i:y.root,to=(p=P==null?void 0:P.badge)!=null?p:y.badge;return n(xt,d({invisible:I,badgeContent:oo,showZero:V,max:O},ro,{slots:{root:u,badge:k},className:T(U==null?void 0:U.className,no.root,m),slotProps:{root:d({},U,vo(u)&&{as:x,ownerState:d({},U==null?void 0:U.ownerState,{anchorOrigin:Q,color:W,overlap:S,variant:X})}),badge:d({},to,{className:T(no.badge,to==null?void 0:to.className)},vo(k)&&{ownerState:d({},to==null?void 0:to.ownerState,{anchorOrigin:Q,color:W,overlap:S,variant:X})})},ref:e}))}),bo=Et,At=gt({createStyledComponent:L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`maxWidth${h(String(e.maxWidth))}`],e.fixed&&o.fixed,e.disableGutters&&o.disableGutters]}}),useThemeProps:t=>Y({props:t,name:"MuiContainer"})}),Nt=At,Lt=["className","id"],Wt=t=>{const{classes:o}=t;return G({root:["root"]},rt,o)},St=L(j,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Ut=b.forwardRef(function(o,e){const r=Y({props:o,name:"MuiDialogTitle"}),{className:s,id:c}=r,a=N(r,Lt),i=r,p=Wt(i),{titleId:l=c}=b.useContext(et);return n(St,d({component:"h2",className:T(p.root,s),ownerState:i,ref:e,variant:"h6",id:l},a))}),To=Ut,wt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ft(t,o,e){const r=o.getBoundingClientRect(),s=e&&e.getBoundingClientRect(),c=Bo(o);let a;if(o.fakeTransform)a=o.fakeTransform;else{const l=c.getComputedStyle(o);a=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let i=0,p=0;if(a&&a!=="none"&&typeof a=="string"){const l=a.split("(")[1].split(")")[0].split(",");i=parseInt(l[4],10),p=parseInt(l[5],10)}return t==="left"?s?`translateX(${s.right+i-r.left}px)`:`translateX(${c.innerWidth+i-r.left}px)`:t==="right"?s?`translateX(-${r.right-s.left-i}px)`:`translateX(-${r.left+r.width-i}px)`:t==="up"?s?`translateY(${s.bottom+p-r.top}px)`:`translateY(${c.innerHeight+p-r.top}px)`:s?`translateY(-${r.top-s.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function _t(t){return typeof t=="function"?t():t}function so(t,o,e){const r=_t(e),s=Ft(t,o,r);s&&(o.style.webkitTransform=s,o.style.transform=s)}const Gt=b.forwardRef(function(o,e){const r=Io(),s={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},c={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:i=!0,children:p,container:l,direction:g="down",easing:m=s,in:x,onEnter:f,onEntered:y,onEntering:D,onExit:R,onExited:I,onExiting:O,style:C,timeout:M=c,TransitionComponent:P=ot}=o,V=N(o,wt),$=b.useRef(null),ro=jo(p.ref,$,e),B=u=>k=>{u&&(k===void 0?u($.current):u($.current,k))},z=B((u,k)=>{so(g,u,l),tt(u),f&&f(u,k)}),W=B((u,k)=>{const U=mo({timeout:M,style:C,easing:m},{mode:"enter"});u.style.webkitTransition=r.transitions.create("-webkit-transform",d({},U)),u.style.transition=r.transitions.create("transform",d({},U)),u.style.webkitTransform="none",u.style.transform="none",D&&D(u,k)}),S=B(y),Q=B(O),X=B(u=>{const k=mo({timeout:M,style:C,easing:m},{mode:"exit"});u.style.webkitTransition=r.transitions.create("-webkit-transform",k),u.style.transition=r.transitions.create("transform",k),so(g,u,l),R&&R(u)}),lo=B(u=>{u.style.webkitTransition="",u.style.transition="",I&&I(u)}),no=u=>{a&&a($.current,u)},oo=b.useCallback(()=>{$.current&&so(g,$.current,l)},[g,l]);return b.useEffect(()=>{if(x||g==="down"||g==="right")return;const u=Xo(()=>{$.current&&so(g,$.current,l)}),k=Bo($.current);return k.addEventListener("resize",u),()=>{u.clear(),k.removeEventListener("resize",u)}},[g,x,l]),b.useEffect(()=>{x||oo()},[x,oo]),n(P,d({nodeRef:$,onEnter:z,onEntered:S,onEntering:W,onExit:X,onExited:lo,onExiting:Q,addEndListener:no,appear:i,in:x,timeout:M},V,{children:(u,k)=>b.cloneElement(p,d({ref:ro,style:d({visibility:u==="exited"&&!x?"hidden":void 0},C,p.props.style)},k))}))}),Vt=Gt;function jt(t){return q("MuiDrawer",t)}K("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ht=["BackdropProps"],Yt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Mo=(t,o)=>{const{ownerState:e}=t;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},qt=t=>{const{classes:o,anchor:e,variant:r}=t,s={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${h(e)}`,r!=="temporary"&&`paperAnchorDocked${h(e)}`]};return G(s,jt,o)},Zt=L(Jo,{name:"MuiDrawer",slot:"Root",overridesResolver:Mo})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),xo=L("div",{shouldForwardProp:Ho,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Mo})({flex:"0 0 auto"}),Xt=L($o,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`paperAnchor${h(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${h(e.anchor)}`]]}})(({theme:t,ownerState:o})=>d({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),Eo={left:"right",right:"left",top:"down",bottom:"up"};function Jt(t){return["left","right"].indexOf(t)!==-1}function Kt(t,o){return t.direction==="rtl"&&Jt(o)?Eo[o]:o}const Qt=b.forwardRef(function(o,e){const r=Y({props:o,name:"MuiDrawer"}),s=Io(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:a="left",BackdropProps:i,children:p,className:l,elevation:g=16,hideBackdrop:m=!1,ModalProps:{BackdropProps:x}={},onClose:f,open:y=!1,PaperProps:D={},SlideProps:R,TransitionComponent:I=Vt,transitionDuration:O=c,variant:C="temporary"}=r,M=N(r.ModalProps,Ht),P=N(r,Yt),V=b.useRef(!1);b.useEffect(()=>{V.current=!0},[]);const $=Kt(s,a),B=d({},r,{anchor:a,elevation:g,open:y,variant:C},P),z=qt(B),W=n(Xt,d({elevation:C==="temporary"?g:0,square:!0},D,{className:T(z.paper,D.className),ownerState:B,children:p}));if(C==="permanent")return n(xo,d({className:T(z.root,z.docked,l),ownerState:B,ref:e},P,{children:W}));const S=n(I,d({in:y,direction:Eo[$],timeout:O,appear:V.current},R,{children:W}));return C==="persistent"?n(xo,d({className:T(z.root,z.docked,l),ownerState:B,ref:e},P,{children:S})):n(Zt,d({BackdropProps:d({},i,x,{transitionDuration:O}),className:T(z.root,z.modal,l),open:y,ownerState:B,onClose:f,hideBackdrop:m,ref:e},P,M,{children:S}))}),oe=Qt;function te(t){return q("MuiListItemIcon",t)}K("MuiListItemIcon",["root","alignItemsFlexStart"]);const ee=["className"],re=t=>{const{alignItems:o,classes:e}=t;return G({root:["root",o==="flex-start"&&"alignItemsFlexStart"]},te,e)},ne=L("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.alignItems==="flex-start"&&o.alignItemsFlexStart]}})(({theme:t,ownerState:o})=>d({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},o.alignItems==="flex-start"&&{marginTop:8})),ae=b.forwardRef(function(o,e){const r=Y({props:o,name:"MuiListItemIcon"}),{className:s}=r,c=N(r,ee),a=b.useContext(Ko),i=d({},r,{alignItems:a.alignItems}),p=re(i);return n(ne,d({className:T(p.root,s),ownerState:i,ref:e},c))}),_=ae;function ie(t){return q("MuiToolbar",t)}K("MuiToolbar",["root","gutters","regular","dense"]);const se=["className","component","disableGutters","variant"],le=t=>{const{classes:o,disableGutters:e,variant:r}=t;return G({root:["root",!e&&"gutters",r]},ie,o)},ce=L("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})(({theme:t,ownerState:o})=>d({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:o})=>o.variant==="regular"&&t.mixins.toolbar),de=b.forwardRef(function(o,e){const r=Y({props:o,name:"MuiToolbar"}),{className:s,component:c="div",disableGutters:a=!1,variant:i="regular"}=r,p=N(r,se),l=d({},r,{component:c,disableGutters:a,variant:i}),g=le(l);return n(ce,d({as:c,className:T(g.root,s),ref:e,ownerState:l},p))}),pe=de;function ue(){return async t=>{t(Lo()),Yo.get(`${qo.ACCOUNT}/principal`).then(o=>{t(Wo(o.data))}).catch(o=>{let e="Errore";o.response?e=o.response.data:e="Errore",t(So(e))})}}var ge=Z("calendar-due","IconCalendarDue",[["path",{d:"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}]]),yo=Z("file-description","IconFileDescription",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 17h6",key:"svg-2"}],["path",{d:"M9 13h6",key:"svg-3"}]]),fe=Z("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),he=Z("layout-dashboard","IconLayoutDashboard",[["path",{d:"M4 4h6v8h-6z",key:"svg-0"}],["path",{d:"M4 16h6v4h-6z",key:"svg-1"}],["path",{d:"M14 12h6v8h-6z",key:"svg-2"}],["path",{d:"M14 4h6v4h-6z",key:"svg-3"}]]),me=Z("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 12h14l-3 -3m0 6l3 -3",key:"svg-1"}]]),ve=Z("menu-2","IconMenu2",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l16 0",key:"svg-2"}]]),be=Z("user","IconUser",[["path",{d:"M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const xe=t=>{const{selected:o}=H(r=>r.aziende),{selected:e}=H(r=>r.negozi);return n(uo,{sx:{flexGrow:1},children:n(Dt,{position:"fixed",children:v(pe,{children:[n(ao,{onClick:()=>t.handleDrawerOpen(!0),sx:{mr:2},children:n(ve,{})}),n(j,{variant:"h6",sx:{flexGrow:1},children:"minigest"}),n(ao,{onClick:()=>t.handleNegoziDialogOpen(!0),children:n(bo,{variant:"dot",color:"secondary",invisible:!A.isEmpty(e),children:n(Ro,{})})}),n(ao,{onClick:()=>t.handleAziendeDialogOpen(!0),children:n(bo,{variant:"dot",color:"secondary",invisible:!A.isEmpty(o),children:n(zo,{})})}),n(ao,{color:"error",onClick:()=>window.location.href="/esci",children:n(me,{})})]})})})},ye=({open:t,handleOpen:o})=>{const e=Uo(),r=a=>{e(`${a}`),o(!1)},s=new Date().getFullYear(),c=new Date().getMonth()+1;return n(oe,{anchor:"left",open:t,onClose:()=>o(!1),children:v(uo,{sx:{width:250},children:[v(eo,{children:[v(E,{onClick:()=>r("/"),children:[n(_,{children:n(he,{})}),n(w,{primary:"Dashboard"})]}),v(E,{onClick:()=>r("/account"),children:[n(_,{children:n(be,{})}),n(w,{primary:"Account"})]}),v(E,{onClick:()=>r("/aziende"),children:[n(_,{children:n(zo,{})}),n(w,{primary:"Aziende"})]}),v(E,{onClick:()=>r("/negozi"),children:[n(_,{children:n(Ro,{})}),n(w,{primary:"Negozi"})]})]}),v(eo,{subheader:n(ho,{children:"Documenti Fiscali"}),children:[v(E,{onClick:()=>r("/docfisc/chiusure-fiscali"),children:[n(_,{children:n(fe,{})}),n(w,{primary:"Chiusure Fiscali"})]}),v(E,{onClick:()=>r(`/docfisc/fatture/vendita?anno=${s}&mese=${c}&sdi=false`),children:[n(_,{children:n(yo,{})}),n(w,{primary:"Fatture Vendita"})]}),v(E,{onClick:()=>r(`/docfisc/fatture/acquisto?anno=${s}&mese=${c}&sdi=false`),children:[n(_,{children:n(yo,{})}),n(w,{primary:"Fatture Acquisto"})]})]}),n(eo,{subheader:n(ho,{children:"Utilità"}),children:v(E,{onClick:()=>r("/scadenzario"),children:[n(_,{children:n(ge,{})}),n(w,{primary:"Scadenzario"})]})})]})})},ke=({open:t,handleOpen:o})=>{var a;const e=go(),{dettagli:r}=H(i=>i.account),{selected:s}=H(i=>i.aziende);let c=n(j,{children:"Caricamento in corso..."});return A.isEmpty(r==null?void 0:r.aziende)?c=n(j,{children:"Devi aggiungere un'azienda!"}):c=n(eo,{children:(a=r==null?void 0:r.aziende)==null?void 0:a.map(i=>n(E,{onClick:()=>{e(wo(i)),e(ko(void 0)),o(!1)},selected:A.isEmpty(s)?!1:i.id===s.id,children:i.denominazione},i.id))}),v(Oo,{open:t,onClose:()=>o(!1),children:[n(To,{children:"Seleziona Azienda"}),n(Po,{children:c})]})},Ce=({open:t,handleOpen:o})=>{var x;const e=go(),{selected:r}=H(f=>f.negozi),{selected:s}=H(f=>f.aziende),[c,a]=J.useState(""),[i,p]=J.useState(!0),l=f=>{const{value:y}=f.target;a(y),p(y.toString().length<1)},g=()=>{A.isEmpty(s)?alert("Errore!"):(e(nt({nome:c,azienda:s})),o(!1))};let m=n(j,{children:"Caricamento in corso..."});return A.isEmpty(s)?m=n(j,{children:"Devi selezionare un'azienda!"}):A.isEmpty(s.negozi)?m=v(Co,{children:[v(j,{children:["Il negozio verrà aggiunto a ",s.denominazione]}),n(Qo,{label:"Nome negozio",fullWidth:!0,value:c,error:i,required:!0,margin:"normal",onChange:l}),n(at,{fullWidth:!0,variant:"contained",disabled:i,onClick:g,children:"Salva"})]}):m=n(eo,{children:(x=s.negozi)==null?void 0:x.map(f=>n(E,{selected:A.isEmpty(r)?!1:f.id===r.id,onClick:()=>{e(ko(f)),o(!1)},children:f.nome},f.id))}),v(Oo,{open:t,onClose:()=>o(!1),children:[n(To,{children:"Seleziona Negozio"}),n(Po,{children:m})]})},Le=()=>{const t=go(),{getting:o,getError:e,dettagli:r}=H(g=>g.account),[s,c]=J.useState(!1),[a,i]=J.useState(!1),[p,l]=J.useState(!1);return J.useEffect(()=>{t(ue())},[]),o?n(Fo,{}):!A.isEmpty(e)||A.isEmpty(r)?n(_o,{message:e||"Devi accedere per vedere questa sezione!"}):v(Co,{children:[n(xe,{handleDrawerOpen:c,handleAziendeDialogOpen:i,handleNegoziDialogOpen:l}),n(ye,{open:s,handleOpen:c}),n(ke,{open:a,handleOpen:i}),n(Ce,{open:p,handleOpen:l}),n(uo,{mt:12,mb:12,children:n(Nt,{children:n(Go,{})})})]})};export{Le as default};
