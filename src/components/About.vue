<template>
<div class="container">
  <h2 class="title">Click icon.<br/> Paste in Factorio.</h2>
  <p>Made with <span style="color: #E39827">❤</span> on <a href="https://www.twitch.tv/imhungers">Twitch</a> by <a href="https://www.jackweb.co.uk">this guy</a>. <br/> Hosted on <a href="https://www.netlify.com/">Netlify</a>.</p>
</div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.title {
  font-weight: 400;
  font-size: 4rem;
  line-height: 4rem;
  color: #ffe6c0;
  text-transform: capitalize;
  text-align: center;
}

p {
  font-weight: 400;
  font-size: 1.2rem;
  color: #ffe6c0;
  margin: 2rem 0 0 0;
  text-align: center;
}

a {
  color: #E39827;
}
</style>
