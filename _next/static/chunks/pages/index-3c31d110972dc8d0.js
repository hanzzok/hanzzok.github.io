(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(t,e,s){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.AmpStateContext=void 0;const r=((n=s(1720))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=r},5646:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isInAmpMode=o,e.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var n,r=(n=s(1720))&&n.__esModule?n:{default:n},i=s(8e3);function o({ampFirst:t=!1,hybrid:e=!1,hasQuery:s=!1}={}){return t||e&&s}},2717:function(t,e,s){"use strict";var n=s(1682);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}Object.defineProperty(e,"__esModule",{value:!0}),e.defaultHead=l,e.default=void 0;var i,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,s):{};n.get||n.set?Object.defineProperty(e,s,n):e[s]=t[s]}return e.default=t,e}(s(1720)),a=(i=s(1585))&&i.__esModule?i:{default:i},h=s(8e3),c=s(5850),u=s(5646);function l(t=!1){const e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce(((t,e)=>"string"===typeof e||"number"===typeof e?t:t.concat(e)),[])):t.concat(e)}const d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce(((t,e)=>{const s=o.default.Children.toArray(e.props.children);return t.concat(s)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){const t=new Set,e=new Set,s=new Set,n={};return r=>{let i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;const e=r.key.slice(r.key.indexOf("$")+1);t.has(e)?i=!1:t.add(e)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(let t=0,e=d.length;t<e;t++){const e=d[t];if(r.props.hasOwnProperty(e))if("charSet"===e)s.has(e)?i=!1:s.add(e);else{const t=r.props[e],s=n[e]||new Set;"name"===e&&o||!s.has(t)?(s.add(t),n[e]=s):i=!1}}}return i}}()).reverse().map(((t,s)=>{const i=t.key||s;if(!e.inAmpMode&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((e=>t.props.href.startsWith(e)))){const e=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},t.props||{});return e["data-href"]=e.href,e.href=void 0,e["data-optimized-fonts"]=!0,o.default.cloneElement(t,e)}return o.default.cloneElement(t,{key:i})}))}var g=function({children:t}){const e=o.useContext(h.AmpStateContext),s=o.useContext(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:s,inAmpMode:u.isInAmpMode(e)},t)};e.default=g},1585:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,s):{};n.get||n.set?Object.defineProperty(e,s,n):e[s]=t[s]}return e.default=t,e}(s(1720));class r extends n.Component{constructor(t){super(t),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}e.default=r},4152:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return O}});var n=s(2496),r=s(8650),i=s(9008),o=s(1720);const a="http://www.w3.org/2000/svg";class h{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function c(t,e,s,n,r){return{type:"path",ops:m(t,e,s,n,r)}}function u(t,e,s){const n=(t||[]).length;if(n>2){const r=[];for(let e=0;e<n-1;e++)r.push(...m(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&r.push(...m(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:r}}return 2===n?c(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function l(t,e,s,n,r){return function(t,e){return u(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],r)}function f(t,e,s,n,r){return function(t,e,s,n){const[r,i]=w(n.increment,t,e,n.rx,n.ry,1,n.increment*p(.1,p(.4,1,s),s),s);let o=v(r,null,s);if(!s.disableMultiStroke){const[r]=w(n.increment,t,e,n.rx,n.ry,1.5,0,s),i=v(r,null,s);o=o.concat(i)}return{estimatedPoints:i,opset:{type:"path",ops:o}}}(t,e,r,function(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),r=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),i=2*Math.PI/r;let o=Math.abs(t/2),a=Math.abs(e/2);const h=1-s.curveFitting;return o+=g(o*h,s),a+=g(a*h,s),{increment:i,rx:o,ry:a}}(s,n,r)).opset}function d(t){return t.randomizer||(t.randomizer=new h(t.seed||0)),t.randomizer.next()}function p(t,e,s,n=1){return s.roughness*n*(d(s)*(e-t)+t)}function g(t,e,s=1){return p(-t,t,e,s)}function m(t,e,s,n,r,i=!1){const o=i?r.disableMultiStrokeFill:r.disableMultiStroke,a=_(t,e,s,n,r,!0,!1);if(o)return a;const h=_(t,e,s,n,r,!0,!0);return a.concat(h)}function _(t,e,s,n,r,i,o){const a=Math.pow(t-s,2)+Math.pow(e-n,2),h=Math.sqrt(a);let c=1;c=h<200?1:h>500?.4:-.0016668*h+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>a&&(u=h/10);const l=u/2,f=.2+.2*d(r);let p=r.bowing*r.maxRandomnessOffset*(n-e)/200,m=r.bowing*r.maxRandomnessOffset*(t-s)/200;p=g(p,r,c),m=g(m,r,c);const _=[],v=()=>g(l,r,c),w=()=>g(u,r,c);return i&&(o?_.push({op:"move",data:[t+v(),e+v()]}):_.push({op:"move",data:[t+g(u,r,c),e+g(u,r,c)]})),o?_.push({op:"bcurveTo",data:[p+t+(s-t)*f+v(),m+e+(n-e)*f+v(),p+t+2*(s-t)*f+v(),m+e+2*(n-e)*f+v(),s+v(),n+v()]}):_.push({op:"bcurveTo",data:[p+t+(s-t)*f+w(),m+e+(n-e)*f+w(),p+t+2*(s-t)*f+w(),m+e+2*(n-e)*f+w(),s+w(),n+w()]}),_}function v(t,e,s){const n=t.length,r=[];if(n>3){const i=[],o=1-s.curveTightness;r.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];i[0]=[s[0],s[1]],i[1]=[s[0]+(o*t[e+1][0]-o*t[e-1][0])/6,s[1]+(o*t[e+1][1]-o*t[e-1][1])/6],i[2]=[t[e+1][0]+(o*t[e][0]-o*t[e+2][0])/6,t[e+1][1]+(o*t[e][1]-o*t[e+2][1])/6],i[3]=[t[e+1][0],t[e+1][1]],r.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;r.push({op:"lineTo",data:[e[0]+g(t,s),e[1]+g(t,s)]})}}else 3===n?(r.push({op:"move",data:[t[1][0],t[1][1]]}),r.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&r.push(...m(t[0][0],t[0][1],t[1][0],t[1][1],s));return r}function w(t,e,s,n,r,i,o,a){const h=[],c=[],u=g(.5,a)-Math.PI/2;c.push([g(i,a)+e+.9*n*Math.cos(u-t),g(i,a)+s+.9*r*Math.sin(u-t)]);for(let l=u;l<2*Math.PI+u-.01;l+=t){const t=[g(i,a)+e+n*Math.cos(l),g(i,a)+s+r*Math.sin(l)];h.push(t),c.push(t)}return c.push([g(i,a)+e+n*Math.cos(u+2*Math.PI+.5*o),g(i,a)+s+r*Math.sin(u+2*Math.PI+.5*o)]),c.push([g(i,a)+e+.98*n*Math.cos(u+o),g(i,a)+s+.98*r*Math.sin(u+o)]),c.push([g(i,a)+e+.9*n*Math.cos(u+.5*o),g(i,a)+s+.9*r*Math.sin(u+.5*o)]),[c,h]}function y(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function b(t,e,s,n,r,i){const o=[];let h=s.strokeWidth||2;const d=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(s),p=void 0===s.animate||!!s.animate,g=s.iterations||2,m=s.rtl?1:0,_=y("single",i);switch(s.type){case"underline":{const t=e.y+e.h+d[2];for(let s=m;s<g+m;s++)s%2?o.push(c(e.x+e.w,t,e.x,t,_)):o.push(c(e.x,t,e.x+e.w,t,_));break}case"strike-through":{const t=e.y+e.h/2;for(let s=m;s<g+m;s++)s%2?o.push(c(e.x+e.w,t,e.x,t,_)):o.push(c(e.x,t,e.x+e.w,t,_));break}case"box":{const t=e.x-d[3],s=e.y-d[0],n=e.w+(d[1]+d[3]),r=e.h+(d[0]+d[2]);for(let e=0;e<g;e++)o.push(l(t,s,n,r,_));break}case"bracket":{const t=Array.isArray(s.brackets)?s.brackets:s.brackets?[s.brackets]:["right"],n=e.x-2*d[3],r=e.x+e.w+2*d[1],i=e.y-2*d[0],a=e.y+e.h+2*d[2];for(const s of t){let t;switch(s){case"bottom":t=[[n,e.y+e.h],[n,a],[r,a],[r,e.y+e.h]];break;case"top":t=[[n,e.y],[n,i],[r,i],[r,e.y]];break;case"left":t=[[e.x,i],[n,i],[n,a],[e.x,a]];break;case"right":t=[[e.x+e.w,i],[r,i],[r,a],[e.x+e.w,a]]}t&&o.push(u(t,!1,_))}break}case"crossed-off":{const t=e.x,s=e.y,n=t+e.w,r=s+e.h;for(let e=m;e<g+m;e++)e%2?o.push(c(n,r,t,s,_)):o.push(c(t,s,n,r,_));for(let e=m;e<g+m;e++)e%2?o.push(c(t,r,n,s,_)):o.push(c(n,s,t,r,_));break}case"circle":{const t=y("double",i),s=e.w+(d[1]+d[3]),n=e.h+(d[0]+d[2]),r=e.x-d[3]+s/2,a=e.y-d[0]+n/2,h=Math.floor(g/2),c=g-2*h;for(let e=0;e<h;e++)o.push(f(r,a,s,n,t));for(let e=0;e<c;e++)o.push(f(r,a,s,n,_));break}case"highlight":{const t=y("highlight",i);h=.95*e.h;const s=e.y+e.h/2;for(let n=m;n<g+m;n++)n%2?o.push(c(e.x+e.w,s,e.x,s,t)):o.push(c(e.x,s,e.x+e.w,s,t));break}}if(o.length){const e=function(t){const e=[];for(const s of t){let t="";for(const n of s.ops){const s=n.data;switch(n.op){case"move":t.trim()&&e.push(t.trim()),t=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}t.trim()&&e.push(t.trim())}return e}(o),i=[],c=[];let u=0;const l=(t,e,s)=>t.setAttribute(e,s);for(const n of e){const e=document.createElementNS(a,"path");if(l(e,"d",n),l(e,"fill","none"),l(e,"stroke",s.color||"currentColor"),l(e,"stroke-width",""+h),p){const t=e.getTotalLength();i.push(t),u+=t}t.appendChild(e),c.push(e)}if(p){let t=0;for(let e=0;e<c.length;e++){const s=c[e],o=i[e],a=u?r*(o/u):0,h=n+t,l=s.style;l.strokeDashoffset=""+o,l.strokeDasharray=""+o,l.animation=`rough-notation-dash ${a}ms ease-out ${h}ms forwards`,t+=a}}}}class M{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(a,"svg");t.setAttribute("class","rough-annotation");const e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";const s="highlight"===this._config.type;if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",t),this._state="not-showing",s){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const e of t)e.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const s=(t,e)=>Math.round(t)===Math.round(e);return s(t.x,e.x)&&s(t.y,e.y)&&s(t.w,e.w)&&s(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let s=this._config;e&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const n=this.rects();let r=0;n.forEach((t=>r+=t.w));const i=s.animationDuration||800;let o=0;for(let a=0;a<n.length;a++){const e=i*(n[a].w/r);b(t,n[a],s,o+this._animationDelay,e,this._seed),o+=e}this._lastSizes=n,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let s=0;s<e.length;s++)t.push(this.svgRect(this._svg,e[s]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const s=t.getBoundingClientRect(),n=e;return{x:(n.x||n.left)-(s.x||s.left),y:(n.y||n.top)-(s.y||s.top),w:n.width,h:n.height}}}function x(t,e){return new M(t,e)}var k=s(7997);var O=()=>{const t=(0,r.u)(),e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{if(e.current){const s=[x(e.current,{type:"highlight",color:t.colors["amber-200-a30"]}),x(e.current,{type:"underline",color:t.colors["red-700"]})];for(const t of s)t.show();return()=>{for(const t of s)t.remove()}}}),[t.colors]),(0,k.BX)("div",{children:[(0,k.tZ)(i.default,{children:(0,k.tZ)("title",{children:"Hanzzok"})}),(0,k.tZ)("main",{children:(0,k.BX)(n.x.h1,{fontSize:"6xl",userSelect:"none",color:"fg",children:["Write Documents"," ",(0,k.BX)(n.x.span,{fontSize:"3xl",color:"fgLight",children:["[",(0,k.tZ)(n.x.span,{fontSize:"6xl",color:"fg",ref:e,children:"Better"})," ",".highlight .underline]"]})]})})]})}},5301:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4152)}])},9008:function(t,e,s){t.exports=s(2717)}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);