<template>
  <div id='home'>
    <nav-bar class='navBar'>
      <div slot='center'>购物街</div>
    </nav-bar>
    <tab-control :titles='titles'
                 ref='tabControl1'
                 v-show='offsetTopTabFlag'
                 @tabControlIndex='tabControlIndex'></tab-control>
    <scroll class="scrollCotent"
            @scrollPosition='scrollPosition'
            @pullingUpScroll='pullingUpScroll'
            :probeType='3'
            :pullUpLoad='true'
            ref='scrollRef'>
      <home-swiper :banner='banner'
                   @swiperLoadImg='swiperLoadImg'></home-swiper>
      <recommend :recommend='recommend'></recommend>
      <feature-view></feature-view>
      <tab-control :titles='titles'
                   ref='tabControl'
                   v-show='!offsetTopTabFlag'
                   @tabControlIndex='tabControlIndex'></tab-control>
      <goods :goods="dataTypeTab"></goods>
    </scroll>
    <back-to @click.native='backToTop' v-show='backToShow'></back-to>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/Navbar'
  import TabControl from 'components/common/tabControl/TabControl'
  import goods from 'components/content/goods/goods'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTo from 'components/content/backTo/BackTo'

  import {homeData, getHomeGoods} from "network/home";

  import {optRequests} from 'common/js/expand'

  import homeSwiper from './childComponent/homeSwiper'
  import recommend from './childComponent/recommend'
  import featureView from './childComponent/featureView'

  export default {
    name: "",
    data() {
      return {
        banner: [],
        keywords: [],
        recommend: [],
        titles: ['流行', '新款', '时尚'],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        tabControlType: 'pop',
        backToShow: false,
        scrollHomeY: 0,
        offsetTopTab: 0,
        offsetTopTabFlag: false
      }
    },
    computed: {
      dataTypeTab() {
        return this.goods[this.tabControlType].list;
      }
    },
    created() {
      homeData().then(res => {
        this.banner = res.data.banner.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      })
      this.goodsData('pop');
      this.goodsData('new');
      this.goodsData('sell');
    },
    components: {
      NavBar,
      TabControl,
      Scroll,
      goods,
      BackTo,
      homeSwiper,
      recommend,
      featureView
    },
    mounted() {
      const refreshImg = optRequests(this.$refs.scrollRef.scrollrefresh, 500)
      this.$bus.$on('goodsLoadImg', () => {
        refreshImg();
      })

    },
    methods: {
      swiperLoadImg() {
        console.log('轮播图加载了');
        this.offsetTopTab = this.$refs.tabControl.$el.offsetTop;
        this.offsetHeightTab = this.$refs.tabControl.$el.offsetHeight;
      },
      pullingUpScroll() {
        this.goodsData(this.tabControlType);
        console.log('拉倒底部');
      },
      scrollPosition(position) {
        this.backToShow = (-position.y) > 1000;
        this.offsetTopTabFlag = (-position.y) > this.offsetTopTab - this.offsetHeightTab;
      },
      backToTop() {
        console.log('backToTop');
        this.$refs.scrollRef.scrollTo(0, 0, 500);
      },
      goodsData(type) {
        const page = this.goods[type].page;
        getHomeGoods(type, page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scrollRef.pullUpFinish();
        })
      },
      tabControlIndex(index) {
        switch (index) {
          case 0:
            this.tabControlType = 'pop';
            break;
          case 1:
            this.tabControlType = 'new';
            break;
          case 2:
            this.tabControlType = 'sell';
            break;
        }
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
      }
    },
    destroyed() {
      console.log('destroyed')
    },
    activated() {
      this.$refs.scrollRef.scrollTo(0, this.scrollHomeY, 0);
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated');
      this.scrollHomeY = this.$refs.scrollRef.scroll.y;
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    width: 100%;
    font-size: 0.32rem;
  }

  .scrollCotent {
    height: calc(100% - 1.76rem);
    overflow: auto;
  }

  .navBar {
    background: var(--color-tint);
    color: white;
    font-size: 0.32rem;
  }

  .tabControlFlex {
    position: fixed;
    top: 0.88rem;
    left: 0;
    z-index: 11;
  }
</style>
