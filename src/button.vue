<template>
  <button class="g-button">按钮</button>
</template>
<script>
  export default{}
</script>
<style lang="scss">
  .g-button{
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius:var(--button-border-radius);
  }
  .g-button:hover{border-color:var(--border-color-hover);}
</style>