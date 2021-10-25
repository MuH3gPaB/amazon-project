<template>
  <tr class="cart-entry-row">
    <td class="product-cell">
      <img :src="entry.iconUrl" class="product-icon">
      <div>{{ entry.name }}</div>
    </td>
    <td>
      <div>{{ entry.quantity }} шт.</div>
    </td>
    <td>
      <div>{{ entry.entryPrice }}₽</div>
    </td>
    <td>
      <button @click="deleteFromCart(entry.id)" class="delete-button">Убрать</button>
    </td>
  </tr>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "cart-entry",
  props: {
    entry: {
      required: true
    }
  },
  methods: {
    ...mapMutations(["deleteFromCart"])
  }
}
</script>

<style scoped>
.product-cell {
  display: flex;
  flex-direction: row;
}

.cart-entry-row {
  vertical-align: top;
}

.product-icon {
  width: 100px;
}

.delete-button {
  font-size: 20px;
}

.delete-button:hover {
  cursor: pointer;
}

td {
  padding: 10px;
}
</style>