
<script>
import { h } from "vue";
export default {
  name: "Breadcrumb",

  //   要用render函数，先把template去掉
  //   h函数：参数1: 标签名 参数2:标签属性和数据，参数3，该标签的children，返回vnode
  //   this.$slots.default() 这个组件里的子内容
  render() {
    const childrens = this.$slots.default();
    const newChildrens = [];

    childrens.forEach((chirldren, index) => {
      if (chirldren.type.name === "BreadcrumbItem") {
        newChildrens.push(chirldren);
        if (index < childrens.length - 1) {
          const nextNode = h("i", " > ");

          newChildrens.push(nextNode);
        }
      }
    });
    return h("breadcrumb", { class: "breadcrumb" }, newChildrens);
  },
};
</script>
<style scoped>
.breadcrumb {
  display: flex;
}
</style>