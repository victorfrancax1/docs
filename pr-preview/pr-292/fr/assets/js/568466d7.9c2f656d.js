"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),r=n(4334),o=n(2389),i=n(7392),s=n(7094),p=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:m,groupId:k,className:y}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,l.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==N&&h.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==N&&(C(t),T(a),null!=k&&w(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},y)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:O,onClick:I},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(3117),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_label:"Wallet with Celestia Node"},s="Create A Wallet with Celestia Node",p={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create A Wallet with Celestia Node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.mdx",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-292/fr/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with Celestia Node"},sidebar:"developers",previous:{title:"Wallet With Celestia App",permalink:"/pr-preview/pr-292/fr/developers/celestia-app-wallet"},next:{title:"Data Availability API",permalink:"/pr-preview/pr-292/fr/category/data-availability-api"}},d={},c=[{value:"Using the <code>cel-key</code> utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:3},{value:"Steps for generating node keys",id:"steps-for-generating-node-keys",level:3},{value:"Steps for exporting node keys",id:"steps-for-exporting-node-keys",level:3},{value:"Steps for importing node keys",id:"steps-for-importing-node-keys",level:3},{value:"View all options for <code>cel-key</code>",id:"view-all-options-for-cel-key",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create A Wallet with Celestia Node"),(0,l.kt)("p",null,"This tutorial will go over using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on Celestia Node."),(0,l.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../nodes/environment"},"Setting Up Your Environment"))),(0,l.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,l.kt)("h2",{id:"using-the-cel-key-utility"},"Using the ",(0,l.kt)("inlineCode",{parentName:"h2"},"cel-key")," utility"),(0,l.kt)("p",null,"Inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository is a utility called ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,l.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You need to first pull down the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,l.kt)("p",null,"It can be built using either of the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,l.kt)("p",null,"For the purpose of this guide, we will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,l.kt)("h3",{id:"steps-for-generating-node-keys"},"Steps for generating node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type bridge\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the bridge node.")),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type full\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the full node.")),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the light node."))),(0,l.kt)("h3",{id:"steps-for-exporting-node-keys"},"Steps for exporting node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type bridge\n")),(0,l.kt)("p",null,"You can then import your key with ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> \n  <key-file-location>\n"))),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type full\n")),(0,l.kt)("p",null,"You can then import your key with ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> \n  <key-file-location>\n"))),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"You can then import your key with ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> \n  <key-file-location>\n")))),(0,l.kt)("h3",{id:"steps-for-importing-node-keys"},"Steps for importing node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type bridge\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type bridge\n"))),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type full\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type full\n"))),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type light\n")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"view-all-options-for-cel-key"},"View all options for ",(0,l.kt)("inlineCode",{parentName:"h3"},"cel-key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./cel-key --help\nKeyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key.\nThe keyring supports the following backends:\n    os          Uses the operating system\'s default credentials store.\n    file        Uses encrypted file-based keystore within the app\'s configuration directory.\n                This keyring will request a password each time it is accessed, which may occur\n                multiple times in a single command resulting in repeated password prompts.\n    kwallet     Uses KDE Wallet Manager as a credentials management application.\n    pass        Uses the pass command line utility to store and retrieve keys.\n    test        Stores keys insecurely to disk. It does not prompt for a password to be unlocked\n                and it should be use only for testing purposes.\nkwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:\n    KWallet     https://github.com/KDE/kwallet\n    pass        https://www.passwordstore.org/\nThe pass backend requires GnuPG: https://gnupg.org/\nUsage:\n  keys [command]\nAvailable Commands:\n  add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file\n  completion  Generate the autocompletion script for the specified shell\n  delete      Delete the given keys\n  export      Export private keys\n  help        Help about any command\n  import      Import private keys into the local keybase\n  list        List all keys\n  migrate     Migrate keys from amino to proto serialization format\n  mnemonic    Compute the bip39 mnemonic for some input entropy\n  parse       Parse address from hex to bech32 and vice versa\n  rename      Rename an existing key\n  show        Retrieve key information by name or address\nFlags:\n  -h, --help                     help for keys\n      --home string              The application home directory (default "~")\n      --keyring-backend string   Select keyring\'s backend (os|file|test) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --node.network string      Sets key utility to use the node network\'s directory (e.g. ~/.celestia-light-mynetwork if --node.network MyNetwork is passed). (default "arabica-1")\n      --node.type string         Sets key utility to use the node type\'s directory (e.g. ~/.celestia-light-arabica-1 if --node.type light is passed).\n      --output string            Output format (text|json) (default "text")\nUse "keys [command] --help" for more information about a command.\n')))}m.isMDXComponent=!0}}]);