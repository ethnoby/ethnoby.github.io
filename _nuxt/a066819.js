(window.webpackJsonp=window.webpackJsonp||[]).push([[21,15],{660:function(t,n,e){"use strict";e.r(n);var r={mounted:function(){var t=e(656);e(658);var n=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(this.$fire.auth),r={signInFlow:"popup",signInOptions:[this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID],signInSuccessUrl:"/",tosUrl:"/",privacyPolicyUrl:"/",callbacks:{signInSuccessWithAuthResult:function(){console.log("Successfully signed in",this.$fireModule)},uiShown:function(){document.getElementById("loader").style.display="none"}}};n.start("#firebaseui-auth-container",r)}},o=e(82),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",[n("div",{attrs:{id:"firebaseui-auth-container"}}),t._v(" "),n("div",{attrs:{id:"loader"}},[t._v("\n    Loading...\n  ")])])}],!1,null,null,null);n.default=component.exports},812:function(t,n,e){"use strict";e.r(n);var r=e(517),o=e(526),c=e(523),l=e(520),d=e(537),h=e(561),f={components:{SignIn:e(660).default},computed:{currentUser:function(){return this.$store.state.user}},methods:{signOut:function(){this.$fire.auth.signOut()}}},v=e(82),component=Object(v.a)(f,(function(){var t=this,n=t._self._c;return n(d.a,{attrs:{fluid:""}},[n(h.a,{attrs:{justify:"center",align:"center"}},[n(l.a,{attrs:{cols:"12",sm:"8",md:"6"}},[n(o.a,[n(c.b,{staticClass:"headline",attrs:{center:""}},[t._v("\n          Вітаем"),t.currentUser?n("span",[t._v(", "+t._s(t.currentUser.displayName))]):t._e()]),t._v(" "),n(c.a,{staticClass:"pa-5",attrs:{elevcation:"2"}},[t.currentUser?n(r.a,{attrs:{color:"primary"},on:{click:function(n){return t.signOut()}}},[t._v("\n            Выйсці\n          ")]):n("SignIn")],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);