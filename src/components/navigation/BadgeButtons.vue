<template>
  <div class="icon">
    <v-btn icon="mdi-magnify" @click="navigateToSearch"> </v-btn>
  </div>
  <div class="icon">
    <v-btn
      icon
      @click="navigateToWishlist"
      @mouseover="heartMouseOuver"
      @mouseleave="heartMouseLeave"
    >
      <v-icon class="mr-n3">mdi-heart-outline</v-icon>
      <v-badge inline :content="heartNumber" color="red"></v-badge>
    </v-btn>
  </div>
  <div class="icon">
    <v-btn
      icon
      @click="navigateToCheckout"
      @mouseover="cartMouseOver"
      @mouseleave="cartMouseLeave"
    >
      <v-icon class="mr-n3">mdi-cart-outline</v-icon>
      <v-badge inline :content="cartNumber" color="red"></v-badge>
    </v-btn>
  </div>
  <div class="icon">
    <v-btn icon="mdi-account-outline" @click="onAccounClick"> </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    //must to be this way to send argument to getter using currier functions
    userDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("user");
    },
  },

  methods: {
    ...mapActions("drawer", ["openDrawer", "closeDrawer"]),
    navigateToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
    navigateToWishlist() {
      this.$router.push({ name: "Wishlist" });
    },
    navigateToSearch() {
      this.$router.push({ name: "Search" });
    },

    cartMouseOver() {
      this.openDrawer("cart");
    },
    cartMouseLeave() {
      this.closeDrawer("cart");
    },
    heartMouseOuver() {
      this.openDrawer("wishlist");
    },
    heartMouseLeave() {
      this.closeDrawer("wishlist");
    },

    onAccounClick() {
      if (this.userDrawerOpen) {
        this.closeDrawer("user");
      } else {
        this.openDrawer("user");
      }
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
  padding-left: 12px;
}
</style>
