(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{112:function(e,t,r){},113:function(e,t,r){},181:function(e,t,r){},182:function(e,t,r){},188:function(e,t,r){},189:function(e,t,r){},191:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(24),s=r.n(i),c=r(20),o=r.n(c),u=r(32),d=r(55),l=r(56),v=r(105),h=r(102),f=r(198),p=r(196),g=r(199),m=r(197),b=r(200),j=r(6),x=function(e){var t=e.errorTitle;return Object(j.jsx)(b.a,{message:"Error",description:t,type:"error",showIcon:!0})};x.defaultProps={errorTitle:""};var S=x,O=r(201),y=r(103),k=(r(112),function(e){var t=e.getGenres,r=e.id,n=Object(a.useState)(null),i=Object(y.a)(n,2),s=i[0],c=i[1],d=function(){var e=Object(u.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return a=e.sent,e.next=5,a.filter((function(e){return e.id===r}))[0];case 5:n=e.sent,c(n.name);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()})),Object(j.jsx)("li",{className:"movieGenres-genre",children:s})});k.defaultProps={id:0,getGenres:function(){}};var w=k,_=n.a.createContext(),M=_.Provider,N=_.Consumer,I=(r(113),function(e){var t=e.movieImgSrc,r=e.movieName,a=e.releaseDate,n=e.description,i=e.average,s=e.genresId,c=e.rating,o=e.id,u="movie-average";return i>=0&&i<=3?u+=" movie-average__border-rad":i>3&&i<=5?u+=" movie-average__border-orange":i>5&&i<=7?u+=" movie-average__border-yellow":i>7&&(u+=" movie-average__border-green"),Object(j.jsx)(N,{children:function(e){var d=e.getGenres,l=e.rateMovie;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{alt:"movieBanner",src:t})}),Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsxs)("div",{className:"movie-title",children:[Object(j.jsx)("h2",{children:r}),Object(j.jsx)("div",{className:u,children:Object(j.jsx)("p",{children:i})})]}),Object(j.jsx)("p",{className:"movie-releaseDate",children:a}),Object(j.jsx)("ul",{className:"movieGenres",children:s.map((function(e){return Object(j.jsx)(w,{centered:!0,getGenres:d,id:e,className:"movieGenres-genre",children:"Action"},e)}))}),Object(j.jsx)("p",{className:"movie-description",children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"movie-description movie-description__mobile",children:n})}),Object(j.jsx)("div",{className:"movie-rate",children:Object(j.jsx)(O.a,{allowHalf:!0,count:10,defaultValue:c,style:{fontSize:17,marginBottom:10},onChange:function(e){return l(String(o),e)}})})]})]})}})});I.defaultProps={id:0,rating:0,average:0,genresId:[],movieName:"",movieImgSrc:"",releaseDate:"",description:""};var T=I,E=(r(181),function(e){var t=e.moviesData;return Object(j.jsx)("section",{className:"main",children:Object(j.jsx)("div",{className:"row",children:t.map((function(e){var t=e.id,r=e.movieImgSrc,a=e.movieName,n=e.releaseDate,i=e.description,s=e.average,c=e.genresId,o=e.rating;return Object(j.jsx)(T,{id:t,rating:o,average:s,genresId:c,movieName:a,movieImgSrc:r,releaseDate:n,description:i},t)}))})})});E.defaultProps={moviesData:[]};var D=E,L=r(195),P=(r(182),function(){return Object(j.jsx)("div",{className:"spinner",children:Object(j.jsx)(L.a,{size:"large"})})}),C=r(97),R=(r(188),function(e){var t=e.updateSearchString;return Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"stringRequest",type:"text",placeholder:"Type to search...",onChange:Object(C.debounce)((function(e){var r;(r=e.target.value)&&t(r)}),1e3),autoFocus:!0})})});R.defaultProps={updateSearchString:function(){}};var G=R,z=function(){function e(){Object(d.a)(this,e)}return Object(l.a)(e,[{key:"getResources",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie?api_key=e3fe247be4eaa72ef7d3bce48bf58608",e.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie?api_key=e3fe247be4eaa72ef7d3bce48bf58608").concat(t));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,r.json();case 8:if(0!==(a=e.sent).results.length){e.next=11;break}throw new Error;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list?api_key=e3fe247be4eaa72ef7d3bce48bf58608",e.next=3,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e3fe247be4eaa72ef7d3bce48bf58608");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",r.genres);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"\u0441reateGuestSession",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("sessionId")){e.next=12;break}return"https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e3fe247be4eaa72ef7d3bce48bf58608",e.next=5,fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e3fe247be4eaa72ef7d3bce48bf58608");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error;case 8:return e.next=10,t.json();case 10:r=e.sent,localStorage.setItem("sessionId",r.guest_session_id);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getGuestSession",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("sessionId"),e.next=3,fetch("https://api.themoviedb.org/3/guest_session/".concat(r,"/rated/movies?api_key=e3fe247be4eaa72ef7d3bce48bf58608").concat(t));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,a.json();case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"rateMovie",value:function(e,t){var r=localStorage.getItem("sessionId");fetch("https://api.themoviedb.org/3/movie/".concat(e,"/rating?api_key=e3fe247be4eaa72ef7d3bce48bf58608&guest_session_id=").concat(r),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({value:t})})}}]),e}(),A=(r(189),r.p+"static/media/no_image.f55aafa2.jpg"),q=function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).mdbapiServices=new z,e.state={ratedPage:1,searchPage:1,searchString:"",ratedTotal:null,searchTotal:null,ratedError:!1,searchError:!1,ratedLoading:!1,searchLoading:!1,errorTitle:"We did not find any movies for this request."},e.createMovieCard=function(e,t,r,a,n,i,s){var c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;return{id:e,movieImgSrc:t,movieName:r,releaseDate:a,description:n,average:i,genresId:s,rating:c}},e.createSearchMovieList=function(t,r){var a=r?t.slice(10):t.slice(0,10);a=a.map((function(t){return e.createMovieCard(t.id,e.getImgSrc(t.poster_path),t.original_title,e.formatDate(t.release_date),e.formatMovieDescription(t.overview),t.vote_average,t.genre_ids)})),e.setState({searchMoviesData:a,searchLoading:!1,searchError:!1})},e.createRatedMovieList=function(t,r){var a=r?t.slice(10):t.slice(0,10);a=a.map((function(t){return e.createMovieCard(t.id,e.getImgSrc(t.poster_path),t.original_title,e.formatDate(t.release_date),e.formatMovieDescription(t.overview),t.vote_average,t.genre_ids,t.rating)})),e.setState({ratedMoviesData:a,ratedLoading:!1,ratedError:!1})},e.updateSearchString=function(t){var r=e.state.searchPage;e.setState({searchString:t}),e.updateSearchMovieList(t,r)},e.updateSearchPage=function(t){var r=e.state.searchString;e.updateSearchMovieList(r,t)},e.updateRatedPage=function(t){e.setState({ratedPage:t}),e.updateRatedMovieList(t)},e.getImgSrc=function(e){return e?"https://image.tmdb.org/t/p/w200/".concat(e):A},e.onSearchError=function(t){"Failed to fetch"===t.message?e.setState({errorTitle:"Check your internet connection!"}):e.setState({errorTitle:"We did not find any movies for this request."}),e.setState({searchError:!0,searchTotal:null,searchLoading:!1})},e.onRatedError=function(t){"Failed to fetch"===t.message?e.setState({errorTitle:"Check your internet connection!"}):e.setState({errorTitle:"We have had some server trouble, and the films you have rated failed to display. Try your luck later."}),e.setState({ratedError:!0,ratedTotal:null,ratedLoading:!1})},e.callback=function(t){var r=e.state.ratedPage;"2"===t&&e.updateRatedMovieList(r)},e.updateSearchMovieList=function(){var t=Object(u.a)(o.a.mark((function t(r,a){var n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({searchError:!1,searchLoading:!0}),t.prev=1,n=a%2===0?a/2:(a+1)/2,t.next=5,e.mdbapiServices.getResources("&page=".concat(n,"&query=").concat(r));case 5:i=t.sent,e.createSearchMovieList(i.results,a%2===0),e.setState({searchTotal:i.total_results}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.onSearchError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}(),e.updateRatedMovieList=function(){var t=Object(u.a)(o.a.mark((function t(r){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({ratedError:!1,ratedLoading:!0}),t.prev=1,a=r%2===0?r/2:(r+1)/2,t.next=5,e.mdbapiServices.getGuestSession("&page=".concat(a));case 5:n=t.sent,e.createRatedMovieList(n.results,r%2===0),e.setState({ratedTotal:n.total_results}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.onRatedError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.mdbapiServices.\u0441reateGuestSession()}},{key:"formatMovieDescription",value:function(e){var t=e.split(" ");return t.length>15?"".concat(t.slice(0,15).join(" "),"..."):t.join(" ")}},{key:"formatDate",value:function(e){return e?Object(f.a)(Object(p.a)(e),"MMMM d, yyyy"):"NA"}},{key:"render",value:function(){var e=this.state,t=e.ratedPage,r=e.errorTitle,a=e.searchPage,n=e.ratedTotal,i=e.ratedError,s=e.searchError,c=e.searchTotal,o=e.ratedLoading,u=e.searchLoading,d=e.ratedMoviesData,l=e.searchMoviesData,v=g.a.TabPane,h=!(o||i),f=!(u||s),p=o?Object(j.jsx)(P,{}):null,b=u?Object(j.jsx)(P,{}):null,x=s?Object(j.jsx)(S,{errorTitle:r}):null,O=i?Object(j.jsx)(S,{errorTitle:r}):null,y=h?Object(j.jsx)(D,{moviesData:d}):null,k=f?Object(j.jsx)(D,{moviesData:l}):null,w=c?Object(j.jsx)(m.a,{showSizeChanger:!1,defaultCurrent:a,pageSize:10,total:c,onChange:this.updateSearchPage}):null,_=n?Object(j.jsx)(m.a,{showSizeChanger:!1,defaultCurrent:t,pageSize:10,total:n,onChange:this.updateRatedPage}):null;return Object(j.jsx)("section",{className:"movieApp",children:Object(j.jsx)(M,{value:this.mdbapiServices,children:Object(j.jsxs)(g.a,{centered:!0,defaultActiveKey:"1",onChange:this.callback,children:[Object(j.jsxs)(v,{tab:"Search",children:[Object(j.jsx)(G,{updateSearchString:this.updateSearchString}),b,k,x,Object(j.jsx)("div",{className:"paginator",children:w})]},"1"),Object(j.jsxs)(v,{tab:"Rated",children:[p,y,O,Object(j.jsx)("div",{className:"paginator",children:_})]},"2")]})})})}}]),r}(a.Component);r(190);s.a.render(Object(j.jsx)(q,{}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.df3df008.chunk.js.map