<template>
  <div class="box">
    

    <div class="content">
        <router-view></router-view>
    </div>

    <div class="foot">
      <router-link to="/index/home" active-class="active">
      <span class="iconfont">&#xeb70;</span><i>商城</i>
      </router-link>
      <router-link to="/index/catlist" active-class="active">
      <span class="iconfont">&#xe611;</span><i>分类</i>
      </router-link>
      <router-link to="/index/shopp" active-class="active">
      <span class="iconfont">&#xe612;</span><i>购物车</i>
      </router-link>
      <router-link to="/index/mime" active-class="active">
      <span class="iconfont">&#xe625;</span><i>我的</i>
      </router-link>
     
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>

.box {
    
    height: 100%;
    position: relative;
}
.head {
  height: 1.6rem;
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

  justify-content: space-around;
}
.head .cal p {
  color: #fff;
}

.foot {
  height: .6rem;
  text-align: center;
  line-height: .6rem;
  display: flex;
 width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.foot a{
  flex: 1;
  
  
}
/* .foot a span{
  display: inline-block;
}
.foot a i{
  display: inline-block;
} */
.active{
background-color: skyblue;
color: #fff;
}
</style>