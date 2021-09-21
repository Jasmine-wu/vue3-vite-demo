<template>
  <div>
    <h1>x:{{ x }}</h1>
    <h1>y:{{ y }}</h1>
    <h1>x+y=:{{ result }}</h1>
    <button @click="addX">x+1</button>
    <button @click="addY">y+1</button>
  </div>
</template>
<script>
import { reactive, toRefs, computed } from "vue";
export default {
  name: "App",
  setup() {
    const position = reactive({
      x: 100,
      y: 100,
    });

    const addX = () => {
      position.x++;
    };
    const addY = () => {
      position.y++;
    };

    // 1.通过计算函数创建一个计算属性
    let result = computed(() => {
      return position.x + position.y;
    });

    return { ...toRefs(position), result, addX, addY };
  },
};
</script>