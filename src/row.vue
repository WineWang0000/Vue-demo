<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props:{
      gutter:{
        type: [String, Number]
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    computed:{
      rowStyle(){
        let {gutter} = this
        console.log(this);
        return{
          marginLeft: -gutter/2 + 'px',
          marginRight: -gutter/2 + 'px'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
  }
</style>