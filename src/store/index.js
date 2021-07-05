import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import {actions} from "./action"
import {state,mutations,getters} from "./mutations"
import home from "./modules/home.js"
import catlist from "./modules/catlist.js"




export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    catlist
  }
})
