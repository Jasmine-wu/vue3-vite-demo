<template>
  <div>
    <div>{{ name }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
  import { ref } from "vue";
  export default {
    name: "App",
    setup() {
      // 1. name数据
      const name = ref("zhang");
      console.log(name);
      function updateName() {
        name.value = "lis";
      }

      // ref常用定义简单数据类型的响应式数据
      // 其实也可以定义复杂数据类型的响应式数据
      // 对于数据未之的情况下 ref 是最适用的
      // const data = ref(null)
      // setTimeout(()=>{
      //   data.value = res.data
      // },1000)

      return { name, updateName };
    },
  };
</script>
