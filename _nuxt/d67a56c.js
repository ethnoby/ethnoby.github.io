(window.webpackJsonp=window.webpackJsonp||[]).push([[25,13],{545:function(t,e){},557:function(t,e,r){"use strict";r.r(e);var n=r(608),o=new n.Client({nodes:[{host:"en4xjabqzl9v0pr1p-1.a1.typesense.net",port:"443",protocol:"https"}],apiKey:"wPjUc5C5JzICtlt24yd50hcurSyNsEnA",connectionTimeoutSeconds:2});e.default=o},789:function(t,e,r){"use strict";r.r(e);var n=r(526),o=r(520),c=r(571),_=r(629),m=r(610),d=r(468),l=r(177),v=r(628),h=(r(29),r(19)),f=(r(63),r(557)),y={asyncData:function(t){return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.redirect,e.next=3,f.default.collections("songs").documents(r.id).retrieve();case 3:return e.t0=e.sent,e.abrupt("return",{item:e.t0});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{section:{slug:"songs",caption:"Песні"}}},head:function(){return{title:this.item.name}},computed:{embedCode:function(){return this.item.sc_track_id?'<iframe width="100%" height="'+this.embedHeight+'" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?maxheight='+this.embedHeight+"&color=%238d1802&visual=false&hide_related=true&inverse="+(this.$vuetify.theme.dark?"true":"false")+"&show_artwork=false&show_comments=false&show_reposts=false&show_teaser=false&show_user=true&auto_play=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F"+this.item.sc_track_id+(this.item.sc_secret_token?"&secret_token="+this.item.sc_secret_token:"")+'"></iframe>':this.item.audio_embed},embedHeight:function(){return this.isMobile?20:120},isMobile:function(){return this.$vuetify.breakpoint.mobile}}},x=r(95),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e(m.a,[e("nuxt-link",{attrs:{to:"/".concat(t.section.slug)}},[t._v("\n    "+t._s(t.section.caption)+"\n  ")]),t._v("\n   / \n  "),e("span",[t._v("\n    "+t._s(t.item.name)+"\n  ")]),t._v(" "),e(v.a,[e(_.a,{attrs:{cols:"12",sm:"6",order:"3","order-sm":"2"}},[e(n.a,[e(o.b,[t._v("\n          "+t._s(t.item.name)+"\n        ")]),t._v(" "),e(o.a,[e("div",{staticClass:"text--primary text-body-1",domProps:{innerHTML:t._s(t.item.content)}})]),t._v(" "),e(d.a),t._v(" "),t.item.performer?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Месца паходжання")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.location[0])+"\n          ")])]):t._e(),t._v(" "),t.item.band.length?e(o.a,[e("div",{staticClass:"text--secondary"},[t._v("\n            Гурт\n          ")]),t._v(" "),t._l(t.item.band,(function(r){return e("div",{key:r,staticClass:"text--primary"},[t._v("\n            "+t._s(r)+"\n          ")])}))],2):t._e(),t._v(" "),t.item.performer?e(o.a,[e("div",{staticClass:"text--secondary"},[t._v("\n            Выканаўцы\n          ")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.performer)+"\n          ")])]):t._e(),t._v(" "),t.item.record_author?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Аўтары запісу")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.record_author)+"\n          ")])]):t._e(),t._v(" "),t.item.record_date?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Дата запісу (пры адсутнасці - год першага релізу)")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.record_date)+"\n          ")])]):t._e(),t._v(" "),t.item.albums?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Альбомы, дзе публікаваўся запіс")]),t._v(" "),t._l(t.item.albums,(function(r){return e("div",{key:r,staticClass:"text--primary"},[t._v("\n            "+t._s(r)+"\n          ")])}))],2):t._e(),t._v(" "),t.item.albums?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Жанры / тэгі")]),t._v(" "),t._l(t.item.tags,(function(r,n){return e(c.a,{key:n,staticClass:"ma-1",attrs:{small:""}},[t._v("\n            "+t._s(r)+"\n          ")])}))],2):t._e()],1)],1),t._v(" "),e(_.a,{attrs:{cols:"12",order:"2","order-sm":"1"}},[t.item.audio_url&&t.$store.state.user?e("div",{staticClass:"audio-player mt-4",attrs:{height:t.embedHeight},domProps:{innerHTML:t._s(t.embedCode)}}):t._e()]),t._v(" "),e(_.a,{attrs:{cols:"12",sm:"6",order:"1","order-sm":"3"}},[t.item.thumbnail_url?e(l.a,{attrs:{src:t.item.thumbnail_url,"aspect-ratio":"1"}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);