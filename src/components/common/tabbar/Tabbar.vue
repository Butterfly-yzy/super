<template>
  <div class='tabBar'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .tabBar {
    display: flex;
    height: 0.88rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 1px 1px 4px #666666;
    background: white;
  }
</style>
