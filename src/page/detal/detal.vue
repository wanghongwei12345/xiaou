<template>
  <div class="bw">
    <div class="head">
      <h2>商品详情</h2>
    </div>
    <div class="detal">
      <img :src="$pre + list.img" alt="">
      <div>
        <p>￥{{list.price}} <del>{{list.market_price}}</del></p>
        <p>{{list.goodsname}}</p>
        <p>{{list.specsname}}  {{list.specsattr}}</p>
      </div>
    </div>


    <div class="bottom">
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
          <van-goods-action-icon icon="cart-o" text="购物车" />
          <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
          <van-goods-action-button type="warning" text="加入购物车" @click="getin()" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
          
    </div>
  </div>
</template>

<script>
import {goodinfo,cartadd} from '../../request/api'
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      list:{},
      user :{}
    }
  },
    methods:{
      getin(){
        //先判断有没有登陆了
        if(this.user.token){
          cartadd({uid:this.user.uid,goodsid:this.list.id,num:1}).then(res =>{
            console.log(res);
          })
           this.$router.push('/index/shopp')
        }else{
          Toast.fail("请登录");
          this.$router.push('/login')
        }
        
      },
    },
    mounted(){
      goodinfo({id : this.$route.query.id}).then(res=>{
        this.list = res.data.list[0]?res.data.list[0]:[]
      })
      //获取用户登录信息
      this.user = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
      console.log(this.user);
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
  height: 0.6rem;
  background-color: #ff6040;
}
.detal{
  background: #fff;
}
.detal img{
  width: 100%;
  height: 3.5rem;
}
.detal div {
  padding: .1rem;
  line-height: .5rem;
}
.detal div p:nth-child(1){
  font-size: .3rem;
  color: #ff6040;
}
.detal div p:nth-child(1) del{
  font-size: .2rem;
  color: #ccc;
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
.bottom{
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #fff;
    line-height: .6rem;
}

</style>