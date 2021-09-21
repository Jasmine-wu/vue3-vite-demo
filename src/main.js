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

// 注册全局混入对象
app.mixin({
    mounted() {
        // this.$el:组件的根元素
        console.log(this.$el, "dom准备好了");;
    },
})

// 3.将应用实例挂载到根容器
app.mount("#app");