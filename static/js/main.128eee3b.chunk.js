(this["webpackJsonppolaris-twitter-web"]=this["webpackJsonppolaris-twitter-web"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(27),i=n.n(a),s=n(8),u=n(20),o=n(5),j=n(1),l=function(e){var t=e.currentUser;return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/",children:"\ud648"})}),Object(j.jsx)("li",{children:Object(j.jsxs)(u.b,{to:"/profile",children:[t.displayName,"\uc758 \ud504\ub85c\ud544"]})})]})})},b=n(29),d=n(18);n(39),n(44),n(45);d.a.initializeApp({apiKey:"AIzaSyBrS7gRsZYyQC8CLxzqU7ndphUNKh6Zn3Q",authDomain:"polaris-twitter.firebaseapp.com",projectId:"polaris-twitter",storageBucket:"polaris-twitter.appspot.com",messagingSenderId:"534017579668",appId:"1:534017579668:web:28db574fbdf49b4c393281"});var p=d.a,h=d.a.auth(),f=d.a.firestore(),x=d.a.storage(),O=n(9),m=n.n(O),v=n(15),g=function(e){var t=e.tweet,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),l=Object(s.a)(o,2),b=l[0],d=l[1],p=function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ud2b8\uc717\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,f.doc("tweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},O=function(){var e=Object(v.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("tweets/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{children:i?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:O,children:[Object(j.jsx)("input",{onChange:function(e){var t=e.target.value;d(t)},value:b,required:!0}),Object(j.jsx)("input",{type:"submit",value:"\ud655\uc778"})]}),Object(j.jsx)("button",{onClick:h,children:"\ucde8\uc18c"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(j.jsx)("img",{src:t.attachmentUrl,alt:"",width:"50px",height:"50px"}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:p,children:"\uc0ad\uc81c"}),Object(j.jsx)("button",{onClick:h,children:"\ud3b8\uc9d1"})]})]})})},w=n(47),y=function(e){var t=e.currentUser,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),l=o[0],b=o[1],d=function(){var e=Object(v.a)(m.a.mark((function e(n){var r,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===l){e.next=10;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=6,c.putString(l,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,f.collection("tweets").add({text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r});case 12:i(""),b("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:d,children:[Object(j.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"100\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",maxLength:100}),Object(j.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)}}),Object(j.jsx)("input",{type:"submit",value:"\ub4f1\ub85d"}),l&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:l,alt:"",width:"50px",height:"50px"}),Object(j.jsx)("button",{onClick:function(){return b("")},children:"\ucde8\uc18c"})]})]})},U=function(e){var t=e.currentUser,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){f.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(b.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{currentUser:t}),Object(j.jsx)("div",{children:a.map((function(e){return Object(j.jsx)(g,{tweet:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],l=Object(r.useState)(!0),b=Object(s.a)(l,2),d=b[0],p=b[1],f=Object(r.useState)(""),x=Object(s.a)(f,2),O=x[0],g=x[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},y=function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:y,children:[Object(j.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c",value:n,required:!0,onChange:w}),Object(j.jsx)("input",{name:"password",type:"password",placeholder:"\ud328\uc2a4\uc6cc\ub4dc",value:u,required:!0,onChange:w}),Object(j.jsx)("input",{type:"submit",value:d?"\uacc4\uc815 \uc0dd\uc131":"\uc11c\ube44\uc2a4 \uc811\uc18d"}),O]}),Object(j.jsx)("span",{onClick:function(){return p((function(e){return!e}))},children:d?"\uc11c\ube44\uc2a4 \uc811\uc18d":"\uacc4\uc815 \uc0dd\uc131"})]})},k=function(){var e=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new p.auth.GoogleAuthProvider:"github"===n&&(r=new p.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:e,name:"google",children:"Google \uacc4\uc815\uc73c\ub85c \uc811\uc18d"}),Object(j.jsx)("button",{onClick:e,name:"github",children:"GitHub \uacc4\uc815\uc73c\ub85c \uc811\uc18d"})]})]})},C=function(e){var t=e.currentUser,n=e.refreshUser,c=Object(o.f)(),a=Object(r.useState)(t.displayName),i=Object(s.a)(a,2),u=i[0],l=i[1],b=function(){var e=Object(v.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:b,children:[Object(j.jsx)("input",{type:"text",placeholder:"\ud45c\uc2dc \uc774\ub984",onChange:function(e){var t=e.target.value;l(t)},value:u}),Object(j.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8"})]}),Object(j.jsx)("button",{onClick:function(){h.signOut(),c.push("/")},children:"\uc11c\ube44\uc2a4 \uc811\uc18d\ud574\uc81c"})]})},I=function(e){var t=e.isSignedIn,n=e.currentUser,r=e.refreshUser;return Object(j.jsxs)(u.a,{children:[t&&Object(j.jsx)(l,{currentUser:n}),Object(j.jsx)(o.c,{children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(U,{currentUser:n})}),Object(j.jsx)(o.a,{exact:!0,path:"/profile",children:Object(j.jsx)(C,{currentUser:n,refreshUser:r})})]}):Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{})})})]})};var F=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(s.a)(a,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(j.jsx)(j.Fragment,{children:n?Object(j.jsx)(I,{isSignedIn:Boolean(u),currentUser:u,refreshUser:function(){var e=h.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})}}):"\ub85c\ub529 \uc911\uc785\ub2c8\ub2e4..."})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.128eee3b.chunk.js.map