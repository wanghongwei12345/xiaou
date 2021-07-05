<template>
  <div class="bw">
    <div class="head">
      <h2>小U商城</h2>
      <div class="banner">
        <span class="iconfont">&#xe613;</span>
        <span><img src="../../../assets/img/logo.jpg" alt="" /></span>
        <span
          ><input type="text" placeholder="请输入关键字" @click="fn1()"
        /></span>
        <span class="iconfont">&#xe663;</span>
      </div>
      <div class="cal">
        <p v-for="item in homeCate" :key="item.id" @click="cla(item.id)">{{item.catename}}</p>
        <p>分类</p>
      </div>
    </div>
    <div class="slide">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in homebanner" :key="item.id" > 
          <img :src="$pre+ item.img" alt="">
        </van-swipe-item>
        
      </van-swipe>
    </div>
    <div class="bann">
      <ul>
        <li>限时秒杀</li>
        <li>畅销商品</li>
        <li>品质大牌</li>
        <li>小U自营</li>
        <li>积分商城</li>
      </ul>
    </div>
    <div class="bad">
      <div class="left">
        <p>限时秒杀 <span> 查看跟多</span></p>
      </div>
      <div class="right">
        <div class="top">
          <p>品牌上新</p>
        </div>
        <div class="bottom">
          <p>日用好物</p>
        </div>
      </div>
    </div>
    <div class="detal">
      <div class="top">
        <div class="left">
          <p>双11尖货预购</p>
        </div>
        <div class="right">
          <p>畅销全球</p>
        </div>
      </div>
      <div class="bottom">
          <van-tabs type="card">
            <van-tab title="是否新品">
              <van-card
                v-for="item in newGoods"
                
                @click="fn(item.id)"
                :key="item.id"
                :price="item.price"
                :title="item.goodsname"
                :thumb="$pre + item.img"
              />
            </van-tab>
            <van-tab title="是否热卖">
              <van-card
                v-for="item in hotGoods"
                @click="fn(item.id)"
                :key="item.id"
                :price="item.price"
                :title="item.goodsname"
                :thumb="$pre + item.img"
              />
            </van-tab>
            <van-tab title="推荐商品">
              <van-card
                v-for="item in pickGoods"
                @click="fn(item.id)"
                :key="item.id"
                :price="item.price"
                :title="item.goodsname"
                :thumb="$pre + item.img"
              />
            </van-tab>
          </van-tabs>
        </div>
      
    </div>
  </div>
</template>

<script scoped>
 import {mapActions, mapGetters } from "vuex"
 import {homeGoods} from '../../../request/api'
export default {
  data() {
    return {
      newGoods:[],
      hotGoods:[],
      pickGoods:[]
    }
  },

  methods: {
    fn1(){
      this.$router.push('/search')
    },
    ...mapActions ({
      navi :"home/reqChangeCate",
      banner :"home/reqchangbanner"
    }),
    cla(id){
      this.$router.push('/list?type=1&id=' + id)
    },
    fn(id){
      this.$router.push('/list?type=2&id='+id)
    }
  },
  computed:{
    ...mapGetters({
      homeCate :'home/cate',
      homebanner :'home/banner'
    })
  },
  mounted(){
    this.navi()
    this.banner()
    homeGoods().then(res =>{
      this.newGoods = res.data.list[0].content
      this.hotGoods =res.data.list[1].content
      this.pickGoods = res.data.list[2].content
    })
  }
};
</script>
<style scoped>
.bw {
  height: 100vh;
  background-color: #f2f2f2f2;
}
.box {
  height: 100%;
  position: relative;
}
.head {
  height: 1.6rem;
  background-color: #ff6040;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.head h2 {
  text-align: center;
  width: 100%;
  height: 0.6rem;
  background-color: #ff6040;
  display: block;
  line-height: 0.6rem;
  font-size: 0.22rem;
  font-weight: normal;
  color: #fff;
}
.head img {
  width: 1rem;
}
.head .banner {
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
}

.head .banner input {
  width: 87%;
  height: 0.3rem;
  border: none;
  padding-left: 0.1rem;
  border-radius: 0.04rem;
}
.head .cal {
  height: 0.4rem;
  display: flex;

  justify-content: space-around;
}
.head .cal p {
  color: #fff;
}

.slide {
  width: 100%;
  height: 1.9rem;
  background-color: #fff;
  margin-top: 1.6rem;
}
.slide img{
  width: 100%;
  height: 1.9rem;
}
.bann {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  margin-top: 0.1rem;
  line-height: 0.8rem;
}
.bann ul {
  display: flex;
}
.bann ul li {
  flex: 1;
}
.bad {
  height: 1.7rem;
  margin-top: 0.1rem;
}
.bad .left {
  width: 50%;
  float: left;
  height: 1.7rem;
  background-color: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
}
.bad .right {
  float: left;
  width: 50%;
  height: 1.7rem;
}
.bad .right .top {
  height: 50%;
  padding: 0.1rem;
  box-sizing: border-box;
}
.bad .right .bottom {
  height: 50%;
  padding: 0.1rem;
 
}
.detal {
  height: 100%;
  width: 100%;
  background-color: #fff;
  
}
.detal .top {
  height: 1rem;
  display: flex;
  border: 1px solid #ccc;
  margin-bottom: 0.1rem;
}
.detal .top div {
  flex: 1;
  text-align: center;
}
.detal .top .left {
  color: red;
}
.detal .top .right {
  color: blue;
}
.detal .bottom {
  width: 100%;
  padding: 0 0.1rem 1rem;
  box-sizing: border-box;
 
}
.detal .bottom .topb {
  display: flex;
  text-align: center;
  line-height: 0.4rem;
}
.detal .bottom .topb span {
  display: block;
  flex: 1;
}
.detal .bottom ul {
  width: 100%;
}
.detal .bottom li {
  width: 100%;
  height: 1.5rem;
  border: 1px solid #ccc;
  margin-bottom: 0.16rem;
}
.detal .bottom li button {
  background-color: orange;
  color: #fff;
  padding: 0.1rem;
  border: none;
}
.active-span {
  background-color: #ff6040;
  color: #fff;
}
</style>