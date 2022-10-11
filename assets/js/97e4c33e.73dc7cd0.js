"use strict";(self.webpackChunktrouts_blog=self.webpackChunktrouts_blog||[]).push([[9746],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(i),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return i?n.createElement(m,l(l({ref:t},d),{},{components:i})):n.createElement(m,l({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:2},l="Radicle",o={unversionedId:"censorship/radicle",id:"censorship/radicle",title:"Radicle",description:"Radicle is a peer-to-peer (p2p) substitute for GitHub. Git is the defacto standard for software development. GitHub has become the worlds largest Git repository for code collaboration. GitHub was purchased by Microsoft in 2018, and since that time, censorship of code repositories has been steadily increasing. Cryptocurrency developers (such as myself) will most likely be censored on GitHub if cryptocurrency gains enough mainstream adoption to threaten the US dollar. Radicle is a solution to this future problem.",source:"@site/docs/censorship/radicle.md",sourceDirName:"censorship",slug:"/censorship/radicle",permalink:"/trouts-blog/docs/censorship/radicle",draft:!1,editUrl:"https://github.com/christroutner/trouts-blog/docs/censorship/radicle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Censorship Research",permalink:"/trouts-blog/docs/censorship/dsca-governance-faq"},next:{title:"Filecoin",permalink:"/trouts-blog/docs/censorship/filecoin"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installing radicle-cli",id:"installing-radicle-cli",level:3},{value:"Stumbling Blocks",id:"stumbling-blocks",level:3},{value:"Installing radicle-cli on Ubuntu",id:"installing-radicle-cli-on-ubuntu",level:4},{value:"Upgrading Git",id:"upgrading-git",level:4},{value:"Upgrading OpenSSH",id:"upgrading-openssh",level:4},{value:"SSH Agent",id:"ssh-agent",level:4},{value:"Initializing Radicle",id:"initializing-radicle",level:3},{value:"Seed Nodes",id:"seed-nodes",level:2},{value:"Create a New Repository",id:"create-a-new-repository",level:2},{value:"Clone a Repository",id:"clone-a-repository",level:2},{value:"Commiting a Change",id:"commiting-a-change",level:2},{value:"Reviewing and Merging Changes",id:"reviewing-and-merging-changes",level:2},{value:"Mirroring GitHub Repositories",id:"mirroring-github-repositories",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"radicle"},"Radicle"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://radicle.xyz/"},"Radicle")," is a peer-to-peer (p2p) substitute for GitHub. ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," is the defacto standard for software development. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," has become the worlds largest Git repository for code collaboration. GitHub was purchased by Microsoft in 2018, and since that time, censorship of code repositories has been steadily increasing. Cryptocurrency developers (such as myself) will most likely be censored on GitHub if cryptocurrency gains enough mainstream adoption to threaten the US dollar. Radicle is a solution to this future problem."),(0,a.kt)("p",null,"Any professional who works with Git, will be familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," command line interface (CLI). Radicle recently released their own ",(0,a.kt)("inlineCode",{parentName:"p"},"radicle-cli")," CLI that compliments the ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," CLI."),(0,a.kt)("iframe",{width:"731",height:"411",src:"https://www.youtube.com/embed/9YWN5G_FwNU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Radicle has a ",(0,a.kt)("a",{parentName:"p",href:"https://radicle.network/get-started.html"},"getting started guide")," that introduces the radicle CLI and formaly documents the demo in the video above. The project is still very new and things are constantly changeing and breaking."),(0,a.kt)("h3",{id:"installing-radicle-cli"},"Installing radicle-cli"),(0,a.kt)("p",null,"Below is a summary of how I install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-cli"},"radicle-cli")," on Ubuntu systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://europe-west6-apt.pkg.dev/doc/repo-signing-key.gpg | sudo apt-key add -\necho deb https://europe-west6-apt.pkg.dev/projects/radicle-services radicle-cli main | sudo tee -a /etc/apt/sources.list.d/radicle-registry.list\nsudo apt update\nsudo apt install radicle-cli\n")),(0,a.kt)("h3",{id:"stumbling-blocks"},"Stumbling Blocks"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"These notes are primarily for posterity. Readers can safely skip this section.")),(0,a.kt)("p",null,"I hit a few snags trying to set up my own development environment. Here are links to the problems and solutions I faced:"),(0,a.kt)("h4",{id:"installing-radicle-cli-on-ubuntu"},"Installing radicle-cli on Ubuntu"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/radicle-dev/radicle-cli/issues/64"},"Error installing radicle-cli on Ubuntu"))),(0,a.kt)("h4",{id:"upgrading-git"},"Upgrading Git"),(0,a.kt)("p",null,"I also needed to upgrade the version of ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," that shipped with Ubuntu. Here's how I was able to do that (",(0,a.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/33617/how-can-i-update-to-a-newer-version-of-git-using-apt-get"},"source"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt remove git -y\nsudo add-apt-repository ppa:git-core/ppa -y\nsudo apt-get update\nsudo apt-get install git -y\ngit --version\n")),(0,a.kt)("h4",{id:"upgrading-openssh"},"Upgrading OpenSSH"),(0,a.kt)("p",null,"And to ",(0,a.kt)("inlineCode",{parentName:"p"},"commit")," new code to a radicle repository, I had to upgrade openssh (",(0,a.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1189747/is-possible-to-upgrade-openssh-server-openssh-7-6p1-to-openssh-8-0p1"},"source"),"). You can check your current version of openssh-server with ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -V"),". It should be ",(0,a.kt)("em",{parentName:"p"},"8.2p1")," or greater."),(0,a.kt)("p",null,"Here is how I upgraded my version of openssh-server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -V\nsudo apt update\nsudo apt install build-essential zlib1g-dev libssl-dev\nsudo mkdir /var/lib/sshd\nsudo chmod -R 700 /var/lib/sshd/\nsudo chown -R root:sys /var/lib/sshd/\nwget -c https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-8.9p1.tar.gz\ntar -xzf openssh-8.9p1.tar.gz\ncd openssh-8.9p1/\nsudo apt install libpam0g-dev libselinux1-dev libkrb5-dev\n./configure --with-kerberos5 --with-md5-passwords --with-pam --with-selinux --with-privsep-path=/var/lib/sshd/ --sysconfdir=/etc/ssh\nmake\nsudo apt remove openssh-server\nsudo make install\nsudo apt install openssh-server\nssh -V\n")),(0,a.kt)("p",null,"With that, the final version using ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -V")," should report ",(0,a.kt)("em",{parentName:"p"},"8.9p1"),"."),(0,a.kt)("h4",{id:"ssh-agent"},"SSH Agent"),(0,a.kt)("p",null,"I would occasionally get this error:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Authentication failed could not lookup ssh key, is ssh-agent running?"))),(0,a.kt)("p",null,"Here is how I fixed that error:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ssh-agent"))),(0,a.kt)("p",null,"That would display the socket information. The output would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SSH_AUTH_SOCK=/tmp/ssh-XXXXXXMcYzjS/agent.3505; export SSH_AUTH_SOCK;\nSSH_AGENT_PID=3506; export SSH_AGENT_PID;\necho Agent pid 3506;\n")),(0,a.kt)("p",null,"I could then manually set the environment variable:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"export SSH_AUTH_SOCK=/tmp/ssh-XXXXXXMcYzjS/agent.3505"))),(0,a.kt)("h3",{id:"initializing-radicle"},"Initializing Radicle"),(0,a.kt)("p",null,"In order to initialize radicle-cli, you need to make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," v2.34.0 or higher. See the ",(0,a.kt)("em",{parentName:"p"},"Stumbling Blocks")," section above to install the latest version of ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"."),(0,a.kt)("p",null,"Initialize your radicle user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad auth --init"))),(0,a.kt)("p",null,"Be sure to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--init")," flag, as there is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-cli/issues/81"},"currently a bug")," that will prevent you from being able to make commits it you don't."),(0,a.kt)("h2",{id:"seed-nodes"},"Seed Nodes"),(0,a.kt)("p",null,"Seed nodes are ",(0,a.kt)("em",{parentName:"p"},"always-on")," 'servers' that host git repositories. These replace the cloud hosting that GitHub provides. Docker containers for running a seed node are available in the radicle-client-services repo below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/radicle-dev/radicle-client-services"},"radicle-client-services on GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkk9c4zt9thuxhwi1ukxqcrs5tmhbtcsony/tree/a19cdcb846a8360d8f55c10aac8175368881a6ee"},"radicle-client-services on Radicle"))),(0,a.kt)("p",null,"I've customized the repository and set up a seed node for the ",(0,a.kt)("a",{parentName:"p",href:"https://psfoundation.cash"},"Permissionless Software Foundation"),". The goal of this seed node to act as a backup, in case our code is ever censored by GitHub."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/christroutner/radicle-client-services"},"https://github.com/christroutner/radicle-client-services")),(0,a.kt)("li",{parentName:"ul"},"Radicle: TBD")),(0,a.kt)("p",null,"You can push code to our seed node with this url:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"radicle.fullstackcash.nl")),(0,a.kt)("h2",{id:"create-a-new-repository"},"Create a New Repository"),(0,a.kt)("p",null,"The workflow for creating a git repository does not change. If you, like me, work with GitHub primarily, create the new git repository the same way you've always done. After the git repository has been created and added to GitHub, you can then add the repository to Radicle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad init"))),(0,a.kt)("p",null,"This will genderate a DID (decentralized ID) for your respository. This will be used to identify your repository on the radicle network. It will look like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad:git:hnrkjsnux9ns5t4famcga7f4r64a1brh99y1o"))),(0,a.kt)("p",null,"You can then push your repository with ",(0,a.kt)("inlineCode",{parentName:"p"},"rad push")," to push it to one of the community nodes supplied by Radicle. The repository can be pushed to the PSF seed node like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad push --seed radicle.fullstackcash.nl"))),(0,a.kt)("h2",{id:"clone-a-repository"},"Clone a Repository"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.radicle.xyz/using-radicle/clone"},"Official Radicle Documentation"))),(0,a.kt)("p",null,"Before cloning a repository on Radicle, it's a good idea to run the following commands first:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad auth")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad self"))),(0,a.kt)("p",null,"With the DID of a repository, you can clone it like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad clone rad:git:hnrkjsnux9ns5t4famcga7f4r64a1brh99y1o --seed radicle.fullstackcash.nl"))),(0,a.kt)("h2",{id:"commiting-a-change"},"Commiting a Change"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.radicle.xyz/using-radicle/push/"},"Official Radicle Documentation"))),(0,a.kt)("p",null,"After making a change to a cloned repository, the normal workflow with git is the same. However, when running ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," is when you'll see errors around authentication and OpenSSH. See the ",(0,a.kt)("em",{parentName:"p"},"Stumbling Blocks")," section above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git add -A\ngit commit -m "commit message"\n')),(0,a.kt)("p",null,"Pushing the commit should work like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad push --seed radicle.fullstackcash.nl"))),(0,a.kt)("p",null,"If you did not initialize your user correctly, this is where you'll ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-cli/issues/81"},"see a bug"),"."),(0,a.kt)("h2",{id:"reviewing-and-merging-changes"},"Reviewing and Merging Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.radicle.xyz/using-radicle/track-review-merge"},"Radicle Documentation"))),(0,a.kt)("p",null,"In order to pull changes from the radicle seed node, The URN of the user who pushed the change needs to be known. Changes can be pulled like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad track hynfqs458c3whsyb9exnerg7w81hy9za4ogptntc9h84p1s5jfyix4 --seed radicle.fullstackcash.nl"))),(0,a.kt)("p",null,"This will create a branch with the changes pushed by the other user, which can be seed by running ",(0,a.kt)("inlineCode",{parentName:"p"},"git branch"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"peer/trout/master"))),(0,a.kt)("p",null,"Differences can be reviewed like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git diff master..peer/trout/master"))),(0,a.kt)("p",null,"And the patch can be merged:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git merge peer/trout/master"))),(0,a.kt)("h2",{id:"mirroring-github-repositories"},"Mirroring GitHub Repositories"),(0,a.kt)("p",null,"The main way I'm using Radicle is to create mirrors of my GitHub repositories. This way, if GitHub ever decides to deplatform cryptocurrency developers, I'll already have work-ready repositories backed up on Radicle. Here is the typical workflow I use to add a repository to GitHub."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone gh-repo && cd gh-repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad init")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad push --seed radicle.fullstackcash.nl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rad push --seed willow.radicle.garden"))))}c.isMDXComponent=!0}}]);