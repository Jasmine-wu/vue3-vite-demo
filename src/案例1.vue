<template>
  <div>
    <h1>x坐标:{{ x }}</h1>
    <h1>y坐标:{{ y }}</h1>
    <h1>counter:{{ count }}</h1>
    <button @click="add">count+1</button>
  </div>
</template>
<script>
  import { onMounted, reactive, toRefs, ref } from "vue";
  export default {
    name: "App",
    setup() {
      // 1. 定义复杂数据类型为响应式数据
      const position = reactive({
        x: 100,
        y: 100,
      });

      const updatePosition = (e) => {
        position.x = e.pageX;
        position.y = e.pageY;
      };
      // 1. 定义简单数据类型为响应式数据
      let count = ref(1);
      const add = () => {
        count.value += 1;
      };

      //dom挂载之后
      onMounted(() => {
        document.addEventListener("mousemove", updatePosition);
      });

      return { ...toRefs(position), count, add };
    },
  };
</script>
