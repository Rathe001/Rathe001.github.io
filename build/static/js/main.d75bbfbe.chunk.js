(this["webpackJsonprathe.github.io"]=this["webpackJsonprathe.github.io"]||[]).push([[0],{50:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),a=n(19),i=n(0),u=n(16),o=n.n(u),s=n(18),h=n(3),b=Object(s.a)({"@global":{},hello:{}}),f=function(){var t=b(),e=Object(i.useState)([]),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){o.a.get("https://api.github.com/users/Rathe001/repos").then((function(t){return t.data.filter((function(t){return t.has_pages})).map((function(t){return t.name}))})).then((function(t){r(t)}))}),[]),Object(h.jsx)("div",{className:t.hello,children:c.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"/".concat(t),children:t})})}))})};r.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d75bbfbe.chunk.js.map