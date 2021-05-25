__NUXT_JSONP__("/blog/javascript-pass-by-reference", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{article:{publishedAt:"2019-06-12T00:00:00.000Z",title:"Beginner's Guide To Pass-By-Reference VS Pass-By-Value",routeSlug:"javascript-pass-by-reference",excerpt:"Pass-by-reference\u002Fvalue is something that every developer uses daily, but the more experienced you are, the less you think about it. This guide shortly describes what the difference is for them in JavaScript.",tags:"javascript",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1492409678553-da87ed48ffee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Caleb Lucas",authorUrl:"https:\u002F\u002Funsplash.com\u002F@calebdlucas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},toc:[],body:{type:"root",children:[{type:b,tag:q,props:{id:"what-does-pass-by--mean"},children:[{type:b,tag:r,props:{ariaHidden:s,href:"#what-does-pass-by--mean",tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"What does pass-by-* mean?"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Both terms refer to how a variable is treated after it's been passed as a parameter to a function."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Let's take a look at the following code:"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O,m]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q,i]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"\n  character "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:S}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,D,W]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,X,m,y]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002F 'jon'"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The "},{type:b,tag:z,props:{},children:[{type:a,value:"passed"}]},{type:a,value:" variable "},{type:b,tag:w,props:{},children:[{type:a,value:E}]},{type:a,value:" can either be "},{type:b,tag:k,props:{},children:[{type:a,value:"passed-by-value"}]},{type:a,value:" or "},{type:b,tag:k,props:{},children:[{type:a,value:"passed-by-reference"}]},{type:a,value:". In this example, it's passed-by-value, but more to that in a bit."}]},{type:a,value:e},{type:b,tag:q,props:{id:"primitive-types-in-javascript"},children:[{type:b,tag:r,props:{ariaHidden:s,href:"#primitive-types-in-javascript",tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Primitive types in JavaScript"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Ever heard the saying \""},{type:b,tag:z,props:{},children:[{type:a,value:"Everything in JS is an object"}]},{type:a,value:"\"? Well, that's not entirely true. These are data types that are not objects:"}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Number"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"String"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Boolean"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Symbol"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"null"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"undefined"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"Everything that is not a primitive type is an object."}]}]},{type:a,value:e},{type:b,tag:q,props:{id:"pass-by-value"},children:[{type:b,tag:r,props:{ariaHidden:s,href:"#pass-by-value",tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Pass-by-value"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"The value of the variable is being passed onto the function."}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Now, what's the difference between the two? Pass-by-value means that "},{type:b,tag:k,props:{},children:[{type:a,value:"only the value"}]},{type:a,value:" of the variable is "},{type:b,tag:k,props:{},children:[{type:a,value:"being passed"}]},{type:a,value:". A copy of the original variable is being made, and you can work with this copy in the function. Changes to this "},{type:b,tag:k,props:{},children:[{type:a,value:"only affect the variable in the current scope"}]},{type:a,value:" (function)."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"That's why in the first example, the value is still "},{type:b,tag:w,props:{},children:[{type:a,value:H}]},{type:a,value:", even after "},{type:b,tag:w,props:{},children:[{type:a,value:"changeCharacter"}]},{type:a,value:" has been called."}]},{type:a,value:e},{type:b,tag:q,props:{id:"pass-by-reference"},children:[{type:b,tag:r,props:{ariaHidden:s,href:"#pass-by-reference",tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Pass-by-reference"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"Only the reference is being passed onto the function."}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This is the opposite of "},{type:b,tag:z,props:{},children:[{type:a,value:"pass-be-value"}]},{type:a,value:". Because not the value is being passed, but a reference of the object. No copy is being created! So the function will only know where the object is and will work with that. So, if the object is being mutated, the original object changes."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"So how can we change our code from the beginning, so the name of that GOT character gets changed? (Yes, we need an object!)"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,O,m]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q,i]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:S}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"lastname"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'targaryen'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:U}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"\n  firstname"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:"\n  lastname"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'snow'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,D,W]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,X,m,y]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002F 'aegon'"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:q,props:{id:"summary"},children:[{type:b,tag:r,props:{ariaHidden:s,href:"#summary",tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Summary"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This is not that complicated topic, and it actually feels quite natural using it once you understand how it works. But it's important to know what happens under the hood."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Things to remember:"}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"For primitive types variables"}]},{type:a,value:", only the value is being passed to a function"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Changes on a primitive type variable only affects its scope (function)"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"For object variables"}]},{type:a,value:", the reference of the object is being passed to a function"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Changes on an object in a function affects the original object."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:"There is more to this topic, but this is only a basic guide. So this is where I will stop for now."}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2-pass-by-reference",extension:".md",slug:"2-pass-by-reference",createdAt:ad,updatedAt:ad},prev:{title:"A Git-Flow Explainer & How To Tutorial",routeSlug:"git-flow-explainer",excerpt:"If there is no clear way of using Git -especially as a team- you get in trouble really fast. That’s why Git-Flow is here: It provides you with a clear workflow to handle day-to-day Git business.",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1496044654355-e8102baadbf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Knoell Marketing",authorUrl:"https:\u002F\u002Funsplash.com\u002F@knoellmarketing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"1-git-flow-explainer"},next:{title:"Beginner's Guide to ES6 Destructuring",routeSlug:"es6-destructuring",excerpt:"ES6 comes with a bunch of new features, one of which is destructuring. This is a very handy way to extract items from objects and arrays, which -once understood- can make your code much cleaner and more readable.",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"贝莉儿 DANIST",authorUrl:"https:\u002F\u002Funsplash.com\u002F@danist07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"3-es6-destructuring"}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation"," ","p","operator","li","strong","=","function","(",")","string","h1","a","true",-1,"icon","icon-link","code",".","property-access","em","keyword","changeCharacterName","thatGOTCharacter","console","character","{","}","'jon'","div","nuxt-content-highlight","pre","language-javascript","line-numbers","const","function-variable","parameter","arrow","=\u003E","'aegon'","\n\n","let"," thatGOTCharacter ","class-name","method","log","comment","ul","\n  character","firstname",":",",","2021-05-05T09:28:33.056Z")));