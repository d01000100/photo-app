(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{10:function(e,a,t){e.exports={chatInitial:"Chat_chatInitial___E90B",contact:"Chat_contact__24oqk",chat:"Chat_chat__-zNOc",chatMessage:"Chat_chatMessage__NTM4g",messageSelf:"Chat_messageSelf__yFSji",messageOther:"Chat_messageOther__2aTJY"}},28:function(e,a,t){e.exports={resultsPhoto:"Search_resultsPhoto__1OSxI"}},29:function(e,a,t){e.exports=t(42)},34:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),c=t.n(o),s=(t(34),t(6)),l=t(2),i=t(4),m=t(26),u=t(9),h=Object(u.b)({name:"search",initialState:{isSearching:!1,areThereMore:!1,currentPage:1,query:"",results:[]},reducers:{newResults:function(e,a){e.results=a.payload.photos,e.areThereMore=a.payload.areThereMore,e.query=a.payload.query,e.isSearching=!1,e.currentPage=1},appendResults:function(e,a){e.results=e.results.concat(a.payload.photos),e.areThereMore=a.payload.areThereMore,e.isSearching=!1,e.currentPage++},startSearch:function(e){e.isSearching=!0,e.results=[]},startAppend:function(e){Object(m.a)("isSearching"),!0},setSearch:function(e,a){e.query=a.payload}}}),g=h.actions,p=g.newResults,f=g.appendResults,d=g.startSearch,v=g.startAppend,E=function(e){return e.search.results},b=function(e){return e.search.areThereMore},_=function(e){return e.search.query},w=function(e){return e.search.currentPage},j=h.reducer,y=t(13),M=t(27),O=t.n(M),N=[{src:"img/coons/photo_2020-10-29_09-29-07.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-11_12-58-06.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-10-31_14-14-37.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-13_22-34-41.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-06_11-25-26.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-14_15-17-33.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-06_23-10-35.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-17_13-17-14.jpg",tags:["raccoon","animal"]},{src:"img/coons/photo_2020-11-11_12-57-54.jpg",tags:["raccoon","animal"]},{src:"img/frogs/photo_2020-11-05_11-46-58.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-18_19-20-40.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-14_19-33-01.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-18_19-20-43.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-18_19-20-37.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-18_19-20-47.jpg",tags:["frog","animal"]},{src:"img/frogs/photo_2020-11-18_19-20-39.jpg",tags:["frog","animal"]}];function S(e,a){var t=O()(e.tags).get(a);if(!t)return!1;var n=Object(y.a)(t,1);return Object(y.a)(n[0],1)[0]>.7}function x(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;if(""==e)return{photos:[],areThereMore:!1};var n=N.filter((function(a){return S(a,e)}));if(n.length<=t)return console.log("returning all photos"),{photos:n,areThereMore:!1};var r=(a-1)*t,o=t*a;return console.log("returning from ".concat(r," to ").concat(o)),{photos:n.slice(r,o),areThereMore:n.length>t*a}}var k=t(28),C=t.n(k);function T(e){return r.a.createElement("div",{className:"col-4 ".concat(C.a.resultsPhoto),id:e.photoData.src},r.a.createElement("div",{style:{background:"url(".concat("/photo-app/"+e.photoData.src,") no-repeat")},alt:"Photo ".concat(e.photoData.src," not found")}))}function R(){var e=Object(i.b)(),a=Object(i.c)(E),t=Object(i.c)(b),n=Object(i.c)(w),o=Object(i.c)(_);return r.a.createElement("div",null,r.a.createElement("h2",{className:"App-header"},"Search"),r.a.createElement("input",{type:"text",className:"App-wide-input",placeholder:"Search all photos (try with 'raccoon', 'animal', or 'frog')",onChange:function(a){return function(a){e(d);var t=x(a);t.query=a,e(p(t))}(a.target.value)}}),r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(T,{photoData:e})}))),t&&r.a.createElement("button",{className:"App-button",onClick:function(){return function(){e(v);var a=x(o,n+1);e(f(a))}()}},"SEE MORE"))}var P=Object(u.b)({name:"chat",initialState:{allMessages:{"Roberto Mel\xe9ndez":{name:"Roberto Mel\xe9ndez",image:"img/coons/photo_2020-11-14_15-17-33.jpg",messages:[{sender:"other",content:"Hello man, how are you?"},{sender:"self",content:"Good, you?"},{sender:"other",content:"Not bad"}]},"Bruce Stevenson":{name:"Bruce Stevenson",image:"img/frogs/photo_2020-11-18_19-20-43.jpg",messages:[{sender:"other",content:"Hello man, what's going on!?"},{sender:"self",content:"Nothing much, what's going on with you?"},{sender:"other",content:"I tell you what's going on!!"},{sender:"other",content:"The budget was 500 and now it's 200!!"},{sender:"self",content:"It\u2019s been more than a decade since the first of the films in Peter Jackson\u2019s Lord of the Rings trilogy was released, and although fans are now eagerly anticipating a return to Middle-earth with his upcoming Hobbit films, well, one does NOT simply walk away from where it all began. Today, we feature an article written for TheOneRing.net by guest author Leslie Martinka, Marketing Manager at Hark.com, the world\u2019s largest platform for pop culture quotes and images, on the phenomenon that is Tolkien\u2019s Lord of the Rings, and the top 20 quotes from Peter Jackson\u2019s films:"}]}},activeChat:null},reducers:{setActiveChat:function(e,a){var t=a.payload;if(null!==t){var n=t.username;e.activeChat=n}else e.activeChat=null},addMessage:function(e,a){var t=a.payload,n=t.recipient,r=t.content;console.log("Payload is ".concat(JSON.stringify(t)));var o={sender:"self",content:r};e.allMessages[n]?e.allMessages[n].messages.push(o):e.allMmessages[n]={name:n,messages:[o]}}}}),z=P.actions,A=z.setActiveChat,q=z.addMessage,I=function(e){var a=e.chat.allMessages;return Object.values(a)},B=function(e){var a=e.chat,t=a.activeChat;return a.allMessages[t]},J=P.reducer,H=t(10),D=t.n(H),F=D.a.chatMessage,L=D.a.messageSelf,W=D.a.messageOther,G=D.a.chat;function K(){var e=Object(n.useState)(""),a=Object(y.a)(e,2),t=a[0],o=a[1],c=Object(i.c)(B).name,s=Object(i.b)();function l(){var e=t.trim();""!=e&&(s(q({recipient:c,content:e})),o(""))}return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",value:t,onChange:function(e){o(e.target.value)},onKeyUp:function(e){"Enter"==e.key&&l()}}),r.a.createElement("div",{className:"input-group-append input-group-sm",onClick:l},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("img",{className:"icon",src:"".concat("/photo-app","/svg/sent.svg"),alt:"Send icon"}))))}function U(){var e=Object(i.b)(),a=Object(l.g)().username;e(A({username:a}));var t=Object(i.c)(B),o=t.name,c=(t.image,t.messages),m=r.a.createRef();return Object(n.useEffect)((function(){m.current.scrollTop=m.current.scrollHeight}),[c]),r.a.createElement("div",null,r.a.createElement("h3",null,o),r.a.createElement(s.b,{to:"/chat"},r.a.createElement("i",null,"< All messages")),r.a.createElement("div",{className:"".concat(G," scroll"),ref:m},c.map((function(e,a){var t=e.sender,n=e.content;return r.a.createElement("div",{key:a,className:"".concat(F," ").concat("self"==t?L:W)},n)}))),r.a.createElement(K,null))}function Y(e){var a=e.info.name,t=e.info.image;return r.a.createElement(s.b,{to:"/chat/".concat(a)},r.a.createElement("li",{className:"list-group-item list-group-item-action ".concat(D.a.contact)},r.a.createElement("img",{className:D.a.chatInitial,src:"/photo-app/"+t,alt:"".concat(a,"'s profile icon")}),r.a.createElement("span",null,a)))}function $(){var e=Object(i.c)(I);return r.a.createElement("ul",{className:"list-group"},e.map((function(e){return r.a.createElement(Y,{info:e})})))}function Q(){var e=Object(l.g)().username;return r.a.createElement("h2",null,e,r.a.createElement(l.a,{to:"/chat"}))}function V(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/search",exact:!0,component:R}),r.a.createElement(l.b,{path:"/chat/:username",component:U}),r.a.createElement(l.b,{path:"/chat",exact:!0,component:$}),r.a.createElement(l.b,{path:"/profile/:username"},r.a.createElement(Q,null)),r.a.createElement(l.b,{component:$})," ")}function X(){return r.a.createElement("nav",{className:"navbar navbar-expand fixed-bottom navbar-light"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",null,r.a.createElement(s.c,{className:"nav-link",to:"/search",activeClassName:"active"},r.a.createElement("svg",{width:"50px",height:"50px",viewBox:"0 0 16 16",className:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})))),r.a.createElement("li",null,r.a.createElement(s.c,{className:"nav-link",to:"/chat",activeClassName:"active"},r.a.createElement("svg",{width:"50px",height:"50px",viewBox:"0 0 16 16",className:"bi bi-chat-dots",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}),r.a.createElement("path",{d:"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}))))))}t(41);var Z=function(){return r.a.createElement("div",{className:"App container-sm"},r.a.createElement(s.a,null,r.a.createElement(V,null),r.a.createElement(X,null),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))))},ee=Object(u.b)({name:"nav",initialState:{page:"chat"},reducers:{setPage:function(e,a){e.page=a.payload}}}),ae=(ee.actions.setPage,ee.reducer),te=Object(u.a)({reducer:{search:j,nav:ae,chat:J}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:te},r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5d2e8129.chunk.js.map