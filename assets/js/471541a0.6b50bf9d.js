"use strict";(self.webpackChunkcommuto_docs=self.webpackChunkcommuto_docs||[]).push([[60],{702:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return u}});var a=o(3117),n=o(102),s=(o(7294),o(3905)),r=["components"],i={title:"What is Commuto?",sidebar_position:1},c=void 0,h={unversionedId:"what-is-commuto",id:"what-is-commuto",title:"What is Commuto?",description:"Commuto facilitates the fast and safe exchange of traditional national currencies and fiat-pegged digital currencies.",source:"@site/docs/what-is-commuto.md",sourceDirName:".",slug:"/what-is-commuto",permalink:"/docs/what-is-commuto",draft:!1,editUrl:"https://github.com/jimmyneutront/commuto-docs/tree/master/docs/what-is-commuto.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is Commuto?",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Set Up A Development Environment",permalink:"/docs/guides/dev-env"}},l={},u=[{value:"Why does Commuto exist?",id:"why-does-commuto-exist",level:2},{value:"How does Commuto work?",id:"how-does-commuto-work",level:2},{value:"What if something goes wrong?",id:"what-if-something-goes-wrong",level:3}],m={toc:u};function p(e){var t=e.components,o=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Commuto facilitates the fast and safe exchange of traditional national currencies and fiat-pegged digital currencies."),(0,s.kt)("p",null,"But Commuto is not just an app. Rather, it is an ecosystem composed of multiple parts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Commuto Core"),": A set of trustless, uncensorable, non-upgradable smart contracts for EVM compatible blockchains. These contracts hold an exchange offer book, as well as all the code necessary for offer makers and takers to complete an exchange of traditional and digital currency. This includes mechanisms for resolving unforeseen issues that arise during the swap process.",(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("h3",{parentName:"blockquote",id:"what-is-a-smart-contract"},"What is a smart contract?"),(0,s.kt)("p",{parentName:"blockquote"},"Smart contracts are small computer programs that are stored on a blockchain, in a fashion similar to the way in which cryptocurrency transactions are stored on a blockchain. Additionally, in the same way that cryptocurrency transactions can be trusted because they are public and can be verified by anybody, the results produced by running a smart contract can be trusted, since both the smart contract itself and the results it produces are public and can be verified by anybody in a similar fashion."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Commuto Interfaces"),": A set of applications for Android, iOS and Desktop that allow easy interaction with Commuto Core smart contracts and seamless, private communication with exchange counterparties. These interfaces make up a peer-to-peer network across which data is shared, meaning there is no central server for malicious entities to target in an attempt to disrupt Commuto. Additionally, each user's personal information is stored only on their Commuto Interface, and is shared only with exchange counterparties. And such sharing occurs only when it is strictly necessary (such as sharing bank account details in order to send or receive traditional currency.)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Commuto Governance"),": A smart contract for EVM compatible blockchains by which holders of Commuto's native token can vote on and execute proposals related to Commuto, such as adding support for new stablecoins, traditional currencies or payment methods, or funding research and development that will benefit the community as a whole. (Note: the Commuto Governance design is not yet implemented.)")),(0,s.kt)("p",null,"These components all work together to create Commuto's unified user experience."),(0,s.kt)("p",null,"Commuto is what all financial technology should be: easy to use, fully transparent, and open to anyone, at any time, in any place."),(0,s.kt)("h2",{id:"why-does-commuto-exist"},"Why does Commuto exist?"),(0,s.kt)("p",null,"The right to freely exchange one's own fairly acquired property is fundamental. Unfortunately, world leaders and central bankers often trample this right with reckless abandon, invariably at the expense of the world's least fortunate."),(0,s.kt)("p",null,"In November 2009, the government of the Democratic People's Republic of Korea announced a revaluation of the Korean People's won. One hundred old wons could be exchanged for one new won, but no more than 500,000 old won (worth about 200 US dollars at the time) could be exchanged, and old won ceased to be legal tender at the end of the month. Those who violated currency exchange laws were threatened with \"merciless punishment\" and two accused black market currency traders were allegedly shot dead in the street by Pyongsong police. And so with the stroke of a pen, the fortunes of an entire nation disappeared. ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/North_Korean_won"},"[","1","]")),(0,s.kt)("p",null,"Throughout the 1990s, concerns about the stability of the peso led many Argentinians to hold their wealth in US dollar-denominated bank accounts. But in December 2001, they learned that their dollars weren't safe either. In an effort to cheapen Argentine exports and stop a bank run, the government froze all bank accounts for the next ninety days. Account holders could withdraw no more than a few hundred pesos per week from peso-denominated accounts, and couldn't withdraw from dollar-denominated accounts unless they agreed to the immediate conversion of their dollar withdrawal to pesos. ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Corralito"},"[","2","]")," The following January, things got worse. The peso dropped its peg to the US dollar; one dollar became worth four pesos. Additionally, all dollars that remained in bank accounts were converted to pesos, but at the old 1:1 exchange rate. ",(0,s.kt)("a",{parentName:"p",href:"https://www.theglobeandmail.com/report-on-business/argentinas-forced-pesofication-ruled-illegal/article25685504/"},"[","3","]")," And just like that, the savings of the Argentines were quartered."),(0,s.kt)("p",null,"These are perhaps the two most egregious and well-known examples of a theme seen throughout history, in which honest, hardworking people are reduced to little more than numbers on a spreadsheet. Commuto exists to break this mold, putting the user back in control of their own wealth."),(0,s.kt)("h2",{id:"how-does-commuto-work"},"How does Commuto work?"),(0,s.kt)("p",null,'This section will walk you through the process of exchanging ("swapping") fiat currency and stablecoins with Commuto. To keep things understandable for new users, many technical details will be glossed over. If you are interested in a more technically thorough explanation, you can consult the contract\'s ',(0,s.kt)("a",{parentName:"p",href:"https://jimmyneutront.github.io/commuto-docs/docs/technical-reference/core-tec-ref"},"technical reference"),", the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-whitepaper/blob/main/commuto-whitepaper.txt"},"whitepaper")," or the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-whitepaper/blob/main/commuto-interface-specification.txt"},"interface specification")," along with its accompanying BPMN diagrams."),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"what-is-a-stablecoin"},"What is a stablecoin?"),(0,s.kt)("p",{parentName:"blockquote"},"A ",(0,s.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/s/stablecoin.asp"},"stablecoin")," is a type of cryptocurrency with a price that is tied to some external asset or commodity, like the euro or gold. Consider DAI, a stablecoin that is soft-pegged to the US dollar. You can buy or sell it today, tomorrow or a year from now, at a rate of one DAI per dollar plus or minus a cent or so. Compare this with a cryptocurrency like Bitcoin, the price of which can fluctuate up or down by ten percent or more in a single day. Many people see stablecoins as the best of both worlds: they provide the security, fungibility and fast transaction speed of cryptocurrency with the worry-free, stable value of a fiat currency.")),(0,s.kt)("p",null,"Now suppose Bob owns an amount of some stablecoin, referred to henceforth with the symbol STBL. Alice has a small amount of STBL as well. Alice likes the security and convenience of stablecoins, so she wants to purchase STBL with a fiat currency, referred to henceforth with the symbol FIAT. Bob needs to pay for some expense (like taxes or a utility bill) with FIAT, so he needs to sell some of his STBL."),(0,s.kt)("p",null,"Bob opens the Commuto app on an iOS, Android or desktop device. If he hasn't already, he logs in with his Matrix account."),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"what-is-a-matrix-account-and-why-does-bob-need-one"},"What is a Matrix account, and why does Bob need one?"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://matrix.org"},"Matrix")," is an open standard for interoperable, decentralized, real-time communication. You can send and receive messages to other Matrix users by connecting to a Matrix server hosted by someone else, or you can host your own server. Either way, Matrix servers sync messages with each other, so you can communicate with your friends regardless of which servers you are connected to."),(0,s.kt)("p",{parentName:"blockquote"},"Since Commuto doesn't rely on centralized servers, Commuto interfaces use Matrix to securely communicate with one another in a decentralized fashion. However, all this communication takes place \"under the hood\" so the user need not bother with it. Simply sign in when you first launch the app, and you're good to go!")),(0,s.kt)("p",null,"Once he's connected to Matrix, Bob prepares a new sell offer. Although Commuto supports many payment methods, Bob specifies that he is willing to receive payment in US dollars via Zelle, Revolut, or an ACH transfer. If he hasn't done so already, he stores his Zelle, Revolut and bank account information in the Commuto app. For now, this information remains only on Bob's device; it isn't stored in server or database, and it will only be shared with the person who takes Bob's offer. Bob also specifies the amount of STBL he is willing to sell and the price at which he is willing to sell it. Finally, he specifies the size of the security deposit to be collected from the buyer and seller. Then he opens the offer. "),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"what-is-a-security-deposit-and-why-is-it-necessary"},"What is a security deposit, and why is it necessary?"),(0,s.kt)("p",{parentName:"blockquote"},"A security deposit is an amount of STBL that the CommutoSwap smart contract will temporarily take from both the buyer and seller for the duration of the swap. If neither the buyer nor the seller act maliciously during the swap process, then CommutoSwap will return their security deposits to them once they have both confirmed that the swap is complete. In this way, the collection of security deposits incentivizes good behavior."),(0,s.kt)("p",{parentName:"blockquote"},"Consider what might happen if security deposits weren't collected: Bill opens an offer to sell 100 STBL in exchange for 100 FIAT. Joe takes Bill's offer, and sends 100 FIAT to Bill via bank transfer. Bill no longer has 100 STBL, but he instead has 100 FIAT, so he never bothers to re-open the Commuto app and confirm that he received his FIAT. Because he never gives this confirmation, CommutoSwap will never give Joe the 100 STBL he paid for, and now Joe is 100 FIAT poorer."),(0,s.kt)("p",{parentName:"blockquote"},"Now consider this same scenario, but with the collection of security deposits: Bill opens an offer to sell 100 STBL in exchange for 100 FIAT, and surrenders a 10 STBL security deposit to the CommutoSwap smart contract. Joe takes Bill's offer, and also must surrender a 10 STBL security deposit. Then Joe sends 100 FIAT to Bill via bank transfer. Bill now has 100 FIAT, but he has given up 110 STBL. Unless he re-opens the Commuto app and confirms that he has received payment from Joe, he is out 10 STBL, since he won't be able to get his security deposit back otherwise. To avoid sacrificing his security deposit, Bill gives this confirmation. Then Joe is able to claim his 100 STBL plus his 10 STBL security deposit, the swap becomes complete, and everyone is happy."),(0,s.kt)("p",{parentName:"blockquote"},"So in order to use Commuto, whether you are buying or selling, you will need at least a couple dollars worth of a supported stablecoin. If you don't already have some, you can purchase from a trusted friend or family member, or search for a nearby ",(0,s.kt)("a",{parentName:"p",href:"https://coinatmradar.com"},"crypto ATM"),".")),(0,s.kt)("p",null,"Under the hood, Bob's Commuto interface creates a key pair and interacts with the CommutoSwap smart contract on the blockchain. CommutoSwap takes Bob's security deposit and adds Bob's offer to its offer book, so other Commuto users can see it. Then Bob's interface announces the public key of his key pair to all other listening interfaces. Bob has now opened his new offer; he closes his Commuto interface app and will return in a few hours to check if his offer has been taken.  "),(0,s.kt)("blockquote",null,(0,s.kt)("h3",{parentName:"blockquote",id:"what-is-a-key-pair"},"What is a key pair?"),(0,s.kt)("p",{parentName:"blockquote"},"A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"key pair")," is a pair of keys: one public key, and one private key. A ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_(cryptography)"},"key")," is a string of letters and numbers that can be used to encode and decode information. As the names imply, Bob shares his public key with anyone and everyone, but he keeps his private key to himself, sharing it with nobody. If someone wants to send Bob a secret message, they can encrypt such a message with Bob's public key. This produces a seemingly random string of letters and numbers. This string is totally meaningless to anybody, unless they have Bob's private key. If they do, then they can decrypt the seemingly random string and read the original secret message. But since Bob never shares his private key, nobody else can read the secret message."),(0,s.kt)("p",{parentName:"blockquote"},"Suppose that Bob needs to send a message to someone and needs to prove that he is, in fact, the author of the message. (Assume that the intended recipient of Bob's message already knows Bob's public key.) Bob uses both his message and his private key to create a message signature. Such a signature can only be created by someone who knows Bob's private key, and since only Bob knows his private key, he is the only one who can create such a signature. Then Bob sends both his message and its signature along to the intended recipient. Upon receiving the message and signature, the recipient verifies the signature using the message and Bob's public key. If signature verification succeeds, the recipient knows that they are actually corresponding with Bob. If signature verification fails, then the recipient knows that someone is trying to impersonate Bob, or that someone is trying to change Bob's messages while they are in transit."),(0,s.kt)("p",{parentName:"blockquote"},"We will soon see why Bob needs such a key pair.")),(0,s.kt)("p",null,"Next, Alice opens the Commuto app on her device. Like Bob, Alice logs in with her Matrix account if she hasn't already done so. After reviewing the list of open offers, Alice decides to take Bob's offer, and to send payment via an ACH transfer. If she hasn't done so already, Alice stores her bank account information in the Commuto app. (Remember that this information is stored on Alice's device and is only shared with Bob.) Finally, she takes the offer."),(0,s.kt)("p",null,"Under the hood, Alice's Commuto interface creates a key pair and interacts with the CommutoSwap smart contract on the blockchain. CommutoSwap takes Alice's security deposit, marks Bob's offer as taken, and then creates and stores a swap data structure with necessary information about Bob and Alice. Then Alice's interface creates a message containing her bank account information and her new public key, signs the message with her private key, encrypts the message and signature with Bob's public key, and broadcasts the encrypted message. Alice has now taken Bob's offer; she closes her Commuto interface app and will return in a few hours to check if Bob's interface has sent his payment information."),(0,s.kt)("p",null,"Bob re-opens his Commuto app and sees that his offer has been taken. Bob's interface automatically finds Alice's message, decrypts it and verifies the signature. Then it stores Alice's public key and bank account information locally. Then it creates and signs a message containing Bob's bank account information, encrypts the message and signature with Alice's public key, broadcasts the encrypted message, and transfers to CommutoSwap the amount of STBL that Bob is selling. Now Bob waits for Alice to send FIAT payment to his bank account."),(0,s.kt)("p",null,"Alice re-opens the Commuto app on her device. The app automatically discovers Bob's message, and displays Bob's bank account information to Alice. Then Alice sends payment to Bob's bank account, and confirms in the Commuto app that she has paid. Then she closes the app and waits for Bob to confirm that the bank transfer succeeded. "),(0,s.kt)("p",null,"Once the money arrives in Bob's bank account, he re-opens the Commuto app to confirm that he has received payment. Once he has done this, both he and Alice use the Commuto app to reclaim their security deposits. At this point, the swap is complete: Bob has the FIAT he wanted, Alice has the STBL she wanted, and they have both reclaimed their security deposits."),(0,s.kt)("p",null,"That is how Commuto works!"),(0,s.kt)("blockquote",null,(0,s.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,s.kt)("p",{parentName:"blockquote"},"The example above describes a maker-as-seller trade, but Commuto supports maker-as-buyer trades as well.")),(0,s.kt)("h3",{id:"what-if-something-goes-wrong"},"What if something goes wrong?"),(0,s.kt)("p",null,"Life happens, and sometimes a swap doesn't go smoothly for any of a number of reasons. That's why Commuto has infrastructure in place for resolving disputes between buyers and sellers."),(0,s.kt)("p",null,"Maybe your bank is closed for the day, or you can't get to the post office to make out a money order until the weekend. In the case of small inconveniences like this, you can use the Commuto app's built-in chat feature to keep your swap counterparty updated and resolve issues without help from a dispute agent."),(0,s.kt)("p",null,"In the event that two swappers can't work out their issues themselves, either one can raise a dispute in the Commuto app, requesting the intervention of dispute agents."),(0,s.kt)("p",null,"Dispute agents are neutral, unbiased, bonded third parties who have been elected by the Commuto community to resolve disputes. In addition to being elected, they must surrender a community-approved amount of stablecoin to be held by the Commuto governance contract for the duration of their time as a dispute agent. If they act maliciously, this bond can be confiscated; in this way, the bonding process incentivizes good behavior."),(0,s.kt)("p",null,"When a buyer or seller raises a dispute, three dispute agents are assigned to the case. The buyer and the seller are put into two separate chat rooms, in which they can communicate with the dispute agents and describe the circumstances of the dispute. The dispute agents are also put into a chat room of their own in order to discuss and determine a solution: they determine the amount of STBL that the buyer and seller should receive, given the circumstances of the dispute. Once two out of three dispute agents have agreed upon and submitted a solution to the CommutoSwap smart contract, the buyer and seller can claim the amounts of STBL they deserve, as determined by the dispute agents. "),(0,s.kt)("p",null,"If the dispute agents aren't able to agree on a solution within one week, the buyer or seller can escalate the dispute further by proposing a solution for approval by the Commuto community. For more information about this process, please see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/jimmyneutront/commuto-whitepaper/blob/main/commuto-whitepaper.txt"},"whitepaper"),"."))}p.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),h=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=h(o),p=n,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||s;return o?a.createElement(d,r(r({ref:t},l),{},{components:o})):a.createElement(d,r({ref:t},l))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var h=2;h<s;h++)r[h]=o[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);