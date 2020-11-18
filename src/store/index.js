import { createStore } from "vuex";

export default createStore({
  state: {
    productos: []
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload
      console.log(state.productos)
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProducto', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {

  }
});
