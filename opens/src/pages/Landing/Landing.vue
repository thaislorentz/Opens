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
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <font-awesome-icon
            class="landing-social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <font-awesome-icon
            class="landing-social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/thaislorentz/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon
            class="landing-social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
        <div class="landing-social-line" />
      </div>
      <div class="landing-brand">
        <h1 class="landing-brand-title">Hamburger</h1>
        <p class="landing-brand-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
        </p>
        <div class="landing-brand-button">
          <Button msg="Ver Cardápio" @click="teste()" />
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
    <section class="landing-promotion">
      <h2 class="landing-promotion-title">
        PROMOÇÕES <span class="landing-promotion-title-white">DA SEMANA</span>
      </h2>
      <div class="landing-promotion-grid">
        <div v-for="(promotion, index) in promotions" :key="index">
          <Card :promotion="promotion" />
        </div>
      </div>
      <div class="landing-promotion-button">
        <Button msg="Ver Cardápio" @click="teste()" />
      </div>
    </section>
    <section class="landing-funcionar" id="servicos">
      <span class="landing-funcionar-title">COMO FUNCIONA</span>
      <div class="landing-funcionar-passos">
        <div class="landing-funcionar-passos-etapas bottom">
          <span class="landing-funcionar-passos-etapas-numero">1.</span>
          <div class="landing-funcionar-passos-etapas-texto">
            <span class="landing-funcionar-passos-etapas-texto-title"
              >Navegue pelo site</span
            >
            <span class="landing-funcionar-passos-etapas-texto-informacao"
              >Lorem ipsum dolor sit amet, consectetur </span
            >
          </div>
        </div>
        <div class="landing-funcionar-passos-etapas top">
          <span class="landing-funcionar-passos-etapas-numero">2.</span>
          <div class="landing-funcionar-passos-etapas-texto">
            <span class="landing-funcionar-passos-etapas-texto-title"
              >Decida o que comer</span
            >
            <span class="landing-funcionar-passos-etapas-texto-informacao"
              >Lorem ipsum dolor sit amet, consectetur </span
            >
          </div>
        </div>
        <div class="landing-funcionar-passos-etapas bottom">
          <span class="landing-funcionar-passos-etapas-numero">3.</span>
          <div class="landing-funcionar-passos-etapas-texto">
            <span class="landing-funcionar-passos-etapas-texto-title"
              >Finalize a compra</span
            >
            <span class="landing-funcionar-passos-etapas-texto-informacao"
              >Lorem ipsum dolor sit amet, consectetur </span
            >
          </div>
        </div>
        <div class="landing-funcionar-passos-etapas">
          <span class="landing-funcionar-passos-etapas-numero">4.</span>
          <span class="landing-funcionar-passos-etapas-final"
            >SEU LANCHE SERÁ ENTREGUE COMO COMBINADO!</span
          >
        </div>
      </div>
    </section>
    <section class="landing-menu">
      <div class="landing-menu-section">
        <div class="landing-menu-section-container">
          <div class="landing-menu-section-container-servico">
            <span class="landing-menu-section-container-servico-title"
              >CARDÁPIO</span
            >
          </div>
          <img
            src="../../assets/images/cardapio1.jpg"
            alt="top-airbnb-serviço"
            class="landing-menu-section-container-imagem"
          />
          <div class="landing-menu-section-container-card">
            <Card
              :promotion="{
                name: 'Hospedagens',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet',
              }"
            />
          </div>
        </div>
        <div class="landing-menu-section-container reverse">
          <div class="landing-menu-section-container-servico">
            <span class="landing-menu-section-container-servico-title"
              >CARDÁPIO</span
            >
          </div>
          <img
            src="../../assets/images/cardapio2.jpg"
            alt="top-airbnb-serviço"
            class="landing-menu-section-container-imagem"
          />
          <div class="landing-menu-section-container-card">
            <Card
              :promotion="{
                name: 'Hospedagens',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet',
              }"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Button from "../../components/Button/Index.vue";
import Card from "../../components/Card/Index.vue";

export default {
  name: "Landing",
  components: {
    Button,
    Card,
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
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 4,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 5,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 6,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 7,
        },
        {
          img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
          name: "Combo sanduiches",
          description: "Contém 2 sanduiches, anéis de cebola, batata ....",
          id: 8,
        },
      ],
    };
  },
  methods: {
    teste() {
      console.log("foi");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped/>


