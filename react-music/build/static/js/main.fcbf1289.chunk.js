(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(18),a=n.n(r),l=(n(67),n(7)),c=n(4),s=(n(68),n(11)),u=n(6),d=n.n(u),p=n(14);function v(){return(v=Object(p.a)(d.a.mark((function e(t,n){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o="".concat("","/api/ytdl/download-video-ytdl-player2?videoUrl=").concat(encodeURIComponent("https://www.youtube.com/watch?v=".concat(t))),i=new Audio(o),n.me.src=o,i.crossOrigin="anonymous",n.me.muted=!0,console.log(i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(p.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/api/ytdl/download-video-ytdl-player3?videoId=").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({videoId:t})}).then((function(e){return e.text().then((function(e){console.log(e),n.me.src=e}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/api/ytdl/search-by-id"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({videoId:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(p.a)(d.a.mark((function e(t,n){var o,i=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.me.src=URL.createObjectURL(null===n||void 0===n?void 0:n.mediaSource),e.next=3,m(t);case 3:o=e.sent,console.log(o),fetch("".concat("","/api/ytdl/download-video-ytdl-player1"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({videoUrl:"https://www.youtube.com/watch?v="+t})}).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var r,a,l,c,s,u,p,v,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.body.getReader(),a=[],(l=n.mediaSource.addSourceBuffer(i.getMIMEType(o.ext,o.acodec))).mode="sequence";case 4:if(null===(s=c)||void 0===s?void 0:s.done){e.next=16;break}return e.next=7,r.read();case 7:if(c=e.sent,a.push(null===(u=c)||void 0===u||null===(p=u.value)||void 0===p?void 0:p.buffer),null!=l&&a.length>0&&!l.updating&&null!=a[0]&&null!=(null===(f=n.mediaSource)||void 0===f?void 0:f.sourceBuffers[0]))try{null===l||void 0===l||l.appendBuffer(a.shift())}catch(d){}if(!(null===(v=c)||void 0===v?void 0:v.done)){e.next=14;break}return console.log("Fetch Data Complete.."),l.addEventListener("updateend",(function(){l.updating||"open"!==n.mediaSource.readyState||(a.length>0&&!l.updating&&null!=a[0]?(console.log("Remaining chunks =>",a.length),console.log(a),console.log(l.updating),void 0!==l&&l.appendBuffer(a.shift())):null!=l&&(null==a[0]||a.length<=0)&&!l.updating&&(console.log("stream end"),n.mediaSource.endOfStream()))})),e.abrupt("break",16);case 14:e.next=4;break;case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={setPlayButton:function(e,t){switch(t){case"paused":e.pause();break;case"playing":e.play().then((function(){})).catch((function(e){}))}},getVideoInfo:m,getMIMEType:function(e,t){switch(e){case"webm":return"audio/".concat(e,";codecs=").concat(t);case"m4a":return"audio/mp4;codecs=".concat(t);default:return"audio/webm;codecs=opus"}},setSource:function(e,t){return j.apply(this,arguments)},setAudioSource:function(e,t){return v.apply(this,arguments)},setAudioUrl:function(e,t){return f.apply(this,arguments)},setPlayerApperance:function(e,t){switch(t){case"max":e.preventDefault(),document.getElementsByClassName("mini-player")[0].style.height="calc(500%)",document.getElementsByClassName("mini-player")[0].style.transform="translateY(calc(-300%))";break;case"min":e.preventDefault(),document.getElementsByClassName("playerContainer")[0].style.transform="translateY(calc(100%))"}},setNotificationLabel:function(e){"mediaSession"in navigator&&(console.log("media session works"),navigator.mediaSession.metadata=new window.MediaMetadata({title:e.trackTitle,artwork:[{src:null==e.albumArtUrl?"":e.albumArtUrl,sizes:"512x512",type:"image/png"}]}))}},g=n(1),y=i.a.createContext(null),O={me:document.createElement("audio"),mediaSource:new MediaSource,sourceBuffer:null,searchResult:null,relatedVideos:null,menuOpen:!1,snackbarMsg:!1,themeSelectValue:"Default",currentSongDetails:{},testProp:{},audioState:"paused",bufferState:"loading",playerState:null,relatedVideoSourceId:"",searchKey:"",previousTrack:{},nextTrack:{},nextTrackId:"",trendingSongs:null,pickedSongs:null},x=function(e,t){switch(t.type){case"setCurrentSong":return Object(l.a)(Object(l.a)({},e),{},{currentSongDetails:t.snippet});case"setRelatedVideos":return Object(l.a)(Object(l.a)({},e),{},{relatedVideos:t.snippet});case"setThemeSelectValue":return Object(l.a)(Object(l.a)({},e),{},{themeSelectValue:t.snippet});case"setAudioState":return h.setPlayButton(O.me,t.snippet),Object(l.a)(Object(l.a)({},e),{},{audioState:t.snippet});case"setBufferState":return Object(l.a)(Object(l.a)({},e),{},{bufferState:t.snippet});case"setPlayerState":return Object(l.a)(Object(l.a)({},e),{},{playerState:t.snippet});case"setRelatedVideoSourceId":return Object(l.a)(Object(l.a)({},e),{},{relatedVideoSourceId:t.snippet});case"setSearchKeyValue":return Object(l.a)(Object(l.a)({},e),{},{searchKey:t.snippet});case"setSearchResult":return Object(l.a)(Object(l.a)({},e),{},{searchResult:t.snippet});case"setNextSong":return Object(l.a)(Object(l.a)({},e),{},{nextTrack:t.snippet});case"setPreviousSong":return Object(l.a)(Object(l.a)({},e),{},{previousTrack:t.snippet});case"setNextTrackId":return Object(l.a)(Object(l.a)({},e),{},{nextTrackId:t.snippet});case"setTrendingSongs":return Object(l.a)(Object(l.a)({},e),{},{trendingSongs:t.snippet});case"setPickedSongs":return Object(l.a)(Object(l.a)({},e),{},{pickedSongs:t.snippet});case"setStore":return t.snippet;default:return e}},S=function(e){var t=Object(o.useReducer)(x,O);return Object(g.jsx)(y.Provider,{value:t,children:e.children})},k=(n(71),n(104));function I(){var e,t,n=Object(o.useContext)(y),i=Object(c.a)(n,2),r=i[0],a=i[1],l=Object(s.f)();function u(e){var t,n,o;e.preventDefault(),a({type:"setCurrentSong",snippet:{videoId:null===r||void 0===r||null===(t=r.currentSongDetails)||void 0===t?void 0:t.videoId,trackTitle:null===r||void 0===r||null===(n=r.currentSongDetails)||void 0===n?void 0:n.trackTitle,albumArtUrl:null===r||void 0===r||null===(o=r.currentSongDetails)||void 0===o?void 0:o.albumArtUrl}}),function(e){h.setPlayerApperance(e,"max"),setTimeout((function(){var e;a({type:"setPlayerState",snippet:"max"}),l.push("/player1/".concat(null===r||void 0===r||null===(e=r.currentSongDetails)||void 0===e?void 0:e.videoId))}),200)}(e)}return Object(o.useEffect)((function(){}),[r.currentSongDetails]),Object(g.jsxs)("div",{className:"mini-player",onClick:function(e){u(e)},children:[Object(g.jsx)("div",{class:"album-art image-box",children:Object(g.jsx)("img",{src:null===r||void 0===r||null===(e=r.currentSongDetails)||void 0===e?void 0:e.albumArtUrl,alt:"album art"})}),Object(g.jsx)("div",{id:"scroll-container",children:Object(g.jsx)("div",{id:"scroll-text",children:null===r||void 0===r||null===(t=r.currentSongDetails)||void 0===t?void 0:t.trackTitle})}),"loading"===r.bufferState?Object(g.jsx)("div",{children:Object(g.jsx)(k.a,{})}):Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(g.jsx)("button",{onClick:function(e){!function(e){e.stopPropagation(),"playing"===r.audioState?(r.me.pause(),a({type:"setAudioState",snippet:"paused"})):"paused"===r.audioState?(r.me.play(),a({type:"setAudioState",snippet:"playing"})):"error"===r.audioState&&a({type:"setAudioState",snippet:"error"})}(e)},children:Object(g.jsx)("span",{className:"material-icons",children:function(){switch(r.audioState){case"paused":return"play_arrow";case"playing":return"pause";case"error":return"music_off";default:return"play_arrow"}}()})})})]})}var w=n(10),B=(n(76),n(39));n(77);var E=function(e){var t,n=Object(o.useState)(),i=Object(c.a)(n,2),r=i[0],a=i[1],l=Object(o.useState)(!0),s=Object(c.a)(l,2),u=s[0],v=s[1],f=Object(o.useContext)(y),m=Object(c.a)(f,2),b=m[0],j=m[1],O=Object(o.useState)(!1),x=Object(c.a)(O,2),S=x[0],I=x[1];function E(e){var t;console.log("track change cleanup"),console.log(null===(t=b.mediaSource)||void 0===t?void 0:t.sourceBuffers[0]);try{var n,o;b.mediaSource.removeSourceBuffer(null===(n=b.store.mediaSource)||void 0===n?void 0:n.sourceBuffers[0]),console.log(null===(o=b.mediaSource)||void 0===o?void 0:o.sourceBuffers[0])}catch(i){}j({type:"setBufferState",snippet:"loading"}),j({type:"setCurrentSong",snippet:{videoId:null===e||void 0===e?void 0:e.videoId,trackTitle:null===e||void 0===e?void 0:e.title,albumArtUrl:null===e||void 0===e?void 0:e.thumbnails.at(-1).url}}),null!=document.getElementById("buffered-amount")&&(document.getElementById("buffered-amount").style.width="0%"),null!=document.getElementById("progress-amount")&&(document.getElementById("progress-amount").style.width="0px"),null!=document.getElementById("progress-scrub")&&(document.getElementById("progress-scrub").style.left="0px"),b.me.removeAttribute("src"),b.me.load(),function(e){return C.apply(this,arguments)}(null===e||void 0===e?void 0:e.videoId).then((function(){console.log("track loaded"),j({type:"setBufferState",snippet:"loaded"})}))}function C(){return(C=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.setAudioUrl(t,b);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){var e,t,n;b.relatedVideoSourceId!==(null===(e=b.currentSongDetails)||void 0===e?void 0:e.videoId)?(console.log("related videos effect"),I(!0),(n=null===(t=b.currentSongDetails)||void 0===t?void 0:t.videoId,fetch("".concat("","/api/ytdl/related-videos?videoId=").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,o,i,r,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:c=e.sent,j({type:"setRelatedVideos",snippet:c}),j({type:"setNextTrackId",snippet:null===(n=c[0])||void 0===n?void 0:n.videoId}),j({type:"setNextTrack",snippet:{videoId:null===(o=c[0])||void 0===o?void 0:o.videoId,trackTitle:null===(i=c[0])||void 0===i?void 0:i.title,albumArtUrl:null===(r=c[0])||void 0===r?void 0:r.thumbnails.at(-1).url}}),j({type:"setRelatedVideoSourceId",snippet:null===(l=b.currentSongDetails)||void 0===l?void 0:l.videoId}),a(Object(B.a)(c)),I(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):a(b.relatedVideos)}),[null===(t=b.currentSongDetails)||void 0===t?void 0:t.videoId]),Object(g.jsxs)("div",{className:"relatedVideos",children:[Object(g.jsxs)("div",{className:"accordian-header",onClick:function(e){return function(e){e.preventDefault(),v(!u),document.getElementsByClassName("relatedVideosContainer")[0].style.height=u?"50vh":"0vh"}(e)},children:[Object(g.jsx)("p",{style:{width:"200%",fontSize:"18px"},children:Object(g.jsx)("b",{children:"Related Songs"})}),Object(g.jsx)("i",{className:"material-icons",children:u?"keyboard_arrow_up":"keyboard_arrow_down"})]}),Object(g.jsx)("div",{className:"relatedVideosContainer",children:S?Object(g.jsx)(k.a,{}):null===r||void 0===r?void 0:r.map((function(e){return Object(g.jsx)("div",{className:"related-list-item",children:Object(g.jsxs)(w.b,{className:"related-list-item-detail",onClick:function(){E(e)},to:{pathname:"/player1/".concat(null===e||void 0===e?void 0:e.videoId)},children:[Object(g.jsx)("img",{alt:"",src:null===e||void 0===e?void 0:e.thumbnails.at(-1).url}),Object(g.jsx)("div",{children:null===e||void 0===e?void 0:e.title})]})},null===e||void 0===e?void 0:e.videoId)}))})]})};n(78),n(79);function C(){var e=Object(o.useContext)(y),t=Object(c.a)(e,2),n=t[0],i=(t[1],Object(o.useState)(!1)),r=Object(c.a)(i,2),a=r[0],l=r[1],u=n.me;Object(s.f)();function d(){console.log("add to buffer");var e=u.duration;if(u.duration>0)for(var t=0;t<u.buffered.length;t++)u.buffered.start(u.buffered.length-1-t)<u.currentTime&&(document.getElementById("buffered-amount").style.width=u.buffered.end(u.buffered.length-1-t)/e*100+"%",console.log("Buffering =>",(u.buffered.end(u.buffered.length-1-t)/u.duration*100).toFixed(0)+"%"))}function p(){var e=u.duration;e>0&&(document.getElementById("progress-amount").style.width=u.currentTime/e*100+"%",document.getElementById("progress-scrub").style.left=u.currentTime/e*100+"%")}function v(e){console.log("md"),"playing"===n.audioState&&u.pause(),e.preventDefault();var t=e.clientX-document.getElementById("progress-scrub").getBoundingClientRect().left;function o(e){var n=e.clientX-t-document.getElementById("seekBar").getBoundingClientRect().left;n<0&&(n=0);var o=document.getElementById("seekBar").offsetWidth+document.getElementById("progress-scrub").offsetWidth;n>o&&(n=o),document.getElementById("progress-scrub").style.left=n+"px",document.getElementById("progress-amount").style.width=n+"px",console.log(document.getElementById("seekBar").offsetWidth),u.currentTime=n/document.getElementById("seekBar").offsetWidth*u.duration}document.addEventListener("mousemove",o),document.addEventListener("mouseup",(function e(){console.log("mup"),l(!0),"playing"===n.audioState&&u.play();document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o)}))}return Object(o.useEffect)((function(){return null===u||void 0===u||u.addEventListener("progress",d),d(),null===u||void 0===u||u.addEventListener("timeupdate",p),p(),document.getElementById("seekBar").addEventListener("mouseover",(function(e){document.getElementById("progress-scrub").style.display="block"})),document.getElementById("seekBar").addEventListener("mouseout",(function(e){document.getElementById("progress-scrub").style.display="none"})),function(){null===u||void 0===u||u.removeEventListener("progress",d),null===u||void 0===u||u.removeEventListener("timeupdate",p)}}),[]),Object(g.jsxs)("div",{id:"seekBar",className:"seekBar",onClick:function(e){if(e.preventDefault(),a)l(!1);else{console.log("click"),u.pause(),console.log(document.getElementById("progress-scrub").offsetWidth);var t=e.clientX-document.getElementById("seekBar").getBoundingClientRect().left;t<0&&(t=0);var o=document.getElementById("seekBar").offsetWidth+document.getElementById("progress-scrub").offsetWidth;t>o&&(t=o),document.getElementById("progress-scrub").style.left=t+"px",document.getElementById("progress-amount").style.width=t+"px",console.log(u.duration),console.log(t/document.getElementById("seekBar").clientWidth*u.duration),u.currentTime=t/document.getElementById("seekBar").clientWidth*u.duration,"playing"===n.audioState&&u.play()}},children:[Object(g.jsx)("span",{id:"buffered-amount"}),Object(g.jsx)("div",{id:"progress-amount"}),Object(g.jsx)("div",{onDragStart:function(){return!1},onTouchStart:v,onMouseDown:v,id:"progress-scrub"})]})}var N=n(105);var T=function(){var e,t,n=Object(s.h)().videoId,i=Object(s.f)(),r=Object(o.useContext)(y),a=Object(c.a)(r,2),l=a[0],u=a[1],d=l.me,p=Object(o.useState)(!1),v=Object(c.a)(p,2),f=v[0],m=(v[1],Object(o.useState)(0)),b=Object(c.a)(m,2),j=b[0],O=b[1],x=Object(o.useState)(0),S=Object(c.a)(x,2),I=S[0],w=S[1];function B(){O(d.duration),d.duration>0&&w(d.currentTime)}function E(){console.log("add to buffer"),u({type:"setBufferState",snippet:"loaded"}),l.me.play().then((function(){u({type:"setAudioState",snippet:"playing"})})).catch((function(e){u({type:"setAudioState",snippet:"paused"})}));d.duration;if(d.duration>0)for(var e=0;e<d.buffered.length;e++)d.buffered.start(d.buffered.length-1-e)<d.currentTime&&console.log("Buffering =>",(d.buffered.end(d.buffered.length-1-e)/d.duration*100).toFixed(0)+"%")}function T(){var e=d.duration;O(d.duration),e>0&&w(d.currentTime)}function A(e){var t;switch(console.log(e),console.log(l.currentSongDetails),e){case"prev":u({type:"setBufferState",snippet:"loading"}),u({type:"setCurrentSong",snippet:l.currentSongDetails}),null!=document.getElementById("buffered-amount")&&(document.getElementById("buffered-amount").style.width="0%"),null!=document.getElementById("progress-amount")&&(document.getElementById("progress-amount").style.width="0px"),null!=document.getElementById("progress-scrub")&&(document.getElementById("progress-scrub").style.left="0px"),l.me.removeAttribute("src"),l.me.load(),h.setAudioUrl(null===l||void 0===l||null===(t=l.currentSongDetails)||void 0===t?void 0:t.videoId,l).then((function(){console.log("track loaded"),u({type:"setBufferState",snippet:"loaded"})}));break;case"next":u({type:"setAudioState",snippet:"paused"}),u({type:"setBufferState",snippet:"loading"}),h.getVideoInfo(null===l||void 0===l?void 0:l.nextTrackId).then((function(e){var t,n,o,i;console.log(null===e||void 0===e||null===(t=e.thumbnails[(null===e||void 0===e||null===(n=e.thumbnails)||void 0===n?void 0:n.length)-1])||void 0===t?void 0:t.url),u({type:"setCurrentSong",snippet:{videoId:null===l||void 0===l?void 0:l.nextTrackId,trackTitle:null===e||void 0===e?void 0:e.title,albumArtUrl:null===e||void 0===e||null===(o=e.thumbnails[(null===e||void 0===e||null===(i=e.thumbnails)||void 0===i?void 0:i.length)-1])||void 0===o?void 0:o.url}}),h.setAudioUrl(null===l||void 0===l?void 0:l.nextTrackId,l).then((function(){fetch(l.me.src).then((function(){u({type:"setBufferState",snippet:"loaded"}),l.me.play(),u({type:"setAudioState",snippet:"playing"})})).catch((function(e){u({type:"setBufferState",snippet:"loaded"}),u({type:"setAudioState",snippet:"error"})}))}))}))}}return Object(o.useEffect)((function(){window.onpopstate=function(){i.push("/")}})),Object(o.useEffect)((function(){return console.log("use effect"),console.log(n),console.log(console.log(l.currentSongDetails)),console.log(Object.keys(l.currentSongDetails).length),0==Object.keys(l.currentSongDetails).length&&(u({type:"setBufferState",snippet:"loading"}),h.getVideoInfo(n).then((function(e){var t,o,i,r;console.log(null===e||void 0===e||null===(t=e.thumbnails[(null===e||void 0===e||null===(o=e.thumbnails)||void 0===o?void 0:o.length)-1])||void 0===t?void 0:t.url),u({type:"setCurrentSong",snippet:{videoId:n,trackTitle:null===e||void 0===e?void 0:e.title,albumArtUrl:null===e||void 0===e||null===(i=e.thumbnails[(null===e||void 0===e||null===(r=e.thumbnails)||void 0===r?void 0:r.length)-1])||void 0===i?void 0:i.url}}),h.setAudioSource(n,l).then((function(){l.me.muted=!1}))}))),null===d||void 0===d||d.addEventListener("loadedmetadata",B),null===d||void 0===d||d.addEventListener("progress",E),null===d||void 0===d||d.addEventListener("timeupdate",T),h.setNotificationLabel(null===l||void 0===l?void 0:l.currentSongDetails),w(null===d||void 0===d?void 0:d.currentTime),O(null===d||void 0===d?void 0:d.duration),u({type:"setPlayerState",snippet:"max"}),function(){null===d||void 0===d||d.removeEventListener("progress",E),null===d||void 0===d||d.removeEventListener("timeupdate",T),u({type:"setPlayerState",snippet:"min"})}}),[l.currentSongDetails]),Object(g.jsx)("div",{className:"playerContainer",children:Object(g.jsxs)("div",{className:"Player",children:[Object(g.jsx)("div",{className:"AlbumArt",children:Object(g.jsx)("img",{src:null===l||void 0===l||null===(e=l.currentSongDetails)||void 0===e?void 0:e.albumArtUrl})}),Object(g.jsx)("div",{className:"scroll-container",children:Object(g.jsx)("div",{id:"scroll-text",children:null===l||void 0===l||null===(t=l.currentSongDetails)||void 0===t?void 0:t.trackTitle})}),Object(g.jsx)(C,{}),Object(g.jsxs)("div",{id:"timeLine",children:[Object(g.jsx)("div",{children:f?"0:00":parseInt(I/60%60).toString()+":"+parseInt(I%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}),Object(g.jsx)("div",{children:f?"0:00":parseInt(j/60%60).toString()+":"+parseInt(j%60).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})})]}),Object(g.jsx)("div",{className:"player-controls",children:"loading"===l.bufferState?Object(g.jsx)("div",{children:Object(g.jsx)(k.a,{})}):Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},children:[Object(g.jsx)("button",{onClick:function(){A("prev")},children:Object(g.jsx)("span",{id:"playbtn",className:"material-icons",children:"skip_previous"})}),Object(g.jsx)(N.a,{style:{border:"solid",backgroundColor:"salmon"},onClick:function(e){switch(e.preventDefault(),console.log(l.audioState),l.audioState){case"playing":u({type:"setAudioState",snippet:"paused"});break;case"paused":u({type:"setAudioState",snippet:"playing"});break;case"error":u({type:"setAudioState",snippet:"error"})}},children:Object(g.jsx)("span",{id:"playbtn",className:"material-icons",children:function(){switch(l.audioState){case"paused":return"play_arrow";case"playing":return"pause";case"error":return"music_off";default:return"play_arrow"}}()})}),Object(g.jsx)("button",{onClick:function(){A("next")},children:Object(g.jsx)("span",{id:"playbtn",className:"material-icons",children:"skip_next"})})]})})]})})};n(80);var A=function(e){var t=Object(o.useContext)(y),n=Object(c.a)(t,2),i=(n[0],n[1]),r=Object(s.f)();function a(e){h.setPlayerApperance(e,"min"),i({type:"setPlayerState",snippet:"min"}),setTimeout((function(){return r.push("/")}),150)}return Object(o.useEffect)((function(){return function(){}})),Object(g.jsxs)("div",{className:"PlayerPage",children:[Object(g.jsx)("button",{style:{float:"left"},children:Object(g.jsx)(w.b,{onClick:function(e){a(e)},style:{textDecoration:"none"},to:"/",className:"material-icons",children:"keyboard_arrow_down"})}),Object(g.jsx)(T,{props:e}),Object(g.jsx)(E,{props:e})]})},D=(n(81),n(52)),L=n.n(D);var P=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(),a=Object(c.a)(r,2),l=(a[0],a[1]),u=Object(o.useState)(!1),v=Object(c.a)(u,2),f=v[0],m=v[1],b=Object(o.useState)(""),j=Object(c.a)(b,2),O=j[0],x=j[1],S=Object(o.useContext)(y),I=Object(c.a)(S,2),E=I[0],C=I[1],N=Object(s.f)();Object(o.useEffect)((function(){var e;return console.log("mount search"),console.log(E.searchKey),(null===E||void 0===E||null===(e=E.searchResult)||void 0===e?void 0:e.length)>0&&void 0!==(null===E||void 0===E?void 0:E.searchResult)|null&&i(E.searchResult),x(E.searchKey),function(){console.log("unmount search"),console.log(n),console.log(O),C({type:"setSearchKeyValue",snippet:O}),C({type:"setSearchResult",snippet:n})}}),[null===E||void 0===E?void 0:E.searchKey]);var T=Object(o.useCallback)(L.a.debounce((function(e){var t,n,o,r;x(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),m(!0),console.log(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value),l(null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.value),fetch("".concat("","/api/ytdl/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({searchKey:null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value})}).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,o,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,console.log(null===(n=r[0])||void 0===n||null===(o=n.id)||void 0===o?void 0:o.videoId),i(Object(B.a)(r)),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),400),[]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Search"}),Object(g.jsx)("input",{type:"text",placeholder:"Type Song Name, Lyrics, Movie/Album/Singer Name",onChange:T}),Object(g.jsx)("div",{className:"search-result-container",children:f?Object(g.jsx)("div",{style:{paddingTop:"50%"},children:Object(g.jsx)(k.a,{})}):null===n||void 0===n?void 0:n.map((function(e){var t,n,o,i,r;return Object(g.jsx)("div",{className:"list-item",children:Object(g.jsxs)(w.b,{className:"list-item-link",onClick:function(t){!function(e,t){D.apply(this,arguments)}(t,e)},to:"/player1/".concat(null===e||void 0===e||null===(n=e.id)||void 0===n?void 0:n.videoId),children:[Object(g.jsx)("img",{alt:"",src:null===e||void 0===e||null===(o=e.snippet)||void 0===o||null===(i=o.thumbnails)||void 0===i||null===(r=i.default)||void 0===r?void 0:r.url}),Object(g.jsx)("div",{children:null===e||void 0===e?void 0:e.title})]},null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.videoId)})}))})]});function A(e){null==E.playerState|void 0?(C({type:"setPlayerState",snippet:"max"}),C({type:"setSearchResult",snippet:n}),setTimeout((function(){var t;return N.push("/player1/".concat(null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.videoId))}),150)):"min"===E.playerState?(C({type:"setSearchResult",snippet:n}),C({type:"setPlayerState",snippet:"min"})):"max"===E.playerState&&(C({type:"setPlayerState",snippet:"max"}),C({type:"setSearchResult",snippet:n}),setTimeout((function(){var t;return N.push("/player1/".concat(null===e||void 0===e||null===(t=e.id)||void 0===t?void 0:t.videoId))}),150))}function D(){return(D=Object(p.a)(d.a.mark((function e(t,n){var o,i,r,a,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E.me.removeAttribute("src"),E.me.load(),C({type:"setBufferState",snippet:"loading"}),C({type:"setCurrentSong",snippet:{videoId:null===n||void 0===n||null===(o=n.id)||void 0===o?void 0:o.videoId,trackTitle:null===n||void 0===n?void 0:n.title,albumArtUrl:null===n||void 0===n||null===(i=n.snippet)||void 0===i||null===(r=i.thumbnails)||void 0===r||null===(a=r.default)||void 0===a?void 0:a.url}}),P(null===n||void 0===n||null===(l=n.id)||void 0===l?void 0:l.videoId).then((function(){console.log("track loaded"),C({type:"setBufferState",snippet:"loaded"})})),A(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return U.apply(this,arguments)}function U(){return(U=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.setAudioUrl(t,E);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},U=(n(83),n(84),n(106)),R=n(107),V=n(108),_=n(109);var W=function(e){var t=e.items,n=e.handleClick,i=Object(o.useState)(),r=Object(c.a)(i,2),a=r[0],l=r[1],s=Object(o.useContext)(y),u=Object(c.a)(s,2);return u[0],u[1],Object(o.useEffect)((function(){console.log("card slider effect"),l(t)}),[t]),Object(g.jsx)("div",{className:"silderContainer",children:null===a||void 0===a?void 0:a.map((function(e){return Object(g.jsx)(U.a,{style:{display:"inline-block",whiteSpace:"pre-line",width:"50%",height:"30vh",margin:"2.5%"},children:Object(g.jsxs)(R.a,{onClick:function(t){n(t,{videoId:null===e||void 0===e?void 0:e.videoId,title:null===e||void 0===e?void 0:e.title,imageUrl:null===e||void 0===e?void 0:e.imageUrl})},children:[Object(g.jsx)(V.a,{component:"img",height:"140",image:null===e||void 0===e?void 0:e.imageUrl,alt:"album art",style:{objectFit:"fill"}}),Object(g.jsx)(_.a,{children:null===e||void 0===e?void 0:e.title})]})},null===e||void 0===e?void 0:e.videoId)}))})},M=n(110),J=n(112);var K=[{key:"home",component:function(e){var t=Object(o.useContext)(y),n=Object(c.a)(t,2),i=n[0],r=n[1],a=Object(s.f)(),l=Object(o.useState)(),u=Object(c.a)(l,2),v=u[0],f=u[1],m=Object(o.useState)(),b=Object(c.a)(m,2),j=b[0],O=b[1];Object(o.useEffect)((function(){console.log("home page effect"),null==(null===i||void 0===i?void 0:i.trendingSongs)&&null==(null===i||void 0===i?void 0:i.pickedSongs)?(S("trending songs").then(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,o=n.filter((function(e){return x(null===e||void 0===e?void 0:e.duration_raw)<=600})).map((function(e){var t,n,o,i;return{imageUrl:null===e||void 0===e||null===(t=e.snippet)||void 0===t||null===(n=t.thumbnails)||void 0===n||null===(o=n.high)||void 0===o?void 0:o.url,title:null===e||void 0===e?void 0:e.title,videoId:null===e||void 0===e||null===(i=e.id)||void 0===i?void 0:i.videoId}})),f(o),r({type:"setTrendingSongs",snippet:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S("malayalam trending songs").then(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,o=n.filter((function(e){return x(null===e||void 0===e?void 0:e.duration_raw)<=600})).map((function(e){var t,n,o,i;return{imageUrl:null===e||void 0===e||null===(t=e.snippet)||void 0===t||null===(n=t.thumbnails)||void 0===n||null===(o=n.high)||void 0===o?void 0:o.url,title:null===e||void 0===e?void 0:e.title,videoId:null===e||void 0===e||null===(i=e.id)||void 0===i?void 0:i.videoId}})),O(o),r({type:"setPickedSongs",snippet:o});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):(f(i.trendingSongs),O(i.pickedSongs))}),[]);var x=function(e){var t=null===e||void 0===e?void 0:e.split(":"),n=0;switch(null===t||void 0===t?void 0:t.length){case 3:n=60*parseInt(t[0],10)*60+60*parseInt(t[1],10)+parseInt(t[2],10);break;case 2:n=60*parseInt(t[0],10)+parseInt(t[1],10);break;case 1:n=parseInt(t[1],10)}return n};function S(e){return fetch("".concat("","/api/ytdl/search"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({searchKey:e})})}function k(e,t){e.preventDefault(),i.me.removeAttribute("src"),i.me.load(),r({type:"setBufferState",snippet:"loading"}),r({type:"setCurrentSong",snippet:{videoId:null===t||void 0===t?void 0:t.videoId,trackTitle:null===t||void 0===t?void 0:t.title,albumArtUrl:null===t||void 0===t?void 0:t.imageUrl}}),function(e){return I.apply(this,arguments)}(null===t||void 0===t?void 0:t.videoId).then((function(){console.log("track loaded"),r({type:"setBufferState",snippet:"loaded"})})),function(e){null==i.playerState|void 0?(r({type:"setPlayerState",snippet:"max"}),setTimeout((function(){return a.push("/player1/".concat(null===e||void 0===e?void 0:e.videoId))}),150)):"min"===i.playerState?r({type:"setPlayerState",snippet:"min"}):"max"===i.playerState&&(r({type:"setPlayerState",snippet:"max"}),setTimeout((function(){return a.push("/player1/".concat(null===e||void 0===e?void 0:e.videoId))}),150))}(t)}function I(){return(I=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.setAudioUrl(t,i);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(e){var t=e.cardNumber;return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"},children:Array.from({length:t},(function(e,t){return Object(g.jsxs)(J.a,{sx:{pt:.5},style:{width:"100%",height:"30vh",margin:"2.5%"},children:[Object(g.jsx)(M.a,{variant:"rect",style:{width:"100%",height:"20vh"}}),Object(g.jsx)(M.a,{}),Object(g.jsx)(M.a,{})]},t)}))})};return Object(g.jsxs)("div",{className:"HomePage",children:[Object(g.jsx)("h3",{children:"Welcome Back!"}),Object(g.jsx)("h3",{style:{textAlign:"left"},children:"Trending Songs"}),null==v|void 0?Object(g.jsx)(w,{cardNumber:2}):Object(g.jsx)(W,{items:v,handleClick:k}),Object(g.jsx)("h3",{style:{textAlign:"left"},children:"Picked for you"}),null==j|void 0?Object(g.jsx)(w,{cardNumber:2}):Object(g.jsx)(W,{items:j,handleClick:k})]})},path:"/"},{key:"search",component:P,path:"/search"},{key:"player",component:A,path:"/player1/:videoId"}];n(85);function F(){var e,t;return Object(g.jsx)("div",{className:"footerContainer",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"link-items",children:Object(g.jsxs)(w.b,{className:"link-items",to:null===(e=K.find((function(e){return"home"==e.key})))||void 0===e?void 0:e.path,children:[Object(g.jsx)("span",{className:"material-icons icon",children:"home"}),Object(g.jsx)("span",{className:"link-text",children:"Home"})]})}),Object(g.jsx)("li",{className:"link-items",children:Object(g.jsxs)(w.b,{className:"link-items",to:null===(t=K.find((function(e){return"search"==e.key})))||void 0===t?void 0:t.path,children:[Object(g.jsx)("span",{className:"material-icons icon",children:"search"}),Object(g.jsx)("span",{className:"link-text",children:"Search"})]})}),Object(g.jsxs)("li",{className:"link-items",children:[Object(g.jsx)("span",{className:"material-icons icon",children:"download"}),Object(g.jsx)("span",{className:"link-text",children:"Downloads"})]})]})})}n(86);var z=n(113);var H=function(){var e=Object(o.useContext)(y),t=Object(c.a)(e,2),n=t[0],i=(t[1],Object(o.useState)(!0)),r=Object(c.a)(i,2),a=r[0],u=r[1],d=Object(s.g)();return Object(o.useEffect)((function(){return console.log(JSON.parse(window.localStorage.getItem("store"))),console.log("Environment ->","production"),console.log("Api base url ->",""),window.addEventListener("online",(function(){u(navigator.onLine)})),window.addEventListener("offline",(function(){u(navigator.onLine)})),function(){console.log("unmount"),window.removeEventListener("online",(function(){u(navigator.onLine)})),window.removeEventListener("offline",(function(){u(navigator.onLine)})),window.localStorage.setItem("store",JSON.stringify(n))}}),[]),Object(g.jsxs)("div",{className:"appContainer",children:[Object(g.jsx)("div",{className:"appBody",children:Object(g.jsx)(s.c,{children:K.map((function(e){return Object(g.jsx)(s.a,Object(l.a)({exact:!0},e))}))})}),Object(g.jsxs)("div",{className:"bottomContainer",children:["min"===n.playerState?Object(g.jsx)(I,{}):null,d.pathname.includes("player1")?null:Object(g.jsx)(F,{})]}),Object(g.jsx)(z.a,{style:{zIndex:1e4},anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"No internet Connection",autoHideDuration:5e3,open:!a})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(S,{children:Object(g.jsx)(w.a,{children:Object(g.jsx)(H,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),X()}},[[87,1,2]]]);
//# sourceMappingURL=main.fcbf1289.chunk.js.map