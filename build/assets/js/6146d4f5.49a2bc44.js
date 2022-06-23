"use strict";(self.webpackChunksubsquid_docs=self.webpackChunksubsquid_docs||[]).push([[3512],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={description:"A brief description of the blockchain framework upon which Subsquid is based and its main concepts."},c="Substrate",l={unversionedId:"key-concepts/substrate",id:"key-concepts/substrate",title:"Substrate",description:"A brief description of the blockchain framework upon which Subsquid is based and its main concepts.",source:"@site/docs/key-concepts/substrate.md",sourceDirName:"key-concepts",slug:"/key-concepts/substrate",permalink:"/docs/key-concepts/substrate",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/key-concepts/substrate.md",tags:[],version:"current",frontMatter:{description:"A brief description of the blockchain framework upon which Subsquid is based and its main concepts."},sidebar:"tutorialSidebar",previous:{title:"Processor",permalink:"/docs/key-concepts/processor"},next:{title:"Typegen",permalink:"/docs/key-concepts/typegen"}},u={},d=[{value:"What is Substrate",id:"what-is-substrate",level:2},{value:"Runtime",id:"runtime",level:3},{value:"Extrinsics",id:"extrinsics",level:3},{value:"Inherents",id:"inherents",level:4},{value:"Signed transactions",id:"signed-transactions",level:4},{value:"Unsigned transactions",id:"unsigned-transactions",level:4},{value:"Events",id:"events",level:3},{value:"Storage",id:"storage",level:3}],h={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"substrate"},"Substrate"),(0,r.kt)("h2",{id:"what-is-substrate"},"What is Substrate"),(0,r.kt)("p",null,"According to Parity's official documentation, ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate "),"is:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the only flexible, open, interoperable, and future-proof blockchain framework.")),(0,r.kt)("p",null,"Substrate is the blockchain framework used by ",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io"},"Parity Technologies")," to build ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network"},"Polkadot"),". As a consequence, any blockchain built with Substrate is compatible with Polkadot."),(0,r.kt)("p",null,"In the words of Polkadot and Parity Technologies founder, Gavin Wood:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Substrate is not a blockchain in itself, but akin to a blockchain SDK framework")),(0,r.kt)("p",null,"A blockchain built with Substrate does not necessarily have to be a Polkadot parachain. However, it can become one, if its developers so choose.\\\n\\\nSubstrate makes it much easier than alternative methods to build Polkadot parachains, but a chain built with Substrate can exist independently."),(0,r.kt)("h3",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"The runtime contains the definition of the business logic, dictating the behavior of a blockchain. In Substrate-based chains, it is also referred to as the state transition function, since this is where the storage items that define a state, as well as functions that allow for transitioning from one state to another, are defined."),(0,r.kt)("p",null,"It's worth noting that while this is the ",(0,r.kt)("em",{parentName:"p"},"core")," of a Substrate node, such nodes have other components that are responsible for other tasks, such as peer discovery, consensus, and RPC calls handling."),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/runtime/"},"official documentation"),"."),(0,r.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,r.kt)("p",null,"The official documentation for Substrate gives this definition for Extrinsics:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An extrinsic is a piece of information that comes from outside the chain and is included in a block. Extrinsics fall into three categories: inherents, signed transactions, and unsigned transactions.")),(0,r.kt)("p",null,"Extrinsics are stored in each block as an array. More precisely, they are bundled into a ",(0,r.kt)("em",{parentName:"p"},"series"),", to be executed by the runtime."),(0,r.kt)("p",null,"For security and verification, in each block header, there is also stored a cryptographic digest of this series, called the ",(0,r.kt)("em",{parentName:"p"},"extrinsics root"),"."),(0,r.kt)("h4",{id:"inherents"},"Inherents"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherents are pieces of information that are not signed and only inserted into a block by the block author")),(0,r.kt)("p",null,"This type of Extrinsic brings information that has been deemed reasonable by the validators and, as such, is assumed to be true. Inherents are more difficult to prove than other kinds of information, such as the size of a fund's transaction. A good example could be the block timestamp."),(0,r.kt)("h4",{id:"signed-transactions"},"Signed transactions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Signed transactions contain a signature of the account that issued the transaction and stand to pay a fee to have the transaction included on-chain.")),(0,r.kt)("h4",{id:"unsigned-transactions"},"Unsigned transactions"),(0,r.kt)("p",null,"Unsigned transactions are to be considered an exception, they are seldom used and must be done so with care. Key characteristics of Unsigned transactions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They do not imply a fee (since they are not signed, there is no one to pay for it)."),(0,r.kt)("li",{parentName:"ul"},"They lack Economic logic to prevent spamming."),(0,r.kt)("li",{parentName:"ul"},"They lack a ",(0,r.kt)("em",{parentName:"li"},"nonce"),", meaning replay protection is more difficult.")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"An Event is a way for a Runtime to notify external entities such as users, chain explorers, or dApps about changes or conditions in the runtime itself."),(0,r.kt)("p",null,"For more information on how Events are defined, what information they can contain, and when they are emitted, head over to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/runtime/events-and-errors/"},"official documentation"),"."),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("p",null,"As previously mentioned, the Runtime is also referred to as the state transition function, since this is where the storage items that define a state, as well as functions that allow for transitioning from one state to another, are defined."),(0,r.kt)("p",null,"It is the case, then to talk about Storage and Storage Items. Substrate offers a variety of ways to store information, thanks to modular and layered storage APIs, so that runtime developers can choose what fits their needs best."),(0,r.kt)("p",null,"Storage items can be introduced by any Substrate pallet and become part of the blockchain state. The quality of these Storage items can vary from simpler values to very complex maps. The choice depends on the developer and Runtime logic."))}p.isMDXComponent=!0}}]);