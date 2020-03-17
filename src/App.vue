<template>
  <div id="app">
    <NavigationBar id="nav" @toggle-contact="toggleContact" />
    <NotificationBar v-if="alert.active" :alert="alert" @alert="toggleAlert" />
    <content id="bodycontent">
      <router-view @toggle-contact="toggleContact" />
    </content>

    <LoginModal
      v-if="login"
      @toggle-login="toggleLogin"
      :class="{ 'is-active': login }"
      @alert="toggleAlert($event)"
    />

    <ContactModal
      v-if="contact"
      :class="{ 'is-active': contact }"
      @toggle-contact="toggleContact"
      @alert="toggleAlert($event)"
    />
    <FooterBar id="footercontent" @toggle-login="toggleLogin" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import ContactModal from "./components/ContactModal";
import NotificationBar from "./components/NotificationBar";
import FooterBar from "./components/FooterBar";
import LoginModal from "./components/LoginModal";
export default {
  components: {
    NavigationBar,
    ContactModal,
    NotificationBar,
    FooterBar,
    LoginModal
  },
  data() {
    return {
      contact: false,
      login: false,
      alert: {
        active: false,
        type: "",
        message: ""
      }
    };
  },
  methods: {
    toggleLogin() {
      this.login = !this.login;
    },
    toggleContact() {
      this.contact = !this.contact;
    },
    toggleAlert(x) {
      if (!this.alert.active) {
        this.alert = { active: true, message: x.message, type: x.type };
      } else this.alert = { active: false, message: "", type: "" };
    }
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.pointer {
  cursor: pointer;
}
#footercontent {
  max-height: fit-content;
  padding: 0.5em 3em;
}
#bodycontent {
  flex: 1;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25%),
      rgba(0, 0, 0, 0.95%)
    ),
    url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
