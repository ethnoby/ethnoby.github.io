(window.webpackJsonp=window.webpackJsonp||[]).push([[27,13,17],{504:function(t,n,e){"use strict";e.r(n);var o=e(523),r=e(481),c=e(563),l=e(608),d=e(607),f=e(562),v=e(205),_=(e(28),{name:"SongList",props:{songList:Array}}),m=e(95),component=Object(m.a)(_,(function(){var t=this,n=t._self._c;return n(o.a,[n("h1",[t._v("Песні: "+t._s(t.songList.length))]),t._v(" "),n(v.a,[t._l(t.songList,(function(e,i){return[n("div",{key:i+e.id},[n(f.a,[e.content?n(c.a,{attrs:{flat:"",accordion:""}},[n(d.a,[n("div",{staticClass:"text-left"},[n("div",{staticClass:"d-flex text-left",on:{click:function(t){t.stopPropagation()}}},[n("nuxt-link",{staticClass:"text--secondary",attrs:{to:"/songs/".concat(e.id,"/")}},[n("span",{staticClass:"text-center text-body-1 text--primary"},[t._v(t._s(e.name))])])],1),t._v(" "),n("div",{staticClass:"text-left mt-1 text-body-2"},[n("span",{staticClass:"text--secondary"},[t._v("\n                    "+t._s(e.location?e.location[0]:e.document.location[0])+"\n                  ")])])])]),t._v(" "),n(l.a,[n("div",{staticClass:"text--primary",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),e.performer?n("div",{staticClass:"caption text-left"},[n("strong",{staticClass:"text--secondary"},[t._v("Выканаўцы:")]),t._v(" "),n("span",[t._v(t._s(e.performer))])]):t._e()])],1):t._e()],1),t._v(" "),n(r.a,{attrs:{thickness:2,color:"grey"}})],1),t._v(" "),n(r.a,{key:100+i})]}))],2)],1)}),[],!1,null,null,null);n.default=component.exports},508:function(t,n){},510:function(t,n,e){"use strict";e.r(n);var o=e(524),r=new o.Client({nodes:[{host:"en4xjabqzl9v0pr1p-1.a1.typesense.net",port:"443",protocol:"https"}],apiKey:"wPjUc5C5JzICtlt24yd50hcurSyNsEnA",connectionTimeoutSeconds:2});n.default=r},766:function(t,n,e){"use strict";e.r(n);var o=e(523),r=e(19),c=(e(62),e(27),e(68),e(510)),l={name:"IndexPage",components:{songList:e(504).default},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.default.collections("songs").documents().export({include_fields:"name, id, location, content, performer"}).then((function(t){return JSON.parse("[".concat(t,"]").replace(/\n/g,","))}));case 2:return t.t0=t.sent,t.abrupt("return",{itemsJSON:t.t0});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{model:0,items:[],jsonl:"",count:67}},computed:{}},d=e(95),component=Object(d.a)(l,(function(){var t=this._self._c;return t(o.a,{attrs:{fluid:""}},[t("song-list",{attrs:{"song-list":this.itemsJSON}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SongList:e(504).default})}}]);