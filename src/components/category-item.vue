<template>
  <div
      :class="['category-item', {'category-item__selected': isSelected}]"
      @click="onClick">
    <img :src="category.thumbnailUrl">
    <div>
      <h1>{{ category.name }}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "category-item",
  props: {
    category: {
      required: true
    }
  },
  computed: {
    isSelected() {
      return String(this.category.id) === String(this.$route.params.id);
    }
  },
  methods: {
    onClick() {
      if (!this.isSelected) {
        this.$router.push({name: "category", params: {id: String(this.category.id)}});
      }
    }
  }
}
</script>

<style scoped>
.category-item {
  display: flex;
  height: 70px;
  width: 100%;
}

.category-item:hover {
  cursor: pointer;
  opacity: 50%;
}

.category-item__selected {
  border: 2px solid;
}
</style>