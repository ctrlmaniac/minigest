import{r as c}from"./index-8a79851f.js";var n={},b={get exports(){return n},set exports(e){n=e}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=w,k=R;function u(){}function v(){}v.resetWarningCache=u;var E=function(){function e(o,l,f,i,m,a){if(a!==k){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:v,resetWarningCache:u};return t.PropTypes=t,t};b.exports=E();var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},x=Object.defineProperty,j=Object.defineProperties,C=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&y(e,t,r[t]);if(s)for(var t of s(r))d.call(r,t)&&y(e,t,r[t]);return e},N=(e,r)=>j(e,C(r)),W=(e,r)=>{var t={};for(var o in e)h.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&s)for(var o of s(e))r.indexOf(o)<0&&d.call(e,o)&&(t[o]=e[o]);return t},D=(e,r,t)=>{const o=c.forwardRef((l,f)=>{var i=l,{color:m="currentColor",size:a=24,stroke:p=2,children:O}=i,g=W(i,["color","size","stroke","children"]);return c.createElement("svg",_(N(_({ref:f},S),{width:a,height:a,stroke:m,strokeWidth:p,className:`tabler-icon tabler-icon-${e}`}),g),[...t.map(([P,T])=>c.createElement(P,T)),...O||[]])});return o.propTypes={color:n.string,size:n.oneOfType([n.string,n.number]),stroke:n.oneOfType([n.string,n.number])},o.displayName=`${r}`,o};export{D as c};