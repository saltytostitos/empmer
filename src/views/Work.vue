<template>
  <div class="section container">
    <p class="is-size-2">This Is Our Work</p>
    <figure class="image is-4by3 is-unselectable">
      <img :src="images[pos]" />
      <div id="imgcontrols" class="level is-mobile is-overlay">
        <span @click="slide('left')" class="icon is-large pointer"
          ><fas class="level-item is-size-1" icon="chevron-left"></fas
        ></span>
        <span @click="slide('right')" class="icon is-large pointer"
          ><fas class="level-item is-size-1" icon="chevron-right"></fas
        ></span>
      </div>
    </figure>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

export default {
  data() {
    return {
      images: [
        "https://pictures.dealer.com/m/machaikdodgecllc/0722/3d18b0b3d9529ceb52e6851dc5513871x.jpg",
        "https://pictures.dealer.com/m/machaikdodgecllc/0672/f0c5141f935109eb9f48311a4ef568a9x.jpg",
        "https://pictures.dealer.com/m/machaikdodgecllc/0646/234c2a3f78544d2012fc4100126338c6x.jpg"
      ],
      pos: 0
    };
  },
  methods: {
    slide(rl) {
      if (rl == "left") {
        if (this.pos == 0) this.pos = this.images.length - 1;
        else this.pos -= 1;
      }
      if (rl == "right") {
        if (this.pos == this.images.length - 1) this.pos = 0;
        else this.pos += 1;
      }
    }
  },
  mounted() {}
};
</script>

<style>
figure,
figure img {
  max-height: 600px;
}
#imgcontrols {
  padding: 0 30px;
}
#imgcontrols .icon {
  background: rgba(0, 0, 0, 0.2);
}
</style>
