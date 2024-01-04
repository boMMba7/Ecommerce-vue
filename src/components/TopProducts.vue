<template>
  <div v-show="products.length > 0">
    <v-card flat class="mt-10">
      <v-card color="accent">
        <v-card-title> Top Sells </v-card-title>
      </v-card>
      <v-row>
        <v-col sm="3" v-for="product in products" :key="product.id">
          <Product :product="product" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import products from "@/api/products";
import { useApi } from "@/compositionFunctions/useApi";
import { mapGetters } from "vuex";
import Product from "./Product.vue";

export default {
  data() {
    return {
      title: "",
      products: [],
      categoryId: undefined,
      promotionalPhrases: [
        "Unlock a world of style and sophistication!",
        "Elevate your space with our chic home decor.",
        "Tech essentials for the modern enthusiast.",
        "Fashion-forward looks for every occasion.",
        "Discover the joy of reading with our book collection.",
        "Appliances that make life a breeze.",
        "Find your rhythm with our musical instruments.",
        "Sports gear for the active lifestyle.",
        "Irresistible deals, just a click away!",
        "Your go-to destination for all things fabulous.",
      ],
    };
  },
  components: {
    Product,
  },
  methods: {
    // TODO: put this in product store
    async getTopProducts() {
      const productsApi = useApi(products.getTopProducts);

      const limit = 5;
      const result = await productsApi.request(limit, this.categoryId);

      if (result.ok) {
        this.products = result.data;
      } else {
        console.log("API getTopProducts Fail", result.data);
      }
    },
  },
  computed: {
    ...mapGetters("category", { selectedCategory: "getSelectedCategory" }),
  },

  beforeMount() {
    this.getTopProducts();
  },
};
</script>
