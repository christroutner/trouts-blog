"use strict";(self.webpackChunktrouts_blog=self.webpackChunktrouts_blog||[]).push([[7908],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,A=function(e,t){if(null==e)return{};var a,n,A={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,A=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=A,f=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function h(e,t){var a=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:A,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8486:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=a(7462),A=a(3366),r=(a(7294),a(3905)),o=["components"],s={slug:"realizing-web3-cash-stack",title:"Realizing the Web 3 Cash Stack",authors:"trout",tags:["bch","javascript"]},i=void 0,l={permalink:"/trouts-blog/blog/realizing-web3-cash-stack",editUrl:"https://github.com/christroutner/trouts-blog/blog/2021-12-16-realizing-web3-cashstack/index.md",source:"@site/blog/2021-12-16-realizing-web3-cashstack/index.md",title:"Realizing the Web 3 Cash Stack",description:"The previous blog post provided a very high-level overview of the Web 3 Cash Stack architecture. This article descends into various implementations of that architecture that I, and other decentralized members of the PSF, are in the process of standing up.",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[{label:"bch",permalink:"/trouts-blog/blog/tags/bch"},{label:"javascript",permalink:"/trouts-blog/blog/tags/javascript"}],readingTime:5.705,truncated:!1,authors:[{name:"Chris Troutner",title:"Senior JavaScript Developer",url:"https://github.com/christroutner",imageURL:"https://github.com/christroutner.png",key:"trout"}],frontMatter:{slug:"realizing-web3-cash-stack",title:"Realizing the Web 3 Cash Stack",authors:"trout",tags:["bch","javascript"]},prevItem:{title:"My Covid Story",permalink:"/trouts-blog/blog/my-covid-story"},nextItem:{title:"Web 3 Cash Stack",permalink:"/trouts-blog/blog/web3-cashstack"}},c={authorsImageUrls:[void 0]},p=[{value:"Global Back End",id:"global-back-end",level:2},{value:"Local Back End",id:"local-back-end",level:2},{value:"Front End",id:"front-end",level:2}],u={toc:p};function h(e){var t=e.components,s=(0,A.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The previous blog post provided a very high-level overview of the ",(0,r.kt)("a",{parentName:"p",href:"/blog/web3-cashstack"},"Web 3 Cash Stack architecture"),". This article descends into various implementations of that architecture that I, and other decentralized members of ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundation.cash"},"the PSF"),", are in the process of standing up."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Implementing the Web 3.0 Cash Stack",src:a(6619).Z,width:"1343",height:"903"})),(0,r.kt)("p",null,"If the images appear too small to read the text, click on them to open a larger version of the image."),(0,r.kt)("p",null,"While it looks lot busier, the image above has all all the same features as the simplified Web 3 diagram in the previous blog post. It's easier to describe how all the pieces fit together by walking through the three main layers of infrastructure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global Back End Software"),(0,r.kt)("li",{parentName:"ul"},"Local Back End Software"),(0,r.kt)("li",{parentName:"ul"},"Front End Software")),(0,r.kt)("h2",{id:"global-back-end"},"Global Back End"),(0,r.kt)("p",null,"The global back end is the part of the software stack that has changed the least. While the original ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundation.cash/blog/cash-stack"},"Cash Stack")," has had steady improvements, it's basic architecture has changed very little in the last three years. What ",(0,r.kt)("em",{parentName:"p"},"has")," changed is the emphasis on software further up the stack that interfaces with it, and putting the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"JSON RPC over IPFS")," on equal footing with the conventional REST API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Global Back End Software",src:a(5560).Z,width:"1343",height:"563"})),(0,r.kt)("p",null,"Whereas the focus has been on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/bch-api"},"bch-api")," in the past, there is a new focus on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service"},"ipfs-bch-wallet-service")," as the primary way to interface with the back end infrastructure. ",(0,r.kt)("inlineCode",{parentName:"p"},"bch-api"),", our Web 2.0 workhorse, isn't going anywhere. It's flexible and high-resolution REST API interface will always be preferred for Web 2.0 companies and exchanges. ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-service")," compliements ",(0,r.kt)("inlineCode",{parentName:"p"},"bch-api")," by ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs-bch-wallet-service.fullstack.cash/#api-JSON_BCH"},"simplifying the API")," to a few endpoints that are needed for common wallet use cases. It also provides this API over two interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST API over HTTP"),(0,r.kt)("li",{parentName:"ul"},"JSON RPC over IPFS")),(0,r.kt)("p",null,"The JSON RPC over IPFS is what unlocks the real power of web3. Because IPFS automatically handles the networking and easily penetrates firewalls, the global back end software can use consumer hard drives, in normal desktop computers, using home internet connections. This directly competes with the cloud infrastructure needed by Web 2.0 apps, and drastically lowers costs. It also makes it easier for web3 community members to support one another, and improves decentralization."),(0,r.kt)("p",null,"In the image, two PSF servers are called out by their ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ipfs-coord"},"ipfs-coord")," names:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bch-wallet-service-US-PDX"),(0,r.kt)("li",{parentName:"ul"},"bch-wallet-service-west-coast-canada")),(0,r.kt)("p",null,"There are more than these two servers on the network, and more will be added in the future thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/bounties"},"PSF bounties"),". Because these back end servers are interchangeable, the software higher up in the stack can choose one-of-many in order to achieve its goals. They all connect to a common 'bus', which is a subnetwork on IPFS, created by the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ipfs-coord"},"ipfs-coord library"),"."),(0,r.kt)("p",null,"The JSON RPC over IPFS interface lowers costs, improves decentralization, and improves reliability."),(0,r.kt)("h2",{id:"local-back-end"},"Local Back End"),(0,r.kt)("p",null,"The concept of a 'local' back end is a new concept introduced in the web3 Cash Stack architecture, and it's largely encompassed by a single piece of software: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer"},"ipfs-bch-wallet-consumer"),". This is the mirror image of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service"},"ipfs-bch-wallet-service"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Local Back End Software",src:a(4173).Z,width:"1343",height:"283"})),(0,r.kt)("p",null,"Compared to the Global Back End, ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer")," is a very 'light' piece of software. It can run comfortably on low-power computing devices, like the ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/raspberry-pi-400/"},"Pi 400"),", with a minimal internet connection."),(0,r.kt)("p",null,"Eventually, ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer")," will automatically find and connect to the lowest-latency wallet service it can find on the IPFS network. All communication between the two pieces of software is end-to-end encrypted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer")," provides a convenient, local ",(0,r.kt)("a",{parentName:"p",href:"https://free-bch.fullstack.cash/"},"REST API interface")," for programmers to develop against. This allows experienced Web 2.0 developers to leverage IPFS without needing to know anything about it or changing their workflow in any way. This single REST API interface is the only 'back end' software a front end developer needs to run."),(0,r.kt)("p",null,"An instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer")," is made available as a public API at ",(0,r.kt)("a",{parentName:"p",href:"https://free-bch.fullstack.cash/"},"free-bch.FullStack.cash"),". This allows public access to the BCH blockchain for phone apps, random web apps, and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/psf-bch-wallet"},"psf-bch-wallet")," command line wallet."),(0,r.kt)("h2",{id:"front-end"},"Front End"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/blog/web3-cashstack"},"Web 3 Cash Stack article")," introduced four types of use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exchanges/Companies"),(0,r.kt)("li",{parentName:"ul"},"Casual Users"),(0,r.kt)("li",{parentName:"ul"},"Hobby Developers"),(0,r.kt)("li",{parentName:"ul"},"Censored Users")),(0,r.kt)("p",null,"Those four use cases are represented by the four front end software instances in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Front End Software",src:a(1685).Z,width:"1343",height:"463"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wallet.fullstack.cash"},"wallet.fullstack.cash")," is a great example of a Web 2.0 app that an Exchange or Company might build. It follows all the Web 2.0 best practices for scaling and a good user experience. This app connects to a cloud-hosted instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer")," which in-turn connects to a dedicated instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-service"),". The use of IPFS in this case is superfluous to normal operation, but it does provide a way to 'fall-back' to the community infrastructure in an emergency. A form of 'failing gracefully'."),(0,r.kt)("p",null,"Up to this point, the ",(0,r.kt)("a",{parentName:"p",href:"https://psfoundation.cash"},"PSF")," has not offered an Android or iOS version of ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.fullstack.cash"},"wallet.fullstack.cash")," because the cloud infrastructure cost is much more expensive. Freeloaders of the REST API service can be avoided in the web app, but not in the phone app. But that is no longer a significant burden with this new architecture."),(0,r.kt)("p",null,"The phone app represents the 'Casual User' use case. An Android APK file will be offered soon that can be side-loaded to a phone. It will connect to ",(0,r.kt)("a",{parentName:"p",href:"https://free-bch.fullstack.cash"},"free-bch.fullstack.cash")," for it's back end infrastructure. That server will load-balance connections between community 'global back ends'. The UX and performance of the app will depend on the community that supports it, and the burden will not be born by a single individual or company."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/psf-bch-wallet"},"psf-bch-wallet")," is a command-line wallet app for Hobby Developers. Because it does not have a graphical user interface, it's much faster and easier to prototype new ideas and compose 'exotic' transactions. This app can connect to ",(0,r.kt)("a",{parentName:"p",href:"https://free-bch.fullstack.cash"},"free-bch.fullstack.cash")," for it's back end, but is most flexible when using a local instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer"},"ipfs-bch-wallet-consumer"),". It has commands to control the IPFS node inside ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-consumer"),", to make it switch between different back end services. It gives the user complete control over their network connection."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet"},"gatsby-ipfs-web-wallet")," will soon be getting renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-ipfs-bch-wallet"),". This will be our IPFS-first wallet. The concept of IPFS-first is taken from the 'mobile-first' design philosophy, which took the emphasis off of desktops and moved it to smart phones. In the same way, IPFS-first takes the emphasis off the centralized REST API over HTTP, and moves it to the decentralized JSON RPC over IPFS."),(0,r.kt)("p",null,"This web wallet will be loaded from Filecoin, and be accessible from any IPFS-gateway, just like this blognp. It will load an IPFS node within the browser-based app, and connect to an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ipfs-bch-wallet-serverice")," directly. Because the app is so self-contained within IPFS, it will be difficult if not impossible to censor. It will be slower than ",(0,r.kt)("a",{parentName:"p",href:"https://wallet.fullstack.cash"},"wallet.fullstack.cash"),", but it should provide wallet accessibility to people in repressive countries that actively try to block their citizens from accessing the blockchain. This will cator to the Censored User use case."))}h.isMDXComponent=!0},1685:function(e,t,a){t.Z=a.p+"assets/images/web3-realized-frontend-a5506098839314e4755ab59c60a541bf.png"},5560:function(e,t,a){t.Z=a.p+"assets/images/web3-realized-global-backend-fa30c4abf40cecfd126b9e06e994655e.png"},4173:function(e,t){t.Z="data:image/png;base64,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Ha6/9tprN2zY8O677+7atWv69OmpqaktW7ZctGhRQUHBiy+++Nvf/vaFF14oc8C+ffu+9NJLR+tIOGqKN8lTTz119dVX33LLLXl5eTfddFO4dcGCBWvXru3Vq9f111+/devW5cuXb9y4MS0t7cYbbwwfVd760p544olp06bt2LHjoosuuuSSS7799tugrJZL7Dx58uSvvvqqe/fu//mf/1liqNKlVt4nn3zyX//1X4sXL961a9fq1asvvvjiKVOmtG/ffsqUKXl5eTNmzAiCoLy2L6/aIAg2bNiQk5OTk5MzY8aMpKSkEpOW+cDSs5SurfjZK/OEuPQAoApF66WGwPFj2bJld955Z+n1a9eufe+991566aXU1NTU1NQxY8Zccskljz32WF5e3qJFizZv3ty8efMgCM4444wgCK666qrwUZ07d87NzV2yZMkVV1xResz27dv/4Q9/OJpHw1FRXpOEhg4d2rhx4yAI1q9f/+qrr27durVJkyZBEIwfP75Bgwa7d+/++uuvy1yflpZWerRhw4a1b98+CIJf//rXjz322JtvvnnKKaeUbrnQ8OHDO3XqFD7qrLPOqsJDrlWr1sGDB5cvX37iiSempaWdeeaZpfcps+0///zz8qpdtmzZ8OHDR40adeutt5YerbwHlp6lc+fO5dVW3glx6QFAFXLvHageO3furF+/fun1mzZtSklJSU9PD79s06ZNYWHhjh078vLy6tatGwaMhAULFvTs2TMzMzMzM3Pq1Knbt28vc6769et//fXXVX4IHG3lNUko0Qx5eXmxWKxbt25ZWVlZWVkdOnRIS0vbvHlzeeunT58e+05itKysrHChZs2arVq1Ch9euuVCLVq0CBdSUlL2799fVFRUVYfcpk2bmTNnPvbYYxkZGT179nzrrbdK71Nm21dQ7dSpU1u0aBG+6r608h5YepYKaivvhLj0AKAKSe9A9WjYsGFBQUHp9S1btty7d2/i/cnr16+vXbt2kyZNMjMz9+3bl5+fn9gzPz//qquuGj16dF5e3oYNG4YOHRqPx8ucq6CgoFGjRkfjKDiqymuSUCJ7t27dOhaLrVixIu87O3fubN++fXnrb7zxxvh3EqNt2LAhXDh48OAXX3zRokWL0i13ZFJSUgoLC8PlCt54nzB48OA33nhjx44dAwYMuPzyy+PxePFPfSuv7SuodvLkyenp6ZdeemniIySKK/OB5c1SuraKj8WlBwBVSHoHqkfnzp1XrVpVen12dnb37t1HjBixd+/erVu3jho1Kjc3t0aNGm3btu3Xr9+tt96an58fj8dXrlz5ySefBEHQoUOHWCz25Zdfzpo1q7y5Vq1a1blz56N4MBwd5TVJCWFvDBkyJIyg27dvnzdvXgXry/T444+vWbOmqKho7NixtWvX7tWrV+mWqzjJz507d/r06aXXd+3adeHChUEQFBYWTp48ueJjWbNmzRtvvPHtt98mJyenp6eH71HPyMhIfATdnj17grLavoJqa9euPX/+/AYNGgwYMCB8ePFSy3xgmbOUWVvFXHoAUIWkd6B6/PSnP128eHGZm+bNm7dv376TTjqpc+fOHTp0mDhxYrh+zpw5zZo169atW1paWm5ubrNmzUaPHh1+Ftfw4cMvu+yy8uZ6/fXXq/w/hPMDqKBJSpg9e3bz5s179OiRmpravXv3xGe8l7e+tFtuuSU3N7dRo0avvPLKwoULa9euHZRquTDTludPf/pTmf/2fNy4ccuXL+/YsePAgQPPP//8ig9k//799913X9OmTRs1avTkk0/OmzcvFouNHDnyueeea9iw4eDBg0899dTy2r6CapOSkmbPnp2VldW3b9+dO3eWKLX0A8ucpczaKj4clx4AVKFYPB4Pf/oe9vVvwFFyfF6DBw8ePOWUU55//vky/2lcFfrrX/96zTXXfPrpp8fbP52urr6qwnl/sCbhaKjaS+/4/D4JAKHw5+Dx9bssEB01a9YcP3786NGjj/ZEDzzwwPjx44+36H5s+MGahKPBpQcAVcu9d6h+rkGOhmPg3jsk6CsAjmfuvQMAAMCPg/QOAAAAUSe9AwAAQNRJ7wAAABB10jsAAABEnfQOAAAAUSe9AwAAQNRJ7wAAABB10jsAAABEnfQOAAAAUSe9AwAAQNRJ7wAAABB10jsAAABEnfQOAAAAUVerugsA/p9YLFbdJUCV0c8AAFXLvXcAAACIOvfeofrF4/HqLuFHI7yj64xFmWen8vQzAFB57r0DAABA1EnvAAAAEHXSOwAAAESd9A4AAABRJ70DAAAcdWPGjInFYrFYbPDgwdVdy/8TwZJC5557bljY448/Xt21RIj0DgAAHJvmzJkT+87evXuru5zDK15wKDk5OSsr64orrnjttdequ7r/X+k6E04//fTqru6YJb0DAABEVGFh4YYNG+bPn9+vX7+ZM2dWdzlUJ//vHQAAIHKef/75OnXqbNmyZfTo0V9++WUQBP/93/99ww03VHddJd1xxx1JSUmJL5s1a1aNxRzb3HsHAACOX/v27Rs3bly3bt3q169fu3btzMzMG264YcWKFSV2O3DgwGOPPXb++ec3btz4hBNOaNasWf/+/V9//fVw64cffnjdddd16NChadOmJ5xwQr169U477bS77757+/btR1xY//79Bw4cOGTIkGHDhoVrwgz/r85YceUlvPPOO6mpqeFr4MePH1+ZOh988MH/LubnP/95uL74m+rffPPN3r17p6SkpKamDho0KC8vr/gIn3zyyaBBg+rXr5+Wlnb55Zd/+umnlTtDxx333gEAgOPUV1991atXr5UrVybWbNy48ZlnnpkzZ87MmTOvueaacOXu3bv79ev3/vvvJ3bbsmXLli1bunfv3rt37yAIVq5cOXv27MTWAwcOrFq1atWqVfPnz1+2bFmjRo2OuMKtW7cm3vHesWPHxPpKznjYyot79913BwwYsHfv3lgs9uijjyb+avA9LV269MUXXzx06FD45csvv7xp06YPPvggFosFQbB+/foePXp89dVX4dYFCxYsXbo0JSWlSqY+xrj3DgAAHKfuvPPOMLo3adLkiSeeWLhw4YABA4IgOHDgwE033ZSfnx/uNmLEiDAA16pVa8SIEa+88sof//jH2267rW7duuEOp5122tNPP71s2bKNGzdu27Zt+fLlF154YRAEGzZsmDp16pHVFt4Dz8jIePvtt4MgaNu27ZQpUxJbKznjYStP+Mtf/jJgwIA9e/bUrFlz+vTplY/uiXv1oTFjxpTYYevWrYMHD/7www+nTZtWs2bNIAiWLVv2zjvvhFvvueeeMLo3atTod7/73dy5c08++eQSN+cJufcOAAAcj7755pvnn38+XJ48efJ1110XBEHfvn1bt269ffv2/fv3z50796677tq3b9+sWbPC3R588MF77703XL7yyisTQ3Xu3HnLli2TJ09evXr17t27i4qKdu/eHW567733qqTaevXqJcas5IyVqTy0evXqiy66qKCgICkpadasWVX7D+QaN248ffr05OTkjh07Tp48+cMPPwyC4NNPPz333HMLCwsXLlwY7jZp0qTwXf29evVq3br1t99+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"},6619:function(e,t,a){t.Z=a.p+"assets/images/web3-realized-dd53caae8e5bef1755910a3001f8ec4f.png"}}]);