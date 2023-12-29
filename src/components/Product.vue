<template>
  <div>
    <v-card class="mx-auto my-3 pb-4" max-width="230" @click="goToProduct">
      <v-hover v-slot="{ isHovering, props }">
        <v-expand-transition>
          <v-img
            height="250"
            class="mx-4"
            :src="apiURL + imageUrl"
            :style="{ transform: isHovering ? 'scale(1.9)' : 'scale(1)' }"
          />
        </v-expand-transition>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ name }}</v-card-title>
        </v-card-item>
        <v-card-text>
          <v-row align="center" class="mx-0 mt-2">
            <v-rating
              :model-value="rating"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <v-spacer></v-spacer>
            <div class="text-grey ms-4">{{ price }}</div>
          </v-row>
          <v-row>
            <AddButton :product="product" @button-clicked="handleChieldClick" />
          </v-row>
        </v-card-text>
      </v-hover>
    </v-card>
  </div>
</template>

<script>
import AddButton from "./AddButton.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      apiURL: import.meta.env.VITE_API_URL,
      name: "",
      description: "",
      imageUrl: "",
      price: "",
      rating: null,
      chieldComponentClik: false,
    };
  },
  name: "Product",
  props: ["product"],
  beforeMount() {
    const { name, description, imageurl, price, rating } = this.product;
    this.name = name;
    this.description = description;
    this.imageUrl = imageurl;
    this.price = price;
    this.rating = rating;
  },

  components: { AddButton },

  methods: {
    ...mapActions("product", ["setCurrentProduct"]),

    goToProduct() {
      // prevent the navegate to product if click on child components " Add to cart / wishlist"
      if (this.chieldComponentClik) return (this.chieldComponentClik = false);

      this.setCurrentProduct(this.product);

      this.$router.push({
        name: "Product",
        params: { productId: this.product.id },
      });
    },

    handleChieldClick() {
      this.chieldComponentClik = true;
    },
  },
};
</script>
