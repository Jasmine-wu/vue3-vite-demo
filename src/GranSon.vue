<template>
  <h1>GranSon money: {{ money }}</h1>
  <button @click="updateMoney(money - 50)">
    updateMoney - 50= {{ money }}
  </button>
</template>
<script>
  import { inject } from "vue";
  export default {
    setup(props, { emit }) {
      // 接收父组件共享的数据
      const money = inject("money");

      // 获取父组件共享的方法，修改数据
      const updateMoney = inject("updateMoney");

      return { money, updateMoney };
    },
  };
</script>
