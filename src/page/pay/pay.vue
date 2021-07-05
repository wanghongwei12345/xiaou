<template>
  <div class="bw">
    <div class="head">
      <h2>支付页面</h2>
    </div>
    <div class="banner">
        <div class="top">
            <p>订单号:111111111</p>
            <h2>￥19999</h2>
        </div>
        <div class="list">
            <p>请选择支付方式</p>
            <p>支付宝支付 <input type="radio" name="sky" id="" ></p>
            <p>微 信支付 <input type="radio" name="sky" id=""></p>
            <button>确认订单</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query);
  },
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
.banner{
    height: 90%;
    width: 100%;
    background-color: #fff;
}
.banner .top{
    padding: .2rem;
    line-height: .4rem;
    text-align: center;
}
.banner .top h2{
    font-size: .3rem;
}
.banner .list{
    padding: .1rem .2rem;
    line-height: .3rem;
}
.banner .list p input{
    float: right;
    width: 0.2rem;
    height: 0.2rem;
}
.banner .list button{
    width: 90%;
    height: .4rem;
    background-color: skyblue;
    border-radius: .4rem;
    color: #fff;
    font-size: .2rem;
    border:none;
    position: fixed;
    bottom: .8rem;
    left: .2rem;
}
</style>