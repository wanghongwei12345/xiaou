<template>
  <div class="bw">
    <div class="head">
      <h2>商品分类</h2>
      <div class="cal">
        <input type="text" name="" id="" placeholder="请输入关键字" />
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <ul>
          <li
            :class="index == num ? 'active' : ''"
            v-for="(item, index) in sortList"
            :key="index"
            @click="changeSecond(index)" >
            {{ item.catename }}
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <p
              v-for="item in secondList"
              :key="item.id"
              @click="goGoods(item.id)" >
              <img :src="$pre + item.img" alt="" />
              <span>{{ item.catename }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // 用来表示当前选中的
      num: 0,
    };
  },
  methods: {
    ...mapActions({
      reqSortList: "catlist/reqChangeList",
      reqChangeSecond: "catlist/reqChangeSecond",
    }),
    changeSecond(index) {
      this.num = index;
      // 触发状态层，改变二级分类
      this.reqChangeSecond(index);
    },
    // 点击二级分类跳转到商品列表
    goGoods(id) {
      this.$router.push("/list?id=" + id);
    },
  },
  computed: {
    ...mapGetters({
      sortList: "catlist/list",
      secondList: "catlist/secondList",
    }),
  },
  mounted() {
    // 包含了一级和二级
    this.reqSortList();
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
.active {
  font-weight: bold;
  color: #ff6040;
}
.head {
  width: 100%;
  height: 1.1rem;
  background-color: #ff6040;
  position: fixed;
  top: 0;
  left: 0;
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
  height: 100%;
}
.head .cal {
  padding: 0 0.1rem;
}
.head .cal input {
  width: 95%;
  height: 0.3rem;
  background-color: #f2f2f2f2;
  padding-left: 0.1rem;
  border: none;
}
.banner {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1.1rem;
}
.banner .left {
  overflow: auto;
  width: 1.2rem;
  background-color: #fff;
}
.banner .left ul {
  overflow: auto;
}
.banner .left ul li {
  line-height: 0.8rem;
  text-align: center;
}
.banner .right {
  flex: 1;
  padding: 0.1rem;
}
.banner .right ul {
  width: 100%;
}
.banner .right ul li {
  margin-top: 0.1rem;
  height: 2rem;
  background-color: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
}
.banner .right ul li p{
    float: left;
    height: 1rem;
}
.banner  ul li p img{
    width: .6rem;
    height: .6rem;
}
.banner  ul li p span{
    font-size: .14rem;
    display: block;
    text-align: center;
}
</style>