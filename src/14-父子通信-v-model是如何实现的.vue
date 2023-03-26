<template>
  <div>
    <!-- 原生事件$evnet=事件对象 -->
    <h1 @click="$event.target.style.color = 'red'">父组件count:{{ count }}</h1>
    <!-- 自定义事件$evnet=事件传参 -->
    <!-- <son :modelValue="count" @update:modelValue="count = $event" /> -->
    <!-- 用v-model简写: -->
    <son v-model="count" />
  </div>
</template>
<script>
  import Son from "./Son3.vue";
  import { ref } from "vue";
  export default {
    components: {
      Son,
    },
    setup() {
      let count = ref(0);
      return { count };
    },
  };
</script>
