<template>
  <v-container>
    <v-text-field
      v-model="searchQuery"
      placeholder="Search"
      outlined
      @input="performSearch"
      prepend-icon="mdi-magnify"
      append-icon="mdi-filter"
      @click:append="filterButton"
      :messages="quantityResultText"
    >
    </v-text-field>

    <v-row v-show="showFilter">
      <SearchFilter />
    </v-row>

    <v-card height="400" class="overflow-y-auto">
      <v-list>
        <v-list-item
          v-for="(product, i) in getSearchProducts"
          :key="i"
          class="py-5"
          @click="navigateToProduct(product)"
        >
          <v-row>
            <v-col cols="1" align-self="center">
              <v-img :src="apiURL + product.imageurl" height="50" />
            </v-col>

            <v-col cols="7" align="start">
              <v-list-item-title>{{ product.name }}</v-list-item-title>
              <v-list-item-subtitle>{{
                product.description
              }}</v-list-item-subtitle>
            </v-col>

            <v-col cols="2" align="start">
              <v-list-item-title>{{ product.category_name }}</v-list-item-title>
            </v-col>

            <v-col cols="2" align="end">
              <v-list-item-title>£ {{ product.price }}</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchFilter from "@/components/SearchFilter.vue";

export default {
  data() {
    return {
      apiURL: import.meta.env.VITE_API_URL,
      searchQuery: "",
      showFilter: false,
    };
  },

  components: {
    SearchFilter,
  },

  computed: {
    ...mapGetters("search", ["getSearchProducts"]),
    quantityResultText() {
      const quantity = this.getSearchProducts.length;
      const text = quantity < 2 ? `${quantity} result` : `${quantity} results`;
      return text;
    },
  },

  methods: {
    ...mapActions("search", ["searchProducts"]),
    ...mapActions("product", ["setCurrentProduct"]),

    performSearch() {
      if (!this.searchQuery) return;
      const criteria = { name: this.searchQuery };
      this.searchProducts(criteria);
    },

    filterButton() {
      this.showFilter = !this.showFilter;
    },

    navigateToProduct(product) {
      this.setCurrentProduct(product);

      this.$router.push({
        name: "Product",
        params: { productId: product.id },
      });
    },
  },
};
</script>
