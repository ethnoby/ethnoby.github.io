(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{523:function(t,e,n){"use strict";n.r(e);var r=n(575),o=new(n.n(r).a)({server:{apiKey:"gAnynGmCFQn0hN1nOaUqouW2YxEfd8u2",nodes:[{host:"en4xjabqzl9v0pr1p-1.a1.typesense.net",port:"443",protocol:"https"}],cacheSearchResultsForSeconds:120},additionalSearchParameters:{query_by:"name, content, performer, location, content_nohtml"}});e.default=o},540:function(t,e){},541:function(t,e,n){"use strict";n.r(e);var r=n(568),o=n(667),c=n(669),l=n(668),d=n(666),h=n(665),f=n(560),v=n(523),_={name:"SongListPagination",components:{AisInstantSearch:f.c,AisPagination:f.d,AisHits:f.b,AisHighlight:f.a},props:{songList:Array},data:function(){return{currentPage:1,collection:"songs",searchClient:v.default.searchClient}}},m=n(96),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":t.collection}},[e("ais-pagination",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.nbPages,o=n.nbHits,c=n.refine;return[o?e(h.a,{attrs:{length:r,"total-visible":7},on:{input:function(e){return c(t.currentPage-1)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()]}}])}),t._v(" "),e("ais-hits",{attrs:{"escape-h-t-m-l":!1},scopedSlots:t._u([{key:"default",fn:function(n){var h=n.items;return t._l(h,(function(n){return e("div",{key:n.objectID},[e(d.a,[n.content?e(o.a,{attrs:{flat:"",accordion:""}},[e(l.a,[e("div",{staticClass:"text-left"},[e("div",{staticClass:"d-flex text-left",on:{click:function(t){t.stopPropagation()}}},[e("nuxt-link",{staticClass:"text--secondary",attrs:{to:"/songs/".concat(n.id,"/")}},[e("ais-highlight",{staticClass:"text-center text-body-1 text--primary",attrs:{attribute:"name",hit:n}})],1)],1),t._v(" "),e("div",{staticClass:"text-left mt-1 text-body-2"},[e("span",{staticClass:"text--secondary"},[t._v("\n                    "+t._s(n.location?n.location[0]:n.document.location[0])+"\n                  ")])])])]),t._v(" "),e(c.a,[e("div",{staticClass:"text--primary",domProps:{innerHTML:t._s(n._highlightResult.content.value)}}),t._v(" "),n.performer?e("div",{staticClass:"caption text-left"},[e("strong",{staticClass:"text--secondary"},[t._v("Выканаўцы:")]),t._v(" "),e("ais-highlight",{attrs:{attribute:"performer",hit:n}})],1):t._e()])],1):t._e()],1),t._v(" "),e(r.a,{attrs:{thickness:2,color:"grey"}})],1)}))}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);