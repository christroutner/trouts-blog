"use strict";(self.webpackChunktrouts_blog=self.webpackChunktrouts_blog||[]).push([[7422],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return o?a.createElement(d,i(i({ref:t},h),{},{components:o})):a.createElement(d,i({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5570:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],s={slug:"software-development-process",title:"My Software Development Process",authors:"trout",tags:["javascript"]},l=void 0,p={permalink:"/trouts-blog/blog/software-development-process",editUrl:"https://github.com/christroutner/trouts-blog/blog/2022-07-28-software-development-process/index.md",source:"@site/blog/2022-07-28-software-development-process/index.md",title:"My Software Development Process",description:"The purpose of this post is two fold:",date:"2022-07-28T00:00:00.000Z",formattedDate:"July 28, 2022",tags:[{label:"javascript",permalink:"/trouts-blog/blog/tags/javascript"}],readingTime:8.335,truncated:!1,authors:[{name:"Chris Troutner",title:"Senior JavaScript Developer",url:"https://github.com/christroutner",imageURL:"https://github.com/christroutner.png",key:"trout"}],frontMatter:{slug:"software-development-process",title:"My Software Development Process",authors:"trout",tags:["javascript"]},nextItem:{title:"My Covid Story",permalink:"/trouts-blog/blog/my-covid-story"}},h={authorsImageUrls:[void 0]},u=[{value:"Why I Need to Write About My Software Process",id:"why-i-need-to-write-about-my-software-process",level:2},{value:"Specification",id:"specification",level:2},{value:"Prototyping",id:"prototyping",level:2},{value:"Development",id:"development",level:2},{value:"Production",id:"production",level:2},{value:"Design",id:"design",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this post is two fold:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"To ground me when one of my software projects feels like it's going off the rails.")," This article is a mental-map of my well-traversed terrain. I use it to orient and ground myself."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("u",null,"To set expectations with my clients.")," This article allows me to share my mental-map with those who hire me, to better communicate how I think about their project, and how I plan to approach it.")),(0,r.kt)("p",null,"Briefly, here are the major ",(0,r.kt)("em",{parentName:"p"},"phases")," of my development process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specification"),(0,r.kt)("li",{parentName:"ul"},"Prototyping"),(0,r.kt)("li",{parentName:"ul"},"Development"),(0,r.kt)("li",{parentName:"ul"},"Production"),(0,r.kt)("li",{parentName:"ul"},"Design")),(0,r.kt)("h2",{id:"why-i-need-to-write-about-my-software-process"},"Why I Need to Write About My Software Process"),(0,r.kt)("p",null,"One big reason is for the sake of semantics. The software development industry is full of buzz words and jargon. What I call my 'software development process' is closer to what Wikipedia identifies as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systems_development_life_cycle"},"Systems Development Life Cycle")," than their article on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_development_process"},"Software Development Process"),". The meaning of these words are important when I'm managing junior developers or communicating with a client."),(0,r.kt)("p",null,"Another reason is my specialty within the software development world. I'm generally a freelancer, but sometimes I work with or manage a small team. Occasionally I will work for a large company, but that is the exception rather than the rule. I also work primarily with open source software."),(0,r.kt)("p",null,"These experiences have led me to diverge from the textbook examples of software development, like ",(0,r.kt)("em",{parentName:"p"},"Waterfall")," or ",(0,r.kt)("em",{parentName:"p"},"Agile Scum"),", which are designed for use in a conventional, large company. I wear all the hats when I work as a lone freelancer. As the team expands, I delegate the hats, but the overall process doesn't change. Even within the scope of a more rigid process like Scrum, my development process doesn't really change. The same things need to happen, regardless of what they are called. So words are important, but also not."),(0,r.kt)("p",null,"Finally, another big reason for me to write down my process is to provide a conceptual exit ramp for my clients. I seem to have the same conversations over-and-over with clients, around our software development process. This usually stems from bad expectations, which developed in the 90s."),(0,r.kt)("p",null,"In the 90s, Microsoft made a bunch of money from putting software onto disks, putting those disks into a box, and then selling the box. Anything resembling upgrades or maintenance was an opportunity to put more stuff into boxes and make more money. But software isn't like that any more, because most software today is built on top of open source code. Today, ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@derekhat/building-software-is-like-buying-a-puppy-5931243ae31c"},"building software is like buying a puppy"),"."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"I haven't always started with writing a specification, but the more experience I gain, the more valuable this process becomes. Five years ago, I didn't have enough experience to be very good at writing specifications. That's what it takes: experience. Now that I've taken several project from conception to production, and I'm aware of common patterns in that process, I can write specifications. If you don't have that experience, it's still an important process to go through."),(0,r.kt)("p",null,'"Fake it till you make it" applies here. The reason is that a specification should be the first document created and the last document edited. It changes over time, as new information about the project comes to light. Version control is important though, so that everyone involved can easily look back and identify when the goal posts get moved.'),(0,r.kt)("p",null,"The purpose of writing a specification is to get the important engineering ideas down on paper. This allows the lead developer, the money people, and everyone else to stay on the same page. Often I will break this up into two sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("strong",{parentName:"li"},"Architecture")," document will explain the high-level architecture."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Specification")," document will explain the low-level details of the data structures, file layout, and User workflow.")),(0,r.kt)("p",null,"Here are some of the questions I try to answer with these documents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is the end user?"),(0,r.kt)("li",{parentName:"ul"},"What are they trying achieve with the software?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"More specifically, what is the ",(0,r.kt)("strong",{parentName:"li"},"problem")," the User is trying to ",(0,r.kt)("strong",{parentName:"li"},"solve")," by using the software?"))),(0,r.kt)("li",{parentName:"ul"},"What other software or network resources does this app depend on?"),(0,r.kt)("li",{parentName:"ul"},"What are the data structures used by the software?"),(0,r.kt)("li",{parentName:"ul"},"What are the major sub-components of the app and how do they work?")),(0,r.kt)("p",null,"See my ",(0,r.kt)("a",{parentName:"p",href:"/blog/clean-architecture"},"Clean Architecture")," post, as it applies to this phase of the development process."),(0,r.kt)("p",null,"Here are examples of specifications that I've written and maintain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/specifications"},"PSF Specifications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/blob/master/dev-docs/specification.md"},"P2WDB Specification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Permissionless-Software-Foundation/bch-dex/tree/master/dev-docs"},"bch-dex Specification"))),(0,r.kt)("h2",{id:"prototyping"},"Prototyping"),(0,r.kt)("p",null,"I use the words ",(0,r.kt)("em",{parentName:"p"},"Prototype")," and ",(0,r.kt)("em",{parentName:"p"},"Proof of Concept")," (PoC) interchangeably. The focus of this phase is to prove that the software can actually achieve the goals set out in the Specification; not every little detail, but the major sub-components of the architecture."),(0,r.kt)("p",null,"Processes like ",(0,r.kt)("em",{parentName:"p"},"Scrum")," and ",(0,r.kt)("em",{parentName:"p"},"Test Driven Development")," (TDD) never mention this important phase of software development, because they do not apply here. In this phase I write quick and dirty code. Most of it will get thrown away or heavily refactored. The Prototyping phase is the most creative and 'fun' part of the software development process. The goal is not to write maintainable code. The outcome is binary: Can it be built or not?"),(0,r.kt)("p",null,"This is an important phase for a few reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This phase is all about quick discovery of obstacles and potential pitfalls."),(0,r.kt)("li",{parentName:"ul"},"It provides quick feedback to investors and management. If the team can't deliver, then everyone can save a lot of money, time, and emotions by identifying it as early as possible."),(0,r.kt)("li",{parentName:"ul"},"While this process can be humbling, it's incredibly educational for the developers involved.")),(0,r.kt)("p",null,"This phase revolves around the idea of the 'happy path'. The ",(0,r.kt)("em",{parentName:"p"},"happy path")," is the path of least resistance from the Users standpoint. It the path they take from start to finish, assuming everything goes right."),(0,r.kt)("p",null,"That's when you know you're done with this phase of the development process. A developer (not a normal user) can create a video recording of them going through the happy path."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Finally we're at the software development phase where frameworks like ",(0,r.kt)("a",{parentName:"p",href:"https://www.atlassian.com/agile/scrum"},"Scrum")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tanzu.vmware.com/content/blog/why-tdd"},"Test Driven Development")," (",(0,r.kt)("strong",{parentName:"p"},"TDD"),") apply. This is the most well-studied part of the software development process."),(0,r.kt)("p",null,"This is the phase where work can be created and divvied up among team members, or not. I created this video to show how I manage this phase of work with small, remote teams:"),(0,r.kt)("center",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YHngWbJ4Cjw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"production"},"Production"),(0,r.kt)("p",null,"The Production phase has everything to do with maintenance. The buzzword for this phase is Continuous Integration and Continuous Delivery (CI/CD). Production is the process of iterating through this workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify a new issue or feature."),(0,r.kt)("li",{parentName:"ul"},"Fix the issue or add the feature. This code goes into a development branch."),(0,r.kt)("li",{parentName:"ul"},"Code review and QA is conducted before merging the change into production."),(0,r.kt)("li",{parentName:"ul"},"Release a new version."),(0,r.kt)("li",{parentName:"ul"},"Start from the beginning on the next feature or issue.")),(0,r.kt)("p",null,"The main difference between the Development and Production phases is ",(0,r.kt)("em",{parentName:"p"},"sustainability"),". During development, the product is not 'done', so it's not expected to generate a cash flow. In Production, there is the assumption that the software is mature and is on a trajectory to generating a cash flow. Remember, ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@derekhat/building-software-is-like-buying-a-puppy-5931243ae31c"},"building software is like buying a puppy"),". If you can't pay to feed your puppy (generating a cash flow), then your puppy will die from starvation."),(0,r.kt)("p",null,"I'm a huge fan of Test Driven Development (TDD). The Development and Production phases of software development is where TDD really shines"),(0,r.kt)("center",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xPL84vvLwXA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("p",null,"Some past clients have expressed unpleasant surprise that I save the Design phase for last. Many want to start with design first, but that is a mistake. ",(0,r.kt)("em",{parentName:"p"},"Form follows function"),". Starting with sexy graphics and visually-appealing-but-nonfunctional mock-ups is a great way to waste money and get a project stuck, in my experience."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'"Make it work, then make it fast, then make it pretty."')),(0,r.kt)("p",null,"I've adopted the pragmatic approach of the quote above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Making it ",(0,r.kt)("em",{parentName:"p"},"work"),", means making it work ",(0,r.kt)("em",{parentName:"p"},"reliably"),". That's the most difficult step, and one that many entrepreneurs take for granted. This is the step that is far harder and more expensive than anyone thinks it will be.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once reliability is achieved, it's then time to focus on the user experience. That means making it ",(0,r.kt)("em",{parentName:"p"},"fast"),", but also ",(0,r.kt)("em",{parentName:"p"},"convenient"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, and not before, it's time to think about perception and beauty. If an app does not work, it doesn't matter how sexy it looks. But an ugly app, which works reliably, will get used. And that usage can generate a cash flow. With a cash flow, all other things are possible."))),(0,r.kt)("p",null,"I also should point out here that ",(0,r.kt)("u",null,"I do not do design work"),". If a client is insistent on having a custom visual design, I insist that they hire a designer. Visual design is not in my field of expertise, and I try to be very clear about that."),(0,r.kt)("p",null,"I use ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/"},"Bootstrap")," when building a new app. It takes care of all the visual design, and ensures that the app looks good on both a phone and a desktop. With Bootstrap, all I need to focus on is stacking blocks and making them do stuff."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"I've never seen anyone else present the software development process quite the way I have here. But my process is based on hard-won experience."),(0,r.kt)("p",null,"If you are a senior developer, or a manager of software development teams, and you'd like to reach out, contact me via ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/christroutner"},"Twitter")," or ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bch_js_toolkit"},"Telegram"),". I'm keen to learn from other's experiences and to refine my own understanding of this great art form we call software development."),(0,r.kt)("p",null,"If you are an entrepreneur looking for someone to help you develop your next great idea, I'm for hire! I can help you architecture your idea, find inexpensive remote developers, and manage those developers for you. ",(0,r.kt)("a",{parentName:"p",href:"https://fullstack.cash/consulting"},"Here are the details"),"."))}m.isMDXComponent=!0}}]);