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
    name: "GuluCollapseItem",
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
  console.log(1);
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