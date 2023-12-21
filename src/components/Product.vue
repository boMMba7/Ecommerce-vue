<template>
  <div>
    <v-card class="mx-auto my-12 pb-4" max-width="200">
      <v-hover v-slot="{ isHovering, props }">
        <v-expand-transition>
          <v-img
            height="250"
            class="mx-4"
            :src="`http://localhost:3001${imageUrl}`"
            :style="{ transform: isHovering ? 'scale(1.9)' : 'scale(1)' }"
          />
        </v-expand-transition>

        <v-card-item class="mt-n4">
          <v-card-title class="text-center">{{ name }}</v-card-title>
        </v-card-item>
        <v-card-text>
          <div class="text-center">
            {{ description }}
          </div>
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
        </v-card-text>
      </v-hover>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      imageUrl: "",
      price: "",
      rating: null,
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
};
</script>
