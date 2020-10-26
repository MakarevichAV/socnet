/*! For license information please see 6.3f73255b.chunk.js.LICENSE.txt */
(this["webpackJsonpbig-app"]=this["webpackJsonpbig-app"]||[]).push([[6],{232:function(e,n,t){e.exports=t.p+"static/media/user-photo.a9c3f113.jpg"},237:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var s=r.apply(null,a);s&&e.push(s)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},300:function(e,n,t){e.exports={userPage:"UsersPage_userPage__2crvl"}},301:function(e,n,t){e.exports={pagination:"Pagination_pagination__3xruL",paginationItem:"Pagination_paginationItem__DM4mH",selected:"Pagination_selected__2HXPn"}},302:function(e,n,t){e.exports={user:"UserCard_user__3_kQe",leftSide:"UserCard_leftSide__16g2U",photo:"UserCard_photo__2-8Xa",btn:"UserCard_btn__caGy1",unfollow:"UserCard_unfollow__q6Nyk",follow:"UserCard_follow__1Jda0",disabled:"UserCard_disabled__2bfFE",rightSide:"UserCard_rightSide__2V7ES",names:"UserCard_names__3Wol8",nick:"UserCard_nick__APgtf",name:"UserCard_name__34UFQ",status:"UserCard_status__3mJXk",country:"UserCard_country__15kvP",city:"UserCard_city__12xmq"}},314:function(e,n,t){"use strict";t.r(n);var a=t(31),r=t(32),o=t(34),s=t(33),l=t(0),i=t.n(l),c=t(21),u=t(80),g=t(300),p=t.n(g),f=t(301),d=t.n(f),m=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),t=[],a=1;a<=n;a++)(a<=11&&e.currentPage<=6||e.currentPage-a<=5&&a-e.currentPage<=5)&&t.push(a);var r=t.map((function(n){return i.a.createElement("span",{key:n,className:"".concat(e.currentPage===n&&d.a.selected," ").concat(d.a.paginationItem),onClick:function(){return e.onPageChanged(n)}},n)}));return i.a.createElement("div",{className:d.a.pagination},t[0]>=2?i.a.createElement("span",{className:d.a.paginationItem,onClick:function(){return e.onPageChanged(1)}},"..."):null,r,t[r.length-1]<=n-1?i.a.createElement("span",{className:d.a.paginationItem,onClick:function(){return e.onPageChanged(n)}},"..."):null)},h=t(57),P=t(302),_=t.n(P),w=t(237),C=t.n(w),v=t(232),y=t.n(v),U=t(17),b=(t(9),function(e){var n=e.user,t=e.unfollow,a=e.follow,r=(e.toggleFollowingProcess,e.followingInProcess),o=C()(_.a.btn,Object(h.a)({},_.a.follow,!n.followed),Object(h.a)({},_.a.unfollow,n.followed),Object(h.a)({},_.a.disabled,r.some((function(e){return e===n.id})))),s=null!=n.photos.small?n.photos.small:y.a;return i.a.createElement("div",{key:n.id,className:_.a.user},i.a.createElement("div",{className:_.a.leftSide},i.a.createElement(U.b,{to:"/profile/"+n.id},i.a.createElement("div",{className:_.a.photo,style:{backgroundImage:"url(".concat(s,")")}})),i.a.createElement("button",{className:o,disabled:r.some((function(e){return e===n.id})),onClick:n.followed?function(){t(n.id)}:function(){a(n.id)}},n.followed?"UNFOLLOW":"FOLLOW")),i.a.createElement("div",{className:_.a.rightSide},i.a.createElement("div",{className:_.a.names},i.a.createElement(U.b,{to:"/profile/"+n.id},i.a.createElement("p",{className:_.a.nick},"NickName")),i.a.createElement("p",{className:_.a.name},n.name),i.a.createElement("p",{className:_.a.status},"\u041c\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0441\u0442, \u043a\u0430\u043a \u043a\u0440\u0430\u0442\u043a\u0438\u0439 \u0442\u043e\u0441\u0442")),i.a.createElement("div",{className:_.a.location},i.a.createElement("p",{className:_.a.country},"Israel"),i.a.createElement("p",{className:_.a.city},"Tel Aviv"))))}),E=function(e){var n=e.users.map((function(n){return i.a.createElement(b,{key:n.id,user:n,unfollow:e.unfollow,follow:e.follow,toggleFollowingProcess:e.toggleFollowingProcess,followingInProcess:e.followingInProcess})}));return i.a.createElement("div",{className:"".concat(p.a.userPage," container")},i.a.createElement(m,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),n,i.a.createElement(m,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}))},N=t(62);function k(e,n){return e===n}function S(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var a=n.length,r=0;r<a;r++)if(!e(n[r],t[r]))return!1;return!0}function F(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}!function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a]}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,t=null,a=null;return function(){return S(n,t,arguments)||(a=e.apply(null,arguments)),t=arguments,a}}));var I=function(e){return e.usersPage.users},O=function(e){return e.usersPage.pageSize},j=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},x=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProcess},L=function(e){Object(o.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.setCurrentPage(n),e.props.getUsers(e.props.pageSize,n)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(N.a,null):null,i.a.createElement(E,{onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,toggleFollowingProcess:this.props.toggleFollowingProcess,followingInProcess:this.props.followingInProcess}))}}]),t}(i.a.Component);n.default=Object(c.b)((function(e){return{users:I(e),pageSize:O(e),totalUsersCount:j(e),currentPage:z(e),isFetching:x(e),followingInProcess:A(e)}}),{follow:u.b,unfollow:u.f,setCurrentPage:u.d,toggleFollowingProcess:u.e,getUsers:u.c})(L)}}]);
//# sourceMappingURL=6.3f73255b.chunk.js.map