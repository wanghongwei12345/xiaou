<template>
  <div class="bw">
    <div class="head">
      <h2>会员中心</h2>
      <div class="banner">
        <p class="img"></p>
      </div>
      <ul class="cal">
        <li>
          <span>12</span>
          <p>我的收藏</p>
        </li>
        <li>
          <span>12</span>
          <p>浏览记录</p>
        </li>
        <li>
          <span>12</span>
          <p>我的红包</p>
        </li>
        <li>
          <span>12</span>
          <p>优惠券</p>
        </li>
      </ul>
      <div class="ben">
        <p class="p1">我的订单 <span>全部订单</span></p>
        <ul>
          <li>
            <p>代付款</p>
          </li>
          <li>
            <p>代发货</p>
          </li>
          <li>
            <p>待确定</p>
          </li>
          <li>
            <p>退款/售后</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="manage">
        <ul>
            <li>
                <p>地址管理
                    <span> > </span>
                </p>
            </li>
            <li>
                <p>我的钱包
                    <span> > </span>
                </p>
            </li>
            <li>
                <p>我的二维吗
                    <span> > </span>
                </p>
            </li>
            <li>
                <p>我的小伙伴
                    <span> > </span>
                </p>
            </li>
            <li>
                <p>0元试用
                    <span> > </span>
                </p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.bw{
    height: 100vh;
    background-color: #f2f2f2f2;
}
.box {
  /* display: flex;
    flex-direction: column; */
  height: 100%;
  position: relative;
}
.head {
  height: 2rem;
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
.head .banner .img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 0.2rem;
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
.manage {
  width: 100%;
  height: 1.34rem;
  /* background: #ccc; */
  padding-top: .8rem;
}
.manage ul{
    
    background-color: #fff;
}
.manage ul p {
    line-height: .4rem;
    padding:0 .1rem;
}
.manage ul p span{
    float: right;
}
</style>