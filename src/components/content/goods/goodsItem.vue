<template>
  <div class='goodsItem' @click='goodsItemClick'>
    <img :src="goodsList.show.img" alt="" @load='goodsLoad'>
    <div class='title'>{{goodsList.title}}</div>
    <div>
      <span class='price'>{{goodsList.price}}</span>
      <i class='icon'></i>
      <span>{{goodsList.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      goodsList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      goodsLoad() {
        /*事件总线*/
        this.$bus.$emit('goodsLoadImg');
      },
      goodsItemClick() {
        this.$router.push({
          path:'detail',
          query:{
            iid:this.goodsList.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goodsItem {
    width: 49%;
    margin: 0.5%;
    display: inline-block;
  }

  .goodsItem img {
    width: 100%;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  .price {
    color: #ff5777;
  }

  .icon {
    padding-top: 0.02rem;
    background: url("~assets/img/common/collect.svg");
    height: 0.3rem;
    width: 0.3rem;
    display: inline-block;
    background-size: contain;
  }
</style>
