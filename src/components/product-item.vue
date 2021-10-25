<template>
  <div class="product-item">
    <div class="product-element__clickable" @click="onClick">
      <img :src="product.thumbnailUrl" class="product-icon">
    </div>
    <div class="product-element__clickable" @click="onClick">
      <h2>{{ product.name }}</h2>
    </div>
    <div class="price-and-button">
      <div class="price-value"> {{ product.defaultDisplayedPriceFormatted }}</div>
      <button @click="onBuy" class="buy-button">Купить</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "product-item",
  props: {
    product: {
      required: true
    }
  },
  methods: {
    ...mapMutations(["addToCart"]),
    onClick() {
      this.$router.push({name: "product", params: {id: this.product.id}});
    },
    onBuy() {
      this.addToCart(this.product);
    }
  }
}
</script>

<style scoped>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.price-and-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.product-element__clickable:hover {
  cursor: pointer;
  opacity: 50%;
}

.product-icon {
  width: 100%;
}

.price-value {
  font-size: 30px;
  padding-right: 20px;
}

.buy-button {
  font-size: 20px;
}

.buy-button:hover {
  cursor: pointer;
}
</style>