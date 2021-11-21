<template>
  <div :class="type === 'search' ? 'input': 'form'">
    <label v-if="type === 'search'" class="input-label" htmlFor="searchDevice"
      ><font-awesome-icon class="social-icon" :icon="['fab', 'font-awesome']"
    /></label>
    <input :class="type === 'search' ? 'input-input': 'form-input'" type="search" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    type: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.input {
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 1px solid $predominant;
  box-sizing: border-box;
  border-radius: 5px;
  padding-right: 3px;
  &-label {
    display: flex;
    align-items: center;
    background: $secondary;
    color: #ffffff;
    border: 1px solid $secondary;
    box-sizing: border-box;
    padding: 6px;
  }
  &-input {
    border: 0;
    margin-left: 2px;
    width: 100%;
  }
}

.form {
  border-bottom: 1px solid $white;

  &-input {
    background: none;
    border: none;
  }
}
</style>
