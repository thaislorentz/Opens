<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  outline: none;
  -webkit-appearance: none;
}

body {
  background: $background;
}

input {
  cursor: pointer;
}

button {
  cursor: pointer;
}
</style>
