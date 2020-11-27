# Vue-组件通信
组件之间的通信，一般有父子组件，跨组件这两类，具体的通信区别如下：

## 父子组件
一般利用props与emit组合：
  * 父组件传递props属性至子组件
  * 子组件通过emit事件至父组件

## 跨组件
跨组件通信可实现方式多样，主要举例以如下两种方式阐述：

### vuex
  * 适用复杂的业务场景，跨组件通信
  * 利用全局状态管理，执行数据更新及事件操作

### event-bus

  * 事件总线，适用轻便项目，跨组件

#### 定义
首先定义单独的事件中心管理组件间的通信：

```js
// 将在各处使用该事件中心
// 组件通过它来通信
var eventBus = new Vue()
```

#### 应用
然后在组件中，可以使用 $emit，$on，$off 分别来分发、监听、取消监听事件：
```js
methods: {
  deleteTodo: function(id) {
    eventBus.$emit('delete-todo', id)
  }
}
```

```js
created: function() {
  eventBus.$on('delete-todo', this.deleteTodo)
},
// 最好在组件销毁前 - 清除事件监听
beforeDestroy: function() {
  eventBus.$off('delete-todo', this.deleteTodo)
},
methods: {
  deleteTodo: function(id) {
    ...id
  }
}
```

#### 代码简化
针对事件总线代码，可以通过封装更为精简函数来处理：

```js
export function initEventBus(eventName, callback) {
  Bus.$on(eventName, callback)
  this.$once('hook:beforeDestroy', () => {
    Bus.$off(eventName, callback)
  })
}
```

```js
created: function() {
  initEventBus.call(this, 'delete-todo', this.deleteTodo)
}
```