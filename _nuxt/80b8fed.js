(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{613:function(t,n,e){"use strict";e.r(n);var o={mounted:function(){var t=e(608);e(610);var n=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(this.$fire.auth),o={signInFlow:"popup",signInOptions:[this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID,this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID],signInSuccessUrl:"/",tosUrl:"/",privacyPolicyUrl:"/",callbacks:{signInSuccessWithAuthResult:function(){console.log("Successfully signed in",this.$fireModule)},uiShown:function(){document.getElementById("loader").style.display="none"}}};n.start("#firebaseui-auth-container",o)}},r=e(95),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",[n("div",{attrs:{id:"firebaseui-auth-container"}}),t._v(" "),n("div",{attrs:{id:"loader"}},[t._v("\n    Loading...\n  ")])])}],!1,null,null,null);n.default=component.exports}}]);