<template>
  <div
    class="tabs is-fullwidth has-text-primary is-medium is-marginless is-paddingless has-text-weight-bold is-toggle has-background-black-ter"
  >
    <ul>
      <li id="coname">
        <span class="is-hidden-touch has-text-white-ter"
          >Empirical Merchandising</span
        >
        <span class="is-hidden-desktop has-text-white-ter">EM</span>
      </li>
      <li
        v-for="(l, k) in navlinks"
        :key="k"
        class="pointer menuitem"
        @click="navLink(l.link, l.type)"
      >
        <span class="icon is-large is-hidden-desktop"
          ><fas :icon="l.icon"></fas
        ></span>
        <span class="menutext is-hidden-touch">{{ l.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlinks: {
        home: {
          link: "home",
          name: "Home",
          icon: "home",
          type: "router"
        },
        work: {
          link: "work",
          name: "Our Work",
          icon: "briefcase",
          type: "router"
        },
        about: {
          link: "about",
          name: "About Us",
          icon: "info",
          type: "router"
        },
        contact: {
          link: "toggle-contact",
          name: "Contact Us",
          icon: "comment-dots",
          type: "modal"
        }
      }
    };
  },
  methods: {
    navLink(link, type) {
      if (type == "router") {
        if (this.$route.name != link) this.$router.push({ name: link });
      }
      if (type == "modal") this.$emit(link);
    }
  },
  computed: {
    currentView() {
      console.log(this.$route.name);
      return this.$route.name;
    }
  }
};
</script>

<style>
.tabs {
  padding-bottom: 10px;
}
#coname {
  text-align: left;
  padding: 0.3em 1.5em;
}
.menuitem {
  flex-grow: 0 !important;
}
.menuitem .menutext {
  padding: 0 1.5em;
}
</style>
