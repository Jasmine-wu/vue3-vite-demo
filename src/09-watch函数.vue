<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="add">count+1</button>
    <h1>name:{{ name }}</h1>
    <button @click="updateName">修改name</button>
  </div>
</template>
<script>
import { reactive, ref, toRefs, watch } from "vue";
export default {
  name: "App",
  setup() {
    let count = ref(0);
    const user = reactive({
      name: "hangsan",
      age: 100,
    });

    const add = () => {
      count.value++;
    };
    const updateName = () => {
      user.name = "lisi";
    };
    // 1. 监听ref数据的变化
    watch(count, (newValue, oldValue) => {
      console.log(oldValue);
      console.log(newValue);
    });
    // 3. 监听响应式数据某个属性的变化
    watch(
      () => user.name,
      (newValue, oldValue) => {
        console.log(oldValue);
        console.log(newValue);
      }
    );
    // 2.监听多个响应式数据的变化
    watch([count, () => user.name], (newValue, oldValue) => {
      console.log(oldValue);
      console.log(newValue);
    });

    return { count, add, updateName, ...toRefs(user) };
  },
};
</script>