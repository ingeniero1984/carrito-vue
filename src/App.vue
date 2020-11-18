<template>
  <div class="container">
    <br />
    <h1>Carrito de compras</h1>
    <hr />
    <div class="row">
      <Card v-for="product of products" :key="product.id" :product="product" />
    </div>
    <Carrito />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "./components/Card.vue";
import Carrito from "./components/Carrito";

export default {
  name: "App",
  components: {
    Card,
    Carrito
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });

    const products = computed(() => store.state.productos);

    return { products };
  }
};
</script>
