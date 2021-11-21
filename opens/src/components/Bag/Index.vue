<template>
  <div class="bag">
    <h2>Pedido</h2>
    <div class="bag-line"/>
    <div
      v-for="(promotion, index) in promotions"
      :key="index"
      class="bag-items"
    >
      <img class="bag-image" :src="promotion.img" :alt="promotion.name" />
      <div>
        <h4 class="bag-items-name">{{ promotion.name }}</h4>
        <p class="bag-items-description">{{ promotion.description }}</p>
      </div>
      <div class="bag-delete">
      <font-awesome-icon class="social-icon" :icon="['fab', 'font-awesome']" />
      </div>
    </div>
    <div class="bag-button">
      <router-link to="/checkout#1">
    <Button />
    </router-link>
    </div>
  </div>
</template>

<script>
import Button from '../Button/Index.vue'
export default {
  name: "bag",
  components: {
    Button
  },
  data() {
    return {
      promotions: [
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 1,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 2,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
h2 {
  text-align: center;
    color: $predominant;
  margin: 10px
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
</style>
