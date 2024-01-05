<template>
  <v-container>
    <v-card title="Wishlist" flat class="text-center" />
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
