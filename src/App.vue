<template>
  <div class="background">
    <div class="category"  v-for="(category, categoryIndex) of itemMetaData" :key="categoryIndex">
      <div class="categoryTitleContainer">
        <span class="categoryTitle">{{category.title}}</span>
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
import itemMetaDataJson from "./assets/itemMetadata.json"
import {sortStringsAlphabetically} from "@/utils/utils";

export default {
  name: 'App',
  data() {
    return {
      itemMetaData: []
    }
  },
  created() {
    const data = itemMetaDataJson;

    const categories = sortStringsAlphabetically([...new Set(data.map(x => x.category))])

    const metaData = []

    for(const category of categories) {
      const itemArray = data.filter(x => x.category === category);
      const categoryData = {
        title: category,
        items: itemArray
      }
      metaData.push(categoryData);
    }

    this.itemMetaData = metaData

  },
  methods: {
    getLabel(item) {
      return `[${item.labelCategory}=${item.labelName}]`
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

* {
  font-family: "Titillium Web", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.background {
  background: #242324;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.category {
  width: 100%;
  margin: 3rem 1rem 0 1rem;
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
  width: auto;
}

.item {
  border-style: solid;
  border-color: transparent;
  border-width: 0.2rem;
  padding: 0.5rem;
  margin: 0.75rem;
  display: flex;
  align-content: center;
}

.item:hover {
  border-color: #E39827;
}

.item:active,
.item:focus {
  background: #E39827;
}
</style>
