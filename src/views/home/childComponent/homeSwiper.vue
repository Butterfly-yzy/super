<template>
  <swiper>
    <swiper-item v-for='item in banner'>
      <a :href="item.link">
        <img :src="item.image" alt="" @load='swiperLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "",
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        flag: true
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperLoad() {
        if (this.flag) {
          this.$emit('swiperLoadImg');
          this.flag = false;
        }

      }
    }
  }
</script>

<style scoped>

</style>
