<template>
  <div class="background">
    <NavBar class="scroll-top"/>
    <About/>
    <IconList :item-meta-data="itemMetaData" :icon-config="iconConfig"/>
    <Footer :link-function="scrollToElement"/>
  </div>
</template>

<script>
import itemMetaDataJson from "./assets/itemMetadata.json"
import {sortStringsAlphabetically} from "@/utils/utils";
import IconList from "@/components/IconList";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, NavBar, About, IconList},
  data() {
    return {
      itemMetaData: [],
      iconConfig: {
        sizeMultiplier: 1
      }
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
    scrollToElement(elementName) {
      const el = this.$el.getElementsByClassName(elementName)[0]
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

/** {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}*/

* {
  font-family: "Titillium Web", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.background {
  background: #242324;
}
</style>
