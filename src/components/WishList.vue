<template>
  <v-card
    flat
    v-for="(product, index) in getProductsInWishlist"
    :key="index"
    class="pa-2"
  >
    <transition-group name="fade">
      <v-row justify="start" align="center">
        <v-col xs="2" md="2">
          <v-card-subtitle> Name</v-card-subtitle>
          <v-card-title>{{ product.name }}</v-card-title>
        </v-col>

        <v-col xs="2" md="2">
          <v-img :src="apiURL + product.imageurl" width="140" />
        </v-col>

        <v-col xs="2" md="2">
          <v-card-subtitle> Price</v-card-subtitle>
          <v-card-title> £ {{ product.price.toFixed(2) }} </v-card-title>
        </v-col>

        <v-col xs="1" md="2">
          <v-card-title> In Stock </v-card-title>
        </v-col>

        <v-col xs="4" md="4">
          <v-row justify="center" align="center">
            <v-col>
              <AddButton :product="product" :cartOnly="true" />
            </v-col>
            <v-col>
              <v-btn
                @click="removeProductWishList(product.id)"
                icon="mdi-delete-forever"
                variant="outlined"
                color="red"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </transition-group>
    <v-divider />
  </v-card>

  <v-card v-if="!hasProduct()" flat class="pa-15" align="center">
    <v-card-title>Cart is empty...</v-card-title>
    <br />
    <router-link to="./"> Back to Home Page </router-link>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddButton from "./AddButton.vue";

export default {
  data() {
    return {
      apiURL: import.meta.env.VITE_API_URL,
      colsDelete: 2,
      colsImage: 1,
      colsName: 2,
      colsPrice: 2,
      colsQuant: 2,
      colsTotal: 3,
    };
  },
  computed: {
    ...mapGetters("wishlist", ["getProductsInWishlist"]),
  },
  methods: {
    ...mapActions("wishlist", ["removeProductWishList"]),
    hasProduct() {
      return this.getProductsInWishlist.length > 0;
    },
  },
  components: { AddButton },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
