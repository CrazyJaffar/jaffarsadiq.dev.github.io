__NUXT_JSONP__("/blog/node-json-web-token", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{article:{publishedAt:"2019-08-13T00:00:00.000Z",title:"Secure Your Node.js Application With JSON Web Token",routeSlug:"node-json-web-token",excerpt:"When you build a web application where your front-end and back-end is separated, one way of putting it behind a login is with JSON Web Token. In this post, you'll learn what JSON Web Token (JWT) is, how it works and how to integrate it in your Node.js application.",tags:"node, security",canonicalUrl:"https:\u002F\u002Fwww.codewall.co.uk\u002Fsecure-your-node-js-application-with-json-web-token",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1549927455-67cc16cc490c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"chris panas",authorUrl:"https:\u002F\u002Funsplash.com\u002F@chrispanas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},toc:[{id:Z,depth:P,text:_},{id:$,depth:D,text:aa},{id:ab,depth:D,text:ac},{id:ad,depth:D,text:ae},{id:af,depth:P,text:ag},{id:ah,depth:D,text:ai},{id:aj,depth:D,text:ak},{id:al,depth:D,text:am},{id:an,depth:P,text:ao}],body:{type:"root",children:[{type:b,tag:Q,props:{id:Z},children:[{type:b,tag:o,props:{href:"#json-web-token-in-a-nutshell",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Quoting the "},{type:b,tag:o,props:{href:ap,rel:[aq,ar,as],target:at},children:[{type:a,value:"official website"}]},{type:a,value:", \"JSON Web Token is an open, industry-standard method for representing "},{type:b,tag:j,props:{},children:[{type:a,value:"claims securely between two parties"}]},{type:a,value:"\". Which means, a server can determine whether information (in JSON format) sent by the client has not been modified and has effectively been issued by said server."}]},{type:a,value:e},{type:b,tag:E,props:{id:$},children:[{type:b,tag:o,props:{href:"#what-does-a-token-include",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"A JSON Web Token is composed of three parts:"}]},{type:a,value:e},{type:b,tag:au,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"📃 "},{type:b,tag:j,props:{},children:[{type:a,value:"Header"}]},{type:a,value:": Contains extra information what kind of token it is (JWT) and which signing algorithm is being used (e.g. SHA256). The header JSON is being Base64Url encoded."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"📦 "},{type:b,tag:j,props:{},children:[{type:a,value:"Payload"}]},{type:a,value:": Contains information (or \"claims\") that the two parties want to share. This could include anything you want, but it's never a good idea to share sensitive data (such as passwords), because by default, a JWT token can be decoded without a shared secret. JWT does not have the goal to encrypt the data. I personally usually use user ID, role, issue date and expiration date. As well as the header JSON, the payload JSON is also encoded with Base64Url."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"🔏 "},{type:b,tag:j,props:{},children:[{type:a,value:"Signature"}]},{type:a,value:": The signature contains the encoded header, encoded payload, a secret (that only your server knows) and is signed by the algorithm that's determined in the header."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Were the hashing algorithm to be SHA256, the signature would be created as such:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"HMACSHA256(\nbase64UrlEncode(header)\n+ \".\"\n+ base64UrlEncode(payload)\n,secret)\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"At the end, all three parts are just being concatenated, separated by a \".\":"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u003CHeader\u003E.\u003CPayload\u003E.\u003CSignature\u003E\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Here an example JWT:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,R]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDM5YzI4MjdhZDgyMjBmMTJiMGZkMWIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjUyNzE4NzUsImV4cCI6MTU2NjQ4MTQ3NX0.NmcvfTBmUw1cdEI1cNRHzq6q5W0HmPELoh8rd_7EFAc\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Take a moment to head over to "},{type:b,tag:o,props:{href:ap,rel:[aq,ar,as],target:at},children:[{type:a,value:"jwt.io"}]},{type:a,value:" and paste the token in there. You'll see all the information that it contains (except the signature)"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:av,props:{alt:"jwt-io-demo",src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F2uCswo8x4AH0CLIiJG5IRP\u002Fb2fbf24fe51d79c72f75e331094d2996\u002Fjwt-io-demo.png"},children:[]}]},{type:a,value:e},{type:b,tag:E,props:{id:ab},children:[{type:b,tag:o,props:{href:"#how-does-a-jwt-token-work",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It is important to notice that JWT is not meant to exchange encrypted data. It should never contain sensible information such as passwords. The key in JWT lays in the verification of tokens. When you try to verify a token which has been tampered with (maybe a user ID has been swapped), the token will be rejected."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Why? Because the content does not match up with the signature anymore. So a "},{type:b,tag:j,props:{},children:[{type:a,value:"valid"}]},{type:a,value:" token cannot be created by somebody other than you, except when they get the hands-on your secret you use to hash the signature with."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In case your JWT secret gets hacked for some reason, you need to change it immediately. All already existing tokens from then on will be invalid. Which might be a little annoying for some logged-in users, but you can make sure that nobody can generate a valid token for your application."}]},{type:a,value:e},{type:b,tag:E,props:{id:ad},children:[{type:b,tag:o,props:{href:"#how-does-a-jwt-workflow-look-like-on-a-server",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ae}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:av,props:{alt:"jwt-workflow",src:"\u002F\u002Fimages.ctfassets.net\u002Fr1crnaxclhxs\u002F47KphWLhy42o1RlH9Ncj5I\u002F37f0303ad038000ab662cbd66e81af0f\u002Fjwt-workflow.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Now that we are a little familiar with JWT in general, let's take a look at an example how it would work with a client-server exchange."}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The first move makes the client. This could be a web frontend application, a mobile app, etc. Basically anything that tries to interact with your backend application (for example a REST API). It "},{type:b,tag:j,props:{},children:[{type:a,value:"sends their login credentials"}]},{type:a,value:" to the server for it to become verified."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"When the server receives the login request, it first "},{type:b,tag:j,props:{},children:[{type:a,value:"makes sure that the username\u002Femail and password match up with information stored in the database"}]},{type:a,value:". When the credentials are correct, this means for the server that this user is who he says he is."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Next, the "},{type:b,tag:j,props:{},children:[{type:a,value:"JWT token is being generated"}]},{type:a,value:". Here, information that's important for identifying the user are being passed into the payload. It's also a good idea to include issue and expiration dates. So a session would never be longer valid than the time you indicate. One week seems like a good time span. The user should log out of the application after each use anyways, right? But this just adds one extra piece of security by avoiding zombie logged-in users."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The token then is "},{type:b,tag:j,props:{},children:[{type:a,value:"returned to the client"}]},{type:a,value:" as a response to his login attempt. When he receives a token, that means for him the login has been successful. The token should be "},{type:b,tag:j,props:{},children:[{type:a,value:"stored somewhere locally on the client-side"}]},{type:a,value:". This can be localStore for web applications or somewhere in a device variable for mobile applications."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"For all further communication with the server, the client adds an "},{type:b,tag:j,props:{},children:[{type:a,value:"Authentication header"}]},{type:a,value:" to each request. This looks as such:\nAuthentication: Bearer "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"When a new "},{type:b,tag:j,props:{},children:[{type:a,value:"request to a protected resource"}]},{type:a,value:" arrives at the server, the first thing it does is to check if an Authentication header is passed along with the request. Is this the case, it tries to "},{type:b,tag:j,props:{},children:[{type:a,value:"verify if the token checks out"}]},{type:a,value:". If it's not a valid token (it has been tampered with, it has expired, etc.), the request should be denied immediately."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"If the "},{type:b,tag:j,props:{},children:[{type:a,value:"token is valid"}]},{type:a,value:" however, it's safe to assume for the server that the user is still who he says he is and can return the requested resource as a response to the client."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:Q,props:{id:af},children:[{type:b,tag:o,props:{href:"#jwt-in-a-nodejs-application",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ag}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:K,props:{},children:[{type:a,value:"In this post, I'm not going into the details how web servers work in Node.js. But I'll show you how you can use JWT in a JavaScript server environment."}]}]},{type:a,value:e},{type:b,tag:E,props:{id:ah},children:[{type:b,tag:o,props:{href:"#preparation",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ai}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In order to work with JWT, you can use the handy "},{type:b,tag:l,props:{},children:[{type:a,value:"jsonwebtoken"}]},{type:a,value:" library. Install it as such:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-bash"]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"npm"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"install"}]},{type:a,value:" jsonwebtoken\n"}]}]}]},{type:a,value:e},{type:b,tag:E,props:{id:aj},children:[{type:b,tag:o,props:{href:"#create-a-token",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ak}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"At the place in your code where you determine if the client has provided correct login credentials (probably just after you checked the database), you can create the JSON Web Token:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:ax}]},{type:a,value:" payload"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:ax}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"JWT"}]},{type:a,value:" secret"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:" expiresIn"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"Expiration"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"Time"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In a real example, it could look like this:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:" _id"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:" user"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:" admin"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:"\n  expiresIn"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"'1 week'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Notice two things:"}]},{type:a,value:e},{type:b,tag:au,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"If you are not familiar with "},{type:b,tag:l,props:{},children:[{type:a,value:"dotenv"}]},{type:a,value:", "},{type:b,tag:l,props:{},children:[{type:a,value:"process.env.JWT_SECRET"}]},{type:a,value:" is where your JWT secret would be placed. It is never a good idea to store your token as clear text in your code, that's why it's a good idea to use tools such as (dotenv)[https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fdotenv] to locate it in a file that's not going to be uploaded to your Git repository."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:a,value:"The "},{type:b,tag:l,props:{},children:[{type:a,value:"expiredIn"}]},{type:a,value:" property can be human-readable time indications in string form: -"},{type:b,tag:K,props:{},children:[{type:a,value:" '4 days' -"}]},{type:a,value:" '7 hours' -"},{type:b,tag:K,props:{},children:[{type:a,value:" '2 weeks' -"}]},{type:a,value:" '6 months'\n-* etc."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:E,props:{id:al},children:[{type:b,tag:o,props:{href:"#verify-token",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:am}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Your client should set the Authentication header as such: Bearer: "},{type:b,tag:d,props:{},children:[{type:a,value:". Therefore you first need to strip the "},{type:b,tag:l,props:{},children:[{type:a,value:"\"Bearer: \""}]},{type:a,value:" part away from the string:"}]}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:" req"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:"header"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"'Authorization'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:"replace"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"'Bearer '"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"''"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:K,props:{},children:[{type:a,value:"(req.header('Authorization') is the Express.js way to read the authorization header)"}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Then, you can verify the provided token as such:"}]},{type:a,value:e},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,L]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"try"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:F}]},{type:a,value:" payload "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:G}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:"verify"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:d},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,O,aF]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"payload"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"catch"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:I}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,O,aF]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C,p,n]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"message"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"If the token is valid, you'll have access to all the payload data right in the payload variable. If the token is invalid, the JWT library will throw an error you can treat in the catch."}]},{type:a,value:e},{type:b,tag:Q,props:{id:an},children:[{type:b,tag:o,props:{href:"#summary",ariaHidden:q,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ao}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"That's it! As you see it's not that complicated to use JWT. The most important thing -and I can't stress this enough- is that JWT is NOT encrypting your data, therefore DON'T use it to exchange sensible information.\nJSON Web Token is an excellent technology to verify whether the information someone claims they have are actually authentic.\nHave fun coding!"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F7-node-jwt-token",extension:".md",slug:"7-node-jwt-token",createdAt:aG,updatedAt:aG},prev:{title:"Understand Async\u002FAwait, Promises, Callbacks in JavaScript",routeSlug:"es7-async-await",excerpt:"As we create more and more detached applications, asynchronous functions are more important than ever. async\u002Fawait gives you an incredible easy toolset to do this. However, it's important to know what's under the hood.",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1494423500016-801283cf7eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"Joe Roberts",authorUrl:"https:\u002F\u002Funsplash.com\u002F@iamjoeroberts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"6-es7-async-await"},next:{title:"6 Ways To Become A Faster Developer",routeSlug:"become-a-faster-developer",excerpt:"There are several ways of becoming a faster developer. The most important one is practice, but there is more to it...",cover:{url:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1502900476531-ca62d0f2b679?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80",author:"John Salzarulo",authorUrl:"https:\u002F\u002Funsplash.com\u002F@johnsalzarulo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},slug:"8-become-a-faster-developer"}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","p"," ","operator","strong",".","code","li","property-access","a","function","true","(",")",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","keyword",",","method",3,"h3","const","=","string","{","}","em","language-javascript","maybe-class-name",":","console",2,"h2","language-text"," token "," jwt","\u003C","\u003E","constant","\n  ","error","json-web-token-in-a-nutshell","JSON Web Token in a nutshell","what-does-a-token-include","What does a token include?","how-does-a-jwt-token-work","How does a JWT token work?","how-does-a-jwt-workflow-look-like-on-a-server","How does a JWT workflow look like on a server?","jwt-in-a-nodejs-application","JWT in a Node.js application","preparation","Preparation","create-a-token","Create a token","verify-token","Verify token","summary","Summary","https:\u002F\u002Fjwt.io","nofollow","noopener","noreferrer","_blank","ul","img","sign","Your"," jwt ","require","'jsonwebtoken'","_id"," process","env","JWT_SECRET","class-name","2021-05-05T09:28:33.057Z")));