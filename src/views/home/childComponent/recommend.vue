<template>
  <div class='recommend'>
    <div v-for='item in recommend' class='recommendItem'>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
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
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
  }

  .recommendItem {
    flex: 1;
  }

  .recommendItem img {
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
