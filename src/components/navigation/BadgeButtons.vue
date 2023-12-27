<template>
  <div class="icon" @click="navigateToSearch">
    <v-icon>mdi-magnify</v-icon>
  </div>
  <div class="icon">
    <v-badge
      inline
      :content="heartNumber"
      color="red"
      @click="navigateToWishlist"
    >
      <v-icon>mdi-heart-outline</v-icon>
    </v-badge>
  </div>
  <div class="icon">
    <v-badge
      inline
      :content="cartNumber"
      color="red"
      @click="navigateToCheckout"
    >
      <v-icon>mdi-cart-outline</v-icon>
    </v-badge>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartNumber: 0,
      heartNumber: 0,
    };
  },

  computed: {
    ...mapGetters("cart", { cartTotal: "getTotalProducts" }),
    ...mapGetters("wishlist", { wishlistTotal: "getTotalProducts" }),
  },

  methods: {
    navigateToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
    navigateToWishlist() {
      this.$router.push({ name: "Wishlist" });
    },
    navigateToSearch() {
      this.$router.push({ name: "Search" });
    },
  },

  watch: {
    cartTotal(newTotal, oldTotal) {
      if (newTotal !== oldTotal) {
        this.cartNumber = newTotal;
      }
    },
    wishlistTotal(newTotal, oldTotal) {
      if (newTotal !== oldTotal) {
        this.heartNumber = newTotal;
      }
    },
  },
};
</script>

<style scoped>
.icon {
  padding: 12px;
}
</style>
