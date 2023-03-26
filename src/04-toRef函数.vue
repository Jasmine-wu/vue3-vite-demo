<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="updateName">更新name</button>
  </div>
</template>
<script>
  import { reactive, toRef } from "vue";
  export default {
    setup() {
      // 1.定义响应式数据
      const user = reactive({
        name: "章三1",
        age: 100,
      });
      // 2. 将响应式对象里的某个属性转换成单独的响应式数据
      let name = toRef(user, "name");
      const updateName = () => {
        // 3. 更新toRef转换后的属性值
        name.value = "lish";
      };
      // 3. 这样返回时可以单独返回name，而不是整个user对象
      return { name, updateName };
    },
  };
</script>
