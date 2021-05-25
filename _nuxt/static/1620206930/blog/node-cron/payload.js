__NUXT_JSONP__("/blog/node-cron", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{article:{publishedAt:"2020-07-09T00:00:00.000Z",title:"Scheduling Tasks In Node.js With Cron",excerpt:"In this post, we take a look a how we can use cronjobs to schedule tasks in Node.js",routeSlug:Q,tags:"node",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1501139083538-0139583c060f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80",author:"Aron Visuals",authorUrl:"https:\u002F\u002Funsplash.com\u002F@aronvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},toc:[{id:Z,depth:U,text:_},{id:V,depth:U,text:$},{id:aa,depth:U,text:ab}],body:{type:"root",children:[{type:b,tag:m,props:{},children:[{type:a,value:"If you're writing a Node app, you might have tasks you want to reoccur periodically. For example, run a cleaning task every Sunday night. Or check for updated weather conditions every day at 4pm."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"There are some ways to solve this. You could for example use "},{type:b,tag:k,props:{},children:[{type:a,value:"setInterval()"}]},{type:a,value:" to repeat every X seconds. Or you could a piece of your app being called with the UNIX-native "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"In this tutorial, we're going to be using none of those. We are going to use "},{type:b,tag:v,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnode-cron",rel:[ac,ad,ae],target:af},children:[{type:a,value:"node-cron NPM module"}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:W,props:{id:"about-cron"},children:[{type:b,tag:v,props:{href:"#about-cron",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"About cron"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"As the name suggests, "},{type:b,tag:k,props:{},children:[{type:a,value:Q}]},{type:a,value:" is based on "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:" which is widely used in the UNIX world do schedule tasks."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"It consists of a so-called "},{type:b,tag:k,props:{},children:[{type:a,value:"crontab"}]},{type:a,value:" file. Each line in this file represents an instruction "},{type:b,tag:R,props:{},children:[{type:a,value:"what"}]},{type:a,value:" and "},{type:b,tag:R,props:{},children:[{type:a,value:"when"}]},{type:a,value:" to execute and looks like this:"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,X]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"0"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ag]},children:[{type:a,value:"12"}]},{type:a,value:" * * * \u002Fhome\u002Fmarc\u002Ftask.sh\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"In this case, it means, run "},{type:b,tag:k,props:{},children:[{type:a,value:"\u002Fhome\u002Fmarc\u002Ftask.sh"}]},{type:a,value:" at midday. But let's analyze the syntax more."}]},{type:a,value:f},{type:b,tag:Y,props:{id:Z},children:[{type:b,tag:v,props:{href:"#syntax",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"It looks complicated, but is not. The 5 numbers or * represent a piece of the time it should be executed:"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,X]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# ┌───────────── minute (0 - 59)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# │  ┌───────────── hour (0 - 23)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# │  │  ┌───────────── day of the month (1 - 31)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# │  │  │  ┌───────────── month (1 - 12)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# │  │  │  │  ┌───────────── day of the week (0 - 6)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# │  │  │  │  │              (Sunday to Saturday)"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"# 30 10 25 12 * echo \"merry christmas 🎄\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Important is that the values are separated by a space. Also, not that the hours are indicated with the 24-hour system."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The information for each \"field\" can be:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:"A number (e.g. "},{type:b,tag:k,props:{},children:[{type:a,value:"8"}]},{type:a,value:h}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:"A list of numbers (e.g. "},{type:b,tag:k,props:{},children:[{type:a,value:"8,10,20"}]},{type:a,value:h}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:"A range of numbers (e.g. "},{type:b,tag:k,props:{},children:[{type:a,value:"10-14"}]},{type:a,value:h}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:"A asterisk ("},{type:b,tag:k,props:{},children:[{type:a,value:"*"}]},{type:a,value:"), which means the task should run in "},{type:b,tag:R,props:{},children:[{type:a,value:"any"}]},{type:a,value:" instance of the field"}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:a,value:"Additionally it can have a \"step\" operator ("},{type:b,tag:k,props:{},children:[{type:a,value:"\u002F"}]},{type:a,value:"). This can be used to skip some values"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"So the example above means: \"Run "},{type:b,tag:k,props:{},children:[{type:a,value:"echo \"merry christmas 🎄\""}]},{type:a,value:" every December 25th at 10:30am."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"To know more about "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:", check out "},{type:b,tag:v,props:{href:"https:\u002F\u002Fcrontab.guru\u002F",rel:[ac,ad,ae],target:af},children:[{type:a,value:"crontab.guru"}]},{type:a,value:". It's a website explaining the syntax and you can play around with the values."}]},{type:a,value:f},{type:b,tag:W,props:{id:Q},children:[{type:b,tag:v,props:{href:"#node-cron",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Let's get back to the original topic - We are going to use the same syntax as "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:" uses, but within our Node.js application."}]},{type:a,value:f},{type:b,tag:Y,props:{id:V},children:[{type:b,tag:v,props:{href:"#install",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Install the dependency before working with it."}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,X]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"npm"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:" --save node-cron\n"}]}]}]},{type:a,value:f},{type:b,tag:Y,props:{id:aa},children:[{type:b,tag:v,props:{href:"#use-node-cron",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:ab}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The use is the follows: You "},{type:b,tag:R,props:{},children:[{type:a,value:w}]},{type:a,value:" a task (a function) to run at a specific time, using the "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:" syntax as explained above:"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,ai]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:" cron "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"require"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'node-cron'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n\ncron"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'0 18 *\u002F2 * 3'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Every second Wednesday at 6pm."}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,u,N]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'Its time for Whiskey Wednesday 🥃'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,u,N]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'https:\u002F\u002Fwhiskeywednesday.dev'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"For larger applications with more scheduled tasks, I'd suggest to write the functions apart from "},{type:b,tag:k,props:{},children:[{type:a,value:B}]},{type:a,value:" and make a separate "},{type:b,tag:k,props:{},children:[{type:a,value:"register"}]},{type:a,value:" function to schedule all of them:"}]},{type:a,value:f},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,ai]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,N]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'merry christmas 🎄'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,N]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'happy new year 🥂'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u,N]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'am i annoying yet? 😁'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Fetch weather data"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F Logic to close front door"}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H,j]},children:[{type:a,value:aq}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'30 10 25 12 *'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'0 0 1 1 *'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'* * * * *'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'0 8 * * *'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,s,j,t]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'0 22 * * *'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q,l]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:W,props:{id:"summary-"},children:[{type:b,tag:v,props:{href:"#summary-",ariaHidden:C,tabIndex:D},children:[{type:b,tag:c,props:{className:[E,F]},children:[]}]},{type:a,value:"Summary ✨"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"There you have it. The thing that needs most getting used to is the syntax. Once you got that down, scheduling tasks in Node.js takes little effort."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F19-node-cron",extension:".md",slug:"19-node-cron",createdAt:ar,updatedAt:ar},prev:{title:"Build An App With Your Own Mini-Vue",excerpt:"In the last few posts, we learned how the virtual DOM and reactivity works in Vue.js. In this post, we're bringing it all together.",routeSlug:"vue-2-from-scratch-part-5",cover:{url:"https:\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002FMXpEN3rWVV3rphGyTfyK4\u002Fd228c6f4d7ae95376984e790eea6622f\u002Fjoshua-earle-9idqIGrLuTE-unsplash.jpg?w=2400",author:as,authorUrl:as},slug:"18-vue-2-from-scratch-part-5"},next:{title:"What is a Senior Developer *Really*?",excerpt:"There is a common misconception of what a senior developer is. Some may tell you it's the years of experience; others may say it's the \"bugfixes per second.\" It's none of those.",routeSlug:"what-is-a-senior-developer",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1583156340160-7867f31285d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Ali Kokab",authorUrl:"https:\u002F\u002Funsplash.com\u002F@_alikokab_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"20-what-is-a-senior-developer"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n"," ",")","(","function","code","operator","p","comment",".","string","arrow","=\u003E","method","property-access","console","a","schedule","keyword","const","=","\n  ","cron","true",-1,"icon","icon-link",",","function-variable","div","nuxt-content-highlight","pre","line-numbers","li","class-name","log","\n  cron","node-cron","em","{","}",2,"install","h1","language-bash","h2","syntax","Syntax","Install","use-node-cron","Use node-cron","nofollow","noopener","noreferrer","_blank","number","# │  │  │  │  │","language-javascript","merryChristmas","happyNewYear","beAnnoying","checkWeather","\u002F\u002F ...","closeFrontDoor","\n\n","registerCronJobs","2021-05-05T09:28:33.056Z",null)));