<template>
  <v-container>
    <Carousel />
    <TopProducts />
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import TopProducts from "@/components/TopProducts.vue";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    Carousel,
    TopProducts,
  },
};
</script>
