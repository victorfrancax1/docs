"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2114],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(4334),r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3117),o=n(7294),r=n(4334),l=n(2389),i=n(7392),s=n(7094),p=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:h,groupId:m,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,o.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==N&&(O(t),T(a),null!=m&&w(m,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:C},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},8418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={sidebar_label:"Validator Node"},s=void 0,p={unversionedId:"nodes/validator-node",id:"nodes/validator-node",title:"validator-node",description:"Validator nodes allow you to participate in consensus in the Celestia network.",source:"@site/docs/nodes/validator-node.mdx",sourceDirName:"nodes",slug:"/nodes/validator-node",permalink:"/pr-preview/pr-335/zh/nodes/validator-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/validator-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Validator Node"},sidebar:"nodes",previous:{title:"Consensus",permalink:"/pr-preview/pr-335/zh/category/consensus"},next:{title:"Consensus Full Node",permalink:"/pr-preview/pr-335/zh/nodes/consensus-full-node"}},u={},d=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your validator node",id:"setting-up-your-validator-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying the celestia-app",id:"deploying-the-celestia-app",level:2},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Configure validator mode",id:"configure-validator-mode",level:3},{value:"Reset network",id:"reset-network",level:3},{value:"Optional: quick-sync with snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Delegate stake to a validator",id:"delegate-stake-to-a-validator",level:3},{value:"Deploy the celestia-node",id:"deploy-the-celestia-node",level:2},{value:"Install celestia-node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3},{value:"Run a validator node",id:"run-a-validator-node",level:2}],c={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-validator-node"},"Setting up a Celestia Validator Node"),(0,o.kt)("p",null,"Validator nodes allow you to participate in consensus in the Celestia network."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nvalidator node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-validator-node"},"Setting up your validator node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-335/zh/nodes/environment"},"here"),"."),(0,o.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying the celestia-app"),(0,o.kt)("p",null,"This section describes part 1 of Celestia Validator Node setup:\nrunning a Celestia App daemon with an internal Celestia Core node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install+run\nthe Validator Node.")),(0,o.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,o.kt)("p",null,"Follow the tutorial on installing Celestia App ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-335/zh/nodes/celestia-app"},"here"),"."),(0,o.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,o.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,o.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mamaki\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mamaki we are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mamaki/genesis.json $HOME/.celestia-app/config\n")),(0,o.kt)("p",null,"Set seeds and peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'BOOTSTRAP_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mamaki/bootstrap-peers.txt | tr -d \'\\n\')\necho $BOOTSTRAP_PEERS\nsed -i.bak -e "s/^bootstrap-peers *=.*/bootstrap-peers = \\"$BOOTSTRAP_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Note: You can find more peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mamaki/peers.txt"},"here"),"."),(0,o.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,o.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,o.kt)("h3",{id:"configure-validator-mode"},"Configure validator mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak -e "s/^mode *=.*/mode = \\"validator\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("h3",{id:"reset-network"},"Reset network"),(0,o.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,o.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: quick-sync with snapshot"),(0,o.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,o.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mamaki.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,o.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,o.kt)("h3",{id:"wallet"},"Wallet"),(0,o.kt)("p",null,"Follow the tutorial on creating a wallet ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-335/zh/developers/celestia-app-wallet"},"here"),"."),(0,o.kt)("h3",{id:"delegate-stake-to-a-validator"},"Delegate stake to a validator"),(0,o.kt)("p",null,"Create an environment variable for the address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_WALLET=<validator-address>\n")),(0,o.kt)("p",null,"If you want to delegate more stake to any validator, including your own you\nwill need the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," address of the validator in question. You can\neither check it using the block explorer mentioned above or you can run the\ncommand below to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," of your local validator wallet in\ncase you want to delegate more to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys show $VALIDATOR_WALLET --bech val -a\n")),(0,o.kt)("p",null,"After entering the wallet passphrase you should see a similar output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Enter keyring passphrase:\ncelesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd\n")),(0,o.kt)("p",null,"To delegate tokens to the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," validator, as an\nexample you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate \\\n    celesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd 1000000utia \\\n    --from=$VALIDATOR_WALLET --chain-id=mamaki\n")),(0,o.kt)("p",null,"If successful, you should see a similar output as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You can check if the TX hash went through using the block explorer by\ninputting the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash")," ID that was returned."),(0,o.kt)("h2",{id:"deploy-the-celestia-node"},"Deploy the celestia-node"),(0,o.kt)("p",null,"This section describes part 2 of Celestia Validator Node setup: running a\nCelestia Bridge Node daemon."),(0,o.kt)("h3",{id:"install-celestia-node"},"Install celestia-node"),(0,o.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-335/zh/nodes/celestia-node"},"here")),(0,o.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --core.rpc.port <port>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.rpc.port")," defaults to 26657, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer."))),(0,o.kt)(l.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote <ip-address>:<port>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.remote")," port defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,o.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,o.kt)("a",{parentName:"p",href:"./mamaki-testnet"},"here")))),(0,o.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,o.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,o.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,o.kt)("a",{parentName:"p",href:"./mamaki-testnet#rpc-endpoints"},"here")),(0,o.kt)("p",null,"Here is an example of starting the bridge node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip https://limani.celestia-devops.dev/ --core.grpc.port 9090\n"))),(0,o.kt)(l.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,o.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.remote <ip-address>:<port>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.remote")," port defaults to 9090, so if you do not specify it in the command line, it will default to that port. You can use the flag to specify another port if you prefer.")),(0,o.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,o.kt)("a",{parentName:"p",href:"./mamaki-testnet#rpc-endpoints"},"here")),(0,o.kt)("p",null,"Here is an example of starting the bridge node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.remote https://rpc-mamaki.pops.one:26657\n")))),(0,o.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,o.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."),(0,o.kt)("h2",{id:"run-a-validator-node"},"Run a validator node"),(0,o.kt)("p",null,"After completing all the necessary steps, you are now ready to run a validator!\nIn order to create your validator on-chain, follow the instructions below.\nKeep in mind that these steps are necessary ONLY if you want to participate\nin the consensus."),(0,o.kt)("p",null,"Pick a ",(0,o.kt)("inlineCode",{parentName:"p"},"moniker")," name of your choice! This is the validator name that will show\nup on public dashboards and explorers. ",(0,o.kt)("inlineCode",{parentName:"p"},"VALIDATOR_WALLET")," must be the same you\ndefined previously. Parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--min-self-delegation=1000000")," defines the\namount of tokens that are self delegated from your validator wallet."),(0,o.kt)("p",null,"Now, connect to the network of your choice."),(0,o.kt)("p",null,"You have the following option of connecting to list of networks shown below:"),(0,o.kt)("p",null,"Continuing the Validator tutorial, here are the steps to connect your\nvalidator to Mamaki:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'MONIKER="your_moniker"\nVALIDATOR_WALLET="validator"\n\ncelestia-appd tx staking create-validator \\\n    --amount=1000000utia \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --chain-id=mamaki \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1000000 \\\n    --from=$VALIDATOR_WALLET \\\n    --keyring-backend=test\n')),(0,o.kt)("p",null,"You will be prompted to confirm the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"confirm transaction before signing and broadcasting [y/N]: y\n")),(0,o.kt)("p",null,"Inputting ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," should provide an output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You should now be able to see your validator from a block explorer like ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.explorers.guru/"},"here")))}h.isMDXComponent=!0}}]);