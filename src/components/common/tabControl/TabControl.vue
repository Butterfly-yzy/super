<template>
  <div class='tabControl'>
    <div v-for='(item,index) in titles'
         class='controlItem'
         @click='tabControlClick(index)'>
      <span :class='{active:currentIndex===index}'>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array
      }
    },
    methods: {
      tabControlClick(index) {
        this.currentIndex = index;
        this.$emit('tabControlIndex', index)
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    height: 0.8rem;
    display: flex;
    font-size: 0.36rem;
    line-height: 0.8rem;
    text-align: center;
  }

  .controlItem {
    flex: 1;
  }

  .controlItem span {
    padding: 0.03rem;
  }

  .active {
    border-bottom: 0.02rem solid #ff5777;
    color: #ff5777;
  }
</style>
