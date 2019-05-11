<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid green;height: 100px;"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
    },
     data(){
      return {
        gutter:0
      }
     },
    created(){},
    mounted(){},
  }
</script>
<style lang="scss" scoped>
  .col{
    padding: 5px 10px;
    height: 100px;
    width: 50%;
    $class: col-;
    @for $n from 1 through 24{
      &.#{$class}#{$n}{
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-;
    @for $n from 1 through 24{
      &.#{$class}#{$n}{
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>