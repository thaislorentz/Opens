<template>
  <button @click="evt => $emit('click', evt)">{{text}}Ver Cardápio</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_buttons.scss";
</style>
