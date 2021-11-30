<template>
  <div class="box">
    <div class="box1">box1</div>
    <!-- 1.3 -->
    <div class="box2" ref="target">{{ isVisiable }}</div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
export default {
  name: "App",
  setup() {
    // 懒加载实现思路： 当元素第一次出现在可视区时加载一次数据，再次出现在可视区不加载

    // 1.vue3获取dom元素
    // 1.1 定义ref数据
    // 1.2 return
    // 1.3 标签ref属性绑定这个数据
    const target = ref(null);
    const isVisiable = ref(false);

    // 2. 监听元素是否出现在可视区
    // target：监听哪个元素是否出现在可视觉
    // isIntersecting： 是否在可视区
    // stop: 停止监听函数
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        console.log(isIntersecting);
        // 如果被监听的元素出现在了可视觉区
        if (isIntersecting) {
          // 就停止监听
          stop();
          // 并开始加载数据requestData
        }
        isVisiable.value = isIntersecting;
      }
    );

    return { isVisiable, target };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 200px;
  height: 10000px;
}
.box1 {
  width: 100px;
  height: 50px;
  background-color: red;
}

.box2 {
  margin-top: 700px;
  width: 100px;
  height: 50px;
  background-color: blue;
}
</style>


