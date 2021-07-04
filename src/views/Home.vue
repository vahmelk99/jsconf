<template>
  <div class="home">
    <div class="imageWrapper">
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/jsconf.png" />
    </div>
    <h1>Welcome to JSConf Armenia 2021</h1>
    <h2>Vahagn Melkonyan</h2>
    <a
      class="resource"
      href="https://github.com/vahmelk99/jsconf"
      target="_blank"
      >Slide link</a
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.imageWrapper {
  height: 250px;
  margin-bottom: 10px;
  > img {
    height: 100%;
    margin: 0 10px;
  }
}
</style>
