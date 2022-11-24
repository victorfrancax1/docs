"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9795],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,_=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(_,s(s({ref:n},d),{},{components:t})):a.createElement(_,s({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var a=t(3117),r=(t(7294),t(3905));const o={sidebar_label:"Setup Network Environment"},s="Setting Up Your Environment for CosmWasm on Celestia",i={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"Setting Up Your Environment for CosmWasm on Celestia",description:"Now the wasmd binary is built, we need to setup a local network",source:"@site/docs/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/pr-preview/pr-292/ru/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup Network Environment"},sidebar:"developers",previous:{title:"CosmWasm Dependencies",permalink:"/pr-preview/pr-292/ru/developers/cosmwasm-dependency"},next:{title:"Contract Deployment",permalink:"/pr-preview/pr-292/ru/developers/cosmwasm-contract-deployment"}},l={},c=[{value:"Building the Wasmd Network",id:"building-the-wasmd-network",level:2},{value:"Starting the Wasmd Network",id:"starting-the-wasmd-network",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-your-environment-for-cosmwasm-on-celestia"},"Setting Up Your Environment for CosmWasm on Celestia"),(0,r.kt)("p",null,"Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," binary is built, we need to setup a local network\nthat communicates between ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," and Rollmint."),(0,r.kt)("h2",{id:"building-the-wasmd-network"},"Building the Wasmd Network"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,r.kt)("p",null,"This initializes a chain called ",(0,r.kt)("inlineCode",{parentName:"p"},"celeswasm")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," binary. Your output\nwill be similar to the JSON below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "app_message": {\n    "auth": {\n      "accounts": [],\n      "params": {\n        "max_memo_characters": "256",\n        "sig_verify_cost_ed25519": "590",\n        "sig_verify_cost_secp256k1": "1000",\n        "tx_sig_limit": "7",\n        "tx_size_cost_per_byte": "10"\n      }\n    },\n    "authz": {\n      "authorization": []\n    },\n    "bank": {\n      "balances": [],\n      "denom_metadata": [],\n      "params": {\n        "default_send_enabled": true,\n        "send_enabled": []\n      },\n      "supply": []\n    },\n    "capability": {\n      "index": "1",\n      "owners": []\n    },\n    "crisis": {\n      "constant_fee": {\n        "amount": "1000",\n        "denom": "stake"\n      }\n    },\n    "distribution": {\n      "delegator_starting_infos": [],\n      "delegator_withdraw_infos": [],\n      "fee_pool": {\n        "community_pool": []\n      },\n      "outstanding_rewards": [],\n      "params": {\n        "base_proposer_reward": "0.010000000000000000",\n        "bonus_proposer_reward": "0.040000000000000000",\n        "community_tax": "0.020000000000000000",\n        "withdraw_addr_enabled": true\n      },\n      "previous_proposer": "",\n      "validator_accumulated_commissions": [],\n      "validator_current_rewards": [],\n      "validator_historical_rewards": [],\n      "validator_slash_events": []\n    },\n    "evidence": {\n      "evidence": []\n    },\n    "feegrant": {\n      "allowances": []\n    },\n    "genutil": {\n      "gen_txs": []\n    },\n    "gov": {\n      "deposit_params": {\n        "max_deposit_period": "172800s",\n        "min_deposit": [\n          {\n            "amount": "10000000",\n            "denom": "stake"\n          }\n        ]\n      },\n      "deposits": [],\n      "proposals": [],\n      "starting_proposal_id": "1",\n      "tally_params": {\n        "quorum": "0.334000000000000000",\n        "threshold": "0.500000000000000000",\n        "veto_threshold": "0.334000000000000000"\n      },\n      "votes": [],\n      "voting_params": {\n        "voting_period": "172800s"\n      }\n    },\n    "ibc": {\n      "channel_genesis": {\n        "ack_sequences": [],\n        "acknowledgements": [],\n        "channels": [],\n        "commitments": [],\n        "next_channel_sequence": "0",\n        "receipts": [],\n        "recv_sequences": [],\n        "send_sequences": []\n      },\n      "client_genesis": {\n        "clients": [],\n        "clients_consensus": [],\n        "clients_metadata": [],\n        "create_localhost": false,\n        "next_client_sequence": "0",\n        "params": {\n          "allowed_clients": [\n            "06-solomachine",\n            "07-tendermint"\n          ]\n        }\n      },\n      "connection_genesis": {\n        "client_connection_paths": [],\n        "connections": [],\n        "next_connection_sequence": "0",\n        "params": {\n          "max_expected_time_per_block": "30000000000"\n        }\n      }\n    },\n    "interchainaccounts": {\n      "controller_genesis_state": {\n        "active_channels": [],\n        "interchain_accounts": [],\n        "params": {\n          "controller_enabled": true\n        },\n        "ports": []\n      },\n      "host_genesis_state": {\n        "active_channels": [],\n        "interchain_accounts": [],\n        "params": {\n          "allow_messages": [],\n          "host_enabled": true\n        },\n        "port": "icahost"\n      }\n    },\n    "intertx": null,\n    "mint": {\n      "minter": {\n        "annual_provisions": "0.000000000000000000",\n        "inflation": "0.130000000000000000"\n      },\n      "params": {\n        "blocks_per_year": "6311520",\n        "goal_bonded": "0.670000000000000000",\n        "inflation_max": "0.200000000000000000",\n        "inflation_min": "0.070000000000000000",\n        "inflation_rate_change": "0.130000000000000000",\n        "mint_denom": "stake"\n      }\n    },\n    "params": null,\n    "slashing": {\n      "missed_blocks": [],\n      "params": {\n        "downtime_jail_duration": "600s",\n        "min_signed_per_window": "0.500000000000000000",\n        "signed_blocks_window": "100",\n        "slash_fraction_double_sign": "0.050000000000000000",\n        "slash_fraction_downtime": "0.010000000000000000"\n      },\n      "signing_infos": []\n    },\n    "staking": {\n      "delegations": [],\n      "exported": false,\n      "last_total_power": "0",\n      "last_validator_powers": [],\n      "params": {\n        "bond_denom": "stake",\n        "historical_entries": 10000,\n        "max_entries": 7,\n        "max_validators": 100,\n        "unbonding_time": "1814400s"\n      },\n      "redelegations": [],\n      "unbonding_delegations": [],\n      "validators": []\n    },\n    "transfer": {\n      "denom_traces": [],\n      "params": {\n        "receive_enabled": true,\n        "send_enabled": true\n      },\n      "port_id": "transfer"\n    },\n    "upgrade": {},\n    "vesting": {},\n    "wasm": {\n      "codes": [],\n      "contracts": [],\n      "gen_msgs": [],\n      "params": {\n        "code_upload_access": {\n          "address": "",\n          "permission": "Everybody"\n        },\n        "instantiate_default_permission": "Everybody"\n      },\n      "sequences": []\n    }\n  },\n  "chain_id": "celeswasm",\n  "gentxs_dir": "",\n  "moniker": "validator1",\n  "node_id": "4dec90c32140dbe758613d1f5f8e78f83243ab9a"\n}\n')),(0,r.kt)("p",null,"The following command helps us setup accounts for genesis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=celeswasm-key\nwasmd keys add $KEY_NAME --keyring-backend test\n")),(0,r.kt)("p",null,"Make sure you store the output of the wallet generated\nfor later reference if needed."),(0,r.kt)("p",null,"Now, let's add a genesis account and use it to update our genesis file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'TOKEN_AMOUNT="10000000000000000000000000uwasm"\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nSTAKING_AMOUNT=1000000000uwasm\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\n')),(0,r.kt)("p",null,"With that, we created a local network genesis file. Our output will look\nsimilar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Genesis transaction written to "/root/.wasmd/config/gentx/gentx-4dec90c32140dbe758613d1f5f8e78f83243ab9a.json"\n')),(0,r.kt)("p",null,"Some more useful commands we can setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'export CHAINFLAG="--chain-id ${CHAIN_ID}"\nexport TXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\nexport NODEIP="--node http://127.0.0.1:26657"\n')),(0,r.kt)("h2",{id:"starting-the-wasmd-network"},"Starting the Wasmd Network"),(0,r.kt)("p",null,"We can run the following to start the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'wasmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://XXX.XXX.XXX.XXX:26659","timeout":60000000000,"gas_limit":6000000}\' --rollmint.namespace_id 000000000000FFFF --rollmint.da_start_height XXXXX\n')),(0,r.kt)("p",null,"Please consider:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: In the above command, you need to pass a Celestia Node IP address\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"base_url")," that has an account with Arabica Devnet tokens. Follow\nthe tutorial for setting up a Celestia Light Node and creating a wallet\nwith testnet faucet money ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-292/ru/developers/node-tutorial"},"here")," in the\nCelestia Node section.")),(0,r.kt)("p",null,"Also please consider:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"IMPORTANT: Furthermore, in the above command, you need to specify the latest\nBlock Height in Arabica Devnet for ",(0,r.kt)("inlineCode",{parentName:"p"},"da_height"),". You can find the latest block number\nin the explorer ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celestia.observer/arabica"},"here"),". Also,\nfor the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--rollmint.namespace_id"),", you can generate a random Namespace\nID using the playground ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"here"))),(0,r.kt)("p",null,"With that, we have kickstarted our ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," network!"))}p.isMDXComponent=!0}}]);