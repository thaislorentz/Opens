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
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon class="landing-social-icon" :icon="['fab', 'font-awesome']" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon class="landing-social-icon" :icon="['fab', 'font-awesome']"/>
        </a>
        <a href="https://www.linkedin.com/in/thaislorentz/" target="_blank" rel="noreferrer">
          <font-awesome-icon class="landing-social-icon" :icon="['fab', 'font-awesome']" />
        </a>
        <div class="landing-social-line" />
      </div>
      <div class="landing-brand">
        <h1 class="landing-brand-title">Hamburger</h1>
        <p class="landing-brand-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
        </p>
        <div class="landing-brand-button">
        <Button msg="Ver Cardápio" @click="teste()"/>
        </div>
      </div>
      <div class="landing-container">
        <img
          class="landing-container-image"
          alt="Hamburger logo"
          src="../../assets/images/principal.png"
        />
        <span class="landing-container-burguer">BURGUER</span>
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


