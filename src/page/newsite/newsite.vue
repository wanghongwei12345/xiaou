<template>
  <div class="bw">
    <div class="head">
      <h2>新增地址</h2>
    </div>
    <div class="banner">
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);
import { Toast } from "vant";
import { Area } from "vant";
import { areaList } from "@vant/area-data";
Vue.use(Area);
import {addressadd} from "../../request/api";

export default {
  data() {
    return {
      user: {},
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave(content) {
      addressadd({uid: this.user.uid, username: content.name,userphone:content.tel,location:content.city,useraddress:content.addressDetail}).then(res=>{
        if(res.data.code == 200){
          Toast.fail("地址添加成功");
          this.$router.push('/site')
        }
        
      })
    },
    onDelete() {
      Toast("delete");
    },
  },
  mounted() {
    this.user = sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : {};
      
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
</style>