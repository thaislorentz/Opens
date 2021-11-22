<template>
  <div class="finalize">
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
    <div>
      <p>
        <span>WICTOR,</span> seu pedido foi concluido! <br/>
        Iremos entregar na <span>RUA ALEMANHA 163  APTO 101,</span><br/>
        Caso tenhamos problemas vamos ligar no número <span> (31) 98266-3127.</span><br/>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Button from "../../components/Button/Index.vue";
import Footer from "../../components/Footer/Index.vue";

export default {
  name: "Landing",
  components: {
    // Button,
    Footer,
  },
  methods: {},
};
</script>

<style src="./style.scss" lang="scss" scoped/>


