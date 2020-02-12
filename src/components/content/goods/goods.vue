<template>
  <div class='goods'>
    <goods-item v-for='item in goods' :goodsList='item'></goods-item>
  </div>

</template>

<script>
  import goodsItem from './goodsItem'

  export default {
    name: "",
    data() {
      return {}
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      goodsItem
    },
    methods: {}
  }
</script>

<style scoped>
  .goods {
    width: 98%;
    margin: 1%;
    text-align: center;
  }

  /*.goodsItem {*/
  /*width: 49%;*/
  /*margin: 0.5%;*/
  /*display: inline-block;*/
  /*}*/

  /*.goodsItem img {*/
  /*width: 100%;*/
  /*}*/

  /*.title {*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*white-space: nowrap;*/
  /*display: block;*/
  /*}*/

  /*.price {*/
  /*color: #ff5777;*/
  /*}*/

  /*.icon {*/
  /*padding-top: 0.02rem;*/
  /*background: url("~assets/img/common/collect.svg");*/
  /*height: 0.3rem;*/
  /*width: 0.3rem;*/
  /*display: inline-block;*/
  /*background-size: contain;*/
  /*}*/
</style>
