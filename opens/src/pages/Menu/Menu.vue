<template>
  <div class="menu">
    <div class="menu-container">
      <div class="menu-list">
        <div class="menu-header">
          <router-link to="/">
            <img
              class="menu-header-image"
              alt="Hamburger logo"
              src="../../assets/images/logo.png"
            />
          </router-link>
          <div>
          <input type="search" name="" id="" />
          </div>
        </div>
        <div class="menu-food">
          <div v-for="(promotion, index) in promotions" :key="index">
            <Card :promotion="promotion" />
          </div>
        </div>
      </div>
      <Bag />
    </div>
    <Footer />
  </div>
</template>

<script>
import Bag from "../../components/Bag/Index.vue";
import Card from "../../components/Card/Index.vue";
import Footer from "../../components/Footer/Index.vue";

export default {
  name: "Menu",
  components: {
    Bag,
    Card,
    Footer,
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


