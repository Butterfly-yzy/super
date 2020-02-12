<template>
  <div class='tabbar-item' @click='tabbarItemClick'>
    <div v-if='activeIcon'>
      <slot name='icon-tabbar'></slot>
    </div>
    <div v-else>
      <slot name='icon-tabbar-active'></slot>
    </div>
    <div :style='activeText'>
      <slot name='text-tabbar'></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {}
    },
    props: {
      path: {
        type: String,
      },
      colorText: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      activeIcon() {
        return this.$route.path.indexOf(this.path) == -1;
      },
      activeText() {
        return this.activeIcon ? {} : {color: this.colorText};
      }
    },
    methods: {
      tabbarItemClick() {
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 0.2rem;
  }

  .tabbar-item img {
    height: 0.44rem;
    width: 0.44rem;
    margin-top: 0.04rem;
  }
</style>
