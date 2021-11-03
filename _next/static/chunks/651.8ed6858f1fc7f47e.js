"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{9651:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(1720)),o=a(r(2717));function a(e){return e&&e.__esModule?e:{default:e}}const i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s({res:e,err:t}){return{statusCode:e&&e.statusCode?e.statusCode:t?t.statusCode:404}}class l extends n.default.Component{render(){const{statusCode:e}=this.props,t=this.props.title||i[e]||"An unexpected error has occurred";return n.default.createElement("div",{style:c.error},n.default.createElement(o.default,null,n.default.createElement("title",null,e?`${e}: ${t}`:"Application error: a client-side exception has occurred")),n.default.createElement("div",null,n.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?n.default.createElement("h1",{style:c.h1},e):null,n.default.createElement("div",{style:c.desc},n.default.createElement("h2",{style:c.h2},this.props.title||e?t:n.default.createElement(n.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}l.displayName="ErrorPage",l.getInitialProps=s,l.origGetInitialProps=s,t.default=l;const c={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},8e3:function(e,t,r){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;const o=((n=r(1720))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(1720))&&n.__esModule?n:{default:n},a=r(8e3);function i({ampFirst:e=!1,hybrid:t=!1,hasQuery:r=!1}={}){return e||t&&r}},2717:function(e,t,r){var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1720)),s=(a=r(1585))&&a.__esModule?a:{default:a},l=r(8e3),c=r(5850),d=r(5646);function u(e=!1){const t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(((e,t)=>{const r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){const t=f[e];if(o.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?a=!1:r.add(t);else{const e=o.props[t],r=n[t]||new Set;"name"===t&&i||!r.has(e)?(r.add(e),n[t]=r):a=!1}}}return a}}()).reverse().map(((e,r)=>{const a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})}))}var m=function({children:e}){const t=i.useContext(l.AmpStateContext),r=i.useContext(c.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:d.isInAmpMode(t)},e)};t.default=m},1585:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1720));class o extends n.Component{constructor(e){super(e),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o}}]);