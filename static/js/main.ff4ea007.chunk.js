(this.webpackJsonporiginals=this.webpackJsonporiginals||[]).push([[0],{53:function(e,t,n){e.exports=n(68)},58:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},60:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=(n(58),n(59),n(60),n(21)),l=n(14),u=n(8),m=n(71),s=n(72),h=n(44),p=n(73),f=n(9);function v(){var e=Object(u.a)([".navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: orange;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n    top: 15%;\n  }"]);return v=function(){return e},e}var g=f.a.div(v()),d=function(){return r.a.createElement(g,null,r.a.createElement(m.a,{expand:"lg"},r.a.createElement(m.a.Brand,{href:"/"},r.a.createElement("strong",null,"Originals")),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a,{className:"form-center"},r.a.createElement(h.a,{type:"text",placeholder:"Search",className:""})),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav",style:{float:"right"}},r.a.createElement(p.a,{className:"ml-auto"},r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{href:"/"},"Home")),r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{href:"/about"},"About"))))))};function b(){var e=Object(u.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return b=function(){return e},e}var E=f.a.div(b()),k=function(e){return r.a.createElement(E,null,r.a.createElement("strong",null,"This is the Home Page"))};function y(){var e=Object(u.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]);return y=function(){return e},e}var O=f.a.div(y()),j=function(){return r.a.createElement(O,null,r.a.createElement("h2",null,"About Page"),r.a.createElement("strong",null,"This is the About Page"))};function w(){var e=Object(u.a)(["\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n"]);return w=function(){return e},e}var x=f.a.div(w()),C=function(){return r.a.createElement(x,null,r.a.createElement("h2",null,"No Match"))},N=n(25),I=n(26),P=n(28),A=n(27),B=n(29);function S(){var e=Object(u.a)([""]);return S=function(){return e},e}function z(){var e=Object(u.a)(["\n  height: 70px;\n  width: 75px; /* width must be same size as NavBar to center */\n  text-align: center; /* Aligns <a> inside of NavIcon div */\n  margin-bottom: 0;   /* Puts space between NavItems */\n  a {\n      text-decoration: none;\n      opacity: 0.6;\n    font-size: 2.7em;\n    color: ",";\n    :hover {\n      opacity: 1.0;\n      text-decoration: none; /* Gets rid of underlining of icons */\n    }  \n  }\n"]);return z=function(){return e},e}function F(){var e=Object(u.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 75px;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  top: 3.4em;      /* Stay at the top */\n  background-color: #222; /* Black */\n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]);return F=function(){return e},e}var H=f.a.div(F()),M=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(P.a)(this,Object(A.a)(t).call(this,e))).onItemClick=function(e){n.setState({activePath:e})},n.state={activePath:e.location.pathname,items:[{path:"/",name:"Home",css:"fa fa-fw fa-home",key:1},{path:"/about",name:"About",css:"fa fa-fw fa-clock",key:2},{path:"/NoMatch",name:"NoMatch",css:"fas fa-hashtag",key:3}]},n}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.items,a=t.activePath;return r.a.createElement(H,null,n.map((function(t){return r.a.createElement(L,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===a,key:t.key})})))}}]),t}(r.a.Component),T=Object(l.f)(M),J=f.a.div(z(),(function(e){return e.active?"teal":"grey"})),L=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=n.props,t=e.path;(0,e.onItemClick)(t)},n}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props.active;return r.a.createElement(J,{active:e},r.a.createElement(c.b,{to:this.props.path,className:this.props.css,onClick:this.handleClick},r.a.createElement(W,null)))}}]),t}(r.a.Component),W=f.a.div(S()),D=function(e){function t(){return Object(N.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null)}}]),t}(r.a.Component);var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(d,null),r.a.createElement(D,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:k}),r.a.createElement(l.a,{path:"/about",component:j}),r.a.createElement(l.a,{component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.ff4ea007.chunk.js.map