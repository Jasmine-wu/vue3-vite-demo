<template></template>
<template>
  <div>
    <h1 v-for="(item, index) in arr" :key="index">{{ item }}</h1>
    <button @click="update">修改数组数据</button>
  </div>
</template>
<script>
  import { reactive } from "vue";
  export default {
    name: "App",
    setup() {
      //定义响应数组
      const arr = reactive([]);
      // 修改响应数组的数组
      const update = () => {
        const newData = [1, 2, 3, 4];
        // 1.错误赋值方式
        // arr = [1, 2, 3, 4]; //响应失败
        // 2.正确赋值方式2
        arr.push(...newData); //响应成功
        // push带来的问题：每次push都是往原数组的基础上增加数据，数据会累积
        // 实际项目中的用法：
        // 见下一个demo
      };

      return { arr, update };
    },
  };
</script>
