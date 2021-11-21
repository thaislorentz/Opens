<template>
  <div class="checkout">
    <div class="checkout-header">
      <router-link to="/">
        <img
          class="checkout-image"
          alt="Hamburger logo"
          src="../../assets/images/logo.png"
        />
      </router-link>
      <h1 class="checkout-title">CHECKOUT</h1>
    </div>
    <div class="checkout-icones">
      <font-awesome-icon
        class="checkout-hamburguer select"
        :icon="['fab', 'font-awesome']"
      />
      <font-awesome-icon
        class="checkout-hamburguer"
        :icon="['fab', 'font-awesome']"
      />
      <font-awesome-icon
        class="checkout-hamburguer"
        :icon="['fab', 'font-awesome']"
      />
    </div>
    <div>
      <h1 class="checkout-text">
        Ficamos felizes com seu pedido, como gostaria de ser chamado?
      </h1>
    </div>
    <div class="checkout-form">
    <div class="checkout-form-size">
      <Input type="form" />
      </div>
    </div>
    <div class="checkout-button">
      <Button @click="() => this.$router.push('/menu')"/>
      <Button @click="() => this.$router.push('/checkout-2')"/>
    </div>
      <Footer />
  </div>
</template>

<script>
import Button from "../../components/Button/Index.vue";
import Input from "../../components/Input/Index.vue";
import Footer from "../../components/Footer/Index.vue";

export default {
  name: "checkoutName",
  props: {
    type: String,
  },
  components: {
    Button,
    Input,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_colors.scss";
.checkout {
  &-header {
    display: flex;
    align-items: center;
  }

  &-image {
    width: 100px;
    margin: 0 20px;
  }

  &-title {
    width: calc(100% - 190px);
    text-align: center;
  }

  &-text {
    color: $predominant;
    text-align: center;
  }

  &-icones {
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin: 50px 0;
  }

  &-hamburguer {
    margin-left: 80px;
    color: #c4c4c4;

    &.select {
      color: $predominant;
    }
  }

  &-form {
    display: flex;
    justify-content: center;
    margin: 50px 0;

    &-size {
      width: 500px;
    }
  }

  &-button {
    display: flex;
    justify-content: space-around;
    margin: 100px 0 30px 0;
  }
}

@media screen and (max-width: 600px) {
.checkout {
  &-title {
    width: calc(100% - 190px);
    text-align: center;
  }

  &-hamburguer {
    margin-left: 10px;
  }

  &-text {
    font-size: 20px;
    margin: 0 20px;
  }

  &-form {
    margin: 50px;

    &-size {
      width: 100%;
    }
  }
}

}
</style>
