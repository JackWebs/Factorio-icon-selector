<template>
  <div class="container">
    <h1 class="title" @click="linkFunction('scroll-top')">Back to the top?</h1>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["linkFunction"]
}
</script>

<style scoped>
.container {
  height: 3rem;
  background: #E39827;
  padding: 0 0 0 1rem
}

.title {
  color: #242324;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 3rem;
  margin: 0 0 0 0.5rem;
  text-align: center;
  cursor: pointer;
}
</style>
