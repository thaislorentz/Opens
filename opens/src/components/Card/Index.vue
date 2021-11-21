<template>
  <div class="card">
    <img class="card-image" :src="promotion.img" :alt="promotion.name" />
    <div class="card-details">
      <div class="card-information">
        <h3 class="card-information-name">{{ promotion.name }}</h3>
        <p class="card-information-description">{{ promotion.description }}</p>
      </div>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "../Button/Index.vue";
export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    promotion: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

.card {
  background: $white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
  margin: 10px;
  &-image {
    width: 100px;
  }
  &-details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-information {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-name {
      color: $predominant;
    }
    &-description {
      padding: 10px 0;
      font-size: 14px;
    }
  }

  &-button {
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .card {
    width: 100%;
    flex-direction: row;
    margin: 0;
    margin-bottom: 10px;
    &-information {
      &-name {
        width: 100%;
        font-size: 16px;
      }
      &-description {
        font-size: 12px;
      }
    }
  }
}
</style>
