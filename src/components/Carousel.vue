<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-card :color="colors[i]" height="100%">
        <div class="mx-12 d-flex fill-height justify-center align-center">
          <v-col>
            <v-row>
              <v-card-title class="text-h5">
                {{ slide.name }}
              </v-card-title>

              <div class="d-flex fill-height justify-center align-center">
                <p class="text text-white">{{ slide.description }}</p>
              </div>

              <v-card-actions transition="expand-x-transition">
                <AddButton :product="slide" :cartOnly="true" />
              </v-card-actions>
            </v-row>
          </v-col>
          <v-col>
            <v-card>
              <v-img :src="baseURL + slide.imageurl" class="pa-10" cover />
            </v-card>
          </v-col>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];

// if declare script setup, the setup() hook will not fire
const { baseURL } = useBaseUrl();
</script>

<script>
import products from "@/api/products";
import { useApi } from "@/compositionFunctions/useApi";
import AddButton from "./AddButton.vue";
import { useBaseUrl } from "@/compositionFunctions/useBaseUrl";

export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [],
    };
  },
  beforeMount() {
    this.getProducts();
  },

  components: {
    AddButton,
  },
  computed: {},

  methods: {
    async getProducts() {
      const productsApi = useApi(products.getTopProducts);
      const result = await productsApi.request(5);
      if (result.ok) this.slides = result.data;
    },
  },
};
</script>
