(window.webpackJsonp=window.webpackJsonp||[]).push([[22,13],{535:function(t,e){},554:function(t,e,r){"use strict";r.r(e);var n=r(576),o=new n.Client({nodes:[{host:"en4xjabqzl9v0pr1p-1.a1.typesense.net",port:"443",protocol:"https"}],apiKey:"wPjUc5C5JzICtlt24yd50hcurSyNsEnA",connectionTimeoutSeconds:2});e.default=o},618:function(t,e,r){"use strict";r.r(e);var n=r(526),o=r(523),c=(r(5),r(47),r(72),{name:"LocationCard",props:{item:Object},computed:{checkGeoArray:function(){var t=this;return null!==this.item.geo&&![0,0].every((function(e){return t.item.geo.includes(e)}))}}}),l=r(82),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.item.location?e(n.a,[t.item.location?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Месца паходжання")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n      "+t._s(t.item.location[0])+"\n    ")])]):t._e(),t._v(" "),t.checkGeoArray?e("div",{staticStyle:{height:"300px"},attrs:{id:"map-wrap"}},[e("client-only",[e("l-map",{attrs:{zoom:6,center:t.item.geo}},[e("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:"&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"}}),t._v(" "),e("l-marker",{attrs:{"lat-lng":t.item.geo}})],1)],1)],1):t._e()],1):t._e()}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,r){var content=r(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("0cc1cf12",content,!0,{sourceMap:!1})},779:function(t,e,r){"use strict";r(659)},780:function(t,e,r){var n=r(22)(!1);n.push([t.i,".cursor-pointer[data-v-1f70459f]{cursor:pointer}.link-pointer[data-v-1f70459f]{padding:1px;display:inline-block}",""]),t.exports=n},818:function(t,e,r){"use strict";r.r(e);var n=r(526),o=r(523),c=r(545),l=r(520),d=r(537),m=r(317),_=r(561),v=(r(34),r(19)),h=(r(62),r(313)),f=r(554),y={components:{LocationCard:r(618).default},asyncData:function(t){return Object(v.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.redirect,e.next=3,f.default.collections("songs").documents(r.id).retrieve();case 3:return e.t0=e.sent,e.abrupt("return",{item:e.t0});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{section:{slug:"songs",caption:"Песні"}}},head:function(){return{title:this.item.name}},computed:{embedCode:function(){return this.item.sc_track_id?'<iframe width="100%" height="'+this.embedHeight+'" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?maxheight='+this.embedHeight+"&color=%238d1802&visual=false&hide_related=true&inverse="+(this.$vuetify.theme.dark?"true":"false")+"&show_artwork=false&show_comments=false&show_reposts=false&show_teaser=false&show_user=true&auto_play=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F"+this.item.sc_track_id+(this.item.sc_secret_token?"&secret_token="+this.item.sc_secret_token:"")+'"></iframe>':this.item.audio_embed},videoId:function(){return Object(h.b)(this.item.video_url)},embedHeight:function(){return this.isMobile,120},isMobile:function(){return this.$vuetify.breakpoint.mobile}}},x=(r(779),r(82)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e(d.a,[e("h1",{staticClass:"text-h4 text-lg-h2 mb-2"},[t._v("\n    "+t._s(t.item.name)+"\n  ")]),t._v(" "),e(_.a,[e(l.a,{attrs:{cols:"12",sm:"6",order:"3","order-sm":"2"}},[e(n.a,[e(o.a,[e("div",{staticClass:"text--primary text-body-1",domProps:{innerHTML:t._s(t.item.content)}})])],1),t._v(" "),e(n.a,{staticClass:"mt-4 mb-4"},[e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Жанры / тэгі")]),t._v(" "),t._l(t.item.tags,(function(r,n){return e("nuxt-link",{key:n,attrs:{to:{path:"/search",query:{tags:[r]}}}},[e(c.a,{staticClass:"ma-1 cursor-pointer",attrs:{small:""}},[t._v("\n              "+t._s(r)+"\n            ")])],1)}))],2),t._v(" "),t.item.band.length?e(o.a,[e("div",{staticClass:"text--secondary"},[t._v("\n            Калектывы\n          ")]),t._v(" "),t._l(t.item.band,(function(r){return e("div",{key:r,staticClass:"text--primary"},[t._v("\n            "+t._s(r)+"\n          ")])}))],2):t._e(),t._v(" "),t.item.performer?e(o.a,[e("div",{staticClass:"text--secondary"},[t._v("\n            Выканаўцы\n          ")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.performer)+"\n          ")])]):t._e(),t._v(" "),t.item.record_author?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Аўтары запісу")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.record_author)+"\n          ")])]):t._e(),t._v(" "),t.item.record_date?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Год запісу ці першага релізу")]),t._v(" "),e("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(t.item.record_date)+"\n          ")])]):t._e(),t._v(" "),t.item.albums?e(o.a,{staticClass:"text--secondary"},[e("div",[t._v("Альбомы, дзе публікаваўся запіс")]),t._v(" "),t._l(t.item.albums,(function(r){return e("div",{key:r,staticClass:"text--primary"},[t._v("\n            "+t._s(r)+"\n          ")])}))],2):t._e()],1),t._v(" "),t.item.location&&t.isMobile?e("location-card",{attrs:{item:t.item}}):t._e()],1),t._v(" "),e(l.a,{attrs:{cols:"12",order:"2","order-sm":"1"}},[t.item.audio_url&&t.$store.state.user?e("div",{staticClass:"audio-player",attrs:{height:t.embedHeight},domProps:{innerHTML:t._s(t.embedCode)}}):t._e(),t._v(" "),t.item.video_url&&t.$store.state.user?e("div",{staticClass:"mt-4"},[e("youtube",{attrs:{"video-id":t.videoId,"player-width":"100%"}})],1):t._e()]),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",order:"1","order-sm":"3"}},[t.item.thumbnail_url?e(n.a,{staticClass:"mb-4"},[e(m.a,{attrs:{src:t.item.thumbnail_url,"aspect-ratio":"1"}})],1):t._e(),t._v(" "),t.item.location&&!t.isMobile?e("location-card",{attrs:{item:t.item}}):t._e()],1)],1)],1)}),[],!1,null,"1f70459f",null);e.default=component.exports;installComponents(component,{LocationCard:r(618).default})}}]);