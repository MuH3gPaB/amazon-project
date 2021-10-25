<template>
  <div id="web-shop" class="web-shop">
    <WebShopHeader></WebShopHeader>
    <RouterView></RouterView>
  </div>
</template>

<script>
import WebShopHeader from "./components/web-shop-header";

export default {
  name: 'WebShop',
  components: {
    WebShopHeader
  }
};
</script>

<style scoped>
.web-shop {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
}
</style>

