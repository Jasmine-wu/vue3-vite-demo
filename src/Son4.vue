<template>
  <div class="container2">
    <h2>
      作者：周杰伦
      <!-- 使用混入对象里的menthod和data -->
      <button @click="follow">{{ loading ? "关注中..." : "关注" }}</button>
    </h2>
  </div>
</template>
<script>
import { followMixin } from "./mixins";
export default {
  name: "Son4",
  // 局部混入
  mixins: [followMixin],
};
</script>
<style scoped lang="less"></style>
