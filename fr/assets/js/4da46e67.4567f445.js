"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7756],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=a(r),m=l,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},340:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return a}});var n=r(3117),l=(r(7294),r(3905));const o={sidebar_label:"Rollmint"},i="Rollmint",s={unversionedId:"developers/rollmint",id:"developers/rollmint",title:"Rollmint",description:"rollmint",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/rollmint.md",sourceDirName:"developers",slug:"/developers/rollmint",permalink:"/fr/developers/rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollmint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollmint"},sidebar:"developers",previous:{title:"Node API",permalink:"/fr/developers/node-api"},next:{title:"\u2600\ufe0f gm world",permalink:"/fr/category/\ufe0f-gm-world"}},u={},a=[{value:"Tutoriels",id:"tutoriels",level:2}],c={toc:a};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rollmint"},"Rollmint"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rollmint",src:r(6256).Z,width:"1280",height:"910"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/rollmint"},"Rollmint")," est une impl\xe9mentation ABCI (Interface d'Application Blockchain) pour rollups souverains \xe0 d\xe9ployer sur Celestia."),(0,l.kt)("p",null,"Il est construit en remplacement de Tendermint, la couche de consensus du Cosmos-SDK, avec une solution pr\xeate \xe0 l'usage qui communique directement avec la couche d'Accessibilit\xe9 des Donn\xe9es de Celestia."),(0,l.kt)("p",null,"Il fait tourner un rollup souverain, qui collecte les transactions dans les blocs et les publie sur Celestia pour le consensus et l'accessibilit\xe9 des donn\xe9es."),(0,l.kt)("p",null,"L'objectif de Rollmint est de permettre \xe0 n'importe qui de concevoir et d\xe9ployer un rollup souverain sur Celestia en quelques minutes."),(0,l.kt)("p",null,'En outre, alors que Rollmint vous permet de construire des rollups souverains sur Celestia, il ne supporte actuellement pas les preuves de fraude et fonctionne donc en mode "pessimiste", dans lequel les noeuds doivent r\xe9ex\xe9cuter les transactions pour v\xe9rifier la validit\xe9 de la chaine (c.\xe0.d un full node). Enfin, Rollmint ne supporte actuellement qu\'un seul s\xe9quenceur.'),(0,l.kt)("h2",{id:"tutoriels"},"Tutoriels"),(0,l.kt)("p",null,"Les tutoriels suivants vont vous aider \xe0 d\xe9buter la construction d'applications Cosmos-SDK qui connectent la couche d'accessibilit\xe9 des donn\xe9es de Celestia via Rollmint. Nous appelons ces chaines les Rollups Souverains."),(0,l.kt)("p",null,"Vous pouvez commencer avec les tutoriels suivants :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fr/developers/gm-world"},"Bonjour tout le monde")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fr/developers/recipe-book"},"Recipe Book")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fr/developers/wordle"},"Jeu du Wordle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fr/developers/cosmwasm"},"Tutoriel CosmWasm"))))}p.isMDXComponent=!0},6256:function(e,t,r){t.Z=r.p+"assets/images/rollmint-5be7479f6bad05fad502a38ad0f3c5c6.png"}}]);