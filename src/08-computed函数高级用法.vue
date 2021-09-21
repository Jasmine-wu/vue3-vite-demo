<template>
  <div>
    <h1>age:{{ age }}</h1>
    <h1>计算属性newAge:{{ newAge }}</h1>
    <input type="text" v-model="newAge" />
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "App",
  setup() {
    const age = ref(2);

    // 1.定义计算属性：计算函数的返回值，即计算属性的值
    let newAge = computed({
      set(value) {
        age.value = value - 2;
      },
      get() {
        return age.value + 2;
      },
    });

    // 2.计算属性readOnly，不能修改的
    // 你想修改，必须重写set/get方式

    return { age, newAge };
  },
};
</script>