<template>
  <div class="checkout">
    <div class="checkout-container">
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
            <Input type="form" placeholder="CEP" v-model="postalCode" />
          </div>
          <div class="checkout-address-input size">
            <Input type="form" placeholder="Logradouro" v-model="street" />
          </div>
          <div class="checkout-address-input">
            <Input type="form" placeholder="Número" v-model="number" />
          </div>
          <div class="checkout-address-input">
            <Input type="form" placeholder="Bairro" v-model="neighborhood" />
          </div>
          <div class="checkout-address-input">
            <Input type="form" placeholder="Cidade" v-model="city" />
          </div>
          <div class="checkout-address-input size">
            <Input type="form" placeholder="Complemento" v-model="complement" />
          </div>
        </div>
      </div>
      <div class="checkout-button">
        <Button @click="() => this.$router.push('/checkout-2')" />
        <Button @click="() => this.$router.push('/finalize')" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from "../../components/Button/Index.vue";
import Input from "../../components/Input/Index.vue";
import Footer from "../../components/Footer/Index.vue";
import axios from "axios";

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
  data() {
    return {
      postalCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
    };
  },
  watch: {
    postalCode: function () {
      console.log(this.postalCode);
      this.searchCep(this.postalCode);
    },
  },
  methods: {
    searchCep(cep) {
      if (cep.length == 8) {
        
        console.log(cep);
        axios
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            console.log(response.data)
            this.street = response.data.logradouro;
            this.neighborhood = response.data.bairro;
            this.city = response.data.localidade;
            this.complement = response.data.complemento;
          })
          .catch((error) => console.log(error));
      }
    },
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
      width: 300px;

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
        &.size {
          width: 300px;
        }
      }
    }
  }
}
</style>
