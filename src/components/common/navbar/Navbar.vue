<template>
  <div class='navBar'>
    <div class='left'>
      <slot name='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .navBar {
    height: 0.88rem;
    line-height: 0.88rem;
    display: flex;
    text-align: center;
  }

  .left, .right {
    width: 0.8rem;
  }

  .center {
    flex: 1;
  }
</style>
