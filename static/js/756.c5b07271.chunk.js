"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{761:function(n,t,e){e.d(t,{IT:function(){return h},Lo:function(){return l},S$:function(){return p},ov:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="81f57ce8a5863d84fdab7c29ba0c37c2",s="https://api.themoviedb.org/3";function l(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/trending/movie/day?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US&include_adult=false"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&include_adult=false"),n.next=3,i().get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},756:function(n,t,e){e.r(t);var r=e(2982),a=e(1413),c=e(5861),u=e(885),i=e(7757),o=e.n(i),s=e(2791),l=e(6871),f=e(501),p=e(761),d=e(184);t.default=function(){var n,t=(0,s.useState)({items:[],loading:!1,error:null}),e=(0,u.Z)(t,2),i=e[0],h=e[1],v=(0,l.UO)().id,m=(0,l.s0)(),x=(null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)||"/movies";(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,p.S$)(v);case 4:t=n.sent,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{items:[].concat((0,r.Z)(n.items),[t])})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:n.t0})}));case 11:return n.prev=11,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);var y=i.items;return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("button",{onClick:function(){return m(x)},children:"Go back"}),(0,d.jsx)("ul",{children:y.map((function(n){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title}),(0,d.jsx)("h2",{children:n.title}),(0,d.jsxs)("p",{children:["User score: ",n.vote_average]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:n.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsxs)("p",{children:[" ",n.genres.map((function(n){return n.name}))]})]},v)}))}),(0,d.jsx)(f.rU,{state:{from:x},to:"/movies/".concat(v,"/cast"),children:"Cast"}),(0,d.jsx)(l.j3,{})]})}},2982:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(907);var a=e(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=756.c5b07271.chunk.js.map