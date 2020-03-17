<template>
  <div class="section container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile is-child is-12">
          <div class="image is-21x9 has-background-white-ter logoimg ">
            <p
              class="is-size-2 has-text-black-bis has-text-centered has-text-weight-bold"
            >
              LOGO HERE
            </p>
          </div>
        </div>

        <div class="tile">
          <div class="tile is-child is-2">
            <div class="image is-1by1 profilepic">
              <img src="../assets/tr.jpg" />
            </div>
          </div>
          <div class="tile is-child is-vertical">
            <div class="tile is-warning is-size-4 left-align">
              My Name is Tyler Ralston
            </div>
            <div class="tile is-warning left-align">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia
              necessitatibus architecto odit, nemo dicta atque modi itaque
              laborum maiores error illum voluptas expedita qui minus quae
              dolorum dolores fugit? Natus odio voluptatem consequatur fugiat
              sequi fugit sed nemo dolorem ea dignissimos rem, voluptates
              temporibus voluptatum nam quasi, assumenda obcaecati animi. Ipsa
              temporibus dolorem quaerat minus harum, magni atque corporis! Quis
              unde velit sapiente. Distinctio modi optio dignissimos illo!
              Voluptatibus eum ducimus animi quam non, corrupti aut delectus
              repellat excepturi quia. Expedita ipsum magni recusandae tempora
              assumenda aspernatur nulla est. Hic labore reiciendis mollitia
              voluptates deleniti consequuntur illo fugiat, nobis dolore. Iste,
              accusantium ea earum quam praesentium repudiandae quos autem sit
              vitae, adipisci eaque veritatis suscipit accusamus id nobis
              assumenda. Hic officiis, incidunt fugiat aut quidem id assumenda
              debitis odit beatae sequi porro cupiditate nemo ullam placeat
              perferendis expedita ex iste libero explicabo! Numquam eaque,
              deleniti eum ea error rem?
            </div>
            <div class="tile is-pulled-right">
              <button
                class="button is-primary"
                @click="$emit('toggle-contact')"
              >
                Message Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.profilepic {
  padding: 10px;
}
.logoimg {
  height: 150px;
}
</style>
