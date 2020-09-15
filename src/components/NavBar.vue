<template>
<div class="container">
  <img class="logo" src="logo.png" alt="logo"/>
<h1 class="title">Factorio Icon Select</h1>
</div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.container {
  height: 3rem;
  background: #E39827;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 1rem
}

.logo {
  height: 2rem;
  width: 2rem;
}

.title {
  color: #242324;
  font-weight: 900;
  font-size: 1.75rem;
  line-height: 3rem;
  margin: 0 0 0 0.5rem
}
</style>
