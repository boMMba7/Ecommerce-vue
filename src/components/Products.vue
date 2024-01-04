<template>
  <v-card flat class="mt-10">
    <v-row>
      <v-col v-for="product in getSelectedCategoryProducts" :key="product.id">
        <Product :product="product" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Product from "./Product.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  props: ["title"],

  computed: {
    ...mapGetters("category", ["getSelectedCategoryProducts"]),
  },

  components: {
    Product,
  },
};
</script>
