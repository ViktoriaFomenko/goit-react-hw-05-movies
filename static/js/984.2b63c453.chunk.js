"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[984],{761:function(e,t,n){n.d(t,{IT:function(){return v},Lo:function(){return p},S$:function(){return f},ei:function(){return x},ov:function(){return h}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),o="81f57ce8a5863d84fdab7c29ba0c37c2",s="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"/trending/movie/day?api_key=").concat(o,"&language=en-US&include_adult=false"),e.next=3,i().get(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&include_adult=false"),e.next=3,i().get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5984:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(1413),a=n(5861),u=n(885),c=n(7757),i=n.n(c),o=n(2791),s=n(501),p=n(4942),l=n(3313),f=n(184),d=function(e){var t=e.onSubmit,n=(0,o.useState)({query:""}),a=(0,u.Z)(n,2),c=a[0],i=a[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,r.Z)({},c)),i({query:""})},children:[(0,f.jsx)("input",{name:"query",value:c.query,onChange:function(e){var t=e.target,n=t.name,a=t.value;i((0,r.Z)((0,r.Z)({},c),{},(0,p.Z)({},n,a)))},placeholder:"Search movie",required:!0}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)(l.jRj,{size:"12px"})})]})},v=n(761),m=n(1510),h=n(7656),g=function(){var e=(0,o.useState)({items:[],loading:!1,error:null}),t=(0,u.Z)(e,2),n=t[0],c=t[1],p=(0,s.lr)(),l=(0,u.Z)(p,2),g=l[0],x=l[1],y=g.get("query");(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,(0,v.IT)(y);case 4:t=e.sent,c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:t.results})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c((function(t){return(0,r.Z)((0,r.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();y&&e()}),[y]);var _=n.items,Z=n.loading,b=n.error;return(0,f.jsxs)("div",{children:[(0,f.jsx)(d,{onSubmit:function(e){var t=e.query;x({query:t})}}),_.length>0&&(0,f.jsx)(m.e,{items:_}),Z&&(0,f.jsx)(h.a,{}),b&&(0,f.jsx)("p",{children:"...Movies load failed"})]})}},1510:function(e,t,n){n.d(t,{e:function(){return p}});var r=n(501),a=n(6871),u=n(3014),c="MovieList_movie_list__IWl2j",i="MovieList_movie_item__Q205J",o="MovieList_movie__gYq3N",s=n(184),p=function(e){var t=e.items,n=(0,a.TH)(),p=t.map((function(e){var t=e.id,a=e.title,c=e.poster_path;return(0,s.jsx)("li",{className:i,children:(0,s.jsxs)(r.rU,{state:{from:n},to:"/movies/".concat(t),className:o,children:[(0,s.jsx)("img",{width:"200px",src:c?"https://image.tmdb.org/t/p/w500".concat(c):u,alt:a}),(0,s.jsx)("p",{children:a})]})},t)}));return(0,s.jsx)("ul",{className:c,children:p})};p.defaultProps={items:[]}},3014:function(e,t,n){e.exports=n.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=984.2b63c453.chunk.js.map