import{r as u,X as I,a as i,_ as b,b as S,J as C}from"./index-d882999b.js";import{b as E,u as w,j as h,m as g}from"./hooks-15d50f7a.js";function M(e,s){return u.isValidElement(e)&&s.indexOf(e.type.muiName)!==-1}let x=0;function H(e){const[s,n]=u.useState(e),t=e||s;return u.useEffect(()=>{s==null&&(x+=1,n(`mui-${x}`))},[s]),t}const N=I["useId"];function Z(e){if(N!==void 0){const s=N();return e??s}return H(e)}function k(e){return typeof e=="string"}function _(e,s,n){return e===void 0||k(e)?s:i({},s,{ownerState:i({},s.ownerState,n)})}function F(e,s=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!s.includes(t)).forEach(t=>{n[t]=e[t]}),n}function j(e,s){return typeof e=="function"?e(s):e}function R(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{s[n]=e[n]}),s}function O(e){const{getSlotProps:s,additionalProps:n,externalSlotProps:t,externalForwardedProps:o,className:r}=e;if(!s){const v=E(o==null?void 0:o.className,t==null?void 0:t.className,r,n==null?void 0:n.className),P=i({},n==null?void 0:n.style,o==null?void 0:o.style,t==null?void 0:t.style),p=i({},n,o,t);return v.length>0&&(p.className=v),Object.keys(P).length>0&&(p.style=P),{props:p,internalRef:void 0}}const l=F(i({},o,t)),c=R(t),d=R(o),a=s(l),f=E(a==null?void 0:a.className,n==null?void 0:n.className,r,o==null?void 0:o.className,t==null?void 0:t.className),y=i({},a==null?void 0:a.style,n==null?void 0:n.style,o==null?void 0:o.style,t==null?void 0:t.style),m=i({},a,n,d,c);return f.length>0&&(m.className=f),Object.keys(y).length>0&&(m.style=y),{props:m,internalRef:a.ref}}const V=["elementType","externalSlotProps","ownerState"];function G(e){var s;const{elementType:n,externalSlotProps:t,ownerState:o}=e,r=b(e,V),l=j(t,o),{props:c,internalRef:d}=O(i({},r,{externalSlotProps:l})),a=w(d,l==null?void 0:l.ref,(s=e.additionalProps)==null?void 0:s.ref);return _(n,i({},c,{ref:a}),o)}function W(e){return typeof e=="function"?e():e}const $=u.forwardRef(function(s,n){const{children:t,container:o,disablePortal:r=!1}=s,[l,c]=u.useState(null),d=w(u.isValidElement(t)?t.ref:null,n);if(h(()=>{r||c(W(o)||document.body)},[o,r]),h(()=>{if(l&&!r)return g(n,l),()=>{g(n,null)}},[n,l,r]),r){if(u.isValidElement(t)){const a={ref:d};return u.cloneElement(t,a)}return S(u.Fragment,{children:t})}return S(u.Fragment,{children:l&&C.createPortal(t,l)})}),J=$;export{J as P,M as a,Z as b,_ as c,k as i,j as r,G as u};
