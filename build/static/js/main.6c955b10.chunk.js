(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(52)},40:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),r=n(29),o=n.n(r),l=(n(40),n(21)),i=n(0),s=(n(42),n(1)),u=n.n(s),m=n(2),d=(n(7),n(30)),p=n(23),f=n(18),b=Object(d.a)({apiKey:"AIzaSyDflIlrlNuzMHmarGH82Fw29b4xOfe1hLk",authDomain:"notes-md0.firebaseapp.com",projectId:"notes-md0",storageBucket:"notes-md0.appspot.com",messagingSenderId:"478095288282",appId:"1:478095288282:web:9a458ef5598f2d075fc2e3",measurementId:"G-H0ZE879M75"}),E=Object(p.b)(b),h=new p.a,g=function(){var e=Object(p.b)().currentUser;if(null!==e){var t=e.displayName,n=e.email;e.photoURL,e.emailVerified,e.uid;console.log("usuario ingresado: ",n),console.log("usuario display: ",t)}return Object(p.c)(E,h)},O=Object(f.f)(b);function v(){return(v=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.g)(Object(f.b)(O,"postit")),e.abrupt("return",Object(f.e)(t).then(function(e){return e.docs.map(function(e){return{data:e.data(),id:e.id}})}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(){return(j=Object(m.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ID Post eliminado",t),e.next=3,Object(f.c)(Object(f.d)(O,"postit",t));case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,t){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(u.a.mark(function e(t,n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new title: ",n.title),console.log("new description: ",n.description),e.next=4,Object(f.h)(Object(f.d)(Object(f.b)(O,"postit"),t.id),{title:n.title,description:n.description});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}n(46);var y=function(){var e=Object(i.f)();return c.a.createElement("section",{className:"frame-remind-home"},c.a.createElement("div",{id:"frame-remind",className:"frame-remind"},c.a.createElement("span",{className:"container-text-home"},c.a.createElement("h4",{className:"title-remind"},"RECORDATORIO"),c.a.createElement("h4",{className:"subtitle-remind"},"Escribe tus sue\xf1os y conviertelos en objetivos")),c.a.createElement("input",{className:"button-remind",type:"submit",value:"GOOGLE",onClick:function(){g().then(function(t){var n=t.user.displayName,a=t.user.email;t.user.photoURL,localStorage.setItem("name",n),localStorage.setItem("email",a),e("/notes")}).catch(function(t){e("/*")})}})),c.a.createElement("div",null))},w=n(11),I=n(24),S=(n(48),function(){var e=Object(I.b)(),t=(e.register,e.errors,e.control),n=e.handleSubmit,r=Object(a.useState)(""),o=Object(w.a)(r,2),l=o[0],i=o[1],s=Object(a.useState)(""),d=Object(w.a)(s,2),p=d[0],b=d[1],E=Object(a.useState)([]),h=Object(w.a)(E,2),g=h[0],k=h[1],y=Object(a.useState)(null),S=Object(w.a)(y,2),C=(S[0],S[1]),x=Object(a.useState)(""),D=Object(w.a)(x,2),F=D[0],T=D[1],L=Object(a.useState)(!1),R=Object(w.a)(L,2),A=R[0],G=R[1],H=function(){(function(){return v.apply(this,arguments)})().then(function(e){k(e)}).catch(function(e){return console.error("Estos catch",e)})};Object(a.useEffect)(function(){H()},[]);var M=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("ITEM: ",F),G(!0),T){e.next=7;break}console.log("if"),e.next=12;break;case 7:return e.next=9,N(F,{title:l,description:p});case 9:H(),i(""),b("");case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"notes-dataAll-user"},c.a.createElement("h4",{className:"notes-data-user"}," Usuario Conectado: ",localStorage.getItem("name")),c.a.createElement("h4",{className:"notes-data-user"}," ",localStorage.getItem("email"))),c.a.createElement("h3",null,"\xa1Escribe para no olvidar!"),c.a.createElement("form",{onSubmit:A?M:n(function(e,t){t.preventDefault(),function(e,t){console.log({title:e,description:t}),Object(f.a)(Object(f.b)(O,"postit"),{title:e,description:t})}(l,p),console.log(l),console.log(p),H(),i(""),b("")})},c.a.createElement("div",{className:"note-maker-space"},c.a.createElement(I.a,{render:function(e){return e.field.onChange,c.a.createElement("input",{placeholder:"Titulo",className:"titleNotes",value:l,onChange:function(e){return i(e.target.value)}})},control:t,name:"title"}),c.a.createElement(I.a,{render:function(e){return e.field.onChange,c.a.createElement("textarea",{placeholder:"Descripcion",className:"descripcionNotes",value:p,onChange:function(e){return b(e.target.value)}})},control:t,name:"description"}),c.a.createElement("button",{type:"submit",className:"btn-notas-primary"},c.a.createElement("ion-icon",{name:"checkmark"})),c.a.createElement("button",{className:"btn-notas-primary",onClick:function(e){return M(e)}},c.a.createElement("ion-icon",{name:"checkmark-done"}),"EDICI\xd3N")),c.a.createElement("h3",null,"Tus recordatorios"),c.a.createElement("div",{className:"containerAllNotes"}," ",g.map(function(e){return c.a.createElement("div",{className:"individualNotesContainer",key:e.id},c.a.createElement("p",null,e.data.title),c.a.createElement("p",null,e.data.description),c.a.createElement("button",{type:"button",className:"individualNotesEdit",onClick:function(){return function(e){i(e.data.title),b(e.data.description),C(e.id),T(e),console.log(e.data.title),console.log(e.data.description)}(e)}}," ",c.a.createElement("ion-icon",{name:"create",className:"notes-icon-edit"})),c.a.createElement("button",{type:"button",className:"individualNotesDelet",onClick:function(){return function(e){return j.apply(this,arguments)}(e.id)}}," ",c.a.createElement("ion-icon",{name:"close-circle",className:"notes-icon-delet"})))}))))}),C=function(e){var t=e.goTo;Object(i.f)();return c.a.createElement("div",null,c.a.createElement("button",{onClick:t}," SALIR "))};n(50);function x(){var e=Object(i.f)();return c.a.createElement("div",{className:"notFound-message-box"},c.a.createElement("h1",{className:"notFound-message-title"},"\xa1Ops esta direcci\xf3n no ha sido encontrada! "),c.a.createElement("section",{className:"notFound-message-button"},c.a.createElement(C,{goTo:function(t){t.preventDefault(),e("/")}})))}function D(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/notes"},"Notes"))))}var F=function(){return c.a.createElement(l.a,null,c.a.createElement(D,null," "),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",element:c.a.createElement(y,null)}),c.a.createElement(i.a,{path:"/notes",element:c.a.createElement(S,null)}),c.a.createElement(i.a,{path:"*",element:c.a.createElement(x,null)}),"x"))},T=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,53)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null))),T()}},[[32,3,2]]]);
//# sourceMappingURL=main.6c955b10.chunk.js.map