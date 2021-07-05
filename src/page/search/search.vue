<template>
  <div class="bw">
    <div class="head">
      <h2>商品搜索</h2>
      <div class="banner">
        <span><input type="text" placeholder="请输入关键字"  v-model="inp" ></span>
      </div>
    </div>
    <div class="list">
      <ul v-show="msg.length>=1">
        <li v-for="item in msg" :key="item.id">
          <img :src="$pre +item.img" alt="">
          <div>
            <p>{{item.goodsname}}</p>
           <p>{{item.price}} <del>{{item.market_price}}</del> </p>
           <p>1000评论 <i>99%好评</i></p>
          </div>
          
        </li>
      </ul>
        <van-empty description="暂无商品" v-show="msg.length<=0" />
      
    </div>
  </div>
</template>

<script scoped>
import {search} from '../../request/api'
export default {
  data() {
    return {
      inp :'',
      msg :[]
    }
  },
  watch:{
    inp(){
      search({keywords:this.inp}).then(res =>{
        this.msg = res.data.list ? res.data.list : []
      })
    }
  },
  methods:{
    
  },
  mounted(){

  }
};
</script>


<style scoped>
.bw {
  height: 100vh;
  background-color: #f2f2f2f2;
}
.head {
  height: 1.2rem;
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
.head .banner {
  height: 0.6rem;
  text-align: center;
}

.head .banner input{
    width: 90%;
    height: .3rem;
    border: none;
    border-radius: .05rem;
    padding-left: .1rem;
    box-sizing: border-box;
}
.head .cal {
  height: 0.4rem;
  display: flex;

  justify-content: space-around;
}
.head .cal p {
  color: #fff;
}
.list {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.list ul li {
  height: 1.2rem;
  border: 1px solid #ccc;
  margin-bottom: 0.1rem;
}
.list ul li img{
  height: 1rem;
  width: 1rem;
  float: left;
}
.list ul li div{
  margin-left: .1rem;
  float: left;
}
.list ul li div p{
  line-height: .3rem;
}
.list ul li div p del{
  color: #ccc;
  font-size: .14rem;
}
.list ul li div p:nth-child(2){
  font-size: .18rem;
  color: #ff6040;
}
</style>