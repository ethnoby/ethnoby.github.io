(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,17],{496:function(t,e,r){var n=r(498).has;t.exports=function(t){return n(t),t}},497:function(t,e,r){var n=r(14),o=r(536),c=r(498),f=c.Map,l=c.proto,d=n(l.forEach),v=n(l.entries),h=v(new f).next;t.exports=function(map,t,e){return e?o(v(map),(function(e){return t(e[1],e[0])}),h):d(map,t)}},498:function(t,e,r){var n=r(14),o=Map.prototype;t.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},501:function(t,e,r){r(533)},502:function(t,e,r){"use strict";var n=r(6),o=r(496),c=r(498).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,f=arguments.length;n<f;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},503:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==f(map,(function(t,r){if(!e(t,r,map))return!1}),!0)}})},504:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(498),l=r(497),d=f.Map,v=f.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new d;return l(map,(function(t,n){e(t,n,map)&&v(r,n,t)})),r}})},505:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=f(map,(function(t,r){if(e(t,r,map))return{value:t}}),!0);return r&&r.value}})},506:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=f(map,(function(t,r){if(e(t,r,map))return{key:r}}),!0);return r&&r.key}})},507:function(t,e,r){"use strict";var n=r(6),o=r(537),c=r(496),f=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===f(c(this),(function(e){if(o(e,t))return!0}),!0)}})},508:function(t,e,r){"use strict";var n=r(6),o=r(496),c=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var e=c(o(this),(function(e,r){if(e===t)return{key:r}}),!0);return e&&e.key}})},509:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(498),l=r(497),d=f.Map,v=f.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new d;return l(map,(function(t,n){v(r,e(t,n,map),t)})),r}})},510:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(498),l=r(497),d=f.Map,v=f.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new d;return l(map,(function(t,n){v(r,n,e(t,n,map))})),r}})},511:function(t,e,r){"use strict";var n=r(6),o=r(496),c=r(220),f=r(498).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var map=o(this),e=arguments.length,i=0;i<e;)c(arguments[i++],(function(t,e){f(map,t,e)}),{AS_ENTRIES:!0});return map}})},512:function(t,e,r){"use strict";var n=r(6),o=r(70),c=r(496),f=r(497),l=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=arguments.length<2,r=e?void 0:arguments[1];if(o(t),f(map,(function(n,o){e?(e=!1,r=n):r=t(r,n,o,map)})),e)throw l("Reduce of empty map with no initial value");return r}})},513:function(t,e,r){"use strict";var n=r(6),o=r(88),c=r(496),f=r(497);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===f(map,(function(t,r){if(e(t,r,map))return!0}),!0)}})},514:function(t,e,r){"use strict";var n=r(6),o=r(70),c=r(496),f=r(498),l=TypeError,d=f.get,v=f.has,h=f.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),r=arguments.length;o(e);var n=v(map,t);if(!n&&r<3)throw l("Updating absent value");var f=n?d(map,t):o(r>2?arguments[2]:void 0)(t,map);return h(map,t,e(f,t,map)),map}})},532:function(t,e,r){"use strict";r(15),r(4),r(13),r(76),r(35),r(315),r(499),r(69),r(89);var n=r(0);var o,c=r(120);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var f=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));f.length&&(data.staticClass+=" ".concat(f.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,f=data.attrs;return f&&(data.attrs={},r=Object.keys(f).filter((function(t){if("slot"===t)return!1;var e=f[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},533:function(t,e,r){"use strict";r(534)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(535))},534:function(t,e,r){"use strict";var n=r(6),o=r(18),c=r(14),f=r(144),l=r(48),d=r(316),v=r(220),h=r(221),y=r(21),O=r(78),j=r(37),m=r(9),w=r(224),S=r(122),x=r(228);t.exports=function(t,e,r){var k=-1!==t.indexOf("Map"),M=-1!==t.indexOf("Weak"),P=k?"set":"add",E=o[t],_=E&&E.prototype,C=E,I={},D=function(t){var e=c(_[t]);l(_,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(M&&!j(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return M&&!j(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(M&&!j(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(f(t,!y(E)||!(M||_.forEach&&!m((function(){(new E).entries().next()})))))C=r.getConstructor(e,t,k,P),d.enable();else if(f(t,!0)){var z=new C,A=z[P](M?{}:-0,1)!=z,N=m((function(){z.has(1)})),U=w((function(t){new E(t)})),R=!M&&m((function(){for(var t=new E,e=5;e--;)t[P](e,e);return!t.has(-0)}));U||((C=e((function(t,e){h(t,_);var r=x(new E,t,C);return O(e)||v(e,r[P],{that:r,AS_ENTRIES:k}),r}))).prototype=_,_.constructor=C),(N||R)&&(D("delete"),D("has"),k&&D("get")),(R||A)&&D(P),M&&_.clear&&delete _.clear}return I[t]=C,n({global:!0,constructor:!0,forced:C!=E},I),S(C,t),M||r.setStrong(C,t,k),C}},535:function(t,e,r){"use strict";var n=r(42).f,o=r(90),c=r(317),f=r(88),l=r(221),d=r(78),v=r(220),h=r(225),y=r(226),O=r(227),j=r(31),m=r(316).fastKey,w=r(80),S=w.set,x=w.getterFor;t.exports={getConstructor:function(t,e,r,h){var y=t((function(t,n){l(t,O),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),j||(t.size=0),d(n)||v(n,t[h],{that:t,AS_ENTRIES:r})})),O=y.prototype,w=x(e),k=function(t,e,r){var n,o,c=w(t),f=M(t,e);return f?f.value=r:(c.last=f={index:o=m(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=f),n&&(n.next=f),j?c.size++:t.size++,"F"!==o&&(c.index[o]=f)),t},M=function(t,e){var r,n=w(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(O,{clear:function(){for(var t=w(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,j?t.size=0:this.size=0},delete:function(t){var e=this,r=w(e),n=M(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),j?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=w(this),n=f(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!M(this,t)}}),c(O,r?{get:function(t){var e=M(this,t);return e&&e.value},set:function(t,e){return k(this,0===t?0:t,e)}}:{add:function(t){return k(this,t=0===t?0:t,t)}}),j&&n(O,"size",{get:function(){return w(this).size}}),y},setStrong:function(t,e,r){var n=e+" Iterator",o=x(e),c=x(n);h(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?y("keys"==e?r.key:"values"==e?r.value:[r.key,r.value],!1):(t.target=void 0,y(void 0,!0))}),r?"entries":"values",!r,!0),O(e)}}},536:function(t,e,r){var n=r(25);t.exports=function(t,e,r){for(var o,c,f=r||t.next;!(o=n(f,t)).done;)if(void 0!==(c=e(o.value)))return c}},537:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},588:function(t,e,r){"use strict";r(11),r(15),r(16),r(17);var n=r(3),o=(r(4),r(45),r(64),r(35),r(13),r(28),r(68),r(501),r(29),r(502),r(503),r(504),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(41),r(12),r(499),r(0)),c=r(120),f=r(1);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(f.w)(n)]=e(),r}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),m=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},x=y("alignContent",(function(){return{type:String,default:null,validator:S}})),k={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(x)},M={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,r){var n=M[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},x),render:function(t,e){var r=e.props,data=e.data,o=e.children,f="";for(var l in r)f+=String(r[l]);var d=E.get(f);if(!d){var v,h;for(h in d=[],k)k[h].forEach((function(t){var e=r[t],n=P(h,t,e);n&&d.push(n)}));d.push((v={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(v,"align-".concat(r.align),r.align),Object(n.a)(v,"justify-".concat(r.justify),r.justify),Object(n.a)(v,"align-content-".concat(r.alignContent),r.alignContent),v)),E.set(f,d)}return t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},589:function(t,e,r){"use strict";r(11),r(15),r(16),r(17);var n=r(3),o=(r(4),r(26),r(13),r(28),r(68),r(501),r(29),r(502),r(503),r(504),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(41),r(45),r(12),r(76),r(499),r(0)),c=r(120),f=r(1);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(f.w)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(f.w)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,f=(e.parent,"");for(var l in r)f+=String(r[l]);var d=w.get(f);if(!d){var v,h;for(h in d=[],j)j[h].forEach((function(t){var e=r[t],n=m(h,t,e);n&&d.push(n)}));var y=d.some((function(t){return t.startsWith("col-")}));d.push((v={col:!y||!r.cols},Object(n.a)(v,"col-".concat(r.cols),r.cols),Object(n.a)(v,"offset-".concat(r.offset),r.offset),Object(n.a)(v,"order-".concat(r.order),r.order),Object(n.a)(v,"align-self-".concat(r.alignSelf),r.alignSelf),v)),w.set(f,d)}return t(r.tag,Object(c.a)(data,{class:d}),o)}})},712:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){var t=r(706);r(708);var e=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(this.$fire.auth),n={signInFlow:"popup",signInOptions:[this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,this.$fireModule.auth.FacebookAuthProvider.PROVIDER_ID],signInSuccessUrl:"/",tosUrl:"/",privacyPolicyUrl:"/",callbacks:{signInSuccessWithAuthResult:function(){console.log("Successfully signed in",this.$fireModule)},uiShown:function(){document.getElementById("loader").style.display="none"}}};e.start("#firebaseui-auth-container",n)}},o=r(96),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"firebaseui-auth-container"}}),t._v(" "),e("div",{attrs:{id:"loader"}},[t._v("\n    Loading...\n  ")])])}],!1,null,null,null);e.default=component.exports},816:function(t,e,r){"use strict";r.r(e);var n=r(314),o=r(663),c=r(515),f=r(589),l=r(532),d=r(588),v={components:{SignIn:r(712).default},computed:{currentUser:function(){return this.$store.state.user}},methods:{signOut:function(){this.$fire.auth.signOut()}}},h=r(96),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{fluid:""}},[e(d.a,{attrs:{justify:"center",align:"center"}},[e(f.a,{attrs:{cols:"12",sm:"8",md:"6"}},[e(o.a,[e(c.b,{staticClass:"headline",attrs:{center:""}},[t._v("\n          Вітаем"),t.currentUser?e("span",[t._v(", "+t._s(t.currentUser.displayName))]):t._e()]),t._v(" "),e(c.a,{staticClass:"pa-5",attrs:{elevcation:"2"}},[t.currentUser?e(n.a,{attrs:{color:"primary"},on:{click:function(e){return t.signOut()}}},[t._v("\n            Выйсці\n          ")]):e("SignIn")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);