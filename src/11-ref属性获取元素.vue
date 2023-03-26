<template>
  <div>
    <!-- 1. ref属性获取单个元素-->
    <h1 ref="title">title</h1>
    <!-- 2. ref属性获取多个元素-->
    <ul>
      <li v-for="i in 4" :key="i" :ref="collectLi">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
  import { onMounted, ref } from "vue";
  export default {
    name: "App",
    setup() {
      // vue3：
      // 1.ref属性获取单个元素
      // 1.1 先定义一个空的响应式数据,并return返回出去
      // 1.2 标签的ref设置值设置为该数据名，这是你的ref就跟元素绑定起来了
      // 1.3 在onMounted钩子函数中直接通过该数据名.value获取

      const title = ref(null);
      onMounted(() => {
        console.log(title.value);
      });

      // 2.ref属性获取多个元素
      // 2.1 定义一个空数组
      // 2.2 定义一个函数，往空数组里push dom
      // 2.3 设置ref属性为该函数
      const lis = [];
      const collectLi = (el) => {
        lis.push(el);
      };
      console.log(lis);
      return { title, collectLi };
    },
  };
</script>
