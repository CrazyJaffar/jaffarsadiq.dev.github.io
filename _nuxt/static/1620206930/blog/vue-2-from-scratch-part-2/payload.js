__NUXT_JSONP__("/blog/vue-2-from-scratch-part-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){return {data:[{article:{publishedAt:"2020-03-16T00:00:00.000Z",title:"Virtual DOM Basics",excerpt:"In this second part of the series, we look more closely to the virtual DOM and learn some basics about it. We also prepare some things to get ready for implementing the VDOM engine.",routeSlug:"vue-2-from-scratch-part-2",tags:"vue, javascript",series:"vue-2-from-scratch",cover:{url:"https:\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F5p0vc0SNowwbzw13qmn1B8\u002Ff4f9df5dbb737f75925fd086e77c8d72\u002Fjoshua-earle-_fiqul_u3QA-unsplash_copy.jpg?w=2400",author:E,authorUrl:E},toc:[{id:T,depth:2,text:U}],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"This post is the second part of a series called "},{type:b,tag:"strong",props:{},children:[{type:a,value:V}]},{type:a,value:", where I teach you how to create the fundamentals of a reactive framework such as Vue.js. To follow this blog post, I suggest you first read the other parts of the series."}]},{type:a,value:f},{type:b,tag:x,props:{id:"what-is-a-virtual-dom"},children:[{type:b,tag:y,props:{href:"#what-is-a-virtual-dom",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"What is a virtual DOM?"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"💡 DOM = "},{type:b,tag:y,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FAPI\u002FDocument_Object_Model",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Document Object Model"}]},{type:a,value:", the HTML structure of a website 💡 VDOM = Representative copy of that structure"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"A "},{type:b,tag:z,props:{},children:[{type:a,value:"virtual"}]},{type:a,value:" DOM is a representation of the real DOM into a JavaScript format, where it's easier and cheaper to manipulate it than manipulating the real DOM every time something changes."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"It's also useful if you don't want to render the DOm to the browser, but to a string for instance (handy when it comes to server-side rendering)."}]},{type:a,value:f},{type:b,tag:x,props:{id:"virtual-nodes"},children:[{type:b,tag:y,props:{href:"#virtual-nodes",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"Virtual nodes"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"So, the virtual DOM is composed of "},{type:b,tag:z,props:{},children:[{type:a,value:"virtual nodes"}]},{type:a,value:", which in the example we're going to code will look something like this:"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,W]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n    tag"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'div'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n    props"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'container'"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n    children"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'h1'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Hello World'"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'p'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Lorem ipsum dolor sit amet.'"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The example above is the equivalent to this HTML code:"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,$]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:b,tag:c,props:{className:[d,e,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:"container"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:"Hello World"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:"Lorem ipsum dolor sit amet."},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"So all a virtual node is composed of is:"}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"An HTML tag as "},{type:b,tag:z,props:{},children:[{type:a,value:"String"}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"An "},{type:b,tag:z,props:{},children:[{type:a,value:"Object"}]},{type:a,value:" of properties"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"A list of children than can either be:\n"},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Another node"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"A text (representing the content)"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:x,props:{id:"virtual-dom-skeleton"},children:[{type:b,tag:y,props:{href:"#virtual-dom-skeleton",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:"Virtual DOM skeleton"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"In our example, we will not build a full-fledged virtual DOM "},{type:b,tag:z,props:{},children:[{type:a,value:"\"engine\""}]},{type:a,value:", but enough to understand the basics."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Let's take a look at the coding of the virtual DOM. We will base all future code on the following lines. So, create an HTML-file with the following content:"}]},{type:a,value:f},{type:b,tag:v,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,$]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:v}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:b,tag:c,props:{className:[d,e,ac]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Create virtual node"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" props"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" children"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Return the virtual node"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Mount a virtual node to the DOM"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" container"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Create the element"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Set props"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Handle children"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Mount to the DOM"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Unmount a virtual node from the DOM"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Unmount the virtual node"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Take 2 vnodes, compare & figure out what's the difference"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"n1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" n2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Case where the nodes are of different tags"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Case where the nodes are of the same tag"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Case where the new vnode has string children"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Case where the new vnode has an array of vnodes"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u002F\u002F Create virtual nodes & render them below this line..."}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"As you can see, we have five different functions which all do their part to create and render a virtual DOM:"}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:S}]},{type:a,value:" creates a virtual node (but does not mount it yet to the real DOM). I called this "},{type:b,tag:s,props:{},children:[{type:a,value:S}]},{type:a,value:", because that's how it is called in the Vue.js project as well"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:ag}]},{type:a,value:" will take a given virtual node and mount it to a given container in the real DOM. For the first element, this will be the "},{type:b,tag:s,props:{},children:[{type:a,value:"#app"}]},{type:a,value:" node we created at the very top of the file."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:ai}]},{type:a,value:" will remove the virtual node from it's parent node"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:aj}]},{type:a,value:" is by far the biggest function we will write for the VDOM. This is, because we have to compare two different nodes and check all the differences in a recursive manner (doing it for all the children recursively)."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"h2",props:{id:T},children:[{type:b,tag:y,props:{href:"#whats-next-%EF%B8%8F",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"In part 1, we saw the building parts we'll need for building our own Vue.js-like framework and in this part, we saw the basics of how we are going to build the virtual dom."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"In the next chapter, we will then actually implement the complete virtual DOM part."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F14-vue-2-from-scratch-part-2",extension:".md",slug:"14-vue-2-from-scratch-part-2",createdAt:ak,updatedAt:ak},prev:{title:V,excerpt:"A lot of developers see these reactive frameworks such as Vue.js, React.js, Angular.js as \"magic\" since they do - well as it seems magic. But that's not the case. This comprehensive series shows you what's under the hood.",routeSlug:"vue-2-from-scratch-part-1",cover:{url:"https:\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F3BcOeKfCi3VcgZZQ6M7a3C\u002Ff08bad065771048fef8595146c108a74\u002Fjoshua-earle--87JyMb9ZfU-unsplash_vue.jpg?w=2400",author:E,authorUrl:E},slug:"13-vue-2-from-scratch-part-1"},next:{title:"7 Essential Tips for Working From Home",excerpt:"Working from home, especially when you're starting, is not always an easy task. This post will highlight 7 of my best tips to make working from home a delight.",routeSlug:"working-from-home",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1591382696684-38c427c7547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"https:\u002F\u002Funsplash.com\u002F@mikeyharris",authorUrl:"https:\u002F\u002Funsplash.com\u002F@mikeyharris?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"15-tips-to-work-from-home"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","tag"," ","\n        ","comment","p",",","{","operator",":","\n    ","}","\u003E","code","li","function","div","string","h1","a","em","keyword","\u003C","\u003C\u002F","\n\n    ",null,"true",-1,"icon","icon-link","\"","(","parameter",")","nuxt-content-highlight","pre","line-numbers","ul","script","h","whats-next-️","What's next ⚡️","Create Your Own Vue.js From Scratch","language-javascript","class","\n            tag","\n            props","\n            children","language-html","attr-name","attr-value","attr-equals","=","\n  ","app","mount","vnode","unmount","patch","2021-05-05T09:28:33.055Z")));