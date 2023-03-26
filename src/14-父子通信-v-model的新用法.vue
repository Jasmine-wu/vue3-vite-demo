<template>
  <div>
    <!-- v-model -->
    <son v-model:name="name" />
  </div>
</template>
<script>
  import Son from "./Son2.vue";
  import { ref } from "vue";
  export default {
    name: "App",
    components: {
      Son,
    },
    setup() {
      // 父传子
      const name = ref("son2");
      return { name };
    },
  };
</script>
