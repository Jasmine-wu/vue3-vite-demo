<template>
  <div>
    <h1>Son2 name:{{ name }}</h1>
    <button @click="updateName">修改name</button>
  </div>
</template>
<script>
  export default {
    name: "Son2",
    props: {
      name: {
        type: String,
      },
    },
    setup(props, { emit }) {
      // 2.子组件如何向父组件传值？
      const updateName = () => {
        emit("update:name", "zhangsan");
      };
      return { updateName };
    },
  };
</script>
