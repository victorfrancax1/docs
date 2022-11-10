"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1379],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,k=u["".concat(s,".").concat(y)]||u[y]||c[y]||l;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const l={sidebar_label:"Keys"},a="Using the cel-key utility",i={unversionedId:"nodes/keys",id:"nodes/keys",title:"Using the cel-key utility",description:"Inside the celestia-node repository is a utility called cel-key that uses",source:"@site/docs/nodes/keys.md",sourceDirName:"nodes",slug:"/nodes/keys",permalink:"/pr-preview/pr-302/nodes/keys",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/keys.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keys"},sidebar:"nodes",previous:{title:"SystemD",permalink:"/pr-preview/pr-302/nodes/systemd"},next:{title:"Devops Resources",permalink:"/pr-preview/pr-302/nodes/devops-resources"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Steps for generating <strong>bridge</strong> node keys",id:"steps-for-generating-bridge-node-keys",level:2},{value:"Steps for generating <strong>full</strong> node keys",id:"steps-for-generating-full-node-keys",level:2},{value:"Steps for generating <strong>light</strong> node keys",id:"steps-for-generating-light-node-keys",level:2},{value:"Steps for exporting <strong>light</strong> node keys",id:"steps-for-exporting-light-node-keys",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-cel-key-utility"},"Using the cel-key utility"),(0,o.kt)("p",null,"Inside the celestia-node repository is a utility called ",(0,o.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,o.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You need to first pull down the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,o.kt)("p",null,"It can be built using either of the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,o.kt)("p",null,"For the purpose of this guide, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,o.kt)("h2",{id:"steps-for-generating-bridge-node-keys"},"Steps for generating ",(0,o.kt)("strong",{parentName:"h2"},"bridge")," node keys"),(0,o.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type bridge\n")),(0,o.kt)("p",null,"This will load the key <key_name> into the directory of the bridge node."),(0,o.kt)("h2",{id:"steps-for-generating-full-node-keys"},"Steps for generating ",(0,o.kt)("strong",{parentName:"h2"},"full")," node keys"),(0,o.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type full\n")),(0,o.kt)("p",null,"This will load the key <key_name> into the directory of the full node."),(0,o.kt)("h2",{id:"steps-for-generating-light-node-keys"},"Steps for generating ",(0,o.kt)("strong",{parentName:"h2"},"light")," node keys"),(0,o.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,o.kt)("p",null,"This will load the key <key_name> into the directory of the light node."),(0,o.kt)("h2",{id:"steps-for-exporting-light-node-keys"},"Steps for exporting ",(0,o.kt)("strong",{parentName:"h2"},"light")," node keys"),(0,o.kt)("p",null,"You can export a private key from the local keyring in encrypted and\nASCII-armored format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light\n")),(0,o.kt)("p",null,"You can then import your key with ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> <key-file-location>\n")))}c.isMDXComponent=!0}}]);