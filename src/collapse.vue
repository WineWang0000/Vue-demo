<template>
  <div class="collapseItem">
    <div class="title" @click="open=!open">
      {{title}}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      title:{
        type: String,
        required: true
      }
    },
    data:{
      open: false
    }
  }
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