"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[192],{761:function(n,e,t){t.d(e,{IT:function(){return h},Lo:function(){return p},S$:function(){return l},ei:function(){return g},ov:function(){return m}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),o="81f57ce8a5863d84fdab7c29ba0c37c2",s="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/trending/movie/day?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&include_adult=false"),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5192:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(1413),a=t(5861),c=t(885),u=t(7757),i=t.n(u),o=t(2791),s=t(6871),p=t(761),f="ReviewsComponent_author__tpMJq",l="ReviewsComponent_content__2oI5o",d=t(184),h=function(n){var e=n.items.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("p",{className:f,children:["Author: ",t]}),(0,d.jsxs)("p",{className:l,children:[" ",r]})]},e)}));return(0,d.jsx)("ul",{children:e})},v="MovieInfoReviews_no_reviews_message__n8hcf",m=function(){var n=(0,o.useState)({items:[],loading:!1,error:null}),e=(0,c.Z)(n,2),t=e[0],u=e[1],f=(0,s.UO)().id;(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,p.ei)(f);case 4:e=n.sent,console.log(e),u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{items:e.results})})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{error:n.t0})}));case 12:return n.prev=12,u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{loading:!1})})),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[u,f]);var l=t.items,m=l.length>0?(0,d.jsx)(h,{items:l}):(0,d.jsx)("p",{className:v,children:"We don`t have any reviews for this movie :("});return(0,d.jsx)("div",{className:"container",children:m})}}}]);
//# sourceMappingURL=192.0ae2356d.chunk.js.map