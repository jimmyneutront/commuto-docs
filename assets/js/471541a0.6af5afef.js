"use strict";(self.webpackChunkcommuto_docs=self.webpackChunkcommuto_docs||[]).push([[60],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"What is Commuto?",sidebar_position:1},c=void 0,u={unversionedId:"what-is-commuto",id:"what-is-commuto",title:"What is Commuto?",description:"Commuto facilitates the fast and safe exchange of traditional national currencies and fiat-pegged digital currencies.",source:"@site/docs/what-is-commuto.md",sourceDirName:".",slug:"/what-is-commuto",permalink:"/commuto-docs/docs/what-is-commuto",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/what-is-commuto.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is Commuto?",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Set Up A Development Environment",permalink:"/commuto-docs/docs/guides/dev-env"}},l=[{value:"Why does Commuto exist?",id:"why-does-commuto-exist",children:[],level:2}],m={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Commuto facilitates the fast and safe exchange of traditional national currencies and fiat-pegged digital currencies."),(0,a.kt)("p",null,"But Commuto is not just an app. Rather, it is an ecosystem composed of multiple parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Commuto Core"),": A set of trustless, uncensorable, non-upgradable smart contracts for EVM compatible blockchains. These contracts hold an exchange offer book, as well as all the code necessary for offer makers and takers to complete an exchange of traditional and digital currency. This includes mechanisms for resolving unforseen issues that arise during the swap process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Commuto Interfaces"),": A set of applications for Android, iOS and Desktop that allow easy interaction with Commuto Core smart contracts and seamless, private communication with exchange counterparties. These interfaces make up a peer-to-peer network across which data is shared, meaning there is no central server for malicious entities to target in an attempt to disrupt Commuto. Additionally, each user's personal information is stored only on their Commuto Interface, and is shared only with exchange counterparties. And such sharing occurs only when it is strictly necessary (such as sharing bank account details in order to send or recieve traditional currency.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Commuto Governance")," A smart contract for EVM compatible blockchains by which holders of Commuto's native token can vote on and execute proposals related to Commuto, such as adding support for new stablecoins, traditional currencies or payment methods, or funding research and development that will benefit the community as a whole. (Note: the Commuto Governance design is not yet implemented.)")),(0,a.kt)("p",null,"These components all work together to create Commuto's unified user experience."),(0,a.kt)("p",null,"Commuto is what all financial technology should be: easy to use, fully transparent, and open to anyone, at any time, in any place."),(0,a.kt)("h2",{id:"why-does-commuto-exist"},"Why does Commuto exist?"),(0,a.kt)("p",null,"The right to freely exchange one's own fairly acquired property is fundamental. Unfortunately, world leaders and central bankers often trample this right with reckless abandon, invariably at the expense of the world's least fortunate."))}p.isMDXComponent=!0}}]);