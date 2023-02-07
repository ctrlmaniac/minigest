import{c as B,_ as p,r as f,u as F,a as T,j as r,b as h,d as Ae,g as Be,e as Ee,f as Te,h as $e,i as Re,l as de,k as we,m as Ne,n as Pe,R as E,o as Le,M as Se,F as Oe,O as Fe}from"./index-222da0ba.js";import{T as N,B as Q,u as ee,a as w}from"./hooks-db4dee7a.js";import{g as te,a as oe,s as $,P as pe,c as A,b as U,r as Ue}from"./Paper-96727556.js";import{I as X}from"./IconButton-8b5a614b.js";import{c as C}from"./createReactComponent-d2644421.js";import{u as ue}from"./useTheme-88693805.js";import{d as _e,o as ge,M as Ge}from"./Modal-821d5a1c.js";import{T as We,r as Ve,g as ie}from"./utils-50920ebd.js";import{u as Ye}from"./TransitionGroupContext-58f02f0d.js";import{L as je,a as O}from"./List-670810c7.js";import{L as y,a as z}from"./ListItemText-e92daed6.js";import{g as He}from"./listItemIconClasses-2ecd1529.js";import{L as se}from"./ListSubheader-69d8aba0.js";import{a as J,E as K}from"./index-c44c1a12.js";import{D as Xe,g as qe,a as he,b as fe}from"./DialogContent-d1142615.js";import{C as Ze}from"./Container-99c548f4.js";import"./ButtonBase-f82ec6e5.js";import"./listItemTextClasses-e1dbb3e1.js";function Je(t){return te("MuiAppBar",t)}oe("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const Ke=["className","color","enableColorOnDark","position"],Qe=t=>{const{color:e,position:n,classes:o}=t,a={root:["root",`color${B(e)}`,`position${B(n)}`]};return U(a,Je,o)},q=(t,e)=>`${t==null?void 0:t.replace(")","")}, ${e})`,et=$(pe,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`position${B(n.position)}`],e[`color${B(n.color)}`]]}})(({theme:t,ownerState:e})=>{const n=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return p({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&p({},e.color==="default"&&{backgroundColor:n,color:t.palette.getContrastText(n)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&p({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&p({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:q(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:q(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:q(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:q(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),tt=f.forwardRef(function(e,n){const o=F({props:e,name:"MuiAppBar"}),{className:a,color:u="primary",enableColorOnDark:l=!1,position:i="fixed"}=o,s=T(o,Ke),c=p({},o,{color:u,position:i,enableColorOnDark:l}),g=Qe(c);return r(et,p({square:!0,component:"header",ownerState:c,elevation:4,className:A(g.root,a,i==="fixed"&&"mui-fixed"),ref:n},s))}),ot=tt,rt=["className","id"],nt=t=>{const{classes:e}=t;return U({root:["root"]},qe,e)},at=$(N,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),it=f.forwardRef(function(e,n){const o=F({props:e,name:"MuiDialogTitle"}),{className:a,id:u}=o,l=T(o,rt),i=o,s=nt(i),{titleId:c=u}=f.useContext(Xe);return r(at,p({component:"h2",className:A(s.root,a),ownerState:i,ref:n,variant:"h6",id:c},l))}),me=it,st=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function lt(t,e,n){const o=e.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),u=ge(e);let l;if(e.fakeTransform)l=e.fakeTransform;else{const c=u.getComputedStyle(e);l=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let i=0,s=0;if(l&&l!=="none"&&typeof l=="string"){const c=l.split("(")[1].split(")")[0].split(",");i=parseInt(c[4],10),s=parseInt(c[5],10)}return t==="left"?a?`translateX(${a.right+i-o.left}px)`:`translateX(${u.innerWidth+i-o.left}px)`:t==="right"?a?`translateX(-${o.right-a.left-i}px)`:`translateX(-${o.left+o.width-i}px)`:t==="up"?a?`translateY(${a.bottom+s-o.top}px)`:`translateY(${u.innerHeight+s-o.top}px)`:a?`translateY(-${o.top-a.top+o.height-s}px)`:`translateY(-${o.top+o.height-s}px)`}function ct(t){return typeof t=="function"?t():t}function Z(t,e,n){const o=ct(n),a=lt(t,e,o);a&&(e.style.webkitTransform=a,e.style.transform=a)}const dt=f.forwardRef(function(e,n){const o=ue(),a={enter:o.transitions.easing.easeOut,exit:o.transitions.easing.sharp},u={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:l,appear:i=!0,children:s,container:c,direction:g="down",easing:D=a,in:m,onEnter:_,onEntered:P,onEntering:L,onExit:G,onExited:W,onExiting:V,style:I,timeout:S=u,TransitionComponent:R=We}=e,Y=T(e,st),k=f.useRef(null),re=Ye(s.ref,k,n),x=d=>v=>{d&&(v===void 0?d(k.current):d(k.current,v))},b=x((d,v)=>{Z(g,d,c),Ve(d),_&&_(d,v)}),j=x((d,v)=>{const ae=ie({timeout:S,style:I,easing:D},{mode:"enter"});d.style.webkitTransition=o.transitions.create("-webkit-transform",p({},ae)),d.style.transition=o.transitions.create("transform",p({},ae)),d.style.webkitTransform="none",d.style.transform="none",L&&L(d,v)}),H=x(P),De=x(V),Ie=x(d=>{const v=ie({timeout:S,style:I,easing:D},{mode:"exit"});d.style.webkitTransition=o.transitions.create("-webkit-transform",v),d.style.transition=o.transitions.create("transform",v),Z(g,d,c),G&&G(d)}),ze=x(d=>{d.style.webkitTransition="",d.style.transition="",W&&W(d)}),Me=d=>{l&&l(k.current,d)},ne=f.useCallback(()=>{k.current&&Z(g,k.current,c)},[g,c]);return f.useEffect(()=>{if(m||g==="down"||g==="right")return;const d=_e(()=>{k.current&&Z(g,k.current,c)}),v=ge(k.current);return v.addEventListener("resize",d),()=>{d.clear(),v.removeEventListener("resize",d)}},[g,m,c]),f.useEffect(()=>{m||ne()},[m,ne]),r(R,p({nodeRef:k,onEnter:b,onEntered:H,onEntering:j,onExit:Ie,onExited:ze,onExiting:De,addEndListener:Me,appear:i,in:m,timeout:S},Y,{children:(d,v)=>f.cloneElement(s,p({ref:re,style:p({visibility:d==="exited"&&!m?"hidden":void 0},I,s.props.style)},v))}))}),pt=dt;function ut(t){return te("MuiDrawer",t)}oe("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const gt=["BackdropProps"],ht=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ve=(t,e)=>{const{ownerState:n}=t;return[e.root,(n.variant==="permanent"||n.variant==="persistent")&&e.docked,e.modal]},ft=t=>{const{classes:e,anchor:n,variant:o}=t,a={root:["root"],docked:[(o==="permanent"||o==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${B(n)}`,o!=="temporary"&&`paperAnchorDocked${B(n)}`]};return U(a,ut,e)},mt=$(Ge,{name:"MuiDrawer",slot:"Root",overridesResolver:ve})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),le=$("div",{shouldForwardProp:Ue,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ve})({flex:"0 0 auto"}),vt=$(pe,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`paperAnchor${B(n.anchor)}`],n.variant!=="temporary"&&e[`paperAnchorDocked${B(n.anchor)}`]]}})(({theme:t,ownerState:e})=>p({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),ke={left:"right",right:"left",top:"down",bottom:"up"};function kt(t){return["left","right"].indexOf(t)!==-1}function xt(t,e){return t.direction==="rtl"&&kt(e)?ke[e]:e}const yt=f.forwardRef(function(e,n){const o=F({props:e,name:"MuiDrawer"}),a=ue(),u={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:i,children:s,className:c,elevation:g=16,hideBackdrop:D=!1,ModalProps:{BackdropProps:m}={},onClose:_,open:P=!1,PaperProps:L={},SlideProps:G,TransitionComponent:W=pt,transitionDuration:V=u,variant:I="temporary"}=o,S=T(o.ModalProps,gt),R=T(o,ht),Y=f.useRef(!1);f.useEffect(()=>{Y.current=!0},[]);const k=xt(a,l),x=p({},o,{anchor:l,elevation:g,open:P,variant:I},R),b=ft(x),j=r(vt,p({elevation:I==="temporary"?g:0,square:!0},L,{className:A(b.paper,L.className),ownerState:x,children:s}));if(I==="permanent")return r(le,p({className:A(b.root,b.docked,c),ownerState:x,ref:n},R,{children:j}));const H=r(W,p({in:P,direction:ke[k],timeout:V,appear:Y.current},G,{children:j}));return I==="persistent"?r(le,p({className:A(b.root,b.docked,c),ownerState:x,ref:n},R,{children:H})):r(mt,p({BackdropProps:p({},i,m,{transitionDuration:V}),className:A(b.root,b.modal,c),open:P,ownerState:x,onClose:_,hideBackdrop:D,ref:n},R,S,{children:H}))}),bt=yt,Ct=["className"],Dt=t=>{const{alignItems:e,classes:n}=t;return U({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},He,n)},It=$("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:t,ownerState:e})=>p({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},e.alignItems==="flex-start"&&{marginTop:8})),zt=f.forwardRef(function(e,n){const o=F({props:e,name:"MuiListItemIcon"}),{className:a}=o,u=T(o,Ct),l=f.useContext(je),i=p({},o,{alignItems:l.alignItems}),s=Dt(i);return r(It,p({className:A(s.root,a),ownerState:i,ref:n},u))}),M=zt;function Mt(t){return te("MuiToolbar",t)}oe("MuiToolbar",["root","gutters","regular","dense"]);const At=["className","component","disableGutters","variant"],Bt=t=>{const{classes:e,disableGutters:n,variant:o}=t;return U({root:["root",!n&&"gutters",o]},Mt,e)},Et=$("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})(({theme:t,ownerState:e})=>p({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},e.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:e})=>e.variant==="regular"&&t.mixins.toolbar),Tt=f.forwardRef(function(e,n){const o=F({props:e,name:"MuiToolbar"}),{className:a,component:u="div",disableGutters:l=!1,variant:i="regular"}=o,s=T(o,At),c=p({},o,{component:u,disableGutters:l,variant:i}),g=Bt(c);return r(Et,p({as:u,className:A(g.root,a),ref:n,ownerState:c},s))}),$t=Tt;var xe=C("building-store","IconBuildingStore",[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",key:"svg-1"}],["path",{d:"M5 21l0 -10.15",key:"svg-2"}],["path",{d:"M19 21l0 -10.15",key:"svg-3"}],["path",{d:"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",key:"svg-4"}]]),ye=C("building-warehouse","IconBuildingWarehouse",[["path",{d:"M3 21v-13l9 -4l9 4v13",key:"svg-0"}],["path",{d:"M13 13h4v8h-10v-6h6",key:"svg-1"}],["path",{d:"M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3",key:"svg-2"}]]),Rt=C("calendar-due","IconCalendarDue",[["path",{d:"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}]]),ce=C("file-description","IconFileDescription",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 17h6",key:"svg-2"}],["path",{d:"M9 13h6",key:"svg-3"}]]),wt=C("files","IconFiles",[["path",{d:"M15 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",key:"svg-2"}]]),Nt=C("layout-dashboard","IconLayoutDashboard",[["path",{d:"M4 4h6v8h-6z",key:"svg-0"}],["path",{d:"M4 16h6v4h-6z",key:"svg-1"}],["path",{d:"M14 12h6v8h-6z",key:"svg-2"}],["path",{d:"M14 4h6v4h-6z",key:"svg-3"}]]),Pt=C("logout","IconLogout",[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 12h14l-3 -3m0 6l3 -3",key:"svg-1"}]]),Lt=C("menu-2","IconMenu2",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l16 0",key:"svg-2"}]]),St=C("user","IconUser",[["path",{d:"M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const Ot=t=>r(Q,{sx:{flexGrow:1},children:r(ot,{position:"fixed",children:h($t,{children:[r(X,{onClick:()=>t.handleDrawerOpen(!0),sx:{mr:2},children:r(Lt,{})}),r(N,{variant:"h6",sx:{flexGrow:1},children:"minigest"}),r(X,{onClick:()=>t.handleNegoziDialogOpen(!0),children:r(xe,{})}),r(X,{onClick:()=>t.handleAziendeDialogOpen(!0),children:r(ye,{})}),r(X,{color:"error",onClick:()=>window.location.href="/esci",children:r(Pt,{})})]})})}),Ft=({open:t,handleOpen:e})=>{const n=Ae(),o=a=>{n(`${a}`),e(!1)};return r(bt,{anchor:"left",open:t,onClose:()=>e(!1),children:h(Q,{sx:{width:250},children:[h(O,{children:[h(y,{onClick:()=>o("/"),children:[r(M,{children:r(Nt,{})}),r(z,{primary:"Dashboard"})]}),h(y,{onClick:()=>o("/account"),children:[r(M,{children:r(St,{})}),r(z,{primary:"Account"})]}),h(y,{onClick:()=>o("/aziende"),children:[r(M,{children:r(ye,{})}),r(z,{primary:"Aziende"})]}),h(y,{onClick:()=>o("/negozi"),children:[r(M,{children:r(xe,{})}),r(z,{primary:"Negozi"})]})]}),h(O,{subheader:r(se,{children:"Documenti Fiscali"}),children:[h(y,{onClick:()=>o("/docfisc/chiusure-fiscali"),children:[r(M,{children:r(wt,{})}),r(z,{primary:"Chiusure Fiscali"})]}),h(y,{onClick:()=>o("/docfisc/fatture/vendita"),children:[r(M,{children:r(ce,{})}),r(z,{primary:"Fatture Vendita"})]}),h(y,{onClick:()=>o("/docfisc/fatture/acquisto"),children:[r(M,{children:r(ce,{})}),r(z,{primary:"Fatture Acquisto"})]})]}),r(O,{subheader:r(se,{children:"Utilità"}),children:h(y,{onClick:()=>o("/scadenzario"),children:[r(M,{children:r(Rt,{})}),r(z,{primary:"Scadenzario"})]})})]})})};function Ut(){return async t=>{t(Be()),J.get(K.ACCOUNT).then(e=>{t(Ee(e.data))}).catch(e=>{t(Te(e.message))})}}function be(t){return async e=>{J.get(`${K.AZIENDE}/${t}`).then(n=>{e($e(n.data))}).catch(n=>{e(Re(n.message))})}}const _t=({open:t,handleOpen:e})=>{var i;const n=ee(),{dettagli:o}=w(s=>s.account),{selected:a}=w(s=>s.aziende),u=s=>{window.localStorage.setItem("azienda",s),n(be(s)),e(!1)};let l=r(N,{children:"Caricamento in corso..."});return de.isEmpty(o==null?void 0:o.aziende)?l=r(N,{children:"Devi aggiungere un'azienda!"}):l=r(O,{children:(i=o==null?void 0:o.aziende)==null?void 0:i.map(s=>r(y,{selected:s.id===(a==null?void 0:a.id),onClick:()=>u(s.id),children:s.denominazione},s.id))}),h(he,{open:t,onClose:()=>e(!1),children:[r(me,{children:"Seleziona Azienda"}),r(fe,{children:l})]})};function Gt(t){return async e=>{let n=`${K.NEGOZI}?azienda=${t}`;J.get(n).then(o=>{e(we(o.data))}).catch(o=>{e(Ne(o.message))})}}function Ce(t){return async e=>{J.get(`${K.NEGOZI}/${t}`).then(n=>{e(Pe(n.data))})}}const Wt=({open:t,handleOpen:e})=>{const n=ee(),{selected:o,listByAzienda:a}=w(i=>i.negozi),u=i=>{window.localStorage.setItem("negozio",i),n(Ce(i)),e(!1)};let l=r(N,{children:"Caricamento in corso..."});return de.isEmpty(a)?l=r(N,{children:"Devi aggiungere un negozio!"}):l=r(O,{children:a==null?void 0:a.map(i=>r(y,{selected:i.id===(o==null?void 0:o.id),onClick:()=>u(i.id),children:i.nome},i.id))}),h(he,{open:t,onClose:()=>e(!1),children:[r(me,{children:"Seleziona Negozio"}),r(fe,{children:l})]})},lo=()=>{const t=ee(),[e,n]=E.useState(!1),[o,a]=E.useState(!1),[u,l]=E.useState(!1),{getting:i,getError:s,dettagli:c}=w(m=>m.account),{selected:g}=w(m=>m.aziende),{listByAzienda:D}=w(m=>m.negozi);return E.useEffect(()=>{t(Ut())},[]),E.useEffect(()=>{c!=null&&c.aziende&&t(be(c.aziende[0].id))},[c]),E.useEffect(()=>{g&&t(Gt(g.id))},[g]),E.useEffect(()=>{D&&t(Ce(D[0].id))},[D]),i?r(Le,{}):s?r(Se,{message:s}):h(Oe,{children:[r(Ot,{handleDrawerOpen:n,handleAziendeDialogOpen:a,handleNegoziDialogOpen:l}),r(Ft,{open:e,handleOpen:n}),r(_t,{open:o,handleOpen:a}),r(Wt,{open:u,handleOpen:l}),r(Q,{mt:12,mb:12,children:r(Ze,{children:r(Fe,{})})})]})};export{lo as default};