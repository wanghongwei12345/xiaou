<template>
  <div class="bw">
    <div class="head">
      <h2>商品列表</h2>
      <div class="banner">
        
        <span><input type="text" placeholder="请输入关键字" @click="inp" /></span>
       
      </div>
      <div class="cal">
        <p>综合排序</p>
        <p>销量</p>
        <p>价格</p>
        <p>好评度</p>
        <p>店铺</p>
        <p>筛选</p>
      </div>
    </div>
    <div class="list">
        <ul v-show="mag.length >= 1">
            <li v-for="(item ,index) in mag" :key="index" @click="fn1(item.id)">
                <img :src="$pre + item.img" alt="">
                <div>
                  <p>{{item.goodsname}}</p>
                  <p>￥{{item.price}}</p>
                  <p>1000评论  <i>99%好评</i></p>
                </div>
                
            </li>
            
        </ul>
        <van-empty description="暂无商品" v-show="mag.length<=0" />
    </div>
  </div>
</template>

<script>
import {goodlist} from '../../request/api'
export default {
  data() {
    return {
      mag:[]
    }
  },
    methods:{
        fn1(id){
            this.$router.push("/detal?id=" + id)
        },
        inp(){
          this.$router.push('/search')
        }
    },
    mounted(){
      console.log(this.$route.query.id)
      console.log(this.$route.query.type)
      goodlist({cateid:this.$route.query.id,type:this.$route.query.type}).then(res =>{

        this.mag = res.data.list.goodData? res.data.list.goodData:[]
      })
    }
};
</script>


<style scoped>
.bw {
  height: 100vh;
  background-color: #f2f2f2f2;
}
.head {
  height: 1.6rem;
  background-color: #ff6040;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
.list{
    margin-top: 1.65rem;
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.list ul li{
    height: 1rem;
    border: 1px  solid #ccc;
    margin-bottom: .1rem;
}
.list ul li img{
  width: 1rem;
  height: 100%;
  float: left;
}
.list ul li div{
  float: left;
  line-height: .3rem;
}
.list ul li div p:nth-child(2){
  color: #ff6040;
}
</style>