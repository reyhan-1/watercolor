(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{48:function(e,t,n){e.exports=n(74)},53:function(e,t,n){},67:function(e,t,n){e.exports=n.p+"static/media/pens.261318f5.JPG"},68:function(e,t,n){e.exports=n.p+"static/media/brushes.25cc4995.JPG"},69:function(e,t,n){e.exports=n.p+"static/media/set.47d83111.JPG"},70:function(e,t,n){e.exports=n.p+"static/media/paper.a9348f82.JPG"},71:function(e,t,n){e.exports=n.p+"static/media/onthego.74fe9f35.JPG"},72:function(e,t,n){e.exports=n.p+"static/media/morepaint.0f50fd9f.JPG"},74:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),i=n.n(c),l=(n(53),n(13)),o=n(11),s=n(31),u=n(4);n(54),n(75),n(76);u.b.initializeApp({apiKey:"AIzaSyC7kgmnqEWQ0KnJZaDlch5gaTekEMZ0ko8",authDomain:"reyhan-sketches.firebaseapp.com",projectId:"reyhan-sketches",storageBucket:"reyhan-sketches.appspot.com",messagingSenderId:"858192127606",appId:"1:858192127606:web:d5f039880970700407e157"});var m=u.b.storage(),p=u.b.firestore(),f=u.b.firestore.FieldValue.serverTimestamp,d=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},g=n(77),h=(n(35),function(e){var t=e.setSelectedImg,n=d("images").docs;return console.log(n),r.a.createElement("div",{className:"img-grid"},n&&n.map((function(e){return r.a.createElement(g.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:.8},onClick:function(){return t(e.url)}},r.a.createElement(g.a.img,{src:e.url,alt:"reyhan's sketches",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))}),b=function(e){var t=e.selectedImg,n=e.setSelectedImg;return r.a.createElement(g.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&n(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(g.a.img,{src:t,alt:"bigger sketch",initial:{y:"3vh"},animate:{y:0},transition:{duration:.5}}))},y=(n(55),n(36),n(21)),E=n(22);function v(){var e=Object(y.a)(["  /*react scroll link*/\n   margin-top: 0;\n   opacity: 0.7;\n   align-items: center;\n   text-decoration: none;\n   padding: 0 1rem;\n   height: 100%;\n   cursor: pointer;\n   font-weight: bolder;\n   -webkit-text-stroke: 0.5px #D4AF37;\n   color: white;\n   }\n   \n   &:hover{\n      text-decoration: none;\n      transition: all 0.2 ease-in-out;\n      opacity: 0.7;      \n      color: #D4AF37;\n   }\n\n   @media screen and (max-width: 480px) {\n   padding: 0.4em;\n   }\n"]);return v=function(){return e},e}function j(){var e=Object(y.a)(["\n   height: 0px;\n   text-decoration: none;\n"]);return j=function(){return e},e}function O(){var e=Object(y.a)(["\n   display: flex;\n   align-items: center;\n   list-style: none;\n   text-align: center;\n   margin-left: 35%;\n"]);return O=function(){return e},e}var k=E.a.ul(O()),w=(E.a.li(j()),Object(E.a)(l.b)(v()),n(67),n(68),n(69),n(70),n(71),n(72),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"supply"},r.a.createElement("h1",null,"Hi!  "),r.a.createElement("p",null,"  I am Reyhan, software engineer. I love to watercolor painting. "),r.a.createElement("p",null,"If you want to buy any of the pieces, or want to say hi just contact me. You can",r.a.createElement("a",{href:"mailto:reyhanuyanik@icloud.com"}," e-mail me"),"  . I usually get back within a day.",r.a.createElement("p",null,"Find more about me on ",r.a.createElement("a",{href:"http://reyhan-1.github.io/",target:"myTab"}," my personal website. ")))),r.a.createElement("div",{className:"supply"},r.a.createElement("h2",null," This website is an open source project made by Reyhan Uyanik ")))}),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"rey on paper"),r.a.createElement("p",null,"\u201cArt washes from the soul the dust of everyday life.\u201d - Pablo Picasso")))},I=n(30),S=n.n(I),N=n(46),J=function(e){var t=Object(a.useState)(0),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),l=Object(o.a)(i,2),s=l[0],u=l[1],d=Object(a.useState)(null),g=Object(o.a)(d,2),h=g[0],b=g[1];return Object(a.useEffect)((function(){var t=m.ref(e.name),n=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){u(e)}),Object(N.a)(S.a.mark((function e(){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:a=e.sent,r=f(),n.add({url:a,createdAt:r}),b(a);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:h,error:s}},A=function(e){var t=e.file,n=e.setFile,c=J(t),i=c.url,l=c.progress;return Object(a.useEffect)((function(){i&&n(null)}),[i,n]),r.a.createElement("div",{className:"progress-bar",style:{width:l+"%"}})},F=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),l=Object(o.a)(i,2),s=l[0],u=l[1],m=["imgage/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("please select an image file"))}}),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"}," ",s," "),n&&r.a.createElement("div",null," ",n.name," "),n&&r.a.createElement(A,{file:n,setFile:c})))},P=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(h,{setSelectedImg:c}),n&&r.a.createElement(b,{selectedImg:n,setSelectedImg:c}))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(k,null))};var D=function(){return r.a.createElement(l.a,null,r.a.createElement(G,null),r.a.createElement(P,null),r.a.createElement(w,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.94eca6b6.chunk.js.map