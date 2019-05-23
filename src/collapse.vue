<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: "GuluCollapse"
  }
  console.log(2);
</script>
<style lang="scss" scoped>
  $color: #ddd;
  $border-radius: 4px;
  .collapse{
    border: 1px solid $color;
    border-radius: $border-radius;
    display: block;
  }
</style>