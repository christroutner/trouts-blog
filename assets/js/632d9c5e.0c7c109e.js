"use strict";(self.webpackChunktrouts_blog=self.webpackChunktrouts_blog||[]).push([[2382],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(f,o(o({ref:t},h),{},{components:a})):r.createElement(f,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7644:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={slug:"web3-cashstack",title:"Web 3 Cash Stack",authors:"trout",tags:["bch","javascript"]},l=void 0,c={permalink:"/blog/web3-cashstack",editUrl:"https://github.com/christroutner/trouts-blog/blog/2021-12-02-web3-infra/index.md",source:"@site/blog/2021-12-02-web3-infra/index.md",title:"Web 3 Cash Stack",description:"There are many interpretations of Web 3, but a common thread in all of them is an emphasis on re-decentralizing the web. Web 1.0 was very decentralized. Web 2.0 was centralized. Web 3.0 will be re-decentralized.",date:"2021-12-02T00:00:00.000Z",formattedDate:"December 2, 2021",tags:[{label:"bch",permalink:"/blog/tags/bch"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:6.455,truncated:!1,authors:[{name:"Chris Troutner",title:"Senior JavaScript Developer",url:"https://github.com/christroutner",imageURL:"https://github.com/christroutner.png",key:"trout"}],frontMatter:{slug:"web3-cashstack",title:"Web 3 Cash Stack",authors:"trout",tags:["bch","javascript"]},prevItem:{title:"Realizing the Web 3 Cash Stack",permalink:"/blog/realizing-web3-cash-stack"},nextItem:{title:"Clean Architecture",permalink:"/blog/clean-architecture"}},h={authorsImageUrls:[void 0]},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Casual Users:",id:"casual-users",level:3},{value:"Exchange or professional company:",id:"exchange-or-professional-company",level:3},{value:"Hobby Developers:",id:"hobby-developers",level:3},{value:"Censored Users:",id:"censored-users",level:3},{value:"Network Architecture",id:"network-architecture",level:2},{value:"Web 2.0",id:"web-20",level:3},{value:"Web 3.0",id:"web-30",level:3},{value:"Software",id:"software",level:2}],u={toc:p};function m(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/s/story/why-decentralization-matters-5e3f79f7638e"},"many interpretations")," of ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/web2-vs-web3/"},"Web 3"),", but a common thread in all of them is an emphasis on re-decentralizing the web. Web 1.0 was very decentralized. Web 2.0 was centralized. Web 3.0 will be re-decentralized."),(0,i.kt)("p",null,"In early 2021, I started to earnestly dig into the inner workings of ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io"},"IPFS"),', to answer one burning question: "',(0,i.kt)("em",{parentName:"p"},"What is the best way to decentralized back-end infrastructure?"),'"'),(0,i.kt)("p",null,"This blog is an example of a decentralized front-end app, delivered over IPFS, hosted on the Filecoin blockchain. That's great for a blog or a publisher. But to do really sophisticated business applications requires censorship-resistant access to databases, blockchains, and other back-end infrastructure. ",(0,i.kt)("a",{parentName:"p",href:"https://bafybeicesmklvrh6a32ifzn75rar3ts3hzybojpztbtqamnuyl7r4nnsoi.ipfs.dweb.link/blog/ipfs-api"},"IPFS API")," was my first attempt to conceptualize how to wire back-end infrastructure over IPFS. Over the last year I've developed, configured, and re-configured the code and networking behind the ",(0,i.kt)("a",{parentName:"p",href:"https://psfoundation.cash/blog/cash-stack"},"Cash Stack")," in an attempt to find the best configuration."),(0,i.kt)("p",null,"This blog post summarizes my findings. It's my attempt to describe the path before me, the path I think that lies before the entire blockchain industry. Censorship is coming, and only the decentralized projects will survive. The Use Cases and software architecture in this post provide a map for projects to build a durable foundation of infrastructure."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Before discussing the ",(0,i.kt)("em",{parentName:"p"},"How"),", let me present the ",(0,i.kt)("em",{parentName:"p"},"Why"),". I was trained to always remember the 'User Story' or the 'Use Case'. ",(0,i.kt)("em",{parentName:"p"},"Why")," am I building what I'm building? What problem is it trying to solve? That's what the Use Case captures. Users that want to access blockchain infrastructure can be categorized into one of the following use cases:"),(0,i.kt)("h3",{id:"casual-users"},"Casual Users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiar with installing a phone app or visiting a web page, but no significant technical knowledge."),(0,i.kt)("li",{parentName:"ul"},"Web 2.0 is the most efficient for this. Latency and connectivity issues of IPFS are not appropriate."),(0,i.kt)("li",{parentName:"ul"},"Not willing to pay money for service. Might be willing to sign up for an account, but would prefer not to.")),(0,i.kt)("h3",{id:"exchange-or-professional-company"},"Exchange or professional company:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Has money to spend on infrastructure."),(0,i.kt)("li",{parentName:"ul"},"Needs isolated (not shared) infrastructure."),(0,i.kt)("li",{parentName:"ul"},"Needs high-speed, cloud-based infrastructure. Expects the speed and good UX of Web 2.0.")),(0,i.kt)("h3",{id:"hobby-developers"},"Hobby Developers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does not have a lot of money to spend on infrastructure."),(0,i.kt)("li",{parentName:"ul"},"May or may not have the ability to run their own full node and other back end infrastructure."),(0,i.kt)("li",{parentName:"ul"},"Important to support because this is where a lot of innovation comes from.")),(0,i.kt)("h3",{id:"censored-users"},"Censored Users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lives in a country, or working within a company, that is actively trying to prevent them from accessing the blockchain."),(0,i.kt)("li",{parentName:"ul"},"This user wants to circumvent the censorship and is willing to jump through more hoops than the Casual User."),(0,i.kt)("li",{parentName:"ul"},"Not willing to pay money for service. Might be willing to sign up for an account, but would prefer not to.")),(0,i.kt)("h2",{id:"network-architecture"},"Network Architecture"),(0,i.kt)("p",null,"Based on my research over the course of 2021, I will discuss different configurations of the ",(0,i.kt)("a",{parentName:"p",href:"https://psfoundation.cash/blog/cash-stack"},"Cash Stack"),". The first configuration uses strictly Web 2.0 principles. The other configuration blends in components that involve IPFS. Which configuration is appropriate, depends on the Use Case being considered."),(0,i.kt)("h3",{id:"web-20"},"Web 2.0"),(0,i.kt)("p",null,"Below is the 'Web 2.0' version described in ",(0,i.kt)("a",{parentName:"p",href:"https://psfoundation.cash/blog/cash-stack"},"this Cash Stack post"),". The centralized architecture is far more efficient and scalable than any 'Web 3.0' or decentralized architecture. It gave birth to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.profitwell.com/recur/all/saas-business-model"},"Saas Business Model"),". As far as blockchain is concerned, this architecture is the most appropriate for the ",(0,i.kt)("em",{parentName:"p"},"Exchange")," use case. If there is an Exchange (or company) willing to pay the bills, they can financially sustain the preferred user experience (UX) of the ",(0,i.kt)("em",{parentName:"p"},"Casual User")," use case."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Web 2.0 Cash Stack",src:a(5280).Z,width:"383",height:"554"})),(0,i.kt)("p",null,"The achilles heel of this model is ",(0,i.kt)("strong",{parentName:"p"},"censorship"),". It's fragile in the face of any censorship. There are well-established industry best practices for censoring this architecture. This architecture is not appropriate for the ",(0,i.kt)("em",{parentName:"p"},"Censored User")," use case."),(0,i.kt)("p",null,"This architecture is also expensive. It's not practical to run this architecture from a home server. Cloud infrastructure is required in all but the most exceptional of cases. Cloud infrastructure has a monthly cost. Stop paying and the infrastructure disappears like smoke. ",(0,i.kt)("em",{parentName:"p"},"Hobby Developers")," may be able to run this infrastructure at home, but they can not break out of the hobby-category without funding."),(0,i.kt)("h3",{id:"web-30"},"Web 3.0"),(0,i.kt)("p",null,"The Web 3.0 Cash Stack inserts two new blocks into the middle of the stack, which are mirror images of one another:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"IPFS Service Provider")," - Proxies the REST API over IPFS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"IPFS Service Consumer")," - Proxies IPFS communication to a 'local' REST API.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Web 3.0 Cash Stack",src:a(4859).Z,width:"447",height:"794"})),(0,i.kt)("p",null,"By adding these two new pieces of software, it decouples the expensive 'global' back end infrastructure, and proxies it to a much less expensive 'local' back end REST API. This has several advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Because IPFS automatically handles the complex networking, it's much more pragmatic to run the expensive global back end infrastructure from a home internet connection. This reduces the greatest cost of the Web 2.0 model.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"By leveraging ",(0,i.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/circuit-relay/"},"Circuit Relays"),", this architecture is extremely resistant to attempts at censorship.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},"Because of the decoupling, the ",(0,i.kt)("em",{parentName:"li"},"local back end")," is capable of using one-of-many instances of the ",(0,i.kt)("em",{parentName:"li"},"global back end"),". It only needs to connect to one in order to succeed, and it can choose any instance on the network.")),(0,i.kt)("p",null,"If implemented correctly, the performance should be acceptable to the ",(0,i.kt)("em",{parentName:"p"},"Casual User")," use case. The extra layers adds some latency, but it provides much lower cost. Weather this architecture is appropriate for the ",(0,i.kt)("em",{parentName:"p"},"Casual User")," use case depends on the specific application, but the trade-offs may be acceptable. If there is no company to pay for web 2.0 architecture, this web 3.0 architecture may be the only financially practical way to roll out an app for ",(0,i.kt)("em",{parentName:"p"},"Casual Users"),"."),(0,i.kt)("p",null,"This architecture really exceeds at the ",(0,i.kt)("em",{parentName:"p"},"Hobby Developer")," and ",(0,i.kt)("em",{parentName:"p"},"Censored User")," use cases. It should be noted that the 'local' REST API can be embedded entirely in a web browser. This allows ",(0,i.kt)("em",{parentName:"p"},"Censored Users")," the convenience of loading an IPFS-based web page in their browser, to achieve the ability to circumvent whatever actor is attempting to censor them."),(0,i.kt)("p",null,"This is the most flexible architecture for the ",(0,i.kt)("em",{parentName:"p"},"Hobby Developer"),". Developers unfamiliar with running back end infrastructure, who want to focus primarily on front end applications, can run a single, simple app to provide the local back end. Developers more comfortable with Dev Ops and running back end infrastructure, can provide the global back end infrastructure to the rest of the community, from the comfort (and cost-savings) of their own home. The ",(0,i.kt)("a",{parentName:"p",href:"https://psfoundation.cash"},"Permissionless Software Foundation")," is offering ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/bounties"},"Bounties")," to incentivize hobby developers to run this global back end infrastructure."),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("p",null,"The descriptions above are abstract. This section is for developers that want to know the specific software implementing the architecture. The software running the Web 2.0 architecture is documented in ",(0,i.kt)("a",{parentName:"p",href:"https://psfoundation.cash/blog/cash-stack"},"this Cash Stack post"),". Here is the new software implementing the Web 3.0 architecture:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service"},"ipfs-bch-wallet-service")," sits at the top of the global back end. It connects to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/bch-api"},"bch-api"),", or to the infrastructure at ",(0,i.kt)("a",{parentName:"li",href:"https://fullstack.cash"},"FullStack.cash"),", and it proxies it over IPFS using a JSON RPC interface.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer"},"ipfs-bch-wallet-consumer")," is the mirror image of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service"},"ipfs-bch-wallet-service"),". They communicate over IPFS, and ipfs-bch-wallet-consumer provides local REST API endpoints for the front end to interact with.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ipfs-coord"},"ipfs-coord")," is a core library used by both of the above software projects. This allows IPFS nodes to find one another, circumvent firewalls, stay connected, and communicate securely.",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/minimal-slp-wallet"},"minimal-slp-wallet")," is a JavaScript library that provides basic Bitcoin Cash wallet functionality. It can interface with a local instance of ipfs-bch-wallet-consumer via its REST API. This library is used by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/gatsby-theme-bch-wallet"},"gatsby-theme-bch-wallet")," which you can interact with at ",(0,i.kt)("a",{parentName:"li",href:"https://wallet.fullstack.cash"},"wallet.fullstack.cash"),".")))}m.isMDXComponent=!0},5280:function(e,t,a){t.Z=a.p+"assets/images/cash-stack-web-2-37ad804e08488856f37303af1e8dcc3c.png"},4859:function(e,t,a){t.Z=a.p+"assets/images/cash-stack-web-3-197c6e2ddebac3f38b1fcadbf61f676d.png"}}]);