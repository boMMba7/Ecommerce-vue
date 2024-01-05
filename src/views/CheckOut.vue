<template>
  <v-container>
    <v-card title="Checkout" flat class="text-center" />
    <CartList />
  </v-container>
</template>

<script>
import CartList from "@/components/cart/CartList.vue";

export default {
  data() {
    return {
      //
    };
  },

  components: {
    CartList,
  },
};
</script>
