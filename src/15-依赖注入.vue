<template>
  <div>
    <h1>父组件money:{{ money }}</h1>
    <son />
    <gran-son></gran-son>
  </div>
</template>
<script>
import Son from "./Son.vue";
import GranSon from "./GranSon.vue";
import { provide, ref } from "vue";
export default {
  components: {
    Son,
    GranSon,
  },
  setup() {
    let money = ref(100);
    // 1.父组件将数据共享给所有后代组件
    provide("money", money);
    // 2. 父组件共享方法给所有后代组件
    const updateMoney = (newValue) => {
      money.value = newValue;
    };
    provide("updateMoney", updateMoney);
    return { money };
  },
};
</script>