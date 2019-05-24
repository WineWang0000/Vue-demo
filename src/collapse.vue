<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
    name: "GuluCollapse",
    data(){
      return{
        eventBus: new Vue()
      }
    },
    props:{
      single:{
        type: Boolean,
        default: false
      }
    },
    provide(){
      if(this.single){
        return{
          eventBus: this.eventBus
        }
      }
    }
  }
  console.log(2);
</script>
<style lang="scss" scoped>
  $color: #ddd;
  $border-radius: 4px;
  .collapse{
    border: 1px solid $color;
    border-radius: $border-radius;
  }
</style>