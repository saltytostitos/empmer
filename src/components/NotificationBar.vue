<template>
  <div class="notification is-size-5 is-light" :class="alert.type">
    <button class="delete" @click="$emit('alert')"></button>
    {{ alert.message }}
  </div>
</template>

<script>
export default {
  props: ["alert"],
  methods: {
    timeout() {
      let vm = this;
      setTimeout(function() {
        vm.$emit("alert");
      }, 4000);
    }
  },
  mounted() {
    this.timeout();
  }
};
</script>

<style></style>
