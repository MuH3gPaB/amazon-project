<template>
  <div class="category">
    <div class="category-list-container">
      <CategoryList></CategoryList>
    </div>
    <div class="product-list-container">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import CategoryList from "../components/category-list";
import ProductList from "../components/product-list";

export default {
  name: "category",
  components: {CategoryList, ProductList}
}
</script>

<style scoped>
.category {
  display: flex;
  justify-content: flex-start;
  width: 1200px;
}

.category-list-container {
  min-width: 200px;
}

.product-list-container {
  flex-basis: 1000px;
}
</style>