<template>
  <v-card>
    <v-navigation-drawer v-model="userDrawerOpen" temporary location="right">
      <v-card
        prepend-icon="mdi-heart-outline"
        title="WishList"
        color="accent"
      ></v-card>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(product, index) in getProductsInWishlist"
          :key="index"
          :prepend-avatar="apiURL + product.imageurl"
          :title="product.name"
          :subtitle="product.description"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item-title class="pt-2"
          >{{ getProductsInWishlist.length }} products</v-list-item-title
        >
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      apiURL: import.meta.env.VITE_API_URL,
    };
  },

  computed: {
    ...mapGetters("wishlist", ["getProductsInWishlist"]),

    //must to be this way to send argument to getter using currier functions
    userDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("wishlist");
    },
  },
};
</script>
