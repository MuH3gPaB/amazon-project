<template>
  <div class="web-shop-header">
    <div class="header-text" @click="onHeaderClick"></div>
    <div class="cart-shield-container">
      <CartShield></CartShield>
    </div>
  </div>
</template>

<script>
import CartShield from "./cart-shield";

export default {
  name: "web-shop-header",
  components: {CartShield},
  methods: {
    onHeaderClick() {
      this.$router.push({name: "category"});
    }
  }
}
</script>

<style scoped>
.web-shop-header {
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 200px;
  background-color: lightgreen;
  margin-bottom: 10px;
}

.header-text {
  background-image: url("../images/LogoWebshop2020.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 150px;
  width: 800px;
}

.header-text:hover {
  cursor: pointer;
}

.cart-shield-container {
  width: 400px;
  justify-content: center;
  display: flex;
}
</style>