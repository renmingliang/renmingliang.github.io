webpackJsonp([1],{"02fc":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("BO1k"),n=s.n(a),r=s("//Fk"),i=s.n(r),o=s("Dd8w"),c=s.n(o),u=s("NYxO"),l={name:"onload",data:function(){return{request:null,stop:{show:!1,tips:"叁"},step:{title:"",status:"wait",description:"校验数据是否一致"},getNum:0,storeNum:0,catchImg:0,isActive:0,timer:null}},created:function(){this.ready()},computed:c()({},Object(u.c)(["DBname","DBver","storeName","timeout"]),Object(u.b)(["data"]),{classStop:function(){return{"lottery-stop":!0,show:this.stop.show}}}),methods:{ready:function(){var t=this;this.deleteDB(this.DBname),this.$store.dispatch({type:"getDatas"}).then(function(){t.getNum=t.data.userData.length,t.data.hasOwnProperty("userData")&&(t.isActive=1)}).then(function(){t.initDatabase()}).then(function(){setTimeout(function(){t.preLoadImg()},800),console.log(t.timeout)}).then(function(){t.timer=setTimeout(function(){t.validateData()},t.timeout)}).catch(function(t){console.log(t)})},deleteDB:function(t){indexedDB.deleteDatabase(t)},initDatabase:function(){if(window.indexedDB){var t=this;t.request=window.indexedDB.open(t.DBname,t.DBver),t.request.onsuccess=function(e){var s=e.target.result;t.insert(s,t.storeName.user,t.data.userData).then(function(e){t.storeNum=e,0!==t.storeNum&&(t.isActive=2)}),t.insert(s,t.storeName.award,t.data.type)},t.request.onerror=function(t){alert("打开失败,错误号："+t.target.errorCode)},t.request.onupgradeneeded=function(e){var s=e.target.result;s.objectStoreNames.contains(t.storeName.user)||s.createObjectStore(t.storeName.user,{keyPath:"CompleteID"}),s.objectStoreNames.contains(t.storeName.award)||s.createObjectStore(t.storeName.award,{autoIncrement:!0})}}else alert("您的浏览器不支持IndexedDB数据库。")},insert:function(t,e,s){return new i.a(function(a,r){var i=0,o=t.transaction(e,"readwrite");o.oncomplete=function(t){a(i)},o.onerror=function(t){alert("数据插入失败"),r(t)},o.onabort=function(t){};var c=o.objectStore(e),u=!0,l=!1,d=void 0;try{for(var f,p=n()(s);!(u=(f=p.next()).done);u=!0){var h=f.value;c.add(h).onsuccess=function(t){i++}}}catch(t){l=!0,d=t}finally{try{!u&&p.return&&p.return()}finally{if(l)throw d}}})},preLoadImg:function(){var t=this,e=!0,s=!1,a=void 0;try{for(var r,i=n()(this.data.userData);!(e=(r=i.next()).done);e=!0){var o=r.value,c=new Image;c.src=o.HeadImg,c.addEventListener("load",function(){t.catchImg++},!1)}}catch(t){s=!0,a=t}finally{try{!e&&i.return&&i.return()}finally{if(s)throw a}}},validateData:function(){var t=this;if(this.isActive=3,this.catchImg===this.getNum&&this.catchImg===this.storeNum){clearTimeout(this.timer);this.step={title:"成功",status:"success",description:"3秒后进入抽奖页面"},this.stop.show=!0,this.isActive=4;var e=3,s=setInterval(function(){2===--e?t.stop.tips="贰":1===e?t.stop.tips="壹":(clearInterval(s),t.$router.push({path:"/lottery"}))},1e3)}else{this.step={title:"失败",status:"error",description:"请重新进入或者 刷新本页面"}}}},watch:{catchImg:function(t){t===this.getNum&&this.validateData()}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"load-container"},[s("el-steps",{attrs:{active:t.isActive,"finish-status":"success"}},[s("el-step",{attrs:{title:"数据获取中...",description:"共计获取 "+t.getNum+"条"}}),t._v(" "),s("el-step",{attrs:{title:"存储数据中...",description:"共计插入 "+t.storeNum+"条"}}),t._v(" "),s("el-step",{attrs:{title:"缓存头像中...",description:"共计缓存 "+t.catchImg+"张"}}),t._v(" "),s("el-step",{attrs:{title:"数据校验"+t.step.title,status:t.step.status,description:t.step.description}})],1),t._v(" "),t.stop.show?s("div",{class:t.classStop},[s("div",{staticClass:"stop-tips"},[t._v(t._s(t.stop.tips))]),t._v(" "),s("div",{staticClass:"stop-mask"})]):t._e()],1)},staticRenderFns:[]};var f=s("VU/8")(l,d,!1,function(t){s("DcGV")},"data-v-42695e2c",null);e.default=f.exports},BO1k:function(t,e,s){t.exports={default:s("fxRn"),__esModule:!0}},DcGV:function(t,e){},fxRn:function(t,e,s){s("+tPU"),s("zQR9"),t.exports=s("g8Ux")},g8Ux:function(t,e,s){var a=s("77Pl"),n=s("3fs2");t.exports=s("FeBl").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return a(e.call(t))}}});
//# sourceMappingURL=1.de656986393aa6d13fc3.js.map