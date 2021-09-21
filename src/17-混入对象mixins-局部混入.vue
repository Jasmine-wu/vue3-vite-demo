<template>
  <div class="container1">
    <h1>
      作者：周杰伦
      <!-- 使用混入对象中的方法和data -->
      <a href="javascript:;" @click="follow">{{
        loading ? "关注中..." : "关注"
      }}</a>
    </h1>
    <hr />
    <Son />
  </div>
</template>
<script>
import Son from "./Son4.vue";
import { followMixin } from "./mixins";
export default {
  name: "App",
  components: {
    Son,
  },
  // 局部混入
  mixins: [followMixin],
};
</script>
