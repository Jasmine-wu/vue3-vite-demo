<template>
  <div class="box">
    <div class="box1">box1</div>
    <!-- 1.3 -->
    <div class="box2" ref="target">{{ isVisiable }}</div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    const target = ref(null);
    let isVisiable = ref(false);

    let observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          console.log("出现在可视区");
          // 一旦出现一次在可视区
          if (isIntersecting) {
            // 移除观察
            observer.unobserve(target.value);
            // 懒加载数据
          }
        }
      },
      {
        threshold: 0,
      }
    );
    // 开始观察
    onMounted(() => {
      observer.observe(target.value);
    });

    return { target, isVisiable };
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
  height: 2000px;
  background-color: blue;
}
</style>


