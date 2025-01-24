import{F as Ve,z as Ae,r as N,G as $e,j as Re,S as Fe}from"./index-WrwKDtZH.js";var Ie=Ve();const Ze=Ae(Ie);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_e=(...y)=>y.filter((h,p,P)=>!!h&&h.trim()!==""&&P.indexOf(h)===p).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var We={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=N.forwardRef(({color:y="currentColor",size:h=24,strokeWidth:p=2,absoluteStrokeWidth:P,className:f="",children:l,iconNode:s,...w},S)=>N.createElement("svg",{ref:S,...We,width:h,height:h,stroke:y,strokeWidth:P?Number(p)*24/Number(h):p,className:_e("lucide",f),...w},[...s.map(([_,j])=>N.createElement(_,j)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(y,h)=>{const p=N.forwardRef(({className:P,...f},l)=>N.createElement(qe,{ref:l,iconNode:h,className:_e(`lucide-${Ue(y)}`,P),...f}));return p.displayName=`${y}`,p};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Je=ze("ChevronDown",Xe);var je={exports:{}},Le;function Ye(){return Le||(Le=1,(()=>{var y={296:(f,l,s)=>{var w=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,R=parseInt,M=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,Z=typeof self=="object"&&self&&self.Object===Object&&self,z=M||Z||Function("return this")(),ne=Object.prototype.toString,ue=Math.max,oe=Math.min,ce=function(){return z.Date.now()};function ae(g){var I=typeof g;return!!g&&(I=="object"||I=="function")}function de(g){if(typeof g=="number")return g;if(function(d){return typeof d=="symbol"||function(T){return!!T&&typeof T=="object"}(d)&&ne.call(d)=="[object Symbol]"}(g))return NaN;if(ae(g)){var I=typeof g.valueOf=="function"?g.valueOf():g;g=ae(I)?I+"":I}if(typeof g!="string")return g===0?g:+g;g=g.replace(w,"");var Y=_.test(g);return Y||j.test(g)?R(g.slice(2),Y?2:8):S.test(g)?NaN:+g}f.exports=function(g,I,Y){var d,T,X,V,D,K,A=0,J=!1,U=!1,ee=!0;if(typeof g!="function")throw new TypeError("Expected a function");function ie(k){var W=d,Q=T;return d=T=void 0,A=k,V=g.apply(Q,W)}function se(k){var W=k-K;return K===void 0||W>=I||W<0||U&&k-A>=X}function x(){var k=ce();if(se(k))return te(k);D=setTimeout(x,function(W){var Q=I-(W-K);return U?oe(Q,X-(W-A)):Q}(k))}function te(k){return D=void 0,ee&&d?ie(k):(d=T=void 0,V)}function H(){var k=ce(),W=se(k);if(d=arguments,T=this,K=k,W){if(D===void 0)return function(Q){return A=Q,D=setTimeout(x,I),J?ie(Q):V}(K);if(U)return D=setTimeout(x,I),ie(K)}return D===void 0&&(D=setTimeout(x,I)),V}return I=de(I)||0,ae(Y)&&(J=!!Y.leading,X=(U="maxWait"in Y)?ue(de(Y.maxWait)||0,I):X,ee="trailing"in Y?!!Y.trailing:ee),H.cancel=function(){D!==void 0&&clearTimeout(D),A=0,d=K=T=D=void 0},H.flush=function(){return D===void 0?V:te(ce())},H}},96:(f,l,s)=>{var w="Expected a function",S=NaN,_="[object Symbol]",j=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,z=parseInt,ne=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,ue=typeof self=="object"&&self&&self.Object===Object&&self,oe=ne||ue||Function("return this")(),ce=Object.prototype.toString,ae=Math.max,de=Math.min,g=function(){return oe.Date.now()};function I(d){var T=typeof d;return!!d&&(T=="object"||T=="function")}function Y(d){if(typeof d=="number")return d;if(function(V){return typeof V=="symbol"||function(D){return!!D&&typeof D=="object"}(V)&&ce.call(V)==_}(d))return S;if(I(d)){var T=typeof d.valueOf=="function"?d.valueOf():d;d=I(T)?T+"":T}if(typeof d!="string")return d===0?d:+d;d=d.replace(j,"");var X=M.test(d);return X||Z.test(d)?z(d.slice(2),X?2:8):R.test(d)?S:+d}f.exports=function(d,T,X){var V=!0,D=!0;if(typeof d!="function")throw new TypeError(w);return I(X)&&(V="leading"in X?!!X.leading:V,D="trailing"in X?!!X.trailing:D),function(K,A,J){var U,ee,ie,se,x,te,H=0,k=!1,W=!1,Q=!0;if(typeof K!="function")throw new TypeError(w);function le($){var re=U,G=ee;return U=ee=void 0,H=$,se=K.apply(G,re)}function me($){var re=$-te;return te===void 0||re>=A||re<0||W&&$-H>=ie}function fe(){var $=g();if(me($))return he($);x=setTimeout(fe,function(re){var G=A-(re-te);return W?de(G,ie-(re-H)):G}($))}function he($){return x=void 0,Q&&U?le($):(U=ee=void 0,se)}function pe(){var $=g(),re=me($);if(U=arguments,ee=this,te=$,re){if(x===void 0)return function(G){return H=G,x=setTimeout(fe,A),k?le(G):se}(te);if(W)return x=setTimeout(fe,A),le(te)}return x===void 0&&(x=setTimeout(fe,A)),se}return A=Y(A)||0,I(J)&&(k=!!J.leading,ie=(W="maxWait"in J)?ae(Y(J.maxWait)||0,A):ie,Q="trailing"in J?!!J.trailing:Q),pe.cancel=function(){x!==void 0&&clearTimeout(x),H=0,U=te=ee=x=void 0},pe.flush=function(){return x===void 0?se:he(g())},pe}(d,T,{leading:V,maxWait:T,trailing:D})}},703:(f,l,s)=>{var w=s(414);function S(){}function _(){}_.resetWarningCache=S,f.exports=function(){function j(Z,z,ne,ue,oe,ce){if(ce!==w){var ae=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ae.name="Invariant Violation",ae}}function R(){return j}j.isRequired=j;var M={array:j,bigint:j,bool:j,func:j,number:j,object:j,string:j,symbol:j,any:j,arrayOf:R,element:j,elementType:j,instanceOf:R,node:j,objectOf:R,oneOf:R,oneOfType:R,shape:R,exact:R,checkPropTypes:_,resetWarningCache:S};return M.PropTypes=M,M}},697:(f,l,s)=>{f.exports=s(703)()},414:f=>{f.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},h={};function p(f){var l=h[f];if(l!==void 0)return l.exports;var s=h[f]={exports:{}};return y[f](s,s.exports,p),s.exports}p.n=f=>{var l=f&&f.__esModule?()=>f.default:()=>f;return p.d(l,{a:l}),l},p.d=(f,l)=>{for(var s in l)p.o(l,s)&&!p.o(f,s)&&Object.defineProperty(f,s,{enumerable:!0,get:l[s]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(f,l)=>Object.prototype.hasOwnProperty.call(f,l),p.r=f=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})};var P={};(()=>{p.r(P),p.d(P,{LazyLoadComponent:()=>re,LazyLoadImage:()=>Me,trackWindowScroll:()=>se});const f=$e();var l=p.n(f),s=p(697);function w(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function S(n){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(n)}function _(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(n,b).enumerable})),o.push.apply(o,i)}return o}function j(n,e,o){return(e=M(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function R(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,M(i.key),i)}}function M(n){var e=function(o,i){if(S(o)!=="object"||o===null)return o;var b=o[Symbol.toPrimitive];if(b!==void 0){var m=b.call(o,"string");if(S(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return S(e)==="symbol"?e:String(e)}function Z(n,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Z(n,e)}function z(n){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(n)}var ne=function(n){n.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},ue={},oe=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Z(t,r)})(O,n);var e,o,i,b,m=(i=O,b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=z(i);if(b){var a=z(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,u){if(u&&(S(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(c)}(this,t)});function O(t){var r;if(function(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}(this,O),(r=m.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&w(),r.supportsObserver){var a=t.threshold;r.observer=function(c){return ue[c]=ue[c]||new IntersectionObserver(ne,{rootMargin:c+"px"}),ue[c]}(a)}return r}return e=O,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,r=this.placeholder.getBoundingClientRect(),a=this.placeholder.style,c=parseInt(a.getPropertyValue("margin-left"),10)||0,u=parseInt(a.getPropertyValue("margin-top"),10)||0;return{bottom:t.y+r.bottom+u,left:t.x+r.left+c,right:t.x+r.right+c,top:t.y+r.top+u}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,r=t.scrollPosition,a=t.threshold,c=this.getPlaceholderBoundingBox(r),u=r.y+window.innerHeight,v=r.x,C=r.x+window.innerWidth,L=r.y;return L-a<=c.bottom&&u+a>=c.top&&v-a<=c.right&&C+a>=c.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,r=this.props,a=r.className,c=r.height,u=r.placeholder,v=r.style,C=r.width;if(u&&typeof u.type!="function")return l().cloneElement(u,{ref:function(E){return t.placeholder=E}});var L=function(E){for(var F=1;F<arguments.length;F++){var B=arguments[F]!=null?arguments[F]:{};F%2?_(Object(B),!0).forEach(function(q){j(E,q,B[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(B)):_(Object(B)).forEach(function(q){Object.defineProperty(E,q,Object.getOwnPropertyDescriptor(B,q))})}return E}({display:"inline-block"},v);return C!==void 0&&(L.width=C),c!==void 0&&(L.height=c),l().createElement("span",{className:a,ref:function(E){return t.placeholder=E},style:L},u)}}],o&&R(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),O}(l().Component);oe.propTypes={onVisible:s.PropTypes.func.isRequired,className:s.PropTypes.string,height:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string]),placeholder:s.PropTypes.element,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,scrollPosition:s.PropTypes.shape({x:s.PropTypes.number.isRequired,y:s.PropTypes.number.isRequired}),width:s.PropTypes.oneOfType([s.PropTypes.number,s.PropTypes.string])},oe.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const ce=oe;var ae=p(296),de=p.n(ae),g=p(96),I=p.n(g),Y=function(n){var e=getComputedStyle(n,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const d=function(n){if(!(n instanceof HTMLElement))return window;for(var e=n;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(Y(e)))return e;e=e.parentNode}return window};function T(n){return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(n)}var X=["delayMethod","delayTime"];function V(){return V=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},V.apply(this,arguments)}function D(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(b=function(m,O){if(T(m)!=="object"||m===null)return m;var t=m[Symbol.toPrimitive];if(t!==void 0){var r=t.call(m,"string");if(T(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(i.key),T(b)==="symbol"?b:String(b)),i)}var b}function K(n,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},K(n,e)}function A(n,e){if(e&&(T(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return J(n)}function J(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function U(n){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(n)}var ee=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},ie=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const se=function(n){var e=function(o){(function(a,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),c&&K(a,c)})(r,o);var i,b,m,O,t=(m=r,O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,c=U(m);if(O){var u=U(this).constructor;a=Reflect.construct(c,arguments,u)}else a=c.apply(this,arguments);return A(this,a)});function r(a){var c;if(function(v,C){if(!(v instanceof C))throw new TypeError("Cannot call a class as a function")}(this,r),(c=t.call(this,a)).useIntersectionObserver=a.useIntersectionObserver&&w(),c.useIntersectionObserver)return A(c);var u=c.onChangeScroll.bind(J(c));return a.delayMethod==="debounce"?c.delayedScroll=de()(u,a.delayTime):a.delayMethod==="throttle"&&(c.delayedScroll=I()(u,a.delayTime)),c.state={scrollPosition:{x:ee(),y:ie()}},c.baseComponentRef=l().createRef(),c}return i=r,(b=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||d(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=d(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:ee(),y:ie()}})}},{key:"render",value:function(){var a=this.props,c=(a.delayMethod,a.delayTime,function(v,C){if(v==null)return{};var L,E,F=function(q,be){if(q==null)return{};var ye,Oe,xe={},Ce=Object.keys(q);for(Oe=0;Oe<Ce.length;Oe++)ye=Ce[Oe],be.indexOf(ye)>=0||(xe[ye]=q[ye]);return xe}(v,C);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(v);for(E=0;E<B.length;E++)L=B[E],C.indexOf(L)>=0||Object.prototype.propertyIsEnumerable.call(v,L)&&(F[L]=v[L])}return F}(a,X)),u=this.useIntersectionObserver?null:this.state.scrollPosition;return l().createElement(n,V({forwardRef:this.baseComponentRef,scrollPosition:u},c))}}])&&D(i.prototype,b),Object.defineProperty(i,"prototype",{writable:!1}),r}(l().Component);return e.propTypes={delayMethod:s.PropTypes.oneOf(["debounce","throttle"]),delayTime:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function x(n){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(n)}function te(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(b=function(m,O){if(x(m)!=="object"||m===null)return m;var t=m[Symbol.toPrimitive];if(t!==void 0){var r=t.call(m,"string");if(x(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(i.key),x(b)==="symbol"?b:String(b)),i)}var b}function H(n,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},H(n,e)}function k(n){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(n)}var W=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&H(t,r)})(O,n);var e,o,i,b,m=(i=O,b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=k(i);if(b){var a=k(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,u){if(u&&(x(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(c)}(this,t)});function O(t){return function(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}(this,O),m.call(this,t)}return e=O,(o=[{key:"render",value:function(){return l().createElement(ce,this.props)}}])&&te(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),O}(l().Component);const Q=se(W);function le(n){return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(n)}function me(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(b=function(m,O){if(le(m)!=="object"||m===null)return m;var t=m[Symbol.toPrimitive];if(t!==void 0){var r=t.call(m,"string");if(le(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(i.key),le(b)==="symbol"?b:String(b)),i)}var b}function fe(n,e){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},fe(n,e)}function he(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pe(n){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},pe(n)}var $=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&fe(t,r)})(O,n);var e,o,i,b,m=(i=O,b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=pe(i);if(b){var a=pe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,u){if(u&&(le(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return he(c)}(this,t)});function O(t){var r;(function(C,L){if(!(C instanceof L))throw new TypeError("Cannot call a class as a function")})(this,O),r=m.call(this,t);var a=t.afterLoad,c=t.beforeLoad,u=t.scrollPosition,v=t.visibleByDefault;return r.state={visible:v},v&&(c(),a()),r.onVisible=r.onVisible.bind(he(r)),r.isScrollTracked=!!(u&&Number.isFinite(u.x)&&u.x>=0&&Number.isFinite(u.y)&&u.y>=0),r}return e=O,(o=[{key:"componentDidUpdate",value:function(t,r){r.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,r=t.className,a=t.delayMethod,c=t.delayTime,u=t.height,v=t.placeholder,C=t.scrollPosition,L=t.style,E=t.threshold,F=t.useIntersectionObserver,B=t.width;return this.isScrollTracked||F&&w()?l().createElement(ce,{className:r,height:u,onVisible:this.onVisible,placeholder:v,scrollPosition:C,style:L,threshold:E,useIntersectionObserver:F,width:B}):l().createElement(Q,{className:r,delayMethod:a,delayTime:c,height:u,onVisible:this.onVisible,placeholder:v,style:L,threshold:E,width:B})}}])&&me(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),O}(l().Component);$.propTypes={afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool},$.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const re=$;function G(n){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(n)}var De=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Se(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(n,b).enumerable})),o.push.apply(o,i)}return o}function Te(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(o),!0).forEach(function(i){Be(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Se(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function Be(n,e,o){return(e=Ee(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function ve(){return ve=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},ve.apply(this,arguments)}function Ne(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Ee(i.key),i)}}function Ee(n){var e=function(o,i){if(G(o)!=="object"||o===null)return o;var b=o[Symbol.toPrimitive];if(b!==void 0){var m=b.call(o,"string");if(G(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return G(e)==="symbol"?e:String(e)}function we(n,e){return we=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},we(n,e)}function ge(n){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(n)}var Pe=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&we(t,r)})(O,n);var e,o,i,b,m=(i=O,b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=ge(i);if(b){var a=ge(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(c,u){if(u&&(G(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(c)}(this,t)});function O(t){var r;return function(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}(this,O),(r=m.call(this,t)).state={loaded:!1},r}return e=O,(o=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(r){t.props.onLoad(r),t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,r=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(a,c){if(a==null)return{};var u,v,C=function(E,F){if(E==null)return{};var B,q,be={},ye=Object.keys(E);for(q=0;q<ye.length;q++)B=ye[q],F.indexOf(B)>=0||(be[B]=E[B]);return be}(a,c);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(a);for(v=0;v<L.length;v++)u=L[v],c.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(a,u)&&(C[u]=a[u])}return C}(t,De));return l().createElement("img",ve({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var t=this.props,r=t.beforeLoad,a=t.className,c=t.delayMethod,u=t.delayTime,v=t.height,C=t.placeholder,L=t.scrollPosition,E=t.style,F=t.threshold,B=t.useIntersectionObserver,q=t.visibleByDefault,be=t.width;return l().createElement(re,{beforeLoad:r,className:a,delayMethod:c,delayTime:u,height:v,placeholder:C,scrollPosition:L,style:E,threshold:F,useIntersectionObserver:B,visibleByDefault:q,width:be},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var r=this.props,a=r.effect,c=r.height,u=r.placeholderSrc,v=r.width,C=r.wrapperClassName,L=r.wrapperProps,E=this.state.loaded,F=E?" lazy-load-image-loaded":"",B=E||!u?{}:{backgroundImage:"url(".concat(u,")"),backgroundSize:"100% 100%"};return l().createElement("span",ve({className:C+" lazy-load-image-background "+a+F,style:Te(Te({},B),{},{color:"transparent",display:"inline-block",height:c,width:v})},L),t)}},{key:"render",value:function(){var t=this.props,r=t.effect,a=t.placeholderSrc,c=t.visibleByDefault,u=t.wrapperClassName,v=t.wrapperProps,C=this.getLazyLoadImage();return(r||a)&&!c||u||v?this.getWrappedLazyLoadImage(C):C}}])&&Ne(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),O}(l().Component);Pe.propTypes={onLoad:s.PropTypes.func,afterLoad:s.PropTypes.func,beforeLoad:s.PropTypes.func,delayMethod:s.PropTypes.string,delayTime:s.PropTypes.number,effect:s.PropTypes.string,placeholderSrc:s.PropTypes.string,threshold:s.PropTypes.number,useIntersectionObserver:s.PropTypes.bool,visibleByDefault:s.PropTypes.bool,wrapperClassName:s.PropTypes.string,wrapperProps:s.PropTypes.object},Pe.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Me=Pe})(),je.exports=P})()),je.exports}var et=Ye();function tt(y,h,{checkForDefaultPrevented:p=!0}={}){return function(f){if(y==null||y(f),p===!1||!f.defaultPrevented)return h==null?void 0:h(f)}}function rt(y,h=[]){let p=[];function P(l,s){const w=N.createContext(s),S=p.length;p=[...p,s];const _=R=>{var oe;const{scope:M,children:Z,...z}=R,ne=((oe=M==null?void 0:M[y])==null?void 0:oe[S])||w,ue=N.useMemo(()=>z,Object.values(z));return Re.jsx(ne.Provider,{value:ue,children:Z})};_.displayName=l+"Provider";function j(R,M){var ne;const Z=((ne=M==null?void 0:M[y])==null?void 0:ne[S])||w,z=N.useContext(Z);if(z)return z;if(s!==void 0)return s;throw new Error(`\`${R}\` must be used within \`${l}\``)}return[_,j]}const f=()=>{const l=p.map(s=>N.createContext(s));return function(w){const S=(w==null?void 0:w[y])||l;return N.useMemo(()=>({[`__scope${y}`]:{...w,[y]:S}}),[w,S])}};return f.scopeName=y,[P,Ke(f,...h)]}function Ke(...y){const h=y[0];if(y.length===1)return h;const p=()=>{const P=y.map(f=>({useScope:f(),scopeName:f.scopeName}));return function(l){const s=P.reduce((w,{useScope:S,scopeName:_})=>{const R=S(l)[`__scope${_}`];return{...w,...R}},{});return N.useMemo(()=>({[`__scope${h.scopeName}`]:s}),[s])}};return p.scopeName=h.scopeName,p}function ke(y){const h=N.useRef(y);return N.useEffect(()=>{h.current=y}),N.useMemo(()=>(...p)=>{var P;return(P=h.current)==null?void 0:P.call(h,...p)},[])}function nt({prop:y,defaultProp:h,onChange:p=()=>{}}){const[P,f]=Ge({defaultProp:h,onChange:p}),l=y!==void 0,s=l?y:P,w=ke(p),S=N.useCallback(_=>{if(l){const R=typeof _=="function"?_(y):_;R!==y&&w(R)}else f(_)},[l,y,f,w]);return[s,S]}function Ge({defaultProp:y,onChange:h}){const p=N.useState(y),[P]=p,f=N.useRef(P),l=ke(h);return N.useEffect(()=>{f.current!==P&&(l(P),f.current=P)},[P,f,l]),p}var He=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ot=He.reduce((y,h)=>{const p=N.forwardRef((P,f)=>{const{asChild:l,...s}=P,w=l?Fe:h;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Re.jsx(w,{...s,ref:f})});return p.displayName=`Primitive.${h}`,{...y,[h]:p}},{});function it(y,h){y&&Ie.flushSync(()=>y.dispatchEvent(h))}var st=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{};const ut=["USDT","USDC","ETF","BTC","ALTS"],ct=["BAND","BAL","XEC","RPL","BLUR","BTT","GMX","RSR","SOL","BAT","GMT","APE","AVAX","CYBER","CRV","LAVE","SNX","STRK","ENT","KAVA","FIL","ZEUS","SUI","1INCH","YFI","DYDX","JST","PHA","HFI","ORBS","LUNC","QI","ANKR","SKVBS"],at=["全部","Solana专区","TON专区","AI Agent","Base专区","DeSci","BRC20","GameFi","COSMOS板块","AI专区","Meme","粉丝代币","DeFi专区","波卡生态板块","存储板块","NFT专区","香港板块","Layer2专区","元宇宙专区","Depin专区","RWA","Runes专区","Arbitrum"],lt=[{title:"买币"},{title:"行情"},{title:"交易"},{title:"合约"},{title:"跟单",isShowHoverCardContent:!1},{title:"理财"},{title:"更多"}],ft=["USDT合约","币本位合约"],pt=[{title:"关于我们",items:["平台介绍","公告中心","加入我们","系统状态","用户协议","隐私条款","法律说明"]},{title:"产品",items:["NFT","Startup","理财赚币","质押借币","合约交易","现货交易","杠杆交易"]},{title:"服务",items:["一键买币","信用卡买币","申请C2C商家","好友邀请","直播","VIP权益","下载","桌面客户端"]},{title:"支持",items:["Hotcoin学院","帮助中心","在线客服","用户反馈","上市申请","API文档","费率标准","币种信息","NFT项目申请","官方验证"]},{title:"联系我们",items:["客服邮箱：Service@hotcoin.com","产品反馈：Product@hotcoin.com","商务合作：Business@hotcoin.com","司法邮箱：Casecn@hotcoin.com"]}],yt=[{title:"什么是理财赚币？",description:"理财赚币是一种数字货币的投资方式，用户可以通过将自己的加密货币借给平台，以获取一定的利息或奖励。它类似于银行的定期存款，但以加密货币为基础。"},{title:"理财赚币如何运作？",description:"用户将数字资产存入理财平台，平台会将这些资产借给需要的人或机构，并收取一定的利息。平台会将部分利息支付给用户，作为用户投资的回报。"},{title:"支持哪些数字货币？",description:"不同的理财赚币平台支持的数字货币种类各不相同。常见的支持货币包括比特币（BTC）、以太坊（ETH）、泰达币（USDT）等。建议您在选择平台时查看其支持的货币列表。"},{title:"我是否有资格加入理财赚币？",description:"大多数理财赚币平台没有严格的资格要求，只要您拥有数字货币，并且在平台上完成注册，即可加入。但部分平台可能会有地区限制，请您在注册前仔细阅读相关条款。"},{title:"如何开始赚取收益？",description:"通常，您需要在理财平台上注册账户，并将您持有的数字货币转移到平台账户。然后，选择您要投资的理财产品，确认条款后即可开始赚取收益。"},{title:"收益值为何存在波动？",description:"理财赚币的收益值通常会受到市场供需、平台策略、以及所借出货币的价格波动等因素影响，所以可能存在波动。风险是数字货币投资的一部分，请您谨慎投资。"},{title:"活期理财和定期理财有何区别？",description:"活期理财类似于活期存款，您可以随时存取资产，但收益率可能较低。定期理财类似于定期存款，您需要将资产锁定一段时间，收益率通常较高。"},{title:"在哪里可以查看我的持仓情况？",description:"您通常可以在理财平台的个人账户页面，查看您的持仓情况、收益记录以及其他相关信息。请您仔细查看平台提供的操作指南。"}];export{Je as C,ot as P,Ze as R,tt as a,rt as b,ze as c,it as d,nt as e,et as f,st as g,ft as h,ut as i,lt as m,pt as n,yt as q,Ie as r,at as s,ct as t,ke as u};
