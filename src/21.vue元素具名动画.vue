<template>
  <div>
    <transition name="h">
      <h1 v-if="show">显示还是吟唱</h1>
    </transition>
    <button @click="show = !show">显示/隐藏</button>
  </div>
</template>
<script>
  import { ref } from "vue";
  export default {
    name: "App",
    setup() {
      const show = ref(true);
      return { show };
    },
  };
</script>
<style scoped>
  h1 {
    width: 100px;
    height: 100px;
    background: red;
  }

  /* v-enter-from /v-enter-active/ v-enter-to */
  /* 元素出现时添加透明度过渡动画 */
  /* 进入前 */
  .h-enter-from {
    height: 0;
  }
  /* 进入中 */
  .h-enter-active {
    transition: all 2s;
  }
  /* 进入后 */
  .h-enter-to {
    height: 100px;
  }
  /* v-leave /v-leave-active/ v-leave-to */
  /* 元素移除时添加透明度过渡动画 */
  /* 移除前 */
  .h-leave-from {
    height: 100px;
  }
  /* 移除中 */
  .h-leave-active {
    transition: all 2s;
  }
  /* 移除后 */
  .h-leave-to {
    height: 0px;
  }
</style>
