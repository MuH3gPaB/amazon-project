<template>
  <div class="product-list" v-if="loaded">
    <div v-for="product in products" :key="product.id">
      <ProductItem :product="product"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "./product-item";
import {mapActions, mapState} from "vuex";

export default {
  name: "product-list",
  components: {ProductItem},
  data: () => {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["loadProducts"])
  },
  async created() {
    let categoryId = this.$route.params.id;
    if (categoryId) {
      await this.loadProducts(categoryId);
      this.loaded = true;
    }
  },
  watch: {
    async $route() {
      this.loaded = false;
      let categoryId = this.$route.params.id;
      if (categoryId) {
        await this.loadProducts(categoryId);
        this.loaded = true;
      }
    }
  }
}
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 10px;
  padding-right: 10px;
}
</style>