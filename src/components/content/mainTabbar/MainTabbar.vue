<template>
  <tab-bar>
    <tab-bar-item path='/home' colorText='#ff5777'>
      <img src="~assets/img/tabbar/home.svg" alt="" slot='icon-tabbar'>
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot='icon-tabbar-active'>
      <div slot='text-tabbar'>首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' colorText='#ff5777'>
      <img src="~assets/img/tabbar/category.svg" alt="" slot='icon-tabbar'>
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot='icon-tabbar-active'>
      <div slot='text-tabbar'>分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart' colorText='#ff5777'>
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot='icon-tabbar'>
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot='icon-tabbar-active'>
      <div slot='text-tabbar'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' colorText='#ff5777'>
      <img src="~assets/img/tabbar/profile.svg" alt="" slot='icon-tabbar'>
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot='icon-tabbar-active'>
      <div slot='text-tabbar'>我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/Tabbar'
  import TabBarItem from 'components/common/tabbar/TabbarItem'

  export default {
    name: "MainTabbar",
    data() {
      return {}
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
