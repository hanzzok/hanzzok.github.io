(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{2030:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function d(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function f(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"===typeof e}r.d(t,{ZP:function(){return ue}});var h=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),g={changes:function(e,t){return f(t)||h("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&h("changeField"),t},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||f(e)||h("handlerType"),f(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var t;e||h("initialIsRequired"),f(e)||h("initialType"),t=e,Object.keys(t).length||h("initialContent")}};function y(e,t){return p(t)?t(e.current):t}function m(e,t){return e.current=s(s({},e.current),t),t}function b(e,t,r){return p(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}var v={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.initial(e),g.handler(t);var r={current:e},n=d(b)(r,t),o=d(m)(r),i=d(g.changes)(e),a=d(y)(r);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return g.selector(e),e(r.current)}function c(e){l(n,o,i,a)(e)}return[u,c]}},O={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"}};var w=function(e){return{}.toString.call(e).includes("Object")};var j={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},M=function(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}((function(e,t){throw new Error(e[t]||e.default)}))(j),P={config:function(e){return e||M("configIsRequired"),w(e)||M("configType"),e.urls?(console.warn(j.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var E=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),i(i({},t),r)},k={type:"cancelation",msg:"operation is manually canceled"};var C,S,T=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(k):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r},D=v.create({config:O,isInitialized:!1,resolve:null,reject:null,monaco:null}),R=(S=2,function(e){if(Array.isArray(e))return e}(C=D)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(C,S)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(C,S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=R[0],A=R[1];function I(e){return document.body.appendChild(e)}function L(e){var t=x((function(e){return{config:e.config,reject:e.reject}})),r=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function V(){var e=x((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){N(t),e.resolve(t)}),(function(t){e.reject(t)}))}function N(e){x().monaco||A({monaco:e})}var q=new Promise((function(e,t){return A({resolve:e,reject:t})})),z={config:function(e){A((function(t){return{config:E(t.config,P.config(e))}}))},init:function(){if(!x((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return N(window.monaco),T(Promise.resolve(window.monaco));_(I,L)(V),A({isInitialized:!0})}return T(q)},__getMonacoInstance:function(){return x((function(e){return e.monaco}))}},F=r(4041),H=r(1240),U=r.n(H);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const G={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var $=function({content:e}){return F.default.createElement("div",{style:G},e)};var B={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Y({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:a}){return F.default.createElement("section",W({style:{...B.wrapper,width:e,height:t}},a),!r&&F.default.createElement($,{content:n}),F.default.createElement("div",{ref:o,style:{...B.fullWidth,...!r&&B.hide},className:i}))}Y.propTypes={width:U().oneOfType([U().number,U().string]).isRequired,height:U().oneOfType([U().number,U().string]).isRequired,loading:U().oneOfType([U().element,U().string]).isRequired,isEditorReady:U().bool.isRequired,className:U().string,wrapperProps:U().object};var Q=Y,X=(0,F.memo)(Q);var Z=function(e){(0,F.useEffect)(e,[])};var J=function(e,t,r=!0){const n=(0,F.useRef)(!0);(0,F.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function K(){}function ee(e,t,r,n){return function(e,t){return e.editor.getModel(te(e,t))}(e,n)||function(e,t,r,n){return e.editor.createModel(t,r,n&&te(e,n))}(e,t,r,n)}function te(e,t){return e.Uri.parse(t)}function re({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:a,keepCurrentOriginalModel:u,keepCurrentModifiedModel:c,theme:s,loading:l,options:d,height:f,width:p,className:h,wrapperProps:g,beforeMount:y,onMount:m}){const[b,v]=(0,F.useState)(!1),[O,w]=(0,F.useState)(!0),j=(0,F.useRef)(null),M=(0,F.useRef)(null),P=(0,F.useRef)(null),_=(0,F.useRef)(m),E=(0,F.useRef)(y);Z((()=>{const e=z.init();return e.then((e=>(M.current=e)&&w(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var t,r;u||null===(t=e.original)||void 0===t||t.dispose();c||null===(r=e.modified)||void 0===r||r.dispose();j.current.dispose()}():e.cancel()})),J((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],b),J((()=>{j.current.getModel().original.setValue(e)}),[e],b),J((()=>{const{original:e,modified:t}=j.current.getModel();M.current.editor.setModelLanguage(e,n||r),M.current.editor.setModelLanguage(t,o||r)}),[r,n,o],b),J((()=>{M.current.editor.setTheme(s)}),[s],b),J((()=>{j.current.updateOptions(d)}),[d],b);const k=(0,F.useCallback)((()=>{E.current(M.current);const u=ee(M.current,e,n||r,i),c=ee(M.current,t,o||r,a);j.current.setModel({original:u,modified:c})}),[r,t,o,e,n,i,a]),C=(0,F.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...d}),k(),M.current.editor.setTheme(s),v(!0)}),[d,s,k]);return(0,F.useEffect)((()=>{b&&_.current(j.current,M.current)}),[b]),(0,F.useEffect)((()=>{!O&&!b&&C()}),[O,b,C]),F.default.createElement(X,{width:p,height:f,isEditorReady:b,loading:l,_ref:P,className:h,wrapperProps:g})}re.propTypes={original:U().string,modified:U().string,language:U().string,originalLanguage:U().string,modifiedLanguage:U().string,originalModelPath:U().string,modifiedModelPath:U().string,keepCurrentOriginalModel:U().bool,keepCurrentModifiedModel:U().bool,theme:U().string,loading:U().oneOfType([U().element,U().string]),options:U().object,width:U().oneOfType([U().number,U().string]),height:U().oneOfType([U().number,U().string]),className:U().string,wrapperProps:U().object,beforeMount:U().func,onMount:U().func},re.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:K,onMount:K};var ne=function(e){const t=(0,F.useRef)();return(0,F.useEffect)((()=>{t.current=e}),[e]),t.current};const oe=new Map;function ie({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:a,line:u,loading:c,options:s,overrideServices:l,saveViewState:d,keepCurrentModel:f,width:p,height:h,className:g,wrapperProps:y,beforeMount:m,onMount:b,onChange:v,onValidate:O}){const[w,j]=(0,F.useState)(!1),[M,P]=(0,F.useState)(!0),_=(0,F.useRef)(null),E=(0,F.useRef)(null),k=(0,F.useRef)(null),C=(0,F.useRef)(b),S=(0,F.useRef)(m),T=(0,F.useRef)(null),D=(0,F.useRef)(n),R=ne(i);Z((()=>{const e=z.init();return e.then((e=>(_.current=e)&&P(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>E.current?function(){var e,t;null===(e=T.current)||void 0===e||e.dispose(),f?d&&oe.set(i,E.current.saveViewState()):null===(t=E.current.getModel())||void 0===t||t.dispose();E.current.dispose()}():e.cancel()})),J((()=>{const r=ee(_.current,e||n,t||o,i);r!==E.current.getModel()&&(d&&oe.set(R,E.current.saveViewState()),E.current.setModel(r),d&&E.current.restoreViewState(oe.get(i)))}),[i],w),J((()=>{E.current.updateOptions(s)}),[s],w),J((()=>{E.current.getOption(_.current.editor.EditorOption.readOnly)?E.current.setValue(n):n!==E.current.getValue()&&(E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),E.current.pushUndoStop())}),[n],w),J((()=>{_.current.editor.setModelLanguage(E.current.getModel(),o)}),[o],w),J((()=>{void 0!==u&&E.current.revealLine(u)}),[u],w),J((()=>{_.current.editor.setTheme(a)}),[a],w);const x=(0,F.useCallback)((()=>{S.current(_.current);const u=i||r,c=ee(_.current,n||e,t||o,u);E.current=_.current.editor.create(k.current,{model:c,automaticLayout:!0,...s},l),d&&E.current.restoreViewState(oe.get(u)),_.current.editor.setTheme(a),j(!0)}),[e,t,r,n,o,i,s,l,d,a]);return(0,F.useEffect)((()=>{w&&C.current(E.current,_.current)}),[w]),(0,F.useEffect)((()=>{!M&&!w&&x()}),[M,w,x]),D.current=n,(0,F.useEffect)((()=>{var e,t;w&&v&&(null===(e=T.current)||void 0===e||e.dispose(),T.current=null===(t=E.current)||void 0===t?void 0:t.onDidChangeModelContent((e=>{const t=E.current.getValue();D.current!==t&&v(t,e)})))}),[w,v]),(0,F.useEffect)((()=>{if(w){const e=_.current.editor.onDidChangeMarkers((e=>{var t;const r=null===(t=E.current.getModel())||void 0===t?void 0:t.uri;if(r){if(e.find((e=>e.path===r.path))){const e=_.current.editor.getModelMarkers({resource:r});null===O||void 0===O||O(e)}}}));return()=>{null===e||void 0===e||e.dispose()}}}),[w,O]),F.default.createElement(X,{width:p,height:h,isEditorReady:w,loading:c,_ref:k,className:g,wrapperProps:y})}ie.propTypes={defaultValue:U().string,defaultPath:U().string,defaultLanguage:U().string,value:U().string,language:U().string,path:U().string,theme:U().string,line:U().number,loading:U().oneOfType([U().element,U().string]),options:U().object,overrideServices:U().object,saveViewState:U().bool,keepCurrentModel:U().bool,width:U().oneOfType([U().number,U().string]),height:U().oneOfType([U().number,U().string]),className:U().string,wrapperProps:U().object,beforeMount:U().func,onMount:U().func,onChange:U().func,onValidate:U().func},ie.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:K,onMount:K,onValidate:K};var ae=ie,ue=(0,F.memo)(ae)},140:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;const o=((n=r(4041))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},4799:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(4041))&&n.__esModule?n:{default:n},i=r(140);function a({ampFirst:e=!1,hybrid:t=!1,hasQuery:r=!1}={}){return e||t&&r}},8895:function(e,t,r){"use strict";var n=r(2519);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){let r=a.default,n={loading:({error:e,isLoading:t,pastDelay:r})=>null};e instanceof Promise?n.loader=()=>e:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));n=i(i({},n),t);const o=n;if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return r(o);n.loadableGenerated&&(n=i(i({},n),n.loadableGenerated),delete n.loadableGenerated);if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,c(r,n);delete n.ssr}return r(n)};u(r(4041));var a=u(r(8665));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},3988:function(e,t,r){"use strict";var n=r(2519);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(4041)),u=(i=r(250))&&i.__esModule?i:{default:i},c=r(140),s=r(9193),l=r(4799);function d(e=!1){const t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(((e,t)=>{const r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(o.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?i=!1:r.add(t);else{const e=o.props[t],r=n[t]||new Set;"name"===t&&a||!r.has(e)?(r.add(e),n[t]=r):i=!1}}}return i}}()).reverse().map(((e,r)=>{const i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})}))}var g=function({children:e}){const t=a.useContext(c.AmpStateContext),r=a.useContext(s.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(t)},e)};t.default=g},9952:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;const o=((n=r(4041))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},8665:function(e,t,r){"use strict";var n=r(2519);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(4041))&&a.__esModule?a:{default:a},c=r(1176),s=r(9952);const l=[],d=[];let f=!1;function p(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((e=>(r.loading=!1,r.loaded=e,e))).catch((e=>{throw r.loading=!1,r.error=e,e})),r}class h{constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:e,_opts:t}=this;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),t.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((e=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((e=>e()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}}function g(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));let n=null;function o(){if(!n){const t=new h(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!f&&"function"===typeof r.webpack&&!r.suspense){const e=r.webpack();d.push((t=>{for(const r of e)if(-1!==t.indexOf(r))return o()}))}const a=r.suspense?function(e,t){return u.default.createElement(r.lazy,i(i({},e),{},{ref:t}))}:function(e,t){o();const i=u.default.useContext(s.LoadableContext),a=c.useSubscription(n);return u.default.useImperativeHandle(t,(()=>({retry:n.retry})),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((e=>{i(e)})),u.default.useMemo((()=>a.loading||a.error?u.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null),[e,a])};return a.preload=()=>!r.suspense&&o(),a.displayName="LoadableComponent",u.default.forwardRef(a)}(p,e)}function y(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then((()=>{if(e.length)return y(e,t)}))}g.preloadAll=()=>new Promise(((e,t)=>{y(l).then(e,t)})),g.preloadReady=(e=[])=>new Promise((t=>{const r=()=>(f=!0,t());y(d,e).then(r,r)})),window.__NEXT_PRELOADREADY=g.preloadReady;var m=g;t.default=m},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(4041));class o extends n.Component{constructor(e){super(e),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},4853:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},1212:function(e,t,r){e.exports=r(8895)},867:function(e,t,r){e.exports=r(3988)}}]);