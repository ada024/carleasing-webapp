import { createStore } from 'vuex'
import cars from './modules/cars'

const SET_USER = "SET_USER"

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    [SET_USER](state, user){
      state.user = user
    }
  },
  actions: {
    setUser({commit}, user){
      commit(SET_USER, user);
    }
  },
  modules: {
    cars
  },
  getters: {
    isUserAdmin: state => {
      return state.user
    }
  }
})
