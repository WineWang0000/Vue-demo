<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
  @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon"  v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default{
    props:{
      icon:{},
      loading:{
        type: Boolean,
        default: false
      },
      iconPosition:{
        type: String,
        default: 'left',
        validator(value){
          return value === 'left' || value ==='right'
        }
      }
    }
  }
</script>
<style lang="scss">
  .g-button{
    height:var(--height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius:var(--button-border-radius);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:focus{outline: none;}
    > .icon{order:1;}
    > .content{order: 2;}
    &.icon-right{
      > .icon{order:2;}
      > .content{order:1;}
    }
  }
  @keyframes x{
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
  }
  .loading{
    animation: x 2s infinite linear;
  }
</style>