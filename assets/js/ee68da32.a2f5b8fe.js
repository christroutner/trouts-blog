"use strict";(self.webpackChunktrouts_blog=self.webpackChunktrouts_blog||[]).push([[3725],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"clean-architecture",title:"Clean Architecture",authors:"trout",tags:["javascript"]},s=void 0,c={permalink:"/trouts-blog/blog/clean-architecture",editUrl:"https://github.com/christroutner/trouts-blog/blog/2021-07-06-clean-architecture/index.md",source:"@site/blog/2021-07-06-clean-architecture/index.md",title:"Clean Architecture",description:"Clean Architecture is a software design pattern created by 'Uncle Bob'. There are two main advantages to using this design pattern:",date:"2021-07-06T00:00:00.000Z",formattedDate:"July 6, 2021",tags:[{label:"javascript",permalink:"/trouts-blog/blog/tags/javascript"}],readingTime:2.4,truncated:!1,authors:[{name:"Chris Troutner",title:"Senior JavaScript Developer",url:"https://github.com/christroutner",imageURL:"https://github.com/christroutner.png",key:"trout"}],frontMatter:{slug:"clean-architecture",title:"Clean Architecture",authors:"trout",tags:["javascript"]},prevItem:{title:"Web 3 Cash Stack",permalink:"/trouts-blog/blog/web3-cashstack"},nextItem:{title:"Freedom, Software, and Token Economics; a Short Story",permalink:"/trouts-blog/blog/freedom-software-token-economic-short-story"}},p={authorsImageUrls:[void 0]},u=[{value:"File Layout",id:"file-layout",level:2}],d={toc:u};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clean Architecture")," is a software design pattern created by ",(0,o.kt)("a",{parentName:"p",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"'Uncle Bob'"),". There are two main advantages to using this design pattern:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It manages increasing complexity as new features and interfaces are added over time."),(0,o.kt)("li",{parentName:"ul"},"It provides defense against ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_rot"},"code rot")," by isolating the parts that rarely change from the parts that change frequently.")),(0,o.kt)("p",null,"I ran across ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/CnailTcJV_U"},"this great video")," by Bill Sourour applying the Clean Architecture concepts to a REST API server built using node.js and the Express framework. After studying it for some time, I adapted the design patterns in that video and applied them to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service"},"P2WDB")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"ipfs-service-provider")," repositories."),(0,o.kt)("p",null,"In this video, I expand on the Bill's original video and show how I applied Clean Architecture to my own REST API server using the Koa framework."),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LftjSIbHzbo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"Code is split up into four groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entities"),(0,o.kt)("li",{parentName:"ul"},"Use Cases"),(0,o.kt)("li",{parentName:"ul"},"Adapters"),(0,o.kt)("li",{parentName:"ul"},"Controllers")),(0,o.kt)("p",null,"Without knowing the patterns and reasoning behind Clean Architecture, the code will look 'weird' to most JavaScript developers. This is because Clean Architecture comes from outside the JavaScript world and some of it's core ideas (like dependency inversion) don't translate easily into JavaScript."),(0,o.kt)("h2",{id:"file-layout"},"File Layout"),(0,o.kt)("p",null,"The code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder of this repository is split up into four main directories: ",(0,o.kt)("inlineCode",{parentName:"p"},"entities"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"use-cases"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"adapaters"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"controllers"),". These directories reflect the arrangement of concerns in the Clean Architecture diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Clean Architecture Diagram",src:r(4582).Z,width:"772",height:"567"})),(0,o.kt)("p",null,"The above diagram is reflected in the code. The Controllers and Adapters both make up the green circle. I distinguish between the two:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Controllers are ",(0,o.kt)("em",{parentName:"li"},"inputs")," that cause the app to react."),(0,o.kt)("li",{parentName:"ul"},"Adapters are ",(0,o.kt)("em",{parentName:"li"},"outputs")," that the app manipulates, like a database.")),(0,o.kt)("p",null,"The diagram below shows how dependencies are arranged in the P2WDB project:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dependency Graph",src:r(5462).Z,width:"1403",height:"1263"})),(0,o.kt)("p",null,"Major features of the diagram above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The blunt point of an arrow connects the file that depends on the file pointed to by the pointy end of the arrow."),(0,o.kt)("li",{parentName:"ul"},"The dependencies in the above diagram follow the dependency arrows in the Clean Architecture diagram."),(0,o.kt)("li",{parentName:"ul"},"This project is a Koa web server app. Koa is a framework and the entry point of Koa program loads the Controllers first."),(0,o.kt)("li",{parentName:"ul"},"The Controllers load the Adapters, then it loads the Use Cases, then finally the Entities. Each lower stage depends on the stage above it."),(0,o.kt)("li",{parentName:"ul"},"Dependency Injection is used heavily to pass dependencies to the individual libraries."),(0,o.kt)("li",{parentName:"ul"},"Encapsulation pattern is used for unit tests.")),(0,o.kt)("p",null,"Moving forward, I plan to use this design pattern in all my code. I spent a couple weeks refactoring the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"ipfs-service-provider")," to match these patterns and achieve 100% unit test coverage. That repository is intended to be a ",(0,o.kt)("em",{parentName:"p"},"boilerplate")," for create decentralized, censorship-resistant providers of web services. I encourage all JavaScript developers to study this pattern and fork my code for their own use."))}h.isMDXComponent=!0},4582:function(e,t,r){t.Z=r.p+"assets/images/cleanarchitecture-26ac5f08c770e19c35a8ef38b905373f.jpg"},5462:function(e,t,r){t.Z=r.p+"assets/images/p2wdb-clean-architecture-ef2c5b41aece44bbab83375e3d0e59ae.png"}}]);