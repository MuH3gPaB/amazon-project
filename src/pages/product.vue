<template>
  <div v-if="loaded" class="product">
    <div class="product-image-container">
      <img :src="product.imageUrl" class="product-image">
    </div>
    <div class="product-bar-container">
      <div>{{ product.name }}</div>
      <div>{{ product.defaultDisplayedPriceFormatted }}</div>
      <div v-html="product.description"></div>
      <button @click="onBuy" class="buy-button">Купить</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "product-details",
  data: () => {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapState(["product"])
  },
  methods: {
    ...mapActions(["loadProduct"]),
    ...mapMutations(["addToCart"]),
    onBuy() {
      this.addToCart(this.product);
    }
  },
  async created() {
    let productId = this.$route.params.id;
    if (!productId) {
      this.$router.push({name: "notFound"});
    }
    await this.loadProduct(productId);
    this.loaded = true;
  }
}
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.product-image-container {
  margin-right: 20px;
}

.product-image {
  width: 100%;
}

.product-bar-container {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  padding-bottom: 10px;
}

.buy-button {
  font-size: 20px;
  width: 100px;
}

.buy-button:hover {
  cursor: pointer;
}
</style>