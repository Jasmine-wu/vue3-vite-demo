<template>
  <div>
    <h1>name:{{ father.name }}</h1>
    <button @click="updateName">修改father name</button>
  </div>
</template>
<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "App",
  setup() {
    const user = reactive({
      name: "hangsan",
      age: 10,
      father: {
        name: "baba",
        age: 200,
      },
    });

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
        deep: true,
        // immediate: true,
      }
    );

    return { updateName, ...toRefs(user) };
  },
};
</script>