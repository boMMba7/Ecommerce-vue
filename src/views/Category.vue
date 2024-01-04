<template>
  <v-container>
    <CategoryBanner />
    <Products />
  </v-container>
</template>

<script>
import Products from "@/components/Products.vue";
import CategoryBanner from "@/components/CategoryBanner.vue";
export default {
  data() {
    return {
      //
    };
  },
  components: {
    Products,
    CategoryBanner,
  },
};
</script>
