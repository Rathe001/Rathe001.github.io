(this["webpackJsonpheroku-node-ui"]=this["webpackJsonpheroku-node-ui"]||[]).push([[0],{26:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(12),i=t.n(r),c=t(22),u=t(7),s=t(23),l={ui:{}},d=t(25),f={SET_SCALE:"UI_SET_SCALE",setScale:function(e){return{type:f.SET_SCALE,payload:e}}},p=f,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.SET_SCALE:return Object(d.a)({},e,{scale:n.payload});default:return e}},b=Object(u.c)({ui:g}),h=t(16),v=t.n(h),w=t(15),m=t(24),E=v.a.mark(y),O=Object(w.a)([]);function y(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(O);case 2:case"end":return e.stop()}}),E)}var S=Object(s.a)(),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,k=Object(u.e)((function(e,n){return b(e,n)}),l,j(Object(u.a)(S)));S.run(y);var _=k,C=t(11),x=t(21),A=new(t(20).w3cwebsocket)("ws://rathe001-test-app.herokuapp.com"),T=Object(x.a)((function(){return{"@global":{"*":{boxSizing:"border-box"},body:{background:"black",color:"green",fontFamily:"Verdana",fontSize:16},input:{position:"absolute",bottom:0,border:"1px solid #666666",left:0,width:"100%",padding:10,background:"#111111",color:"green",fontFamily:"Verdana",fontSize:16},p:{margin:0,padding:0}}}})),W=function(){T();var e=Object(o.useState)(!1),n=Object(C.a)(e,2),t=n[0],r=n[1],i=Object(o.useState)(""),c=Object(C.a)(i,2),u=c[0],s=c[1],l=Object(o.useState)([]),d=Object(C.a)(l,2),f=d[0],p=d[1],g=Object(o.useState)(""),b=Object(C.a)(g,2),h=b[0],v=b[1],m=function(e){s(e),function(e){A.send(JSON.stringify({name:h,input:e,type:"message"}))}(e),s("")};return Object(o.useEffect)((function(){A.onmessage=function(e){var n=e.data;p([].concat(Object(w.a)(f),[n]))}})),a.a.createElement("div",null,t&&a.a.createElement("div",null,f.map((function(e){return a.a.createElement("p",null,e)})),a.a.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&m(e.target.value)},value:u,placeholder:"Enter message"})),!t&&a.a.createElement("input",{type:"text",onChange:function(e){return v(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&(n=e.target.value,r(!0),v(n),void A.send(JSON.stringify({name:n,input:"",type:"connection"})));var n},value:h,placeholder:"What is your name?"}))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(c.a,{store:_},a.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");L?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(n,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.8c7d2809.chunk.js.map