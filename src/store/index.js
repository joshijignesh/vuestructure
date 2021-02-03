import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  loading: false,
}

const mutations = {
  loading: (state, data) => {
    state.loading = data
  }

}


export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  plugins: [createPersistedState({
    key: 'project_name'
  })]
})

