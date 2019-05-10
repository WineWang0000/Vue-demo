<template>
  <div class="wrapper" :class="{error}">
    <input v-bind:value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon'
  export default{
    components:{Icon},
    props:{
      value:{
        type: String
      },
      disabled:{
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default:false
      },
      error:{
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #bbb;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.9);
  .wrapper{
    display: inline-block;
    font-size: $font-size;
    > input{
      cursor: pointer;
      height: $height;
      border: 1px solid $border-color;
      padding: 0 8px;
      font-size: inherit;
      border-radius:$border-radius;
      &:hover{border-color: $border-color-hover;}
      &:focus{outline:none;box-shadow:inset 0 1px 3px $box-shadow-color;}
      &[disabled],&[readonly]{border-color: #333;color: #bbb;cursor: not-allowed;}
    }
      &.error{color: #F1453D;}
     .icon-error{fill: red;}
  }
</style>