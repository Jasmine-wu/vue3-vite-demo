## Vue3 vite项目的基础使用
- vue3要下载vue3的调试工具
- vue3构建工具打包工具vite，是用来替换vue-cli的，vue-cli基于webpack

### 01-创建vue3 vite项目
 ```bash
    yarn create vite-app vue3-vite-base
    yarn 
    yarn dev
 ```
### 02-创建vue3应用实例
- vue2
```js
  import Vue from 'vue'
  // 传入根组件创建vue根实例挂载到根容器上
  new Vue({
      el: '#app',
      router,
      store,
      // 挂载i18n，这样所有实例都拥有了$t函数
      i18n,
      render: h => h(App)
  })
```
- vue3
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

    // createApp(App).use(store).use(router).mount('#app')

    
```
### 03-选项API和组合API
- vue2有混入对象封装逻辑
### 04-组合API setup方法
- 组合API的起点，组合API的代码基本都在setup
- 组件实例创建前执行，即beforeCreated钩子函数之前
- setup中不能使用this
- 提供模版需要的数据和函数，需在setup中返回
- setup(props,context){}
- 参数1: props对象，接收父组件传递进来的prop
- 参数2: context对象，重要属性:emit

### 05-组合API声明周期函数
- 注意：组合API从哪里导入，目前是从vue导入，不然会报错，具体看文档
- setup 创建实例前
- onBeforeMount 挂载DOM前
- onMounted 挂载DOM后
- onBeforeUpdate 更新组件前
- onUpdated 更新组件后
- onBeforeUnmount 卸载销毁前
- onUnmounted 卸载销毁后
### 06-组合API-reactive函数
- 将复杂数据类型(对象/数组)转换为响应式数据
### 07-组合API-toRef函数
- 将响应式对象中的某个属性转换为单独的响应式数据，并且值是关联的
- 为啥会有这种需求？
- 思考：定义了一个user的响应式数据,我只用了里面的name属性，但是setup里返回了整个user, 是不是有点多余？
### 08-组合API-toRefs函数
- 将响应式对象中的所有属性转换为单独的响应式数据
- 再解构，可以直接访问属性
- 修改属性值:属性.value
- 需求：我们不想用用user.name，而是直接用name访问.
- 使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。

### 08-组合API-ref函数
- 将简单数据类型转换为响应式数据
- 修改ref数据用.value
### 09-组合API-computed函数
- computed默认传的是方法，方法的返回值即计算属性的值 - 此时计算属性是只读的，
- 高级用法：传对象，重写set/get方法. 此时计算属性是可修改的
#### 1-创建计算属性
```js
    // 1.通过计算函数创建一个计算属性
    // computed函数返回值就是计算属性的值
    let result = computed(() => {
      return position.x + position.y;
    });
```
#### 2-修改计算属性
- 计算属性是不能修改的
- 能不能用v-model绑定计算属性？
```js
    // 1.定义计算属性：计算函数的返回值，即计算属性的值
    let newAge = computed({
      set(value) {
        age.value = value - 2;
      },
      get() {
        return age.value + 2;
      },
    });
```
### 09-组合API-watch函数
- 监听响应式数据的变化
- 默认没有开启深度监听
- 默认组件初始化时不触发
- 参数1:监听谁？
- 参数2:回调函数
- 参数3:配置对象{} 

#### -监听ref/reactive某个数据的变化
#### -监听多个数据的变化
- 数组[obj1, obj2]
```js
 // 2.监听多个响应式数据的变化
    watch([count, () => user.name], (newValue, oldValue) => {
      console.log(oldValue);
      console.log(newValue);
    });
```
#### -监听响应式数据某个属性的变化
- 1.属性要用函数的形式:() => user.name
- 如果监听的属性是简单数据类型
- 如果监听的属性是复杂数据类型的，属性变化默认是监听不到的，需开深度监听

```js
    const updateName = () => {
      user.father.name = "babaupdate";
    };
    // 监听reactive数据：
    // 1.如果你监听的数据的某个属性是简单数据类型的，那么属性变化也会触发watch回调
    // 2.但是你监听的数据的某个属性是复杂数据类型的，属性变化默认是监听不到的，需卡开启深度监听
    watch(
      () => user.father,
      (newVal, oldVal) => {
        console.log("数据改变了");
      },
      {
        // 1.是否开启深度监听？
        deep: true,
        // 是否组件初始化时就监听？
        // immediate: true,
      }
    );
```

### 10-组合API-ref属性
- vue2:
  - ref属性获取单个/多个元素
    - 1. 标签设置ref属性
    - 2. this.$refs.ref属性值
  
- vue3:
#### -ref属性获取单个元素
- 1 先定义一个空的响应式数据,并return返回出去
- 2 标签的ref设置值设置为该数据名，这是你的ref就跟元素绑定起来了
- 3 在onMounted钩子函数中直接通过该数据名.value获取

```html
    <h1 ref="title">title</h1>
```
```js
    const title = ref(null);
    onMounted(() => {
      console.log(title.value);
    });
```
#### -ref属性获取多个元素
- 1 定义一个空数组
- 2 定义一个函数，往空数组里push dom
- 3 设置ref属性为该函数
```html
  <ul>
      <li v-for="i in 4" :key="i" :ref="collectLi">{{ i }}</li>
</ul>
```
```js
    const lis = [];
    const collectLi = (el) => {
      lis.push(el);
    };
    console.log(lis);
