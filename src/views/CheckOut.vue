<template>
  <div>
    CART...
    <Products :products="cartProducts()" />
  </div>
</template>

<script>
import Products from "@/components/Products.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
    };
  },

  components: {
    Products,
  },

  methods: {
    ...mapGetters("cart", { cartProducts: "getProducts" }),
  },
};
</script>
