import{p as m,r as h,a as o,t as u,_ as i,h as l,T as d}from"./index-efae79f1.js";const T=typeof Symbol=="function"&&Symbol.for,a=T?Symbol.for("mui.nested"):"__THEME_NESTED__";function f(t,e){return typeof e=="function"?e(t):i({},t,e)}function p(t){const{children:e,theme:n}=t,r=m(),c=h.useMemo(()=>{const s=r===null?n:f(r,n);return s!=null&&(s[a]=r!==null),s},[n,r]);return o(u.Provider,{value:c,children:e})}const E={};function _(t){const e=l();return o(d.Provider,{value:typeof e=="object"?e:E,children:t.children})}function y(t){const{children:e,theme:n}=t;return o(p,{theme:n,children:o(_,{children:e})})}export{y as T};
