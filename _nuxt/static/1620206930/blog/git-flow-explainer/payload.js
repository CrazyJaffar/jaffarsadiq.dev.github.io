__NUXT_JSONP__("/blog/git-flow-explainer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az){return {data:[{article:{publishedAt:"2019-06-03T00:00:00.000Z",title:"A Git-Flow Explainer & How To Tutorial",routeSlug:"git-flow-explainer",excerpt:"If there is no clear way of using Git -especially as a team- you get in trouble really fast. That’s why Git-Flow is here: It provides you with a clear workflow to handle day-to-day Git business.",tags:y,canonicalUrl:"https:\u002F\u002Fwww.codewall.co.uk\u002Fa-git-flow-explainer-how-to-tutorial",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1496044654355-e8102baadbf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Knoell Marketing",authorUrl:"https:\u002F\u002Funsplash.com\u002F@knoellmarketing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},toc:[{id:O,depth:A,text:G},{id:P,depth:A,text:Q},{id:R,depth:w,text:S},{id:T,depth:w,text:U},{id:V,depth:w,text:W},{id:D,depth:A,text:X},{id:Y,depth:A,text:Z},{id:_,depth:A,text:$},{id:aa,depth:w,text:ab},{id:ac,depth:w,text:ad},{id:ae,depth:w,text:af},{id:ag,depth:w,text:ah},{id:ai,depth:w,text:aj},{id:ak,depth:w,text:al},{id:am,depth:A,text:an}],body:{type:"root",children:[{type:b,tag:H,props:{id:"what-is-git-flow"},children:[{type:b,tag:g,props:{href:"#what-is-git-flow",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:"What is Git-Flow?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When someone talks about Git-Flow, it could mean two things."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:ao,props:{},children:[{type:a,value:"A successful "},{type:b,tag:f,props:{},children:[{type:a,value:"branching model"}]},{type:a,value:" (theory)"}]},{type:a,value:c},{type:b,tag:ao,props:{},children:[{type:a,value:"A "},{type:b,tag:f,props:{},children:[{type:a,value:"set of terminal commands"}]},{type:a,value:" that extend the regular git command set (practice)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this post, I will cover both in order to get you ready to start using it today."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As a developer, Git is probably part of your daily work. You develop new features, you merge them later, then you release them, and finally, you fix potential bugs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If there is no exact way of doing all these things, especially as a team, you quickly get in trouble. That’s why Git-Flow is here: "},{type:b,tag:f,props:{},children:[{type:a,value:"It provides you with a precise work-“flow”"}]},{type:a,value:" (ha, I said it) to handle day-to-day Git business."}]},{type:a,value:c},{type:b,tag:H,props:{id:"the-theory-"},children:[{type:b,tag:g,props:{href:"#the-theory-",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:"The Theory 😒"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There is a lot explained in "},{type:b,tag:g,props:{href:"https:\u002F\u002Fnvie.com\u002Fposts\u002Fa-successful-git-branching-model\u002F",rel:[ap,aq,ar],target:as,title:"A successful Git branching model"},children:[{type:a,value:"Vincent Driessen’s original introduction of Git-Flow"}]},{type:a,value:", but I’ll try to keep it short."}]},{type:a,value:c},{type:b,tag:B,props:{id:O},children:[{type:b,tag:g,props:{href:"#main-branches",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:F,props:{alt:G,src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002FZvqLuLC6FAX2YqaQaDqqI\u002F542a90d70370badaedfb49af39ff2cc5\u002Fmain-branches.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are two main branches: "},{type:b,tag:f,props:{},children:[{type:a,value:z}]},{type:a,value:I},{type:b,tag:f,props:{},children:[{type:a,value:o}]},{type:a,value:". They are the king and queen of Git-Flow Land, which explains why there is only one of each."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:" is for "},{type:b,tag:f,props:{},children:[{type:a,value:"production"}]},{type:a,value:". Here sits the code that’s live, nice, and cozy. Not much happens here unless someone releases code to production."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:o}]},{type:a,value:" is for code that’s "},{type:b,tag:f,props:{},children:[{type:a,value:"currently in development"}]},{type:a,value:". Features and bug fixes are merged here, so it’s a little bit busier."}]},{type:a,value:c},{type:b,tag:B,props:{id:P},children:[{type:b,tag:g,props:{href:"#supporting-branches",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are three supporting branches: "},{type:b,tag:f,props:{},children:[{type:a,value:"features"}]},{type:a,value:at},{type:b,tag:f,props:{},children:[{type:a,value:"releases"}]},{type:a,value:at},{type:b,tag:f,props:{},children:[{type:a,value:"hotfixes"}]},{type:a,value:". Each of these branches has clear rules from where they originate and where they merge to. There can be multiple branches for any of these. (e.g., one for every feature that’s being developed, one per hotfix, etc.)"}]},{type:a,value:c},{type:b,tag:x,props:{id:R},children:[{type:b,tag:g,props:{href:"#feature-branches",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:F,props:{alt:"Feature Branches",src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F2OwEuuF8upjnoPtMN6dc47\u002F741a44ab2dbb6ed40f881c3272bc669d\u002Ffeature-branches.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you want to program a new feature or do some refactoring, this is what you want. You create a new feature branch and do your thing while leaving develop untouched. At some point, the feature finishes, and the produced changes merge back into develop. This is the kind of branch that’s probably being used the most, here is where all the action happens. All code that is still under development is somewhere in a feature branch."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is also the perfect place if you want to do an experiment. If it doesn’t work, delete the branch, and nothing happens. Nobody needs to know."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When a feature branch gets created, it "},{type:b,tag:f,props:{},children:[{type:a,value:J},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:K},{type:b,tag:f,props:{},children:[{type:a,value:L},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The name of the branch will be "},{type:b,tag:h,props:{},children:[{type:a,value:"features\u002Fname_of_your_feature"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:x,props:{id:T},children:[{type:b,tag:g,props:{href:"#release-branches",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:F,props:{alt:"Release Branches",src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F41fFS41nRR5UZ3gjCtjQp4\u002F9aa5bfe0b99620d8ed4abd310e74350b\u002Frelease-branches.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You decide that you have enough well-tested fancy features to bring them to production. Then you make a release branch. No development should be done here, just minor last-minute bug fixes, version bumps, etc."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:au},{type:b,tag:f,props:{},children:[{type:a,value:J},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:K},{type:b,tag:f,props:{},children:[{type:a,value:L},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:I},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The reason for this branch is that you can read the code for production while the develop branch can already receive new features for the next release."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:au},{type:b,tag:f,props:{},children:[{type:a,value:"gets assigned a version number"}]},{type:a,value:". NOT EARLIER. Everything up to that point that’s sitting in develop branch is for “the next release”.\nThe name of the branch will be "},{type:b,tag:h,props:{},children:[{type:a,value:"releases\u002Fname_of_your_release"}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:x,props:{id:V},children:[{type:b,tag:g,props:{href:"#hotfix-branches",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:F,props:{alt:"Hotfix Branches",src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002FtS8ef5P6CW1RBk9TkeJ2N\u002F3dd894cf8a5e324168facbc553dd84c8\u002Fhotfix-branches.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ay yes. You pushed your glorious code into production but just then notice a bug that needs fixing in production. There is no reason for panic; this happens to everyone. And, there is a Git-Flow solution for it: The hotfix branch. It grabs the code from production (master), the bug gets fixed, and the changes merge back in master and develop."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When a hotfix branch gets created, it "},{type:b,tag:f,props:{},children:[{type:a,value:J},{type:b,tag:h,props:{},children:[{type:a,value:z}]}]},{type:a,value:K},{type:b,tag:f,props:{},children:[{type:a,value:L},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:I},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The beautiful this here is that potentially unstable code in develop is not going to affect our hotfix, plus other developers can continue coding while the hero may fix the production bug."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Also, hotfix branches get a version number when it’s created, (e.g., 1.2.1 if your release was 1.2). Don’t forget to bump the version in your code when doing this."}]},{type:a,value:c},{type:b,tag:H,props:{id:"the-practice-🤩"},children:[{type:b,tag:g,props:{href:"#the-practice-%F0%9F%A4%A9",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:"The Practice 🤩"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, I am well aware that theory is tedious but necessary. So, good, we arrived at the fun part of this article."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Having read all of the above theory probably sounds like “a lot of work”, or “so many git commands, just to fix a bug”. Well, you’re in luck. There is a command tool, which extends the abilities of git to those of Git-Flow."}]},{type:a,value:c},{type:b,tag:B,props:{id:D},children:[{type:b,tag:g,props:{href:"#install",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mac:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"$ brew "},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:D}]},{type:a,value:av}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Linux:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:"apt-get"}]},{type:a,value:aw},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:D}]},{type:a,value:av}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Windows:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:"wget"}]},{type:a,value:" -q -O - --no-check-certificate https:\u002F\u002Fraw.github.com\u002Fpetervanderdoes\u002Fgitflow-avh\u002Fdevelop\u002Fcontrib\u002Fgitflow-installer.sh "},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:D}]},{type:a,value:" stable "},{type:b,tag:e,props:{className:[m,"operator"]},children:[{type:a,value:"|"}]},{type:a,value:aw},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:"bash"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:B,props:{id:Y},children:[{type:b,tag:g,props:{href:"#initialize",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow init\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This command initializes your repository as a “git flow” repository. You have to choose names for your branches, but I strictly advise you to leave it at the defaults (as described above). It also checks out the develop branch, which is from where you should go."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now you’re ready to go!"}]},{type:a,value:c},{type:b,tag:B,props:{id:_},children:[{type:b,tag:g,props:{href:"#use",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You’ll see, it’s pretty straightforward. The best is just to play around a little bit with it on a test repository."}]},{type:a,value:c},{type:b,tag:x,props:{id:aa},children:[{type:b,tag:g,props:{href:"#create-a-feature",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow feature start feature_name\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ac},children:[{type:b,tag:g,props:{href:"#finish-a-feature-branch",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow feature finish feature_name\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:": Merges back into "},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ae},children:[{type:b,tag:g,props:{href:"#create-a-release",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow release start version_number\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ag},children:[{type:b,tag:g,props:{href:"#finish-a-release",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow release finish version_number\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:ax},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:ay},{type:b,tag:h,props:{},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ai},children:[{type:b,tag:g,props:{href:"#create-a-hotfix",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow hotfix start version_number\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:h,props:{},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:x,props:{id:ak},children:[{type:b,tag:g,props:{href:"#finish-a-hotfix",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:y}]},{type:a,value:" flow hotfix finish version_number\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:ax},{type:b,tag:h,props:{},children:[{type:a,value:o}]},{type:a,value:ay},{type:b,tag:h,props:{},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:B,props:{id:am},children:[{type:b,tag:g,props:{href:"#bonus-for-lazy-developers",ariaHidden:i,tabIndex:j},children:[{type:b,tag:e,props:{className:[k,l]},children:[]}]},{type:a,value:an}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I wrote some scripts that make it easier to work with git-flow, or even git in general, and linked them to an alias in my terminal. You can check the project out from GitHub:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fthemarcba\u002Flazy-git",rel:[ap,aq,ar],target:as,title:"lazy-git on Github"},children:[{type:a,value:"lazy-git"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Install:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{className:[m,n]},children:[{type:a,value:"npm"}]},{type:a,value:" i -g @themarcba\u002Flazy-git\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There you can do cool things with the blink of an eye:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:e,props:{className:[m,N]},children:[{type:a,value:"# Creates a new git-flow feature"}]},{type:a,value:"\n$ f my_feature\n\n"},{type:b,tag:e,props:{className:[m,N]},children:[{type:a,value:"# Finishes the current git-flow release"}]},{type:a,value:"\n$ rl finish\n\n"},{type:b,tag:e,props:{className:[m,N]},children:[{type:a,value:"# Pushes the current branch (whatever it is)"}]},{type:a,value:"\n$ p\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Further documentation you can find in the link above."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I hope you're all set for now, and maybe you get to use Git-Flow in your next project. 😎"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F1-git-flow-explainer",extension:".md",slug:"1-git-flow-explainer",createdAt:az,updatedAt:az},prev:null,next:{title:"Beginner's Guide To Pass-By-Reference VS Pass-By-Value",routeSlug:"javascript-pass-by-reference",excerpt:"Pass-by-reference\u002Fvalue is something that every developer uses daily, but the more experienced you are, the less you think about it. This guide shortly describes what the difference is for them in JavaScript.",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1492409678553-da87ed48ffee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Caleb Lucas",authorUrl:"https:\u002F\u002Funsplash.com\u002F@calebdlucas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"2-pass-by-reference"}}],fetch:[],mutations:void 0}}("text","element","\n","p","span","strong","a","em","true",-1,"icon","icon-link","token","function","develop","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","$ ",3,"h3","git","master",2,"h2","Remember","install",".","img","Main Branches","h1"," and ","originates from the "," branch and ","merges back into ",": Branches off ","comment","main-branches","supporting-branches","Supporting Branches","feature-branches","Feature branches","release-branches","Release branches","hotfix-branches","Hotfix branches","Install","initialize","Initialize","use","Use","create-a-feature","Create a feature","finish-a-feature-branch","Finish a feature branch","create-a-release","Create a release","finish-a-release","Finish a release","create-a-hotfix","Create a hotfix","finish-a-hotfix","Finish a hotfix","bonus-for-lazy-developers","Bonus: For Lazy Developers","li","nofollow","noopener","noreferrer","_blank",", ","When a release branch gets created, it "," git-flow\n"," ",": Merges into "," and back into ","2021-05-05T09:28:33.055Z")));