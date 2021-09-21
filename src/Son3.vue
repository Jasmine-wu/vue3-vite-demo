<template>
  <div>
    <!-- 直接使用传进来的响应式数据 -->
    <h1>Son3 count:{{ modelValue }}</h1>
    <button @click="updateCount">修改count</button>
  </div>
</template>
<script>
export default {
  name: "Son3",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    // 这样获取的属性值不是响应式的
    // let count = props.modelValue;
    const updateCount = () => {
      emit("update:modelValue", 100);
    };
    return { updateCount };
  },
};
</script>