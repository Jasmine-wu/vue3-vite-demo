<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="printL">点击打印</button>
  </div>
</template>
<script>
import { onBeforeMount } from "@vue/runtime-core";
export default {
  name: "App",
  //1.setup在beforeCreated之前调用
  setup() {
    //  2. setup中无this
    console.log("setup call:", this);
    //  DOM挂载/更新/卸载
    // onBeforeMount(() => {
    //   console.log("DOM挂载之前调用");
    // });
    const msg = "123";
    const printL = () => {
      console.log("printl call:", this);
    };

    return { printL, msg };
  },
  beforeCreate() {
    console.log("beforeCreate call");
  },
};
</script>