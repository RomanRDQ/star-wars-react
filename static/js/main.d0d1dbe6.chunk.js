(this["webpackJsonpstar-wars-react"]=this["webpackJsonpstar-wars-react"]||[]).push([[0],{12:function(e,t,c){e.exports={contentWrapper:"Planets_contentWrapper__2IJJk",itemDescriptionWrapper:"Planets_itemDescriptionWrapper__1aILe",itemDescription:"Planets_itemDescription__2ztFy",leftBlockContent:"Planets_leftBlockContent__3eLl-",contentButtons:"Planets_contentButtons__1kIor",preloaderWrapper:"Planets_preloaderWrapper__1PV5b"}},13:function(e,t,c){e.exports={contentWrapper:"Species_contentWrapper__3TERc",itemDescriptionWrapper:"Species_itemDescriptionWrapper__3Wn3C",itemDescription:"Species_itemDescription__2WgRH",leftBlockContent:"Species_leftBlockContent__2x_FB",contentButtons:"Species_contentButtons__2Qmth",preloaderWrapper:"Species_preloaderWrapper__3RqPK"}},29:function(e,t,c){e.exports={content:"Content_content__FWTsD"}},31:function(e,t,c){e.exports={welcomePageWrapper:"WelcomePage_welcomePageWrapper__1H3f1"}},33:function(e,t,c){e.exports={navbar:"Navbar_navbar__2gk11"}},38:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(28),i=c.n(s),r=(c(38),c(2)),o=c(29),l=c.n(o),A=c(8),j=c(30).create({baseURL:"https://swapi.dev/api/"}),b=c.p+"static/media/background-space.b5734c67.jfif",p=c(0),d=function(e){return Object(p.jsx)("div",{style:{backgroundImage:"url("+{Background:b}+")"},children:Object(p.jsx)("img",{src:"data:image/gif;base64,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BAkKAAAALAAAAACAAA8AAAKjnD+ggLfc0opS0XdnxFs3/nkISI2icxokanVt+JoxC8G1fNOlm6tp1QNmZj6ikDcMrorBpBMJtT2lUdzUusNSt9qurvrlhr275VHMvI7XaXAbXTLLf3NjXUnP23/qN/n8d9cHyEZYpoe3p5jIOCjoFofoKAn5CGeZZaiJWcjp10mZuRkaSAq6OGmU2lhp+vk6iioay3rpSrs6mNsqa9tb+ntQAAA7AAAAAAAAAAAAPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IENhbid0IGNvbm5lY3QgdG8gbG9jYWwgTXlTUUwgc2VydmVyIHRocm91Z2ggc29ja2V0ICcvdmFyL3J1bi9teXNxbGQvbXlzcWxkLnNvY2snICgyKSBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+CjxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBBIGxpbmsgdG8gdGhlIHNlcnZlciBjb3VsZCBub3QgYmUgZXN0YWJsaXNoZWQgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQ2FuJ3QgY29ubmVjdCB0byBsb2NhbCBNeVNRTCBzZXJ2ZXIgdGhyb3VnaCBzb2NrZXQgJy92YXIvcnVuL215c3FsZC9teXNxbGQuc29jaycgKDIpIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4KPGJyIC8+CjxiPldhcm5pbmc8L2I+OiAgbXlzcWxfcXVlcnkoKSBbPGEgaHJlZj0nZnVuY3Rpb24ubXlzcWwtcXVlcnknPmZ1bmN0aW9uLm15c3FsLXF1ZXJ5PC9hPl06IEEgbGluayB0byB0aGUgc2VydmVyIGNvdWxkIG5vdCBiZSBlc3RhYmxpc2hlZCBpbiA8Yj4vaG9tZS9hamF4bG9hZC93d3cvbGlicmFpcmllcy9jbGFzcy5teXNxbC5waHA8L2I+IG9uIGxpbmUgPGI+Njg8L2I+PGJyIC8+CjxiciAvPgo8Yj5XYXJuaW5nPC9iPjogIG15c3FsX3F1ZXJ5KCkgWzxhIGhyZWY9J2Z1bmN0aW9uLm15c3FsLXF1ZXJ5Jz5mdW5jdGlvbi5teXNxbC1xdWVyeTwvYT5dOiBDYW4ndCBjb25uZWN0IHRvIGxvY2FsIE15U1FMIHNlcnZlciB0aHJvdWdoIHNvY2tldCAnL3Zhci9ydW4vbXlzcWxkL215c3FsZC5zb2NrJyAoMikgaW4gPGI+L2hvbWUvYWpheGxvYWQvd3d3L2xpYnJhaXJpZXMvY2xhc3MubXlzcWwucGhwPC9iPiBvbiBsaW5lIDxiPjY4PC9iPjxiciAvPgo8YnIgLz4KPGI+V2FybmluZzwvYj46ICBteXNxbF9xdWVyeSgpIFs8YSBocmVmPSdmdW5jdGlvbi5teXNxbC1xdWVyeSc+ZnVuY3Rpb24ubXlzcWwtcXVlcnk8L2E+XTogQSBsaW5rIHRvIHRoZSBzZXJ2ZXIgY291bGQgbm90IGJlIGVzdGFibGlzaGVkIGluIDxiPi9ob21lL2FqYXhsb2FkL3d3dy9saWJyYWlyaWVzL2NsYXNzLm15c3FsLnBocDwvYj4gb24gbGluZSA8Yj42ODwvYj48YnIgLz4K",alt:"preloader",style:{display:"block",margin:"0 auto"}})})},u=c(9),h=c.n(u),x=function(e){var t=Object(n.useState)(1),c=Object(A.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(),r=Object(A.a)(i,2),o=r[0],l=r[1];Object(n.useEffect)((function(){var e;(e=a,j.get("people/".concat(e,"/")).then((function(e){return e.data}))).then((function(e){l(e)})).catch(console.error)}),[a]);return Object(p.jsx)("div",{children:o?Object(p.jsxs)("div",{className:h.a.contentWrapper,children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:h.a.leftBlockContent,children:[Object(p.jsx)("div",{className:h.a.leftBlockContentImgWrapper,children:Object(p.jsx)("img",{src:"https://starwars-visualguide.com/assets/img/characters/".concat(a,".jpg"),alt:"Item"})}),Object(p.jsxs)("div",{className:h.a.contentButtons,children:[Object(p.jsx)("button",{onClick:function(){if(1===a)return l(void 0),s(83);l(void 0),s(a-1)},children:"PREV"}),Object(p.jsx)("button",{onClick:function(){if(83===a)return l(void 0),s(1);l(void 0),s(a+1)},children:"NEXT"})]})]})}),Object(p.jsx)("div",{className:h.a.itemDescription,children:Object(p.jsxs)("div",{className:h.a.itemDescriptionWrapper,children:[Object(p.jsx)("h1",{children:o.name}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Birth Year: ",o&&o.birth_year]}),Object(p.jsxs)("li",{children:["Height: ",o&&o.height]}),Object(p.jsxs)("li",{children:["Mass: ",o&&o.mass]}),Object(p.jsxs)("li",{children:["Gender: ",o&&o.gender]}),Object(p.jsxs)("li",{children:["Hair Color: ",o&&o.hair_color]}),Object(p.jsxs)("li",{children:["Skin Color: ",o&&o.skin_color]})]})]})})]}):Object(p.jsx)("div",{className:h.a.preloaderWrapper,children:Object(p.jsx)(d,{})})})},m=c(12),O=c.n(m),v=function(e){var t=Object(n.useState)(2),c=Object(A.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(),r=Object(A.a)(i,2),o=r[0],l=r[1];Object(n.useEffect)((function(){var e;(e=a,j.get("planets/".concat(e,"/")).then((function(e){return e.data}))).then((function(e){l(e)})).catch(console.error)}),[a]);return Object(p.jsx)("div",{children:o?Object(p.jsxs)("div",{className:O.a.contentWrapper,children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:O.a.leftBlockContent,children:[Object(p.jsx)("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(a,".jpg"),alt:"Item"}),Object(p.jsxs)("div",{className:O.a.contentButtons,children:[Object(p.jsx)("button",{onClick:function(){if(2===a)return l(void 0),s(21);l(void 0),s(a-1)},children:"PREV"}),Object(p.jsx)("button",{onClick:function(){if(21===a)return l(void 0),s(2);l(void 0),s(a+1)},children:"NEXT"})]})]})}),Object(p.jsx)("div",{className:O.a.itemDescription,children:Object(p.jsxs)("div",{className:O.a.itemDescriptionWrapper,children:[Object(p.jsx)("h1",{children:o.name}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Population: ",o&&o.population]}),Object(p.jsxs)("li",{children:["Diameter: ",o&&o.diameter]}),Object(p.jsxs)("li",{children:["Gravity: ",o&&o.gravity]}),Object(p.jsxs)("li",{children:["Terrain: ",o&&o.terrain]}),Object(p.jsxs)("li",{children:["Surface Water: ",o&&o.surface_water]}),Object(p.jsxs)("li",{children:["Climate: ",o&&o.climate]})]})]})})]}):Object(p.jsx)("div",{className:O.a.preloaderWrapper,children:Object(p.jsx)(d,{})})})},g=c(13),W=c.n(g),C=function(e){var t=Object(n.useState)(1),c=Object(A.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(),r=Object(A.a)(i,2),o=r[0],l=r[1];Object(n.useEffect)((function(){var e;(e=a,j.get("species/".concat(e,"/")).then((function(e){return e.data}))).then((function(e){l(e)})).catch(console.error)}),[a]);return Object(p.jsx)("div",{children:o?Object(p.jsxs)("div",{className:W.a.contentWrapper,children:[Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:W.a.leftBlockContent,children:[Object(p.jsx)("img",{src:"https://starwars-visualguide.com/assets/img/species/".concat(a,".jpg"),alt:"Item"}),Object(p.jsxs)("div",{className:W.a.contentButtons,children:[Object(p.jsx)("button",{onClick:function(){if(1===a)return l(void 0),s(37);l(void 0),s(a-1)},children:"PREV"}),Object(p.jsx)("button",{onClick:function(){if(37===a)return l(void 0),s(1);l(void 0),s(a+1)},children:"NEXT"})]})]})}),Object(p.jsx)("div",{className:W.a.itemDescription,children:Object(p.jsxs)("div",{className:W.a.itemDescriptionWrapper,children:[Object(p.jsx)("h1",{children:o.name}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Classification: ",o&&o.classification]}),Object(p.jsxs)("li",{children:["Designation: ",o&&o.designation]}),Object(p.jsxs)("li",{children:["Language: ",o&&o.language]}),Object(p.jsxs)("li",{children:["Avg Lifespan: ",o&&o.average_lifespan]}),Object(p.jsxs)("li",{children:["Avg Height: ",o&&o.average_height]}),Object(p.jsxs)("li",{children:["Skin Color(s): ",o&&o.skin_colors]})]})]})})]}):Object(p.jsx)("div",{className:W.a.preloaderWrapper,children:Object(p.jsx)(d,{})})})},f=c(31),I=c.n(f),X=function(e){return Object(p.jsx)("div",{className:I.a.welcomePageWrapper,children:Object(p.jsxs)("h1",{children:["WELCOME ",Object(p.jsx)("br",{}),"TO STARWARS API"]})})},Z=function(e){return Object(p.jsxs)("div",{className:l.a.content,children:[Object(p.jsx)(r.c,{}),Object(p.jsx)(r.a,{exact:!0,path:"/star-wars-react",render:function(){return Object(p.jsx)(X,{})}}),Object(p.jsx)(r.a,{exact:!0,path:"/star-wars-react/people",render:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(r.a,{exact:!0,path:"/star-wars-react/planets",render:function(){return Object(p.jsx)(v,{})}}),Object(p.jsx)(r.a,{exact:!0,path:"/star-wars-react/species",render:function(){return Object(p.jsx)(C,{})}}),Object(p.jsx)(r.c,{})]})},y=c(10),L=c(33),Y=c.n(L),G=function(){return Object(p.jsxs)("div",{className:Y.a.navbar,children:[Object(p.jsx)(y.b,{to:"/star-wars-react/people",children:"People"}),Object(p.jsx)(y.b,{to:"/star-wars-react/planets",children:"Planets"}),Object(p.jsx)(y.b,{to:"/star-wars-react/species",children:"Species"})]})};c(63);var N=function(){return Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(G,{}),Object(p.jsx)(Z,{})]})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y.a,{children:Object(p.jsx)(N,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={contentWrapper:"People_contentWrapper__udoxe",itemDescriptionWrapper:"People_itemDescriptionWrapper__3P-ZK",itemDescription:"People_itemDescription__397bF",leftBlockContent:"People_leftBlockContent__3wiLR",contentButtons:"People_contentButtons__3ypEQ",leftBlockContentImgWrapper:"People_leftBlockContentImgWrapper__3wt3E",preloaderWrapper:"People_preloaderWrapper__Id_bC"}}},[[64,1,2]]]);
//# sourceMappingURL=main.d0d1dbe6.chunk.js.map