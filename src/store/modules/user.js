const state = {
    token: null,
    user: null
  }
  
  const mutations = {
    login: (state, payload) => {
      state.token = payload.value
    },
    user: (state, payload) => {
      state.user = payload
    },
    logout: (state, payload) => {
      state.token = null
      state.user = null
    }
  }
  
  const actions = {
  
  }
  
  const getters = {
  
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }