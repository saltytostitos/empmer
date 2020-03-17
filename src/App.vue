<template>
  <div id="app">
    <NavigationBar id="nav" @toggle-contact="toggleContact" />
    <NotificationBar v-if="alert.active" :alert="alert" @alert="toggleAlert" />
    <router-view />
    <ContactModal
      v-if="contact"
      :class="{ 'is-active': contact }"
      @toggle-contact="toggleContact"
      @alert="toggleAlert($event)"
    />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import ContactModal from "./components/ContactModal";
import NotificationBar from "./components/NotificationBar";
export default {
  components: {
    NavigationBar,
    ContactModal,
    NotificationBar
  },
  data() {
    return {
      contact: false,
      alert: {
        active: false,
        type: "",
        message: ""
      }
    };
  },
  methods: {
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.pointer {
  cursor: pointer;
}
</style>
