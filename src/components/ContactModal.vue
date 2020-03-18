<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form autocomplete="on" @keyup.esc="toggleContact">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-weight-bold">
            Send us a message!
          </p>
        </header>
        <section class="modal-card-body">
          <!-- NAME FIELD -->
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                autocomplete="name"
                placeholder="Enter Your Name"
              />
              <span class="icon is-small is-left">
                <fas icon="user"></fas>
              </span>
            </div>
          </div>
          <!-- PHONE NUMBER FIELD -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                autocomplete="tel"
                class="input"
                type="phone"
                placeholder="Your Best Contact Number"
              />
              <span class="icon is-small is-left">
                <fas icon="mobile-alt"></fas>
              </span>
            </div>
          </div>
          <!-- EMAIL FIELD -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                autocomplete="email"
                class="input"
                type="email"
                placeholder="Your Email Address"
              />
              <span class="icon is-small is-left">
                <fas icon="envelope"></fas>
              </span>
            </div>
          </div>
          <!-- MESSAGE FIELD -->
          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Leave us a message..."
              ></textarea>
            </div>
          </div>
          <!-- Text -->
          <section class="is-italic">
            Please send us a message and we will return it as soon as possible.
          </section>
        </section>
        <footer class="modal-card-foot">
          <div class="container">
            <input
              type="submit"
              class="button is-success is-full-width"
              @click="submitContact"
            />

            <button class="button is-danger " @click="toggleContact">
              Cancel
            </button>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["is-active"],
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    toggleContact() {
      this.$emit("toggle-contact");
    },
    submitContact() {
      this.$emit("alert", {
        type: "is-success",
        message: "Your message has been sent!"
      });
      this.toggleContact();
    }
  }
};
</script>

<style></style>
