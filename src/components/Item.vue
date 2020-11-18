<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="aumentarItem(item.id)">
        +
      </button>
      <button class="btn btn-danger btn-sm" @click="disminuirItem(item.id)">
        -
      </button>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();
    const aumentarItem = id => {
      store.commit("aumentarItem", id);
    };
    const disminuirItem = id => {
      store.commit("disminuirItem", id);
    };

    return { aumentarItem, disminuirItem };
  }
};
</script>