```

### 11-组合API-父子通信
#### -父传子
- 父组件设置子组件prop属性
```js
  setup() {
    // 父传子
    const name = ref("son1");
    return { name };
  },
```

- 子组件获取父组件设置的prop属性值
```js
  setup(props) {
    // 在子组件中如何获取父组件传过来的数据？
    console.log(props.name);
    // onMounted(() => {
    //   // console.log(this.name);//Cannot read property 'name' of undefined
    // });
  },

```
### - 子传父
```js
  setup(props, { emit }) {
  
    // 2.子组件如何向父组件传值？
    const updateName = () => {
      emit("change-name", "zhangsan");
    };
    return { updateName };
  },
```
### 12-组合API-v-model新用法
- vue2实现双向数据绑定的两种方法：
  - 1. v-model
  - 2. .sync
- vue3新用法：是v-model和.sync的合并用法
  - 父组件：

#### v-model的基本使用
```html
 <div>
    <!-- v-model -->
    <son v-model="name" />
  </div>
```
  - 子组件：
```js
  setup(props, { emit }) {
      const updateName = () => {
        //
        emit("update:name", "zhangsan");
      };
      return { updateName };
    },

```
#### v-model具体是如何实现的
- 子组件
```js
    export default {
      name: "Son3",
      props: {
        modelValue: {
          type: Number,
          default: 0,
        },
      },
      setup(props, { emit }) {
        // 这样获取的属性值不是响应式的
        // let count = props.modelValue;
        const updateCount = () => {
          emit("update:modelValue", 100);
        };
        return { updateCount };
      },
    };
```
- 父组件
```html
  <!-- 原生事件$evnet=事件对象 -->
    <h1 @click="$event.target.style.color = 'red'">父组件count:{{ count }}</h1>
    <!-- 自定义事件$evnet=事件传参 -->
    <!-- <son :modelValue="count" @update:modelValue="count = $event" /> -->
    <!-- 用v-model简写: -->
    <son v-model="count" />
```


### 13-组合API-依赖注入
- 使用场景：父组件的某个数据/方法共享给所有后代组件
- 传值的方式：event bus/ vuex /emit/props/v-model
- 但我们只想这个组件下，共享某个数据/方法给所有后代组件

#### -父组件provide共享
```js
     setup() {
        let money = ref(100);
        // 1.父组件将数据共享给所有后代组件
        provide("money", money);
        // 2. 父组件共享方法给所有后代组件
        const updateMoney = (newValue) => {
          money.value = newValue;
        };
        provide("updateMoney", updateMoney);
        return { money };
    },
```
#### -后代组件inject获取
```js
      setup() {
          // 接收父组件共享的数据
          const money = inject("money");

          // 获取父组件共享的方法，修改数据
          const updateMoney = inject("updateMoney");

          return { money, updateMoney };
      },

```
### 14-组合API-混入对象mixins
- 一个混入对象可以包含任意组件选项。
- 当组件使用混入对象时，混入对象的选项将被混入（合并）到该组件本身的选项
- 可以把各组件选项里公共的部分提取到混入对象里
#### -全局混入
- 需求：所有组件渲染完毕后都打印一句话
```js
// main.js中注册全局混入对象
app.mixin({
    mounted() {
        // this.$el:组件的根元素
        console.log(this.$el, "dom准备好了");;
    },
})
```
#### -局部混入
- 组件
```html
    <div class="container1">
      <h1>
        作者：周杰伦
        <!-- 使用混入对象中的方法和data -->
        <a href="javascript:;" @click="follow">{{
          loading ? "关注中..." : "关注"
        }}</a>
      </h1>
      <hr />
      <Son />
    </div>
```
```js
    import Son from "./Son4.vue";
    import { followMixin } from "./mixins";
    export default {
      name: "App",
      components: {
        Son,
      },
      // 局部混入
      mixins: [followMixin],
    };

```
- mixins/index.js
```js
    export const followMixin = {
        // 关注逻辑
        data() {
            return {
                loading: false
            }
        },
        methods: {
            // 点击关注
            follow() {
                this.loading = true;
                // 模拟请求
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            }
        },
    }

```
### -混入的问题
- 属性覆盖/方法覆盖等逻辑代码冲突问题
- 解决：组合API，将逻辑封装在函数里，函数里提供数据和方法

### 15-路由vue-router
- vue2
```js
    import Router from "vue-router"
    import Vue from "vue"
    Vue.use(Router);
    const router =  new Router({
            mode:'hash',
            routes,
    });
    export default router;
```
- vue3
```js
      import { createRouter, createWebHashHistory } from "vue-router"
      const router = createRouter({
        // createWebHashHistory：哈希路由模式
        history: createWebHashHistory(),
        routes
      });
      export default router;
```

### 16-vuex容器
- vue2
```js
      import Vuex from "vuex"
      import Vue from 'vue'
      Vue.use(Vuex)
      const store = new Vuex.Store({
        modules: {
            app,
            settings,
            user,
            permission,
            tagsView,
        },
        getters
      })
      export default store
```
- vue3
```js
    import { createStore } from 'vuex'

    export default createStore({
      state: {
      },
      mutations: {
      },
      actions: {
      },
      modules: {
      }
    })

```
### 17-vue2与vue3的不同
- 数据响应式原理：劫持属性设置获取->劫持整个对象
- 新增组合API
- vue-router的创建
- vuex的创建
- v-model的新用法
- vue2组件必须要有根标签, vue3不需要
- ref属性获取元素















