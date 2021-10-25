<template>
  <div @click="onClick" class="cart-shield">
    <img src="../images/cart-icon.png" class="cart-icon">
    <div class="cart-items-count">{{ totalCount }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "cart-shield",
  computed: {
    ...mapState(["cart"]),
    totalCount() {
      let cart = this.cart;
      return Object.keys(cart).reduce((sum, key) => sum + cart[key].quantity, 0);
    }
  },
  methods: {
    onClick() {
      this.$router.push({name: "cart"});
    }
  }
}
</script>

<style scoped>
.cart-shield:hover {
  cursor: pointer;
}

.cart-shield {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cart-icon {
  width: 100px;
}

.cart-items-count {
  font-size: 80px;
  padding-left: 20px;
}
</style>