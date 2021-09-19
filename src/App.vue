<template>
  <div>
    <h1></h1>
    <button>更新msg</button>
  </div>
</template>
<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
export default {
  setup() {
    // DOM挂载/更新/卸载
    onBeforeMount(() => {
      console.log("onBeforeMount call");
    });
    onMounted(() => {
      console.log("mounted call");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate call");
    });
    onUpdated(() => {
      console.log("onUpdated call");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount call");
    });
    onUnmounted(() => {
      console.log("onUnmounted call");
    });
  },
};
</script>
