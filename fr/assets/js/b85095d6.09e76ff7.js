"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4928],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6859:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={sidebar_label:"Installing Optimint"},p="Setting Up Optimint",c={unversionedId:"developers/install-optimint",id:"developers/install-optimint",title:"Setting Up Optimint",description:"Before we continue with building our Wordle App, we need to set up",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/install-optimint.md",sourceDirName:"developers",slug:"/developers/install-optimint",permalink:"/fr/developers/install-optimint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/install-optimint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Optimint"},sidebar:"developers",previous:{title:"Scaffolding The Chain",permalink:"/fr/developers/scaffold-wordle"},next:{title:"Module",permalink:"/fr/developers/wordle-module"}},s={},u=[{value:"Optimint Overview",id:"optimint-overview",level:2},{value:"Installing Optimint",id:"installing-optimint",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-optimint"},"Setting Up Optimint"),(0,o.kt)("p",null,"Before we continue with building our Wordle App, we need to set up\nOptimint on our codebase."),(0,o.kt)("h2",{id:"optimint-overview"},"Optimint Overview"),(0,o.kt)("p",null,"Optimint is an Optimistic-Rollup implementation of\nABCI (Application Blockchain Interface) in order to build sovereign\nchains using the Cosmos-SDK for Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK consensus layer, with\na drop-in replacement that communicates directly with\nCelestia's Data Availability layer."),(0,o.kt)("h2",{id:"installing-optimint"},"Installing Optimint"),(0,o.kt)("p",null,"Run the following command inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordle")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk@v0.45.4-optimint-v0.3.4\ngo mod tidy\ngo mod download\n")),(0,o.kt)("p",null,"With that, we have Optimint changes added to the project directory. Now,\nlet's build the Wordle app!"))}m.isMDXComponent=!0}}]);