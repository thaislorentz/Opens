<template>
  <div class="finalize">
    <div class="finalize-container">
    <div class="finalize-header">
      <router-link to="/">
        <img
          class="finalize-header-image"
          alt="Hamburger logo"
          src="../../assets/images/logo.png"
        />
      </router-link>
      <h1 class="finalize-header-title">EBA!!!</h1>
    </div>
    <div class="finalize-content">
      <p class="finalize-content-text">
        <span class="finalize-content-text-destaque">{{getCustomer.name}},</span> seu pedido foi concluido! <br/>
        Iremos entregar na <span class="finalize-content-text-destaque">{{getCustomer.address.street}} {{getCustomer.address.number}} {{getCustomer.address.complement}} {{getCustomer.address.neighborhood}},</span><br/>
        Caso tenhamos problemas vamos ligar no número <span class="finalize-content-text-destaque"> {{getCustomer.phone}}.</span><br/>
      </p>
    </div>
    <div class="finalize-button">
    <Button msg="COMPRAR MAIS" @click="() => this.$router.push('/')" />
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from "../../components/Button/Index.vue";
import Footer from "../../components/Footer/Index.vue";
import { mapGetters } from 'vuex'

export default {
  name: "Finalize",
  components: {
    Button,
    Footer,
  },
  computed: {
    ...mapGetters(['getCustomer']),
  },
};
</script>

<style src="./style.scss" lang="scss" scoped/>


