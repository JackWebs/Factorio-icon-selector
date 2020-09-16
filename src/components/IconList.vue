<template>
  <div class="container">
    <div class="iconConfig">
      <span class="iconConfigTitle">Icon Size:</span>
      <div class="iconSizeSelectionContainer">
        <div class="iconSizeSelectionItem" v-for="(item, index) of iconSizeSelections" :key="index" @click="iconConfig.sizeMultiplier = item.value"
             :style="{
          background: item.value === iconConfig.sizeMultiplier ? '#E39827': '',
          color: item.value === iconConfig.sizeMultiplier ? '#242324': ''}">{{item.text}}</div>
      </div>
    </div>
    <div class="category"  v-for="(category, categoryIndex) of itemMetaData" :key="categoryIndex">
      <div class="categoryTitleContainer">
        <h1 class="categoryTitle">{{category.title}}</h1>
      </div>
      <div class="categoryItems">
        <div class="item" v-for="(item, itemIndex) of category.items" :key="itemIndex"
             v-clipboard="getLabel(item)" :style="{padding: `${0.5 * iconConfig.sizeMultiplier}rem`,
          margin: `${0.75 * iconConfig.sizeMultiplier}rem`}">
          <img :src="item.iconPath" :alt="item.Name" :width="48*iconConfig.sizeMultiplier" :height="48*iconConfig.sizeMultiplier">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "IconList",
  props: ["itemMetaData", "iconConfig"],
  data() {
  return {
    iconSizeSelections:[
      {text: "small",
      value: 0.5},
      {text: "normal",
        value: 1},
      {text: "large",
        value: 1.5}
    ]
  }
  },
  methods: {
    getLabel(item) {
      return `[${item.labelCategory}=${item.labelName}]`
    },
    resizeIcons(multiplier) {
      this.iconConfig.value = multiplier;
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 0 2rem 0;
  padding: 0 1rem 0 1rem;
}

.iconConfig {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.iconConfigTitle {
  font-weight: 400;
  font-size: 1.2rem;
  color: #ffe6c0;
  margin: 0 0  0.5rem 0;
  text-align: center;
}

.iconSizeSelectionContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.iconSizeSelectionItem {
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #E39827;
  padding: 0 0.2rem;
  margin: 0 0.5rem;
  border-radius: 0.2rem;
  border: solid transparent;
  cursor: pointer;
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
