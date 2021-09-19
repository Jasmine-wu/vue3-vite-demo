## Vue3 vite项目的基础使用

### 01-创建vue3 vite项目
 ```bash
    yarn create vite-app vue3-vite-base
    yarn 
    yarn dev
 ```
### 02-创建vue3应用实例
```js
    // main.js的作用：
    // vue2: 创建根实例挂载到根容器
    // vue3: 创建vue应用实例挂载到根容器
    // vue2: 所有东西挂载到根实例上
    // vue3: 所有东西挂载到应用实例上

    // 1.创建根组件
    import App from "./App.vue"
    import { createApp } from "vue"

    // 2.使用createApp，传入根组件，创建应用实例
    const app = createApp(App);

    // 3.将应用实例挂载到根容器
    app.mount("#app");
    
```
### 03-选项API和组合API
- vue2有混入对象封装逻辑
### 04-组合API setup方法
- 组合API的起点，组合API的代码基本都在setup
- 组件实例创建前执行，即beforeCreated钩子函数之前
- setup中不能使用this
- 提供模版需要的数据和函数，需在setup中返回

### 05-组合API声明周期函数
- setup 创建实例前
- onBeforeMount 挂载DOM前
- onMounted 挂载DOM后
- onBeforeUpdate 更新组件前
- onUpdated 更新组件后
- onBeforeUnmount 卸载销毁前
- onUnmounted 卸载销毁后
