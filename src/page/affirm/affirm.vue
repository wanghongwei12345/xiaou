<template>
  <div class="bw">
    <div class="head">
      <h2>确认订单</h2>
      <div class="bottom">
          <button @click="fn1()">+点击完善地址信息</button>
      </div>
    </div>
    <div class="detal">
      <div class="tel">
        <img :src="$pre + list.img" alt="">
        <p>
          <i>{{list.goodsname}}</i>
          <i>￥{{list.price * list.num}}</i>
        </p>
        <span>x{{list.num}}</span>
      </div>
      <ul>
        <li>发票类型 <span>不开发票> </span></li>
        <li>售后免邮 <i>部分商家赠送</i></li>
        <li>卖家留言 </li>
      </ul>
    </div>
    <div class="aff">
        <p>合计  <i> ￥{{list.price * list.num}}</i></p>

        <button @click="fn2()">确认订单</button>
    </div>
    
  </div>
</template>

<script>
import {cartlist} from '../../request/api'
export default {
  data() {
    return {
      list:[],
      user :{},
      //渲染地址
      aff:{}
    }
  },
    methods:{
        fn1(){
            this.$router.push('/site')
        },
        fn2(){
            this.$router.push('/pay?prc =' +this.list.price *this.list.num )
        }
    },
    mounted(){
      console.log(this.$route.query.id)
      this.user = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
      cartlist({uid : this.user.uid,id:this.$route.query.id}).then(res=>{
        this.list = res.data.list[0]
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
.detal{
  margin-top: .6rem;
  width: 100%;
  
  background-color: #fff;
  padding: .1rem .3rem 0 .1rem;
  box-sizing: border-box;
}
.detal .tel img{
  width: 1.3rem;
  height: 100%;
  float: left;
}
.detal .tel{
  width: 100%;
  overflow: hidden;
}
.detal .tel p{
  float: left;
  margin:.1rem 0 0 .2rem;

}
.detal .tel span{
  display: block;
  float: right;
  margin-top: .8rem;
}
.detal .tel p i{
  font-size: .16rem;
  display: block;
  line-height: .4rem;
}
.detal .tel p i:nth-child(2){
  color: #ff6040;
}
.detal ul {
  margin-top: .1rem;
}
.detal ul li{
  font-size: .16rem;
  line-height: .3rem;
}
.detal ul li span{
  float: right;
}
.detal ul li  i{
  float: right;
  color: #ccc;
  font-size: .14rem;
}
.head {
  height: 1.3rem;
  background-color: #ff6040;
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
.head .bottom{
    width: 90%;
    height: 1.2rem;
    background-color: #fff;
    margin:auto;
    text-align: center;
    
}
.head .bottom button{
  padding: .2rem;
  margin: .3rem;
  border-radius: .05rem;
}
.aff{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .6rem;
    background-color: #fff;
}
.aff p{
    float: left;
    margin: .1rem 0 0 .2rem;
}
.aff p i{
  margin-left: .2rem;
  font-size: .16rem;
  color: #ff6040;
}
.aff button{
    width: 1rem;
    height: .6rem;
    background-color: #ff6040;
    color: #fff;
    border:none;
    float: right;
}
</style>