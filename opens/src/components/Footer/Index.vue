<template>
  <footer>
    <div class="footer">
      <img
        class="footer-image"
        alt="Hamburger logo"
        src="../../assets/images/logo.png"
      />
      <div class="footer-informations">
        <div>
          <h3>Cardápio</h3>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
            >Ver cardápio completo</a
          >
        </div>
        <div class="footer-informations-contact">
          <h3>Contato</h3>
          <span>3/6B Railway Ave, Oakleigh VIC 3166</span>
          <span>thaisbarcelos.456@gmail.com</span>
          <span>(31)9 8266-3127</span>
        </div>
      </div>
    </div>
    <div class="social">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/thaislorentz/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon
            class="social-icon"
            :icon="['fab', 'font-awesome']"
          />
        </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";

footer {
  background: $predominant;
  border-top: solid $secondary 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: $white;
    font-weight: lighter;

  .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    &-informations {
      display: flex;

      &-contact {
        margin-left: 50px;
        display: flex;
        flex-direction: column;
      }
    }

    &-image {
      width: 100px;
      margin-left: 10px;
    }
  }

  .social {
    background: #4F714C;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    &-icon {
      margin-left: 10px;
    }
  }
}

@media screen and (max-width: 700px) {
  footer {
    .footer {
      flex-direction: column;
      &-informations {
        flex-direction: column;

        &-contact {
        margin-left: 0;
        }
      }
    }
  }
}
</style>
