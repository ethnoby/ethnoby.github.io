(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12],{685:function(t,e,n){"use strict";n.r(e);var r=n(536),l=n(507),c=n(628),o=n(648),f=n(179),h=n(627),x={name:"CategoryGrid",props:{cards:{type:Array,default:function(){return[]}},title:{type:String,default:""}}},d=n(96),component=Object(d.a)(x,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{fluid:""}},[e(h.a,[e(c.a,{attrs:{cols:"12"}},[e("div",[e("h1",[t._v(t._s(t.title))])])])],1),t._v(" "),e(h.a,t._l(t.cards,(function(n){return e(c.a,{key:n.title,attrs:{cols:n.flex,lg:n.lg}},[e(r.a,[e("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:n.toLink}},[e(f.a,{staticClass:"align-end",attrs:{src:n.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"100%",cover:""}},[e(l.b,{staticClass:"white--text subtitle-1"},[e("div",[t._v("\n                "+t._s(n.title)+"\n              ")])])],1),t._v(" "),n.text?e(l.a,{staticClass:"text-body-2 fill-height text-no-wrap"},[t._v("\n            "+t._s(n.text)+"\n          ")]):t._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},712:function(t,e,n){t.exports=n.p+"img/yurya.192f63d.png"},782:function(t,e,n){t.exports=n.p+"img/gukanne.36f4464.png"},783:function(t,e,n){t.exports=n.p+"img/vyalikden.973acdd.png"},784:function(t,e,n){t.exports=n.p+"img/vyaselle.9816ca8.png"},785:function(t,e,n){t.exports=n.p+"img/pazaabrad.877f429.png"},786:function(t,e,n){t.exports=n.p+"img/zhart.d14acbf.png"},787:function(t,e,n){t.exports=n.p+"img/kalyna_malyna.329d9bc.png"},788:function(t,e,n){t.exports=n.p+"img/lirica.96f75a2.png"},789:function(t,e,n){t.exports=n.p+"img/sirota.aaeeedb.png"},790:function(t,e,n){t.exports=n.p+"img/zhitkavitski.91746bb.png"},791:function(t,e,n){t.exports=n.p+"img/lelchistki.d36fa22.png"},792:function(t,e,n){t.exports=n.p+"img/pinski.05c42a2.png"},793:function(t,e,n){t.exports=n.p+"img/smargon.8c42897.png"},794:function(t,e,n){t.exports=n.p+"img/garadotski.ed574f8.png"},795:function(t,e,n){t.exports=n.p+"img/krasnapolski.ad4691d.png"},816:function(t,e,n){"use strict";n.r(e);var r=n(648),l={components:n(685).default,data:function(){return{cards:[{title:"Гуканне Вясны",src:n(782),flex:6,lg:3,toLink:{path:"/search",query:{tag:["песні гукальныя","гуканне вясны","загуканні"]}}},{title:"Вялікдзень",src:n(783),flex:6,lg:3,toLink:{path:"/search",query:{tag:["вялікдзень","валачобнікі"]}}},{title:"Юр'я",src:n(712),flex:6,lg:3,toLink:{path:"/search",query:{tag:["Юр'я"]}}},{title:"Купалле",src:n(712),flex:6,lg:3,toLink:{path:"/search",query:{tag:["купалле"]}}},{title:"Вяселле",src:n(784),lg:6,toLink:{path:"/search",query:{tag:["песні вясельныя"]}},height:"400px"},{title:"Пазаабрадавыя песні",src:n(785),lg:6,toLink:{path:"/search",query:{tag:["песні пазаабрадавыя"]}},height:"400px"},{title:"Жартоўныя",src:n(786),flex:6,lg:3,toLink:{path:"/search",query:{tag:["песні жартоўныя"]}},tags:["песні жартоўныя"]},{title:"Калына-малына",src:n(787),flex:6,lg:3,toLink:{path:"/search",query:{tag:["playlist_kalyna-malyna"]}},tags:["playlist_kalyna-malyna"]},{title:"Лірычныя",src:n(788),flex:6,lg:3,toLink:{path:"/search",query:{tag:["песні лірычныя"]}},tags:["песні лірычныя"]},{title:"Сіроцкія",src:n(789),flex:6,lg:3,toLink:{path:"/search",query:{tag:["песні лірычныя"]}},tags:["песні сіроцкія"]}],locationTitle:"Выбраныя лакацыі",locationCards:[{title:"",src:n(790),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Жыткавіцкі раён"}},text:"Жыткавіцкі раён"},{title:"",src:n(791),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Лельчыцкі раён"}},text:"Лельчыцкі раён"},{title:"",src:n(792),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Пінскі раён"}},text:"Пінскі раён"},{title:"",src:n(793),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Смаргонскі раён"}},text:"Смаргонскі раён"},{title:"",src:n(794),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Гарадоцкі раён"}},text:"Гарадоцкі раён"},{title:"",src:n(795),flex:6,lg:3,toLink:{path:"/search",query:{loc:"Краснапольскі раён"}},text:"Краснапольскі раён"}]}}},c=n(96),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{fluid:""}},[e("category-grid",{attrs:{cards:t.cards}}),t._v(" "),e("category-grid",{attrs:{title:t.locationTitle,cards:t.locationCards}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryGrid:n(685).default})}}]);