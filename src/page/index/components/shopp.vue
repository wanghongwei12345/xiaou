<template>
  <div class="bw">
    <div class="head">
      <h2>购物车</h2>

      <ul class="cal">
        <li>
          <p>去部</p>
        </li>
        <li>
          <p>降价</p>
        </li>
        <li>
          <p>常卖</p>
        </li>
        <li>
          <p>分类</p>
        </li>
      </ul>
    </div>
    <div class="shopp">
      <div class="top">
        <input type="checkbox"  />小U自营
        <span> 以免运费 | 领券 </span>
      </div>
      <div class="detal" v-show="user.token||this.list.lenth>0">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.istrue" @change = "changeb()">
            <img :src="$pre + item.img" alt="" >
            <div class="comment">
              <p>{{item.goodsname}}</p>
              <p>￥{{item.price}}</p>
            </div>
            <div class="btn">
              <button @click="detl(item.id,index)">-</button> {{item.num}} <button @click="add(item.id,index)">+</button>
            </div>
          </li>
        </ul>
        
      </div>
      <div v-show="!user.token">
          <van-empty description="您还未登录" />
      </div>
      <div class="bottom">
          <p><input type="checkbox" v-model="addtrue" @change="changea()" />全选</p>
        
        <p>合计<i>{{addprice}}</i></p>
        <button @click="fn1()">去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import {cartlist,cartedit} from '../../../request/api'
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      list:[],
      user:{},
      addtrue:false
    }
  },
  methods:{
    //加号
    add(id,index){
      cartedit({id:id,type:2}).then(res=>{
        console.log(res);
        if(res.data.code == 200){
          this.list[index].num ++
        }
      })
    },
    //减号
    detl(id,index){
      cartedit({id:id,type:1}).then(res=>{
        console.log(res);
        if(res.data.code == 200){
          this.list[index].num --
          
        }
      })
    },
    //点击了全选
    changea(){
      this.list.forEach(item =>{
        item.istrue = this.addtrue
      })
    },
    //点击了复选框
    changeb(){
      this.addtrue = this.list.every(item => item.istrue)
    },  
    fn1(){
      let a =''
      this.list.forEach(item =>{
        if(item.istrue){
          a = item.id
         
        }
      })
      if(a == ''){
        Toast.fail("没有选择商品");
        return
      }else{
        this.$router.push('/affirm?id= ' + a)
      }
      
    }
  },
  computed:{
    addprice(){
      let a = 0;
      this.list.forEach(item =>{
        if(item.istrue){
          a += item.price * item.num
        }
        
      })
      return a
    }
  },
  mounted(){
    //获取用户信息
    this.user = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
    if(this.user.token){
      cartlist({uid:this.user.uid}).then(res=>{
        console.log(res);
        let a = res.data.list?res.data.list:[]
        a.map(item=>item.istrue = false)
        this.list = a
      })  
    }
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
  height: 0.9rem;
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
}

.head .cal {
  height: 0.4rem;
  display: flex;
  color: #fff;
  justify-content: space-around;
  text-align: center;
}
.head .ben {
  width: 94%;
  height: 1rem;
  margin: auto;
  background-color: #fff;
  border-right: 1px;
}
.head .ben .p1 {
  font-size: 0.18rem;
  padding: 0.1rem;
}
.head .ben .p1 span {
  float: right;
  font-size: 0.12rem;
  color: #ff6040;
}
.head .ben ul {
  padding: 0.2rem;
  display: flex;
  box-sizing: border-box;
}
.head .ben ul li {
  flex: 1;
}
.shopp {
  width: 100%;
  height: 5rem;
  position: relative;
}
.shopp .top {
  background-color: #fff;
  line-height: 0.4rem;
  padding: 0 0.1rem;
}
.shopp .top span {
  float: right;
}
.shopp .detal ul li{
  width: 100%;
  background-color: #fff;
  display: flex;
}
.shopp .detal li input{
  float: left;
  display: block;
  margin:  .5rem auto;
}
.shopp .detal li img{
  float: left;
  width: 1rem;
  height: .100%;
  margin: 0  .4rem 0 0 ; 
}
.shopp .detal li .comment{
  float: left;
  line-height: .5rem;
}
.shopp .detal li .comment p:nth-child(2){
  color: #ff6040;
}
.shopp .detal li .btn{
  float: left;
  margin: .4rem auto;
}
.shopp .detal li .btn button{
  display: inline-block;
  text-align: center;
}
.shopp .bottom {
  background-color: #fff;
  line-height: 0.6rem;
  padding: 0 0.1rem;
  position: fixed;
  bottom: .6rem;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}

.shopp .bottom p{
    float: left;
    margin: 0 .1rem;
}
.shopp .bottom button{
    width: 1.2rem;
    height: .6rem;
    background-color: #ff6040;
    float: right;
    border: none;
    color: #fff;

}
</style>