<template>
  <div class="collapseItem">
      <slot></slot>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss">
  $border-radius: 4px;
  $color: #ddd;
  .collapseItem{
    > .title{
      border: 1px solid $color;
      margin-top: -1px;
      margin-left: 1px;
      margin-right: -1px;
    }
    &:first-child{
      > .title{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
  }
</style>