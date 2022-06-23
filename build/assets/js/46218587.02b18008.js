"use strict";(self.webpackChunksubsquid_docs=self.webpackChunksubsquid_docs||[]).push([[8330],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={},u="Queries",c={unversionedId:"recipes/giant-squid-api/queries",id:"recipes/giant-squid-api/queries",title:"Queries",description:"The Giant Squid API is available at this endpoint and here is a look at the GraphiQL playground interface.",source:"@site/docs/recipes/giant-squid-api/queries.md",sourceDirName:"recipes/giant-squid-api",slug:"/recipes/giant-squid-api/queries",permalink:"/docs/recipes/giant-squid-api/queries",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/recipes/giant-squid-api/queries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client example",permalink:"/docs/recipes/giant-squid-api/client-example"},next:{title:"How to launch an Archive",permalink:"/docs/recipes/how-to-launch-a-squid-archive"}},l={},p=[{value:"Examples",id:"examples",level:2},{value:"Account Addresses",id:"account-addresses",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"queries"},"Queries"),(0,i.kt)("p",null,"The Giant Squid API is available at ",(0,i.kt)("a",{parentName:"p",href:"https://graphql-console.subsquid.io/?graphql_api=https://app.devsquid.net/squids/super-api/v2/graphql"},"this endpoint")," and here is a look at the GraphiQL playground interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Giant Squid API GraphiQL console",src:n(68769).Z,width:"1365",height:"536"})),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Each chain is represented as its own type and has to be queried separately, for example, the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query AstarLatestTransfers {\n  astar {\n    transfers(limit: 10, orderBy: blockNumber_DESC, where: {success_eq: true}) {\n      fromId\n      toId\n      amount\n      timestamp\n      success\n    }\n    \n    transfersConnection(orderBy: id_ASC, where: {success_eq: true}) {\n      totalCount\n    }\n  }\n}\n\n")),(0,i.kt)("p",null,"Is going to obtain the latest 10 successful transfers, as well as the total number of successful transactions for the ",(0,i.kt)("strong",{parentName:"p"},"Astar")," blockchain."),(0,i.kt)("p",null,"In order to do the same for, say, Kusama, we'd need to change ",(0,i.kt)("inlineCode",{parentName:"p"},"astar")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"kusama")," at line number 2. If, instead, we wanted to obtain data for both chains, this query would yield such result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query AstarAndKusamaLatestTransfers {\n  astar {\n    transfers(limit: 10, orderBy: blockNumber_DESC, where: {success_eq: true}) {\n      fromId\n      toId\n      amount\n      timestamp\n      success\n    }\n    \n    transfersConnection(orderBy: id_ASC, where: {success_eq: true}) {\n      totalCount\n    }\n  }\n  kusama {\n    transfers(limit: 10, orderBy: blockNumber_DESC, where: {success_eq: true}) {\n      fromId\n      toId\n      amount\n      timestamp\n      success\n    }\n    \n    transfersConnection(orderBy: id_ASC, where: {success_eq: true}) {\n      totalCount\n    }\n  }\n}\n\n")),(0,i.kt)("p",null,"In order to profit from aggregated multi-chain information, a minimum processing is necessary on the client's side, as shown in this section."),(0,i.kt)("p",null,'{% hint style="danger" %}\nNote: It is ',(0,i.kt)("strong",{parentName:"p"},"very")," important to stick to good practices like using ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," parameter to limit the number of results and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"*Connection")," types to paginate non-limited request."),(0,i.kt)("p",null,"This is to avoid large queries generating a time-out or clogging the system.\n{% endhint %}"),(0,i.kt)("h2",{id:"account-addresses"},"Account Addresses"),(0,i.kt)("p",null,"It is important to mention, at this point, that each chain have their own address encoding. Let's take this query, which monitors Account's staking information on Polkadot,  as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'query MyQuery {\n  polkadot {\n    accountById(id: "13KJ3t8w1CKMkXCmZ6s3VwdWo4h747kXE88ZNh6rCBTvojmM") {\n      totalReward\n      totalSlash\n      rewards {\n        amount\n        era\n        validator\n        timestamp\n      }\n      slashes {\n        amount\n        era\n        timestamp\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The same exact query can be used for ",(0,i.kt)("inlineCode",{parentName:"p"},"kusama"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"astar"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"moonbeam"),", but the Address ID ",(0,i.kt)("inlineCode",{parentName:"p"},"13KJ3t8w1CKMkXCmZ6s3VwdWo4h747kXE88ZNh6rCBTvojmM")," needs to be correctly converted to the encoding specific to the chain in question."),(0,i.kt)("p",null,"Once again, address encoding and conversion have to be performed on the client's  side."))}m.isMDXComponent=!0},68769:function(e,t,n){t.Z=n.p+"assets/images/image-3-21283325ff32890fbc3bc2f50ec4ee23.png"}}]);