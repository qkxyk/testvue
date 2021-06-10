#### 使用vue库
每个Vue应用都是通过Vue函数创建一个新的Vue实例开始：
```vue
var vm= new Vue({

});
```  
##### 组件使用
```Vue
Vue.component("todo-item",{
    template:"<li>这是一个代办事项</li>"
});
```
组件使用步骤：  
1. 定义组件；
2. 使用组件。  
注：组件要定义在vue实例之前。  
###### 组件传递参数
1. 在组件定义是使用props,并在模板中使用参数；
2. 在组件调用时传入参数，v-bind 指令将待办项传到循环输出的每个组件中  

##### 属性值使用
属性值不能使用插值方式，应该使用v-bind指令，缩写为:
对于bool属性值(他们只要存在就意味着值为true)
```vue
  <button :disabled="isButtonDisabled">按钮是否禁用测试</button>
  ```  
  isButtonDisabled的值为null、undefined或者false，disabled属性不会被渲染出来。

  #### 指令  
  指令是待用v-前缀的属性，指令的属性的值预期是单个js表达式，指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM。
  ```vue
  <p v-if="seen">显示内容</p>
  ```  
  ##### 参数
  一些指令能够接收一个参数，在指令名称之后以冒号表示，如v-bind可以响应式地更新。
  ```vue
  <a v-bind:href="url">...</a>
  <a :href="url">这个是缩写形式</a>
  <div v-bind:id="'list-' + id"></div>
  ```  
这里href是参数，另一个例子是v-on,它用以监听DOM事件。
```vue
<a v-on:click="doSomething">按钮事件</a>
<a @click="doSomething">按钮缩写事件</a>
```  
