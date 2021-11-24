<template>
  <div class="bag">
    <h2>Pedido</h2>
    <div class="bag-line" />
    <div v-if="selected.length > 0">
      <div v-for="(food, index) in selected" :key="index" class="bag-items">
        <img class="bag-image" :src="food.img" :alt="food.name" />
        <div>
          <h4 class="bag-items-name">{{ food.name }}</h4>
          <p class="bag-items-description">{{ food.description }}</p>
        </div>
        <div class="bag-delete" @click="removeItem(food.id)">
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </div>
      </div>
    </div>
    <div class="bag-button" v-if="selected.length > 0">
        <Button msg="CONCLUIR PEDIDO" @click="() => this.$router.push('/checkout-1')" />
    </div>
    <h2 v-else>Não há pedido</h2>
  </div>
</template>

<script>
import Button from "../Button/Index.vue";
export default {
  name: "bag",
  components: {
    Button,
  },
  props: {
    selected: Array,
    removeItem: Function,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
h2 {
  text-align: center;
  color: $predominant;
  margin: 10px;
}
.bag {
  background: $white;
  width: 30%;
  &-line {
    width: 100%;
    background: $secondary;
    height: 1px;
  }
  &-image {
    width: 80px;
    margin-right: 10px;
  }
  &-items {
    display: flex;
    align-items: center;
    margin: 10px;
    &-name {
      color: $predominant;
    }
    &-description {
      font-size: 12px;
    }
  }
  &-delete {
    font-size: 30px;
    color: $predominant;
    padding: 0 10px;
  }
  &-button {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 1000px) {
  .bag {
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .bag {
    width: 100%;
    padding: 10px;
    &-items {
      justify-content: center;
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
