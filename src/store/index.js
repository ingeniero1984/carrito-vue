import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload;
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload };
      console.log(state.carrito);
    },
    vaciarCarrito(state) {
      state.carrito = {};
    },
    aumentarItem(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuirItem(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload];
      }
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch("api.json");
        const data = await res.json();
        commit("setProducto", data);
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarrito({ commit, state }, product) {
      Object.prototype.hasOwnProperty.call(state.carrito, product.id)
        ? (product.cantidad = state.carrito[product.id].cantidad + 1)
        : (product.cantidad = 1);
      commit("setCarrito", product);
    }
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad }) => acc + cantidad,
        0
      );
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio,
        0
      );
    }
  },
  modules: {}
});
