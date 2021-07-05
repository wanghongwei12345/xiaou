<template>
  <div class="bw">
    <div class="head">
      <h2>地址管理</h2>
    </div>
    <div class="banner">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @click-item ="onerr"
      />
      <!-- <button @click="fn1()">+新建收货地址</button> -->
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {addresslist} from '../../request/api'
export default {
  data() {
    return {
      user:{},
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        
      ]
    };
  },
  methods: {
    onAdd() {
      // Toast('新增地址');
      this.$router.push('/newsite')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onerr(){
      this.$router.push('/affirm')
    }
  },
  mounted(){
    this.user = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
    addresslist({uid:this.user.uid}).then(res =>{
      console.log(res);
      // this.list = res.data.list
      
      // this.list.name = res.data.list.username
      console.log(this.list);
    })
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
.head .bottom {
  width: 90%;
  height: 1.2rem;
  background-color: #fff;
  margin: auto;
  text-align: center;
  line-height: 1.2rem;
}
.banner {
  height: 90%;
  bottom: #fff;
  position: relative;
}
.banner button {
  position: absolute;
  width: 90%;
  height: 0.6rem;
  color: #fff;
  background-color: #ff6040;
  border-radius: 0.4rem;
  bottom: 0.4rem;
  left: 0.2rem;
  border: none;
  font-size: 0.2rem;
}
</style>