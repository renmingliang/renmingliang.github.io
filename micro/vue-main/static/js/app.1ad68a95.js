(function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],c=0,v=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&v.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"de775dcc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"2ce1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainapp"},[n("header",{staticClass:"mainapp-header"},[n("h1",[e._v("微前端示例Demo")]),n("h2",[e._v("主应用："+e._s(e.user))]),n("button",{on:{click:e.changeName}},[e._v("主应用改变数据")])]),n("div",{staticClass:"mainapp-main"},[n("ul",{staticClass:"mainapp-sidemenu"},[n("li",{on:{click:function(t){return e.push("/vue-sub1")}}},[e._v("子应用A")]),n("li",{on:{click:function(t){return e.push("/vue-sub2")}}},[e._v("子应用B")]),n("li",{on:{click:function(t){return e.push("/react-sub3")}}},[e._v("子应用C")])]),e._m(0)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainapp-subapp"},[n("main",{attrs:{id:"subapp-container"}})])}],u=n("5530"),i=n("2f62"),s={computed:Object(u["a"])({},Object(i["b"])("user",["user"])),methods:{push:function(e){history.pushState(null,e,"/micro/vue-main"+e)},changeName:function(){this.$store.commit("user/changeMainName","hello")}},watch:{$route:{handler:function(e){console.log("watch-route",e)},immediate:!0}}},l=s,c=(n("034f"),n("2877")),p=Object(c["a"])(l,o,a,!1,null,null,null),v=p.exports,f=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},_=d,j=(n("b2a1"),Object(c["a"])(_,b,g,!1,null,"a87ea5ee",null)),k=j.exports,y={name:"Home",components:{HelloWorld:k}},w=y,O=Object(c["a"])(w,m,h,!1,null,null,null),C=O.exports;r["a"].use(f["a"]);var x=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new f["a"]({mode:"history",base:"",routes:x}),S=E,$={namespaced:!0,state:{user:""},mutations:{changeMainName:function(e,t){e.user=t}},actions:{}},P=$;r["a"].use(i["a"]);var L=new i["a"].Store({modules:{user:P}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:L,render:function(e){return e(v)}}).$mount("#app");var M=n("34ac9"),N=n("e223"),T=n("07ec"),A=n("a026");function H(e){var t=e.loading;return new A["a"]({template:'\n      <div id="subapp-container">\n        <h4 v-if="loading" class="subapp-loading">Loading...</h4>\n        <div id="subapp-viewport"></div>\n      </div>\n    ',el:"#subapp-container",data:function(){return{loading:t}}})}var W=null;function G(e){var t=e.loading;W?W.loading=t:W=H({loading:t})}G({loading:!0});var R=function(e){return G({loading:e})},q={vuex:{user:L.state.user}};Object(M["b"])([{name:"vue-sub1",entry:"//renmingliang.github.io/micro/vue-sub1/",container:"#subapp-viewport",loader:R,activeRule:"/micro/vue-main/vue-sub1",props:q},{name:"vue-sub2",entry:"//renmingliang.github.io/micro/vue-sub2/",container:"#subapp-viewport",loader:R,activeRule:"/micro/vue-main/vue-sub2",props:q},{name:"react-sub3",entry:"//renmingliang.github.io/micro/react-sub3/",container:"#subapp-viewport",loader:R,activeRule:"/micro/vue-main/react-sub3",props:q}],{beforeLoad:[function(e){console.log("[LifeCycle] before load %c%s","color: green;",e.name)}],beforeMount:[function(e){console.log("[LifeCycle] before mount %c%s","color: green;",e.name)}],afterUnmount:[function(e){console.log("[LifeCycle] after unmount %c%s","color: green;",e.name)}]});var D=Object(N["b"])(L.state.user),F=D.onGlobalStateChange,I=D.setGlobalState;F((function(e,t){console.log("[main_onGlobalStateChange - master]:",e,t),L.commit("user/changeMainName",e.user)})),I({ignore:"qiankun",user:"master"}),Object(T["b"])("/micro/vue-main/vue-sub1"),Object(M["c"])(),Object(T["a"])((function(){console.log("[MainApp] first app mounted")}))},"85ec":function(e,t,n){},b2a1:function(e,t,n){"use strict";var r=n("2ce1"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1ad68a95.js.map