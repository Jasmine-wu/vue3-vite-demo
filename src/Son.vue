<template>
  <div>
    <h1>Son name:{{ name }}</h1>
    <button @click="updateName">修改name</button>
    <h1>Son money: {{ money }}</h1>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "Son",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    // 1.在子组件中如何获取父组件传过来的数据？
    console.log(props.name);
    // onMounted(() => {
    //   // console.log(this.name);//Cannot read property 'name' of undefined
    // });

    // 2.子组件如何向父组件传值？
    const updateName = () => {
      emit("change-name", "zhangsan");
    };

    // 3.获取父组件共享的数据
    const money = inject("money");
    return { updateName, money };
  },
};
</script>