<template>
  <div>
    <v-card class="pa-15">
      <v-row>
        <v-col cols="4" xs="12" sm="8" md="4">
          <v-img :src="baseURL + product.imageurl" width="300" />
        </v-col>
        <v-col cols="8" xs="12" sm="6" md="8">
          <v-card-title>
            {{ product.name }}
          </v-card-title>
          <v-rating
            :model-value="product.rating"
            color="amber"
            density="compact"
            half-increments
            readonly
          />
          <v-card-text> £ {{ product.price }} </v-card-text>
          <v-card-text> {{ product.description }} </v-card-text>
          <AddButton :product="product" />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AddButton from "@/components/AddButton.vue";
import { useBaseUrl } from "@/compositionFunctions/useBaseUrl";
import { mapGetters } from "vuex";

export default {
  setup() {
    const { baseURL } = useBaseUrl();

    return { baseURL };
  },

  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapGetters("product", ["getCurrentProduct"]),
  },
  props: ["productId"],
  beforeMount() {
    this.product = this.getCurrentProduct;
  },
  components: { AddButton },
};
</script>
