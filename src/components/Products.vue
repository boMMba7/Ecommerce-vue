<template>
  <div>
    <v-card :title="title">
      <v-row>
        <v-col v-for="product in products" :key="product.id">
          <Product :product="product" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  data() {
    return {};
  },
  props: ["title", "products"],

  components: {
    Product,
  },
};
</script>
