(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,e,r){var content=r(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("4d6a2e0f",content,!0,{sourceMap:!1})},310:function(t,e,r){"use strict";var n=r(477),o=r(478),c=r(479),l=r(209),v=r(483),d=r(232),m=r(481),_=r(207),f=r(177),h=r(205),y=r(137),k=r(206),w=r(208),U=r(41),x=r(116),N=r(482),O=r(484),$=r(485),D=r(480),E=r(306),A={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!0,fixed:!1,favoriteItems:[{icon:"mdi-playlist-music",title:"Песні",to:"/songs"},{icon:"mdi-playlist-music",title:"Абрадавыя Песні",to:"/songs/ceremony"},{icon:"mdi-playlist-music",title:"Пазаабрадавыя Песні",to:"/songs/non_ceremony"}],allItems:[{icon:"mdi-music-box-multiple",title:"Аўдыётэка",to:"/audio"},{icon:"mdi-filmstrip-box-multiple",title:"Відэатэка",to:"/video"},{icon:"mdi-image-multiple",title:"Фотатэка",to:"/pictures"},{icon:"mdi-bookshelf",title:"Кнігі",to:"/books"},{icon:"mdi-newspaper-variant-multiple",title:"Прэса",to:"/press"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Ethnoby"}},computed:{currentUser:function(){return this.$store.state.user}},methods:{signOut:function(){this.$fire.auth.signOut(),window.location="/signin"}}},T=r(95),component=Object(T.a)(A,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[e($.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(f.a,{attrs:{contain:"","max-height":"60",src:"https://ethno.by/assets/images/ethno.by-logo-c-tr.png",alt:""}}),t._v(" "),e(h.a,t._l(t.favoriteItems,(function(r,i){return e(y.a,{key:i,attrs:{to:r.to,router:"",exact:""}},[e(k.a,[e(_.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(U.a,[e(U.c,[t._v(t._s(r.title))])],1),t._v(" "),t.currentUser?t._e():e(k.a,[e(_.a,{attrs:{color:"grey",title:"Залагіньцеся каб пабачыць змест раздзела"}},[t._v("\n            mdi-lock\n          ")])],1)],1)})),1)],1),t._v(" "),e(o.a,{attrs:{fixed:"",app:"","clipped-left":t.clipped,color:!!t.$vuetify.breakpoint.mobile&&"#8d1802",dark:t.$vuetify.breakpoint.mobile}},[e(c.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(E.a,[t._v(t._s(t.title))]),t._v(" "),e(D.a),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():e(d.a,{attrs:{icon:"",to:"/search"}},[e(_.a,[t._v("mdi-magnify")])],1),t._v(" "),e(d.a,{attrs:{icon:""},on:{click:function(e){e.preventDefault(),t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[e(_.a,[t._v("mdi-theme-light-dark")])],1),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():e(O.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[e(d.a,t._g({attrs:{icon:"",color:"primary",dark:""}},n),[t.currentUser?e(l.a,{attrs:{size:"32"}},[e("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.displayName,title:t.currentUser.displayName}})]):e(_.a,[t._v("\n            mdi-account\n          ")])],1)]}}],null,!1,1363569516)},[t._v(" "),t.currentUser?e(h.a,[e(y.a,{attrs:{"two-line":""}},[e(w.a,[e("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.displayName,title:t.currentUser.displayName}})]),t._v(" "),e(U.a,[e(U.c,[t._v(t._s(t.currentUser.displayName))]),t._v(" "),e(U.b,[t._v(t._s(t.currentUser.email))])],1)],1),t._v(" "),e(m.a),t._v(" "),e(y.a,{on:{click:function(e){return e.preventDefault(),t.signOut.apply(null,arguments)}}},[e(x.a,[e(_.a,[t._v("mdi-logout")])],1),t._v(" "),e(U.c,[t._v("Выйсці")])],1)],1):e(h.a,[e(y.a,{attrs:{to:"/signin"}},[e(x.a,[e(_.a,[t._v("mdi-login")])],1),t._v(" "),e(U.c,[t._v("Увайсці")])],1)],1)],1)],1),t._v(" "),e(N.a,[e("Nuxt")],1),t._v(" "),e($.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(h.a,[e(y.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(k.a,[e(_.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e(U.c,[t._v("Маё абранае")])],1)],1)],1),t._v(" "),t.$vuetify.breakpoint.mobile?e(v.a,{attrs:{fixed:"",app:""}},[e(d.a,{attrs:{to:"/songs/ceremony"}},[e("span",[t._v("Абрадавыя")]),t._v(" "),e(_.a,[t._v("mdi-playlist-music")])],1),t._v(" "),e(d.a,{attrs:{to:"/songs/non_ceremony"}},[e("span",[t._v("Пазаабрадавыя")]),t._v(" "),e(_.a,[t._v("mdi-playlist-music")])],1),t._v(" "),e(d.a,{attrs:{to:"/search"}},[e("span",[t._v("Пошук")]),t._v(" "),e(_.a,[t._v("mdi-magnify")])],1),t._v(" "),e(d.a,{attrs:{to:"/signin"}},[e("span",[t._v("Профіль")]),t._v(" "),t.currentUser?e(l.a,{attrs:{size:"24"}},[e("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.displayName,title:t.currentUser.displayName}})]):e(_.a,[t._v("\n        mdi-account\n      ")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},320:function(t,e,r){r(321),t.exports=r(322)},359:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;e.state.user||(console.log("in middleware"),r("/signin"),console.log("routed"))}},371:function(t,e,r){"use strict";r(274)},372:function(t,e,r){var n=r(22)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},436:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{user:!1}},o={ON_AUTH_STATE_CHANGED_MUTATION:function(t,e){var n=e.authUser;e.claims;if(n){console.log(n);var o=n.uid,c=n.email,l=n.displayName,v=n.photoURL,d=r(437),m=v||"https://www.gravatar.com/avatar/".concat(d(c),"?s=32");t.user={uid:o,email:c,displayName:l,avatar:m}}else t.user=!1}}},85:function(t,e,r){"use strict";var n=r(477),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(371),r(95)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[320,31,10,32]]]);