import {homeCate,homeBanner} from "../../request/api"

const state = {
  // 快速分类导航
  cate:[],
  //轮播图
  banner:[]
  
}

const mutations = {
  changeCate(state,arr){
    state.cate = arr
  },
  changbanner(state,arr){
    state.banner = arr
  }
}

const actions = {
  // 请求快速分类导航
  reqChangeCate(context){
    homeCate().then(res=>{
      console.log(res.data.list);
      let list = res.data.list.length>5?res.data.list.splice(0,5):res.data.list
      // 将数据传给mutations，让mutations去修改state中的数据
      context.commit("changeCate",list)
    })
  },
  reqchangbanner(context){
    homeBanner().then(res =>{
      
      context.commit('changbanner',res.data.list)
    })
  }
  
  
}

const getters = {
  cate(state){
    return state.cate
  },
  banner(state){
    return state.banner
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}