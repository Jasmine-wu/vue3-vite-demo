<template>
  <div>
    <transition>
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
.v-enter-from {
  opacity: 0;
}
/* 进入中 */
.v-enter-active {
  transition: all 2s;
}
/* 进入后 */
.v-enter-to {
  opacity: 1;
}
/* v-leave /v-leave-active/ v-leave-to */
/* 元素移除时添加透明度过渡动画 */
/* 移除前 */
.v-leave-from {
  opacity: 1;
}
/* 移除中 */
.v-leave-active {
  transition: all 2s;
}
/* 移除后 */
.v-leave-to {
  opacity: 0;
}
</style>
