<template>
  <div class="icon">
    <v-icon>mdi-magnify</v-icon>
  </div>
  <div class="icon">
    <v-badge inline :content="heartNumber" color="red">
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
  },

  methods: {
    navigateToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
  },

  watch: {
    cartTotal(newTotal, oldTotal) {
      if (newTotal !== oldTotal) {
        this.cartNumber = newTotal;
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
