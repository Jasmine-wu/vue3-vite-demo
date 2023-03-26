<template>
  <div>
    <son :name="name" @change-name="name = $event" />
  </div>
</template>
<script>
  import Son from "./Son.vue";
  import { ref } from "vue";
  export default {
    name: "App",
    components: {
      Son,
    },
    setup() {
      // 父传子
      const name = ref("son1");
      return { name };
    },
  };
</script>
