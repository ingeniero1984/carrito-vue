<template>
  <div class="container">
    <h1>Carrito de compras</h1>
    <pre>{{ products }}</pre>
    <hr>
    <div class="row">
       <Card
        v-for="product of products" :key="product.id"
       />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from 'vue';
import { Card } from './components/Card.vue';

export default {
  name: "App",
  components: {
    Card
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    const products = computed(() => store.state.productos)

    return {products}
  }
};
</script>
