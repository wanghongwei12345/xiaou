export const state = {
    // 用户的登录信息
    // 判断本地存储是否有数据，如果有数据就赋值给userInfo，如果没有数据就设置空对象
    userInfo:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):{}
   }
  export const mutations = { 
    changeUserInfo(state,obj){
      // 将状态层的用户信息修改
      state.userInfo = obj
  
      // 将用户信息存储到本地存储
      sessionStorage.setItem("user",JSON.stringify(obj))
    }
   }
  export const getters = { 
    userInfo(state){
      return state.userInfo
    }
   }