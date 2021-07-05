<template>
  <div class="box">
    <div class="head1">
      <span></span>
      <p>手机登录</p>
    </div>
    <div class="foot">
      <p><input type="text" placeholder="手机号" v-model="form.phone" /></p>
      <p>
        <input type="text" placeholder="密    码" v-model="form.password" />
      </p>
      <p>
        <button @click="btn()">登 录</button>
      </p>
    </div>

    <!-- <router-link to="/index">去首页</router-link> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { login } from "../../request/api";
import {mapActions} from "vuex"

export default {
  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
        reqChangeUserInfo:"reqChangeUserInfo"
      }),
    btn() {
      login(this.form).then((res) => {
        if (this.form.phone != "" && this.form.password != "") {
          if (res.data.code == 200) {
            Toast.success(res.data.msg);
            // 将用户信息存储到状态层
            this.reqChangeUserInfo(res.data.list);
            this.$router.push("/index");
          } else {
            Toast.fail(res.data.msg);
          }
        }else{
          Toast.fail("账号密码不能为空");
        }
      });
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
.foot {
  height: 100%;
  padding-top: 3rem;
}
.foot p {
  line-height: 0.4rem;
  height: 0.4rem;
  margin: 0 0.1rem;
  margin: 0.1rem;
  position: relative;
}
.foot input {
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ccc;
}
.foot button {
  margin-top: 0.1rem;
  width: 100%;
  height: 0.5rem;
  background-color: #ff896e;
  color: #fff;
  border: none;
}
.foot span {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 0.3rem;
  width: 1rem;
  text-align: center;
  line-height: 0.3rem;
  background-color: #ccc;
}
</style>