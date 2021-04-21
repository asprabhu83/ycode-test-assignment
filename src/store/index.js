import { createStore } from 'vuex'

export default createStore({
  state: {
    Layers:[]
  },
  mutations: {
    addLayers(state, payload){
      state.Layers.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
