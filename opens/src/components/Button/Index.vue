<template>
  <button @click="evt => $emit('click', evt)">{{msg}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_buttons.scss";
</style>
