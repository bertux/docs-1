"use strict";(self.webpackChunksubsquid_docs=self.webpackChunksubsquid_docs||[]).push([[7219],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,y=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"One-to-One/One-to-Many/Many-to-One/Many-to-Many entity relations"},s="Entity Relations",c={unversionedId:"reference/openreader-schema/entity-relations",id:"reference/openreader-schema/entity-relations",title:"Entity Relations",description:"One-to-One/One-to-Many/Many-to-One/Many-to-Many entity relations",source:"@site/docs/reference/openreader-schema/entity-relations.md",sourceDirName:"reference/openreader-schema",slug:"/reference/openreader-schema/entity-relations",permalink:"/docs/reference/openreader-schema/entity-relations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/openreader-schema/entity-relations.md",tags:[],version:"current",frontMatter:{description:"One-to-One/One-to-Many/Many-to-One/Many-to-Many entity relations"},sidebar:"tutorialSidebar",previous:{title:"DateTime fields",permalink:"/docs/reference/openreader-schema/datetime-fields"},next:{title:"Full text search",permalink:"/docs/reference/openreader-schema/full-text-search"}},p={},d=[{value:"One-to-One",id:"one-to-one",level:2},{value:"One-to-Many",id:"one-to-many",level:2},{value:"Many-to-One",id:"many-to-one",level:2},{value:"Many-to-Many",id:"many-to-many",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-relations"},"Entity Relations"),(0,i.kt)("p",null,"The OpenReader implementation of GraphQL server recognizes relationships based on the fields in the GraphQL schema."),(0,i.kt)("p",null,"The relationship is recognized by looking at every field for all entity types. If a field of a source entity type points to a different entity (the target), the logic tries to find if a field of the target entity type points back to the source. The resulting relationship cardinality depends on the presence, absence, or cardinality of matching fields found."),(0,i.kt)("h2",{id:"one-to-one"},"One-to-One"),(0,i.kt)("p",null,"A one-to-one relationship between two types is characterized by the low cardinality constraint on both ends of the relationship. It is represented in a GraphQL schema by two types where each one of them has a field that points to each other."),(0,i.kt)("p",null,'{% code title="schema.graphql" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Account @entity {\n  "Account address"\n  id: ID!\n  balance: BigInt!\n  user: User @derivedFrom(field: "account")\n}\n\ntype User @entity {\n  id: ID!\n  account: Account!\n  username: String!\n  creation: DateTime!\n}\n\n')),(0,i.kt)("p",null,"{% endcode %}"),(0,i.kt)("p",null,"In this simple example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entities are linked and one ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," can only have one ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," and one ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," can only be linked to one ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),". This might not be a real-world scenario, but it is what the schema is defining."),(0,i.kt)("p",null,"It's worth noticing that the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," refers back to ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),", but since it has the ",(0,i.kt)("inlineCode",{parentName:"p"},"@derivedFrom")," directive, it will not be persisted in the database (see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/openreader-schema/annotations-directives#derivedfrom"},"appropriate Reference page")," for more information)."),(0,i.kt)("h2",{id:"one-to-many"},"One-to-Many"),(0,i.kt)("p",null,"A one-to-many relationship between two types has high cardinality on only one side of the relationship. It is represented in the GraphQL schema by two entity types where the source has an array field pointing at the target entity, while the target entity has a simple field pointing back to the source type entity. Let's look at a sample schema we already used in previous pages:"),(0,i.kt)("p",null,'{% code title="schema.graphql" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Account @entity {\n  "Account address"\n  id: ID!\n  balance: BigInt!\n  historicalBalances: [HistoricalBalance!] @derivedFrom(field: "account")\n}\n\ntype HistoricalBalance @entity {\n  id: ID!\n  account: Account!\n  balance: BigInt!\n  date: DateTime!\n}\n\n')),(0,i.kt)("p",null,"{% endcode %}"),(0,i.kt)("p",null,"The above schema defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"HistoricalBalance")," to be tied to one and only one ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),", while one ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," can have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"HistoricalBalances"),"."),(0,i.kt)("p",null,"Same as for previous relationship, please note the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"@derivedFrom")," directive."),(0,i.kt)("h2",{id:"many-to-one"},"Many-to-One"),(0,i.kt)("p",null,"A many-to-one relationship is essentially mirroring the one-to-many, as they are technically the same and work the same way, it is only evaluated from the opposite side. The only peculiar difference is that in this case, the array field can be omitted."),(0,i.kt)("p",null,"This is because the relationship will be established by one side, with a non-array field and since it will remain implicit from the point of view of the target entity type, the cardinality will be considered high by default."),(0,i.kt)("p",null,'{% code title="schema.graphql" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Account @entity {\n  "Account address"\n  id: ID!\n  balance: BigInt!\n}\n\ntype HistoricalBalance @entity {\n  id: ID!\n  account: Account!\n  balance: BigInt!\n  date: DateTime!\n}\n\n')),(0,i.kt)("p",null,"{% endcode %}"),(0,i.kt)("h2",{id:"many-to-many"},"Many-to-Many"),(0,i.kt)("p",null,"We have some technical decisions to make, in order to implement many-to-many relationship in the way that we think works best for our users. For this reasons this is not implemented yet."),(0,i.kt)("p",null,"This chapter will be updated as soon as a new version implementing it will be released."))}h.isMDXComponent=!0}}]);