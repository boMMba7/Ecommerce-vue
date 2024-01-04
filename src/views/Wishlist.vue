<template>
  <v-container>
    <Wishlist />
  </v-container>
</template>

<script>
import Wishlist from "@/components/WishList.vue";

export default {
  data() {
    return {
      products: [],
    };
  },

  components: {
    Wishlist,
  },
};
</script>
