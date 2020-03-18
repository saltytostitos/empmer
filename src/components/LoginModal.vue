<template>
  <div class="modal">
    <div class="modal-content">
      <form>
        <div class="field has-addons">
          <p class="control is-expanded has-icons-left">
            <input
              size="is-large"
              class="input"
              type="password"
              autocomplete="current-password"
              placeholder="Please enter your ultra super secret password.."
            />
            <span class="icon is-small is-left has-text-danger"
              ><fas icon="user-lock"></fas
            ></span>
          </p>
          <p class="control">
            <button
              class="button is-success is-outlined"
              @click="$emit('toggle-login')"
            >
              <fas icon="check"></fas>
            </button>
          </p>
          <p class="control">
            <button
              class="button is-danger is-outlined"
              @click="$emit('toggle-login')"
            >
              <fas icon="times"></fas>
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setTimeout() {
        let vm = this;
        setTimeout(function() {
          vm.$emit("toggle-login");
        }, 4500);
      }
    };
  },
  mounted() {
    this.setTimeout();
  }
};
</script>

<style></style>
