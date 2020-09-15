<template>
  <div class="container">
    <div class="category"  v-for="(category, categoryIndex) of itemMetaData" :key="categoryIndex">
      <div class="categoryTitleContainer">
        <h1 class="categoryTitle">{{category.title}}</h1>
      </div>
      <div class="categoryItems">
        <div class="item" v-for="(item, itemIndex) of category.items" :key="itemIndex"
             v-clipboard="getLabel(item)">
          <img :src="item.iconPath" :alt="item.Name" width="64" height="64">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "IconList",
  props: ["itemMetaData"],
  methods: {
    getLabel(item) {
      return `[${item.labelCategory}=${item.labelName}]`
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 0 2rem 0;
  padding: 0 1rem 0 1rem;
}

.category {
  margin: 2rem 0 0 0;
}

.categoryTitleContainer {
  background: #414040;
  padding: 0.5rem 1rem;
}


.categoryTitle {
  font-weight: 900;
  font-size: 1.25rem;
  color: #ffe6c0;
  text-transform: capitalize;
}

.categoryItems {
  background: #414040;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  border-style: solid;
  border-color: transparent;
  border-width: 0.2rem;
  padding: 0.5rem;
  margin: 0.75rem;
  display: flex;
  align-content: center;
  cursor: pointer;
}

.item:hover {
  border-color: #E39827;
}

.item:active,
.item:focus {
  background: #E39827;
}
</style>
