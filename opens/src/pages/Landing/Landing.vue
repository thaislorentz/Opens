<template>
  <div class="landing">
    <header class="landing-header">
      <img
        class="landing-header-image"
        alt="Hamburger logo"
        src="../../assets/images/logo.png"
      />
      <nav class="landing-nav">
        <a class="landing-nav-items" href="#home"> Home </a>
        <a class="landing-nav-items" href="#promocoes"> Promoções </a>
        <a class="landing-nav-items selected" href="#cardapio"> Cardápio </a>
      </nav>
    </header>
    <section class="landing-section">
      <div class="landing-social">
        <div class="landing-social-line" />
        <a href="https://t.me/topairbnbbrasil" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            class="landing-social-icon"
            :icon="['fas', 'faTelegram']"
            color="#fff"
            size="2x"
          />
          <font-awesome-icon :icon="['fab', 'font-awesome']" />
        </a>
        oi
        <a
          href="https://www.instagram.com/top.airbnb.brasil/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            class="landing-social-icon"
            icon="{faInstagramSquare}"
            color="#fff"
            size="2x"
          />
        </a>
        <div class="landing-social-line" />
      </div>
      <div class="landing-brand">
        <h1 class="landing-brand-title">Hamburger</h1>
        <p class="landing-brand-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
        </p>
        <div class="landind-brand-button">
        <Button msg="Ver Cardápio" @click="teste()"/>
        </div>
      </div>
      <div class="landing-container">
        <img
          class="landing-container-image"
          alt="Hamburger logo"
          src="../../assets/images/principal.png"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Button from '../../components/Button/Index.vue'

export default {
  name: "Landing",
  components: {
    Button
  },
  methods: {
    teste() {
      console.log('foi')
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped/>


