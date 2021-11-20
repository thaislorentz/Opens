<template>
 <div class="bag">
   bag
 </div>
</template>

<script>
export default {
  name: "bag",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
.bag{
  background: $white;
  width: 30%;
}
</style>
