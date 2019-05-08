<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
      <svg v-if="icon" class="icon">
        <use :xlink:href=`#icon-${icon}`>
        </use>
      </svg>
      <div class="content">
        <slot></slot>
      </div>
    </button>
</template>
<script>
  export default{
    props:{
      icon:{},
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
    &:hover{border-color:var(--border-color-hover);}
    > .icon{order:1;}
    > .content{order: 2;}
    &.icon-right{
      > .icon{order:2;}
      > .content{order:1;}
    }
  }
</style>