<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title has-text-weight-bold">Send us a message!</p>
      </header>
      <section class="modal-card-body">
        <!-- NAME FIELD -->
        <div class="field">
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Enter Your Name" />
            <span class="icon is-small is-left">
              <fas icon="user"></fas>
            </span>
          </div>
        </div>
        <!-- PHONE NUMBER FIELD -->
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
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
            <input class="input" type="text" placeholder="Your Email Address" />
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
      </section>
      <footer class="modal-card-foot">
        <div class="level">
          <button class="button is-success level-item" @click="submitContact">
            Submit
          </button>
          <button class="button is-danger level-item" @click="toggleContact">
            Cancel
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["is-active"],
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
