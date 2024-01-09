<template>
  <v-card flat class="d-none d-sm-block" color="transparent">
    <v-row>
      <v-col>
        <v-btn icon="mdi-magnify" @click="navigateToSearch"> </v-btn>
      </v-col>
      <v-col>
        <v-btn
          icon
          @click="navigateToWishlist"
          @mouseover="heartMouseOuver"
          @mouseleave="heartMouseLeave"
        >
          <v-icon>mdi-heart-outline</v-icon>
          <v-badge
            class="ms-n3"
            inline
            :content="heartNumber"
            :color="heartNumber === 0 ? 'gray' : 'red'"
          ></v-badge>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          icon
          @click="navigateToCheckout"
          @mouseover="cartMouseOver"
          @mouseleave="cartMouseLeave"
        >
          <v-icon>mdi-cart-outline</v-icon>
          <v-badge
            class="ms-n3"
            inline
            :content="cartNumber"
            :color="cartNumber === 0 ? 'gray' : 'red'"
          ></v-badge>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn icon="mdi-account-outline" @click="onAccounClick"> </v-btn>
      </v-col>
    </v-row>
  </v-card>
  <v-card flat class="d-flex d-sm-none" color="transparent">
    <v-btn icon="mdi-menu" @click="onMobileMenuClick"> </v-btn>
  </v-card>
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
    mobileMenuDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("mobileMenu");
    },
  },

  methods: {
    ...mapActions("drawer", ["openDrawer", "closeDrawer", "closeAllDrawers"]),
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

    onMobileMenuClick() {
      if (this.mobileMenuDrawerOpen) {
        this.closeAllDrawers();
      } else {
        this.openDrawer("mobileMenu");
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
