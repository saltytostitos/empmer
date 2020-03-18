<template>
  <footer class="footer has-background-black-ter">
    <div class="level is-mobile">
      <div class="level-left">
        <p class="level-item">
          <fas icon="copyright"></fas>Empirical Merchandising 2020
        </p>
      </div>
      <div class="icon level-item has-text-grey-dark is-size-7 is-italic ">
        <span @click="$emit('toggle-login')" class="pointer">admin</span>
      </div>
      <div class="level-right is-hidden-touch">
        <div class="icon level-item has-text-facebook">
          <img src="../assets/fb.png" />
        </div>
        <div class="icon level-item has-text-instagram">
          <img src="../assets/ig.png" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
