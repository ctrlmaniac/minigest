import{r as c,a as ue,j as B,d as j,_ as g,e as fe}from"./index-f45c03a1.js";import{g as pe,d as he,b as me,s as J,a as Re}from"./Box-3112786e.js";import{u as ve}from"./useTheme-7ac3100d.js";import{o as D,a as re,P as Pe,T as Se,r as Ce,g as se,b as ie,i as we}from"./utils-856da27c.js";import{u as Q,b as ae}from"./ButtonBase-07c320ab.js";function le(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function bt(e,t=166){let o;function n(...s){const r=()=>{e.apply(this,s)};clearTimeout(o),o=setTimeout(r,t)}return n.clear=()=>{clearTimeout(o)},n}function Z(e){return D(e).defaultView||window}function Me(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Fe=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ie(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ne(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ae(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ne(e))}function Be(e){const t=[],o=[];return Array.from(e.querySelectorAll(Fe)).forEach((n,s)=>{const r=Ie(n);r===-1||!Ae(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Oe(){return!0}function Le(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Be,isEnabled:i=Oe,open:a}=e,u=c.useRef(!1),R=c.useRef(null),v=c.useRef(null),m=c.useRef(null),P=c.useRef(null),x=c.useRef(!1),f=c.useRef(null),I=Q(t.ref,f),y=c.useRef(null);c.useEffect(()=>{!a||!f.current||(x.current=!o)},[o,a]),c.useEffect(()=>{if(!a||!f.current)return;const l=D(f.current);return f.current.contains(l.activeElement)||(f.current.hasAttribute("tabIndex")||f.current.setAttribute("tabIndex","-1"),x.current&&f.current.focus()),()=>{s||(m.current&&m.current.focus&&(u.current=!0,m.current.focus()),m.current=null)}},[a]),c.useEffect(()=>{if(!a||!f.current)return;const l=D(f.current),p=C=>{const{current:A}=f;if(A!==null){if(!l.hasFocus()||n||!i()||u.current){u.current=!1;return}if(!A.contains(l.activeElement)){if(C&&P.current!==C.target||l.activeElement!==P.current)P.current=null;else if(P.current!==null)return;if(!x.current)return;let N=[];if((l.activeElement===R.current||l.activeElement===v.current)&&(N=r(f.current)),N.length>0){var M,F;const O=Boolean(((M=y.current)==null?void 0:M.shiftKey)&&((F=y.current)==null?void 0:F.key)==="Tab"),L=N[0],d=N[N.length-1];typeof L!="string"&&typeof d!="string"&&(O?d.focus():L.focus())}else A.focus()}}},T=C=>{y.current=C,!(n||!i()||C.key!=="Tab")&&l.activeElement===f.current&&C.shiftKey&&(u.current=!0,v.current&&v.current.focus())};l.addEventListener("focusin",p),l.addEventListener("keydown",T,!0);const h=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&p(null)},50);return()=>{clearInterval(h),l.removeEventListener("focusin",p),l.removeEventListener("keydown",T,!0)}},[o,n,s,i,a,r]);const w=l=>{m.current===null&&(m.current=l.relatedTarget),x.current=!0,P.current=l.target;const p=t.props.onFocus;p&&p(l)},k=l=>{m.current===null&&(m.current=l.relatedTarget),x.current=!0};return ue(c.Fragment,{children:[B("div",{tabIndex:a?0:-1,onFocus:k,ref:R,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:I,onFocus:w}),B("div",{tabIndex:a?0:-1,onFocus:k,ref:v,"data-testid":"sentinelEnd"})]})}function De(e){const t=D(e);return t.body===e?Z(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(Z(e).getComputedStyle(e).paddingRight,10)||0}function $e(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function de(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const a=r.indexOf(i)===-1,u=!$e(i);a&&u&&K(i,s)})}function X(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ue(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(De(n)){const i=Me(D(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+i}px`;const a=D(n).querySelectorAll(".mui-fixed");[].forEach.call(a,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ce(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=D(n).body;else{const i=n.parentElement,a=Z(n);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function _e(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class He{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=_e(o);de(o,t.mount,t.modalRef,s,!0);const r=X(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=X(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ue(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=X(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,o),de(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ke(e){return pe("MuiModal",e)}he("MuiModal",["root","hidden"]);const We=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],je=e=>{const{open:t,exited:o,classes:n}=e;return me({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Ke,n)};function ze(e){return typeof e=="function"?e():e}function Ye(e){return e?e.props.hasOwnProperty("in"):!1}const qe=new He,Ge=c.forwardRef(function(t,o){var n,s;const{children:r,classes:i,closeAfterTransition:a=!1,component:u,container:R,disableAutoFocus:v=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:P=!1,disablePortal:x=!1,disableRestoreFocus:f=!1,disableScrollLock:I=!1,hideBackdrop:y=!1,keepMounted:w=!1,manager:k=qe,onBackdropClick:l,onClose:p,onKeyDown:T,open:h,onTransitionEnter:C,onTransitionExited:A,slotProps:M={},slots:F={}}=t,N=j(t,We),[O,L]=c.useState(!h),d=c.useRef({}),E=c.useRef(null),b=c.useRef(null),z=Q(b,o),$=Ye(r),_=(n=t["aria-hidden"])!=null?n:!0,Y=()=>D(E.current),U=()=>(d.current.modalRef=b.current,d.current.mountNode=E.current,d.current),ee=()=>{k.mount(U(),{disableScrollLock:I}),b.current&&(b.current.scrollTop=0)},te=ae(()=>{const S=ze(R)||Y().body;k.add(U(),S),b.current&&ee()}),q=c.useCallback(()=>k.isTopModal(U()),[k]),be=ae(S=>{E.current=S,!(!S||!b.current)&&(h&&q()?ee():K(b.current,_))}),H=c.useCallback(()=>{k.remove(U(),_)},[k,_]);c.useEffect(()=>()=>{H()},[H]),c.useEffect(()=>{h?te():(!$||!a)&&H()},[h,H,$,a,te]);const G=g({},t,{classes:i,closeAfterTransition:a,disableAutoFocus:v,disableEnforceFocus:m,disableEscapeKeyDown:P,disablePortal:x,disableRestoreFocus:f,disableScrollLock:I,exited:O,hideBackdrop:y,keepMounted:w}),ne=je(G),Ee=()=>{L(!1),C&&C()},ge=()=>{L(!0),A&&A(),a&&H()},xe=S=>{S.target===S.currentTarget&&(l&&l(S),p&&p(S,"backdropClick"))},ye=S=>{T&&T(S),!(S.key!=="Escape"||!q())&&(P||(S.stopPropagation(),p&&p(S,"escapeKeyDown")))},W={};r.props.tabIndex===void 0&&(W.tabIndex="-1"),$&&(W.onEnter=le(Ee,r.props.onEnter),W.onExited=le(ge,r.props.onExited));const oe=(s=u??F.root)!=null?s:"div",ke=re({elementType:oe,externalSlotProps:M.root,externalForwardedProps:N,additionalProps:{ref:z,role:"presentation",onKeyDown:ye},className:ne.root,ownerState:G}),V=F.backdrop,Te=re({elementType:V,externalSlotProps:M.backdrop,additionalProps:{"aria-hidden":!0,onClick:xe,open:h},className:ne.backdrop,ownerState:G});return!w&&!h&&(!$||O)?null:B(Pe,{ref:be,container:R,disablePortal:x,children:ue(oe,g({},ke,{children:[!y&&V?B(V,g({},Te)):null,B(Le,{disableEnforceFocus:m,disableAutoFocus:v,disableRestoreFocus:f,isEnabled:q,open:h,children:c.cloneElement(r,W)})]}))})}),Ve=Ge,Xe=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Je={entering:{opacity:1},entered:{opacity:1}},Qe=c.forwardRef(function(t,o){const n=ve(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:u,in:R,onEnter:v,onEntered:m,onEntering:P,onExit:x,onExited:f,onExiting:I,style:y,timeout:w=s,TransitionComponent:k=Se}=t,l=j(t,Xe),p=c.useRef(null),T=Q(p,a.ref,o),h=d=>E=>{if(d){const b=p.current;E===void 0?d(b):d(b,E)}},C=h(P),A=h((d,E)=>{Ce(d);const b=se({style:y,timeout:w,easing:u},{mode:"enter"});d.style.webkitTransition=n.transitions.create("opacity",b),d.style.transition=n.transitions.create("opacity",b),v&&v(d,E)}),M=h(m),F=h(I),N=h(d=>{const E=se({style:y,timeout:w,easing:u},{mode:"exit"});d.style.webkitTransition=n.transitions.create("opacity",E),d.style.transition=n.transitions.create("opacity",E),x&&x(d)}),O=h(f);return B(k,g({appear:i,in:R,nodeRef:p,onEnter:A,onEntered:M,onEntering:C,onExit:N,onExited:O,onExiting:F,addEndListener:d=>{r&&r(p.current,d)},timeout:w},l,{children:(d,E)=>c.cloneElement(a,g({style:g({opacity:0,visibility:d==="exited"&&!R?"hidden":void 0},Je[d],y,a.props.style),ref:T},E))}))}),Ze=Qe;function et(e){return pe("MuiBackdrop",e)}he("MuiBackdrop",["root","invisible"]);const tt=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],nt=e=>{const{classes:t,invisible:o}=e;return me({root:["root",o&&"invisible"]},et,t)},ot=J("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>g({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),rt=c.forwardRef(function(t,o){var n,s,r;const i=fe({props:t,name:"MuiBackdrop"}),{children:a,component:u="div",components:R={},componentsProps:v={},className:m,invisible:P=!1,open:x,slotProps:f={},slots:I={},transitionDuration:y,TransitionComponent:w=Ze}=i,k=j(i,tt),l=g({},i,{component:u,invisible:P}),p=nt(l),T=(n=f.root)!=null?n:v.root;return B(w,g({in:x,timeout:y},k,{children:B(ot,g({"aria-hidden":!0},T,{as:(s=(r=I.root)!=null?r:R.Root)!=null?s:u,className:Re(p.root,m,T==null?void 0:T.className),ownerState:g({},l,T==null?void 0:T.ownerState),classes:p,ref:o,children:a}))}))}),st=rt,it=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],at=e=>e.classes,lt=J("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>g({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),ct=J(st,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),dt=c.forwardRef(function(t,o){var n,s,r,i,a,u;const R=fe({name:"MuiModal",props:t}),{BackdropComponent:v=ct,BackdropProps:m,closeAfterTransition:P=!1,children:x,component:f,components:I={},componentsProps:y={},disableAutoFocus:w=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:l=!1,disablePortal:p=!1,disableRestoreFocus:T=!1,disableScrollLock:h=!1,hideBackdrop:C=!1,keepMounted:A=!1,slotProps:M,slots:F,theme:N}=R,O=j(R,it),[L,d]=c.useState(!0),E={closeAfterTransition:P,disableAutoFocus:w,disableEnforceFocus:k,disableEscapeKeyDown:l,disablePortal:p,disableRestoreFocus:T,disableScrollLock:h,hideBackdrop:C,keepMounted:A},b=g({},R,E,{exited:L}),z=at(b),$=(n=(s=F==null?void 0:F.root)!=null?s:I.Root)!=null?n:lt,_=(r=(i=F==null?void 0:F.backdrop)!=null?i:I.Backdrop)!=null?r:v,Y=(a=M==null?void 0:M.root)!=null?a:y.root,U=(u=M==null?void 0:M.backdrop)!=null?u:y.backdrop;return B(Ve,g({slots:{root:$,backdrop:_},slotProps:{root:()=>g({},ie(Y,b),!we($)&&{as:f,theme:N}),backdrop:()=>g({},m,ie(U,b))},onTransitionEnter:()=>d(!1),onTransitionExited:()=>d(!0),ref:o},O,{classes:z},E,{children:x}))}),Et=dt;export{st as B,Ze as F,Et as M,bt as d,Me as g,Z as o};
