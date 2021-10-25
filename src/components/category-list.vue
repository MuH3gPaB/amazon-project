<template>
  <div>
    <div v-for="category in categories" :key="category.id">
      <CategoryItem :category="category"></CategoryItem>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./category-item"
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "category-list",
  components: {
    CategoryItem
  },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["isCategoryExist"]),
  },
  methods: {
    ...mapActions(["loadCategories"]),
    async init() {
      await this.loadCategories();
      let categoryId = this.$route.params.id;
      let category = this.categories[0];
      if (!categoryId && category) {
        await this.$router.push({name: "category", params: {id: String(category?.id)}});
      } else if (!this.isCategoryExist(categoryId)) {
        await this.$router.push({name: "notFound"});
      }
    }
  },
  created() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    }
  }
}
</script>

<style scoped>

</style>