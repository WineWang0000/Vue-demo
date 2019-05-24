<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
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
      },
    },
    data:{
     open: false
    },
    inject:['eventBus'],
    mounted(){
      this.eventBus && this.eventBus.$on('update: selected', (name)=>{
        if(name!== this.name){
          this.close()
        }else{
          this.show()
        }
      })
    },
    methods:{
      toggle(){
        if(this.open){
          this.open = false
        }else{
          this.open = true
          this.eventBus && this.eventBus.$emit('update: selected', this.name)
        }
      },
      close(){
        this.open = false
      },
      show(){
        this.open = true
      }
    }
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