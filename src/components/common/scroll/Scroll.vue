<template>
  <div ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import Bscroll from 'better-scroll';

  export default {
    data() {
      return {
        scroll: null,

      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', position => {
        this.$emit('scrollPosition', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUpScroll')
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      pullUpFinish() {
        this.scroll.finishPullUp();
      },
      scrollrefresh(){
        console.log('---refresh')
        this.scroll.refresh();
      }
    }
  }
</script>
