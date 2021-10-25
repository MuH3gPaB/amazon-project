<template>
  <div>
    <div v-if="Object.keys(cart).length !== 0">
      <table class="cart-entries">
        <tr>
          <th>Продукт</th>
          <th>Количество</th>
          <th>Цена</th>
          <th></th>
        </tr>
        <CartEntry :entry="entry" v-for="entry in cart" :key="entry.id"></CartEntry>
      </table>
      <div class="cart-total">
        <h1> {{ getCartTotal }}₽</h1>
        <button @click="onSubmit" class="submit-button">Оформить заказ</button>
      </div>
    </div>
    <div v-else>
      <h1>Корзина пуста</h1>
    </div>
  </div>
</template>

<script>
import CartEntry from "../components/cart-entry";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "cart",
  components: {
    CartEntry
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getCartTotal"])
  },
  methods: {
    ...mapMutations(["clearCart"]),
    onSubmit() {
      this.clearCart();
      this.$router.push({name: "thankYou"});
    }
  }
}
</script>

<style scoped>
.cart-entries {
  font-size: 30px;
  padding: 5px;
}

.cart-total {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.submit-button:hover {
  cursor: pointer;
}

.submit-button {
  font-size: 30px;
  margin-left: 20px;
}

</style>