<template>
  <div>
    <h1>{{ user.name }}</h1>
    <button @click="updateName">更新name</button>
  </div>
</template>
<script>
  // 注意：组合API是从vue导入的
  import { onBeforeUpdate, onUpdated, reactive } from "vue";
  export default {
    setup() {
      // 1.定义响应式数据
      const user = reactive({
        name: "章三",
        age: 100,
      });
      //2. 更新响应式数据
      const updateName = () => {
        user.name = "lish";
      };
      onBeforeUpdate(() => {
        console.log("onBeforeUpdate call");
      });
      onUpdated(() => {
        console.log("onUpdated call");
      });

      // 遗留的问题：我只使用了name，但是却返回user，这样是没必要的
      // 解决：toRef
      return { user, updateName };
    },
  };
</script>
