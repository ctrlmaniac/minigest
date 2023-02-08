import{r as i,R as A,_ as X,c as oe,a as O,A as ie,t as Ee,j as ze}from"./index-73338ee1.js";import{c as C,a as Te,s as se,g as Ae,b as Xe}from"./Box-d8a03651.js";function Ye(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const We=typeof window<"u"?i.useLayoutEffect:i.useEffect,He=We;function H(e){const t=i.useRef(e);return He(()=>{t.current=e}),i.useCallback((...r)=>(0,t.current)(...r),[])}function de(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Ye(r,t)})},e)}let G=!0,te=!1,he;const Ge={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qe(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Ge[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Je(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Ze(e){e.addEventListener("keydown",Je,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Qe,!0)}function et(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||qe(t)}function tt(){const e=i.useCallback(n=>{n!=null&&Ze(n.ownerDocument)},[]),t=i.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return et(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,n){return u.__proto__=n,u},ne(e,t)}function nt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}const me=A.createContext(null);function rt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var r=function(o){return t&&i.isValidElement(o)?t(o):o},u=Object.create(null);return e&&i.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function ot(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var o in e)o in t?n.length&&(u[o]=n,n=[]):n.push(o);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function it(e,t){return ae(e.children,function(r){return i.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function st(e,t,r){var u=ae(e.children),n=ot(t,u);return Object.keys(n).forEach(function(o){var s=n[o];if(i.isValidElement(s)){var c=o in t,l=o in u,p=t[o],d=i.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[o]=i.cloneElement(s,{in:!1}):l&&c&&i.isValidElement(p)&&(n[o]=i.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var at=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ut={component:"div",childFactory:function(t){return t}},ue=function(e){nt(t,e);function t(u,n){var o;o=e.call(this,u,n)||this;var s=o.handleExited.bind(rt(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,l=o.firstRender;return{children:l?it(n,c):st(n,s,c),firstRender:!1}},r.handleExited=function(n,o){var s=ae(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=oe(n,["component","childFactory"]),l=this.state.contextValue,p=at(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(me.Provider,{value:l},p):A.createElement(me.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=ut;const lt=ue;function ct(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=i.useState(!1),b=C(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),V={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},h=C(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),i.useEffect(()=>{if(!c&&l!=null){const y=setTimeout(l,p);return()=>{clearTimeout(y)}}},[l,c,p]),O("span",{className:b,style:V,children:O("span",{className:h})})}const pt=Te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=pt,ft=["center","classes","className"];let q=e=>e,be,ge,ye,Re;const re=550,dt=80,ht=ie(be||(be=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),mt=ie(ge||(ge=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),bt=ie(ye||(ye=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),gt=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),yt=se(ct,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,ht,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,mt,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,bt,({theme:e})=>e.transitions.easing.easeInOut),Rt=i.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s}=u,c=oe(u,ft),[l,p]=i.useState([]),d=i.useRef(0),g=i.useRef(null);i.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=i.useRef(!1),V=i.useRef(null),h=i.useRef(null),y=i.useRef(null);i.useEffect(()=>()=>{clearTimeout(V.current)},[]);const I=i.useCallback(f=>{const{pulsate:R,rippleX:E,rippleY:D,rippleSize:_,cb:K}=f;p(T=>[...T,O(yt,{classes:{ripple:C(o.ripple,m.ripple),rippleVisible:C(o.rippleVisible,m.rippleVisible),ripplePulsate:C(o.ripplePulsate,m.ripplePulsate),child:C(o.child,m.child),childLeaving:C(o.childLeaving,m.childLeaving),childPulsate:C(o.childPulsate,m.childPulsate)},timeout:re,pulsate:R,rippleX:E,rippleY:D,rippleSize:_},d.current)]),d.current+=1,g.current=K},[o]),$=i.useCallback((f={},R={},E=()=>{})=>{const{pulsate:D=!1,center:_=n||R.pulsate,fakeElement:K=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=K?null:y.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,B,L;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:k,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(k-P.left),B=Math.round(v-P.top)}if(_)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-x),x)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;L=Math.sqrt(k**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{I({pulsate:D,rippleX:x,rippleY:B,rippleSize:L,cb:E})},V.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},dt)):I({pulsate:D,rippleX:x,rippleY:B,rippleSize:L,cb:E})},[n,I]),U=i.useCallback(()=>{$({},{pulsate:!0})},[$]),N=i.useCallback((f,R)=>{if(clearTimeout(V.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,V.current=setTimeout(()=>{N(f,R)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=R},[]);return i.useImperativeHandle(r,()=>({pulsate:U,start:$,stop:N}),[U,$,N]),O(gt,X({className:C(m.root,o.root,s),ref:y},c,{children:O(lt,{component:null,exit:!0,children:l})}))}),Et=Rt;function Tt(e){return Ae("MuiButtonBase",e)}const Mt=Te("MuiButtonBase",["root","disabled","focusVisible"]),Ct=Mt,xt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],vt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Xe({root:["root",t&&"disabled",r&&"focusVisible"]},Tt,n);return r&&u&&(s.root+=` ${u}`),s},wt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Vt=i.forwardRef(function(t,r){const u=Ee({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:V="a",onBlur:h,onClick:y,onContextMenu:I,onDragLeave:$,onFocus:U,onFocusVisible:N,onKeyDown:f,onKeyUp:R,onMouseDown:E,onMouseLeave:D,onMouseUp:_,onTouchEnd:K,onTouchMove:T,onTouchStart:P,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:L,type:k}=u,v=oe(u,xt),j=i.useRef(null),M=i.useRef(null),Me=de(M,L),{isFocusVisibleRef:le,onFocus:Ce,onBlur:xe,ref:ve}=tt(),[F,Y]=i.useState(!1);p&&F&&Y(!1),i.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),j.current.focus()}}),[]);const[J,we]=i.useState(!1);i.useEffect(()=>{we(!0)},[]);const Ve=J&&!d&&!p;i.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(a,pe,je=g){return H(fe=>(pe&&pe(fe),!je&&M.current&&M.current[a](fe),!0))}const Pe=w("start",E),Be=w("stop",I),Le=w("stop",$),De=w("stop",_),ke=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),Fe=w("start",P),Se=w("stop",K),$e=w("stop",T),Ne=w("stop",a=>{xe(a),le.current===!1&&Y(!1),h&&h(a)},!1),_e=H(a=>{j.current||(j.current=a.currentTarget),Ce(a),le.current===!0&&(Y(!0),N&&N(a)),U&&U(a)}),Q=()=>{const a=j.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=i.useRef(!1),Oe=H(a=>{b&&!Z.current&&F&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),Ie=H(a=>{b&&a.key===" "&&M.current&&F&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&y(a)});let W=l;W==="button"&&(v.href||v.to)&&(W=V);const z={};W==="button"?(z.type=k===void 0?"button":k,z.disabled=p):(!v.href&&!v.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ue=de(r,ve,j),ce=X({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:F}),Ke=vt(ce);return ze(wt,X({as:W,className:C(Ke.root,c),ownerState:ce,onBlur:Ne,onClick:y,onContextMenu:Be,onFocus:_e,onKeyDown:Oe,onKeyUp:Ie,onMouseDown:Pe,onMouseLeave:ke,onMouseUp:De,onDragLeave:Le,onTouchEnd:Se,onTouchMove:$e,onTouchStart:Fe,ref:Ue,tabIndex:p?-1:x,type:k},z,v,{children:[s,Ve?O(Et,X({ref:Me,center:o},B)):null]}))}),Dt=Vt;export{Dt as B,me as T,nt as _,He as a,H as b,Ye as s,de as u};
