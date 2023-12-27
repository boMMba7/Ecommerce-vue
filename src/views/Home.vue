<template>
  <v-container>
    <CategoryBanner v-show="selectedCategory()" />
    <Carousel v-show="!selectedCategory()" />
    <TopProducts />

    <Products :title="selectedCategory()?.category_name" :products="products" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "@/components/Carousel.vue";
import CategoryBanner from "@/components/CategoryBanner.vue";
import TopProducts from "@/components/TopProducts.vue";
import Products from "@/components/Products.vue";

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Carousel,
    CategoryBanner,
    TopProducts,
    Products,
  },

  computed: {
    ...mapGetters("category", { getProducts: "getSelectedCategoryProducts" }),
  },

  methods: {
    ...mapGetters("category", {
      selectedCategory: "getSelectedCategory",
    }),
  },

  watch: {
    getProducts(newProducts, holdProducts) {
      if (newProducts !== holdProducts) {
        this.products = newProducts;
      }
    },
  },
};
</script>
