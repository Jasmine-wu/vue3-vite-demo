<template>
  <div class="container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
  import { reactive, toRefs } from "vue";
  export default {
    name: "App",
    setup() {
      // 1. 响应式数据对象
      const obj = reactive({
        name: "ls",
        age: 10,
      });
      console.log(obj);
      // 2. 使用解构或者展开响应式数据对象并不是响应式的
      // const {name,age} = obj
      // console.log(name,age)
      // const obj2 = {...obj}
      // console.log(obj2)
      // 3. vue3使用toRefs解构的复杂对象成员也是响应式的
      const obj3 = toRefs(obj);
      console.log(obj3);

      const updateName = () => {
        obj3.name.value = "zs";
        //   obj.name = "zs";
      };

      return { ...obj3, updateName };
    },
  };
</script>
