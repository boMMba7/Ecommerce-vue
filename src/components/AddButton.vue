<template>
  <v-btn
    class="mt-10"
    variant="outlined"
    size="small"
    @click="addProduct(product)"
  >
    Add to cart
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],

  methods: {
    ...mapActions("cart", ["addProduct"]),
  },
};
</script>
