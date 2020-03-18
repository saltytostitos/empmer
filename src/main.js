import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/bulma.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./plugins/fontawesome.js";

Vue.config.productionTip = false;

Vue.component("fas", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

//TODO: INSTALL VUE-GTAG
// LAZY LOAD IMAGES?
// IMG ALT TAGS
