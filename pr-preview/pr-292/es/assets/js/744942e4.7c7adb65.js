"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2236],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},641:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=r(3117),a=(r(7294),r(3905));const o={},i="Celestia Hardfork Process",s={unversionedId:"nodes/hardfork-process",id:"nodes/hardfork-process",title:"Celestia Hardfork Process",description:"Blockchain networks often times need to upgrade with new features",source:"@site/docs/nodes/hardfork-process.md",sourceDirName:"nodes",slug:"/nodes/hardfork-process",permalink:"/pr-preview/pr-292/es/nodes/hardfork-process",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/hardfork-process.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Helpful CLI commands",permalink:"/pr-preview/pr-292/es/nodes/celestia-app-commands"},next:{title:"SystemD",permalink:"/pr-preview/pr-292/es/nodes/systemd"}},l={},d=[{value:"General Process",id:"general-process",level:2},{value:"Mocha Hardfork",id:"mocha-hardfork",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-hardfork-process"},"Celestia Hardfork Process"),(0,a.kt)("p",null,"Blockchain networks often times need to upgrade with new features\nwhich require coordination work among the validators prior to activating\nthe upgrades."),(0,a.kt)("p",null,"This process is called a hardfork or a network upgrade. In those events,\nthe Celestia Labs team will be coordinating with the validators on\nwhat they need to do in order to be ready for an upcoming hardfork."),(0,a.kt)("p",null,"Hardforks are not backward-compatible with older versions of the network\nsoftware which is why it is important that validators upgrade their software\nto continue validating on the network after the network upgrades."),(0,a.kt)("h2",{id:"general-process"},"General Process"),(0,a.kt)("p",null,"The general process can be broken down into several components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardfork specifications and features (defined by description of features\nand code implementation of those features)."),(0,a.kt)("li",{parentName:"ul"},"Binary used to add those features (a new binary release with those features\nwill be provided by Celestia team in order for validators to upgrade\ntheir nodes to the new binary)."),(0,a.kt)("li",{parentName:"ul"},"A block number for when the network upgrades (even if validators upgrade\ntheir binary to be hardfork ready, the network upgrade does not happen right\naway, but some short time in the future at a specific block number)."),(0,a.kt)("li",{parentName:"ul"},"Testing of the features (happens on testnets first prior to activating on\nmainnet in order to ensure the network can upgrade securely).")),(0,a.kt)("p",null,"The two testnets were hardforks are deployed on are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-292/es/nodes/arabica-devnet"},"Arabica")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-292/es/nodes/mamaki-testnet"},"Mamaki"))),(0,a.kt)("h3",{id:"mocha-hardfork"},"Mocha Hardfork"),(0,a.kt)("p",null,"Celestia is planning the Mocha Hardfork upgrade on the Mamaki Testnet.\nThis hardfork is unique as it will reset the Mamaki network to block 0\nwhile maintaining the existing state and also will rename Mamaki to Mocha."),(0,a.kt)("p",null,"The new chain-id will be ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,a.kt)("p",null,"The release logs for ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha")," can be found here (TBD)."),(0,a.kt)("p",null,"The most exciting feature included is setting the stage for QGB on Mocha."),(0,a.kt)("p",null,"Validators will need to generate 2 new keys in order to be QGB-ready.\nNote that for the Mocha Hardfork, QGB will not launch yet so you\ncan swap those keys after for new ones if needed. The keys needed are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 EVM key"),(0,a.kt)("li",{parentName:"ul"},"1 Celestia key")),(0,a.kt)("p",null,"So, in order for this to happen, validators will need to maintain two\nnew keys in order to have a successful upgrade."),(0,a.kt)("p",null,"Those two keys will need to be added to 2 new flags on ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,a.kt)("inlineCode",{parentName:"li"},"0x")," EVM address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--orchesrator-address"),": This flag should contain a newly-generated\n",(0,a.kt)("inlineCode",{parentName:"li"},"celestia1")," Celestia address. Validators certainly can use their existing\nCelestia addresses here but it is recommended to create a new one.")))}p.isMDXComponent=!0}}]);