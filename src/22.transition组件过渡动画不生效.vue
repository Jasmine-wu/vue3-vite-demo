<template>
  <!-- transition动画生效的前提条件：元素要有创建（enter）和移除（leave）变化 -->
  <transition name="fade">
    <div class="box1" v-if="show">box1</div>
    <div class="box2" v-else>box2</div>
  </transition>

  <button @click="show = !show">切换显示/隐藏</button>
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
<style lang="less" scoped>
.box1 {
  width: 100px;
  height: 50px;
  background-color: red;
}

.box2 {
  width: 100px;
  height: 50px;
  background-color: blue;
}

.fade {
  &-leave {
    &-from {
      opacity: 1;
    }
    &-active {
      position: absolute;
      transition: opacity 2s;
    }
    &-to {
      opacity: 0;
    }
  }
}
</style>


