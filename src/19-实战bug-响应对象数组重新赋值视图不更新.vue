<template>
  <div>
    <h1 v-for="(item, index) in arr.goods" :key="index">{{ item }}</h1>
    <button @click="update">修改数组数据</button>
  </div>
</template>
<script>
  import { reactive } from "vue";
  export default {
    name: "App",
    setup() {
      //实现项目中的用法
      const arr = reactive({
        goods: [],
      });
      // 修改响应数组的数组
      const update = () => {
        // 获取新数据
        const newData = [1, 2, 3, 4];
        arr.goods = newData; //这样数组数据就不会被累加，每次更新都会被替换
      };

      return { arr, update };
    },
  };
</script>
