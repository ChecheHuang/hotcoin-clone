import{r as a,u as E}from"./index-WrwKDtZH.js";import{g as A}from"./list-B1lPs2b8.js";function T(n,e){return a.useReducer((r,t)=>e[r][t]??r,n)}var P=n=>{const{present:e,children:r}=n,t=R(e),o=typeof r=="function"?r({present:t.isPresent}):a.Children.only(r),c=E(t.ref,v(o));return typeof r=="function"||t.isPresent?a.cloneElement(o,{ref:c}):null};P.displayName="Presence";function R(n){const[e,r]=a.useState(),t=a.useRef({}),o=a.useRef(n),c=a.useRef("none"),p=n?"mounted":"unmounted",[N,s]=T(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const i=l(t.current);c.current=N==="mounted"?i:"none"},[N]),A(()=>{const i=t.current,m=o.current;if(m!==n){const f=c.current,u=l(i);n?s("MOUNT"):u==="none"||(i==null?void 0:i.display)==="none"?s("UNMOUNT"):s(m&&f!==u?"ANIMATION_OUT":"UNMOUNT"),o.current=n}},[n,s]),A(()=>{if(e){let i;const m=e.ownerDocument.defaultView??window,d=u=>{const M=l(t.current).includes(u.animationName);if(u.target===e&&M&&(s("ANIMATION_END"),!o.current)){const O=e.style.animationFillMode;e.style.animationFillMode="forwards",i=m.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=O)})}},f=u=>{u.target===e&&(c.current=l(t.current))};return e.addEventListener("animationstart",f),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{m.clearTimeout(i),e.removeEventListener("animationstart",f),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[e,s]),{isPresent:["mounted","unmountSuspended"].includes(N),ref:a.useCallback(i=>{i&&(t.current=getComputedStyle(i)),r(i)},[])}}function l(n){return(n==null?void 0:n.animationName)||"none"}function v(n){var t,o;let e=(t=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:t.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?n.ref:(e=(o=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:o.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}export{P};
