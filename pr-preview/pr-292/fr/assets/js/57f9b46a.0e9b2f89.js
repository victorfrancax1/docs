"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6510],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),o=n(4334),l=n(2389),i=n(7392),s=n(7094),c=n(2466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,i.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[A,N]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=h){const e=g[h];null!=e&&e!==A&&k.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==A&&(I(t),N(a),null!=h&&y(h,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>C.push(e),onKeyDown:T,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":A===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8559:function(e,t,n){n.r(t),n.d(t,{ARABICA_PARAMS:function(){return f},MAMAKI_PARAMS:function(){return b},assets:function(){return m},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var a=n(3117),r=n(7294),o=n(3905),l={keplrButton:"keplrButton_GKhU"};function i(e){let{params:t}=e;return r.createElement("div",{className:l.center},r.createElement("button",{className:l.keplrButton,onClick:async function(){if(window.keplr){if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:t.chainId,chainName:t.chainName,rpc:t.rpc,rest:t.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.01,average:.025,high:.04}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const e=t.chainId;await window.keplr.enable(e)}else alert("Please install keplr extension")}},"Add/Switch To ",t.chainName))}var s=n(5488),c=n(5162);const p={sidebar_label:"Keplr Integration"},u="Keplr Integration With Celestia",d={unversionedId:"developers/keplr",id:"developers/keplr",title:"Keplr Integration With Celestia",description:"Keplr is a popular Cosmos-based wallet that allows anyone",source:"@site/docs/developers/keplr.mdx",sourceDirName:"developers",slug:"/developers/keplr",permalink:"/pr-preview/pr-292/fr/developers/keplr",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/keplr.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Keplr Integration"},sidebar:"developers",previous:{title:"Create A Celestia Wallet",permalink:"/pr-preview/pr-292/fr/category/create-a-celestia-wallet"},next:{title:"Wallet With Celestia App",permalink:"/pr-preview/pr-292/fr/developers/celestia-app-wallet"}},m={},h=[{value:"Add Celestia Network to Keplr",id:"add-celestia-network-to-keplr",level:2}],f={chainId:"arabica-2",chainName:"Arabica Devnet",rpc:"https://rpc.limani.celestia-devops.dev",rest:"https://limani.celestia-devops.dev"},b={chainId:"mamaki",chainName:"Mamaki Testnet",rpc:"https://rpc-mamaki.pops.one",rest:"https://api-mamaki.pops.one/"},k={toc:h,ARABICA_PARAMS:f,MAMAKI_PARAMS:b};function w(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keplr-integration-with-celestia"},"Keplr Integration With Celestia"),(0,o.kt)("p",null,"Keplr is a popular Cosmos-based wallet that allows anyone\nto connect to Tendermint chains from their browser."),(0,o.kt)("p",null,"You can learn more about installing Keplr ",(0,o.kt)("a",{parentName:"p",href:"https://www.keplr.app/download"},"here"),"."),(0,o.kt)("p",null,"In this tutorial, we will have an interactive demo that goes over how\nyou can add Celestia network parameters to Keplr."),(0,o.kt)("p",null,"Most of the overview of integration are found on Keplr's website\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.keplr.app/api/"},"here"),"."),(0,o.kt)("p",null,"For our demonstration, we converted the Keplr code on their docs\nto React components in order to demonstrate how you can add a Celestia\nnetwork to Keplr from inside the docs."),(0,o.kt)("h2",{id:"add-celestia-network-to-keplr"},"Add Celestia Network to Keplr"),(0,o.kt)("p",null,"Before we demonstrate how to export the specific parameters for\nCelestia's testnets, we need to create a ReactJS component\nthat allows us to connect directly to Keplr and pass it the network\nparams."),(0,o.kt)("p",null,"In the following code, we show how you can export a component\nthat detects whether Keplr is installed and sets the network\nparams for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\'\nimport styles from \'./Keplr.module.css\'\n\nexport default function AddNetworkKeplr({params}){\n  async function add() {\n    if (!window.keplr) {\n        alert("Please install keplr extension");\n    } else {\n        if (window.keplr.experimentalSuggestChain){\n          try {\n            await window.keplr.experimentalSuggestChain({\n              chainId: params.chainId, \n                            chainName: params.chainName,\n                            rpc: params.rpc,\n                            rest: params.rest,\n                            bip44: {\n                                    coinType: 118,\n                            },\n                            bech32Config: {\n                                    bech32PrefixAccAddr: "celestia",\n                                    bech32PrefixAccPub: "celestia" + "pub",\n                                    bech32PrefixValAddr: "celestia" + "valoper",\n                                    bech32PrefixValPub: "celestia" + "valoperpub",\n                                    bech32PrefixConsAddr: "celestia" + "valcons",\n                                    bech32PrefixConsPub: "celestia" + "valconspub",\n                            },\n                            currencies: [ \n                                    { \n                                            coinDenom: "TIA", \n                                            coinMinimalDenom: "utia", \n                                            coinDecimals: 6, \n                                            coinGeckoId: "celestia", \n                                    }, \n                            ],\n                            feeCurrencies: [\n                                    {\n                                            coinDenom: "TIA",\n                                            coinMinimalDenom: "utia",\n                                            coinDecimals: 6,\n                                            coinGeckoId: "celestia",\n                                            gasPriceStep: {\n                                                    low: 0.01,\n                                                    average: 0.025,\n                                                    high: 0.04,\n                                            },\n                                    },\n                            ],\n                            stakeCurrency: {\n                                    coinDenom: "TIA",\n                                    coinMinimalDenom: "utia",\n                                    coinDecimals: 6,\n                                    coinGeckoId: "celestia",\n                            },   \n            }) \n          } catch {\n            alert("Failed to suggest the chain");\n          }\n        }\n        const chainId = params.chainId;\n        // Enabling before using the Keplr is recommended.\n        // This method will ask the user whether to allow access if they haven\'t visited this website.\n        // Also, it will request that the user unlock the wallet if the wallet is locked.\n        await window.keplr.enable(chainId);\n    }\n  }\n\n  return (\n        <div className={styles.center}>\n      <button className={styles.keplrButton} onClick={add}>Add/Switch To {params.chainName}</button> \n    </div>\n  )\n}\n')),(0,o.kt)("p",null,"This example is just for using Celestia configs."),(0,o.kt)("p",null,"We still need to pass the Celestia network params for it."),(0,o.kt)("p",null,"We can do it for both testnets in the following section."),(0,o.kt)("p",null,"You can also test out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," button to add those\nparams to your Keplr wallet. NOTE: You must have Keplr installed\nfirst."),(0,o.kt)(s.Z,{groupId:"keplr-network-selection",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,o.kt)("p",null,"Here is a demo button that allows you to\nadd Arabica Devnet to Keplr."),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)(i,{params:f,mdxType:"AddNetworkKeplr"}),(0,o.kt)("p",null,"Behind the scenes, here are the params\nwe are passing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddNetworkKeplr"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@site/src/components/AddNetworkKeplr'\n\nexport const ARABICA_PARAMS = {\n  chainId: 'arabica-2',\n  chainName: 'Arabica Devnet',\n  rpc: 'https://rpc.limani.celestia-devops.dev',\n  rest: 'https://limani.celestia-devops.dev'\n}\n\n<AddNetworkKeplr params={ARABICA_PARAMS}/>\n"))),(0,o.kt)(c.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,o.kt)("p",null,"Here is a demo button that allows you to\nadd Mamaki Testnet to Keplr."),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)(i,{params:b,mdxType:"AddNetworkKeplr"}),(0,o.kt)("p",null,"Behind the scenes, here are the params\nwe are passing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddNetworkKeplr"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@site/src/components/AddNetworkKeplr'\n\nexport const MAMAKI_PARAMS = {\n  chainId: 'mamaki',\n  chainName: 'Mamaki Testnet',\n  rpc: 'https://rpc-mamaki.pops.one',\n  rest: 'https://api-mamaki.pops.one/'\n}\n\n<AddNetworkKeplr params={MAMAKI_PARAMS}/>\n")))))}w.isMDXComponent=!0}}]);