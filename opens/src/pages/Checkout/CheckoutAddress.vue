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
        class="checkout-hamburguer select"
        :icon="['fab', 'font-awesome']"
      />
      <font-awesome-icon
        class="checkout-hamburguer select"
        :icon="['fab', 'font-awesome']"
      />
    </div>
    <div>
      <h1 class="checkout-text">Onde iremos realizar a entregar?</h1>
    </div>
    <div class="checkout-form">
      <div class="checkout-address">
        <div class="checkout-address-input">
          <Input type="form" />
        </div>
        <div class="checkout-address-input size">
          <Input type="form" />
        </div>
        <div class="checkout-address-input">
          <Input type="form" />
        </div>
        <div class="checkout-address-input">
          <Input type="form" />
        </div>
        <div class="checkout-address-input">
          <Input type="form" />
        </div>
        <div class="checkout-address-input size">
          <Input type="form" />
        </div>
      </div>
    </div>
    <div class="checkout-button">
      <Button @click="() => this.$router.push('/checkout-1')" />
      <Button @click="() => this.$router.push('/checkout-3')" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from "../../components/Button/Index.vue";
import Input from "../../components/Input/Index.vue";
import Footer from "../../components/Footer/Index.vue";

export default {
  name: "CheckoutContact",
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
  &-address {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-input {
      margin: 10px;
      width: 400px;

      &.size {
        width: 600px;
      }

    }
  }
}

@media screen and (max-width: 600px) {
  .checkout {
    &-address {
    &-input {
      margin: 10px;
      width: 300px;

      &.size {
        width: 300px;
      }

    }
  }
  }
}
</style>
