"use strict";(self.webpackChunkcommuto_docs=self.webpackChunkcommuto_docs||[]).push([[657],{2650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),p=["components"],i={id:"dev-env",title:"Set Up A Development Environment"},m=void 0,l={unversionedId:"guides/dev-env",id:"guides/dev-env",title:"Set Up A Development Environment",description:"This guide describes how to set up a Commuto development environment to work on the Commuto witepaper, Commuto smart",source:"@site/docs/guides/dev-env-setup.md",sourceDirName:"guides",slug:"/guides/dev-env",permalink:"/docs/guides/dev-env",draft:!1,editUrl:"https://github.com/jimmyneutront/commuto-docs/tree/master/docs/guides/dev-env-setup.md",tags:[],version:"current",frontMatter:{id:"dev-env",title:"Set Up A Development Environment"},sidebar:"tutorialSidebar",previous:{title:"What is Commuto?",permalink:"/docs/what-is-commuto"},next:{title:"CommutoSwap Technical Reference",permalink:"/docs/technical-reference/core-tec-ref"}},c={},s=[],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide describes how to set up a Commuto development environment to work on the Commuto witepaper, Commuto smart\ncontracts and the Desktop, Android and iOS Commuto Interfaces."),(0,a.kt)("h1",{id:"whitepaper"},"Whitepaper"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the git repository:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/jimmyneutront/commuto-whitepaper.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the new directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ cd commuto-whitepaper\n")))),(0,a.kt)("p",null,"And now you're ready to contribute to the whitepaper repo! Any time that significant changes are made to Commuto, this\nrepo should be updated to explain and document them."),(0,a.kt)("h1",{id:"commuto-protocol"},"Commuto Protocol"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the git repository:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/jimmyneutront/commuto-protocol.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the new directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ cd commuto-protocol\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that you have Python 3.7 or later installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ python3 --version\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new virtual environment in the project directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ python3 -m venv .venv\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use pip to install the following packages: ",(0,a.kt)("inlineCode",{parentName:"p"},"web3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"slither-analyzer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"solc-select")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"py-solc-x"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ pip install web3 slither-analyzer solc-select py-solc-x\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use solc-select to install solc 0.6.12:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ solc-select install 0.6.12\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set 0.6.12 as the global version of solc:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ solc-select use 0.6.12\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node.js and npm"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create and enter new directory and initialize a new npm project: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ mkdir commuto-test-chain\n$ cd commuto-test-chain\n$ npm init\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org"},"Hardhat"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ npm install --save-dev hardhat\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a standalone Hardhat Network instance:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ npx hardhat node\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the web3 provider address in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/tests/CommutoSwapTest.py#L10"},"CommutoSwapTest.py")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/Setup_Test_Environment.py#L14"},"Setup_Test_Environment.py")," with the address and port number of your Hardhat Network instance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You are now ready to run tests and experiment with the Commuto Protocol!"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ cd ../tests\n$ python3 -m unittest\n")))),(0,a.kt)("h1",{id:"commuto-interface-desktop"},"Commuto Interface Desktop"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure you have set up a working Commuto Protocol development environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that you have JDK 16 installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ javac -version\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open IntelliJ IDEA and select ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"New")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Project from Version Control...")," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone from this repository url: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/Commuto_Interface_Desktop.git"},(0,a.kt)("inlineCode",{parentName:"a"},"https://github.com/jimmyneutront/Commuto_Interface_Desktop.git")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trust the project, and wait for IntelliJ to finish importing and building the project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to your ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," project within your commuto-protocol repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start a standalone Hardhat Network instance:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ npx hardhat node\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up an on-chain testing environment by running ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/Setup_Test_Environment.py#L14"},"Setup_Test_Environment.py"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return to your Commuto Interface Desktop repo, and replace the web3 provider address in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/Commuto_Interface_Desktop/blob/master/src/test/kotlin/com/commuto/interfacedesktop/CommutoCoreInteraction.kt"},"CommutoCoreInteraction.kt")," with the address and port number of your Hardhat Network instance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You are now ready to run tests on and develop the Commuto Desktop interface! "))),(0,a.kt)("h1",{id:"commuto-interface-mobile"},"Commuto Interface Mobile"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure you have set up a working Commuto Protocol development environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that you have JDK 16 installed:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ javac -version\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Android Studio and select ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"New")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Project from Version Control..."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone from this repository url: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/Commuto_Interface_Mobile.git"},(0,a.kt)("inlineCode",{parentName:"a"},"https://github.com/jimmyneutront/Commuto_Interface_Mobile.git")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trust the project, and wait for Android Studio to finish importing and building the project. If you don't need to work on the iOS app, you can stop here.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you need to work on the iOS app, you must use a Macintosh with ",(0,a.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835"},"Xcode")," installed. This is due to an Apple requirement.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you haven't already, install ",(0,a.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the iosApp directory and install the dependencies for the iosApp project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ cd iosApp\n$ pod install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the iOS app in Xcode with the workspace file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ open iosApp.xcworkspace\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You are now ready to run tests on and develop the Commuto Mobile interface!"))))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(m,".").concat(u)]||d[u]||s[u]||a;return n?o.createElement(k,p(p({ref:t},c),{},{components:n})):o.createElement(k,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);