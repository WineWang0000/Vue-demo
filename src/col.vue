<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div></div>
    <slot></slot>
  </div>
</template>
<script>
  let validator = (value)=>{
		console.log(value)
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key =>{
      if(!['span', 'offset',].includes(key)){
        valid = false
      }
    })
    return valid
  }
  export default{
    props: {
      span: {
        type: [Number,String]
      },
      offset: {
        type: [Number,String]
      },
      phone:{type: Object,validator},
      ipad:{type:Object, validator,},
      pc:{type:Object, validator,},
    },
     data(){
      return {
        gutter:0
      }
     },
    computed:{
      colStyle(){
        return{
          paddingLeft: this.gutter/2 + 'px',
          paddingRight:this.gutter/2 + 'px'
        }
      },
      colClass(){
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
        let phoneClass= []
        let ipadClass = []
        if(phone){
          phoneClass = [`col-phone-${phone.span}`]
        }
        if(ipad){
          ipadClass = [`col-ipad-${ipad.span}`]
        }
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ... phoneClass,
          ... ipadClass,
        ]
      },
    }
  }
</script>
<style lang="scss" scoped>
  .col{
    padding: 5px 10px;
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
  @media(max-width:576px){
    $class: col-phone-;
    @for $n from 1 through 24{
      &.#{$class}#{$n}{
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-phone-;
    @for $n from 1 through 24{
      &.#{$class}#{$n}{
        margin-left: ($n / 24) * 100%;
      }
    }
  }
    @media(min-width:578px) and (max-width:778px){
      $class: col-ipad-;
      @for $n from 1 through 24{
        &.#{$class}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-ipad-;
      @for $n from 1 through 24{
        &.#{$class}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>