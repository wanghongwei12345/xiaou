import {sortList} from "../../request/api"
const state = {
  list:[],
  secondList:[]
}

const mutations = {
  changeList(state,arr){
    state.list = arr
  },
  changeSecondList(state,arr){
    state.secondList = arr
  }
}

const actions = {
  reqChangeList(context){
    sortList().then(res=>{
      // 给一级赋值
      context.commit("changeList",res.data.list)
      // 给二级赋值
      context.commit("changeSecondList",res.data.list[0].children)
    })
  },
  reqChangeSecond(context,index){
    let list = context.state.list[index].children?context.state.list[index].children:[]
    context.commit("changeSecondList",list)
  }
}

const getters = {
  list(state){
    return state.list
  },
  secondList(state){
    return state.secondList
  }
}

export default{
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}