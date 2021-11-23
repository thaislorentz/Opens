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
          <div class="menu-input">
          <Input type="search" v-model="search"/>
          </div>
        </div>
        <div class="menu-food">
          <div v-for="(food, index) in foods" :key="index">
          <Card :food="food" :addCart="addCart"/>
          </div>
        </div>
      </div>
      <Bag :selected="carts"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Bag from "../../components/Bag/Index.vue";
import Card from "../../components/Card/Index.vue";
import Input from "../../components/Input/Index.vue";
import Footer from "../../components/Footer/Index.vue";
import axios from "axios";

const baseURL = "http://localhost:3000";
export default {
  name: "Menu",
  components: {
    Bag,
    Input,
    Card,
    Footer,
  },
  data() {
    return {
      foods: [],
      carts: [],
      search: ''
    };
  },
  watch: {
    search: function () {
      this.filterDevices(this.search)
    }
  },
  methods: {
    getFood() {
      axios
        .get(`${baseURL}/produtos`)
        .then((response) => {
          this.foods = response.data.slice(0, 8);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCart() {
      axios
        .get(`${baseURL}/cart`)
        .then((response) => {
          this.carts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addCart(food) {
      axios
        .post(`${baseURL}/cart`, food)
        .then(() => {
          this.getCart()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterDevices (value) {
    if (value === '' || value === null) {
    this.getFood()
    }
    else {
      this.foods = this.foods.filter((food) => {
        return (food.name && food.name.toLowerCase().includes(value.toLowerCase()))
          || (food._id === (value))
          || (food.description && food.description.toLowerCase().includes(value.toLowerCase()))
      })
    }
  }
  },
  created() {
    this.getFood();
    this.getCart();
  },
};
</script>

<style src="./style.scss" lang="scss" scoped/>


