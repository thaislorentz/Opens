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
            <Input
              type="form"
              placeholder="Logradouro"
              v-model="address.street"
            />
          </div>
          <div class="checkout-address-input">
            <Input type="form" placeholder="Número" v-model="address.number" />
          </div>
          <div class="checkout-address-input">
            <Input
              type="form"
              placeholder="Bairro"
              v-model="address.neighborhood"
            />
          </div>
          <div class="checkout-address-input">
            <Input type="form" placeholder="Cidade" v-model="address.city" />
          </div>
          <div class="checkout-address-input size">
            <Input
              type="form"
              placeholder="Complemento"
              v-model="address.complement"
            />
          </div>
        </div>
      </div>
      <div class="checkout-button">
        <Button @click="() => {this.$router.push('/checkout-2'), this.saveAddress()}" />
        <Button @click="() =>{ this.$router.push('/finalize'), this.saveAddress()}" />
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
import { mapActions, mapGetters } from 'vuex'

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
      address: {
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
      },
    };
  },
  created() {
    if (this.getCustomer.address) {
      this.postalCode = this.getCustomer.address.postalCode
      this.address = this.getCustomer.address;
    }
  },
  computed: {
    ...mapGetters(["getCustomer", "hasCustomer"]),
  },
  watch: {
      postalCode: function () {
        console.log(this.postalCode);
        this.searchCep(this.postalCode);
      },
  },
  methods: {
    ...mapActions(["setCustomer"]),
    searchCep(cep) {
      if (cep.length == 8) {
        axios
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            console.log(response.data);
            this.address.street = response.data.logradouro;
            this.address.neighborhood = response.data.bairro;
            this.address.city = response.data.localidade;
            this.saveAddress()
          })
          .catch((error) => console.log(error));
      }
    },
    saveAddress() {
      this.setCustomer({ address: {...this.address, postalCode: this.postalCode}});
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
