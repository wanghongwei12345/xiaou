<template>
  <div class="box">
    <div class="head1">
      <span></span>
      <p>手机注册</p>
    </div>
    <div class="foot">
      <p> <input type="text" placeholder="手机号" v-model="form.phone"></p>
      <p> <input type="text" placeholder="昵    称" v-model="form.nickname"></p>
      <p> <input type="password" placeholder="密    码" v-model="form.password"> </p>
      <p>
        <button @click="btn()">注 册</button>
      </p>
    </div>

    <!-- <router-link to="/index">去首页</router-link> -->
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import {register} from '../../request/api'
export default {
  data() {
    return {
      form:{
        phone:"",
        nickname:"",
        password:""
      }
    }
  },
  methods: {
    btn() {
      console.log(this.form);
      console.log(register);
      register(this.form).then(res=>{
        if(res.data.code == 200){
          Toast.success(res.data.msg);
          this.$router.push('/login')
        }else{
          Toast.fail(res.data.msg);
        }
      })
    },
  },
};
</script>


<style scoped>

.head1 {
  width: 100%;
  height: 0.6rem;
  background-color: #ff6040;
  text-align: center;
  line-height: 0.6rem;
}
.head1 p {
  font-size: 0.22rem;

  color: #fff;
}
input {
  border: none;
}
.foot{
  height: 100%;
  padding-top: 3rem;
}
.foot p{
  line-height: .4rem;
  height: .4rem;
  margin: 0 .1rem;
  margin: .1rem;
  position: relative;
}
.foot input{
  width: 100%;
  height: .38rem;
  border-bottom: 1px solid #ccc;
}
.foot button{
  margin-top: .1rem;
  width: 100%;
  height: 0.5rem;
  background-color: #ff896e;
  color: #fff;
  border: none;
}
.foot span{
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 0.3rem;
  width: 1rem;
  text-align: center;
  line-height: .3rem;
  background-color: #ccc;
}
</style>