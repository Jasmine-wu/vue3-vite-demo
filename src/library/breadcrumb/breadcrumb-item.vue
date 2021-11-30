<template>
  <!-- 面包屑组件 -->
  <div class="breadcrumb-item">
    <slot />
  </div>
</template>
<script>
export default {
  name: "BreadcrumbItem",
};
</script>
<style scoped>
.breadcrumb-item {
  font-size: 20px;
}
</style>