<template>
  <v-card
    flat
    v-for="(product, index) in getProductsInWishlist"
    :key="index"
    class="pa-2"
  >
    <template v-slot:append>
      <v-btn
        @click="removeProductWishList(product.id)"
        icon="mdi-delete-forever"
        variant="outlined"
        color="red"
        width="30"
        height="30"
      />
    </template>
    <transition-group name="fade">
      <v-row justify="start" align="center">
        <v-col xs="2" md="2">
          <v-card-subtitle> Name</v-card-subtitle>
          <v-card-title>{{ product.name }}</v-card-title>
        </v-col>

        <v-col xs="2" md="2">
          <v-img :src="apiURL + product.imageurl" width="140" maxHeight="140" />
        </v-col>

        <v-col xs="2" md="2">
          <v-card-subtitle> Price</v-card-subtitle>
          <v-card-title> £ {{ product.price.toFixed(2) }} </v-card-title>
        </v-col>

        <v-col xs="1" md="2">
          <v-card-title> In Stock </v-card-title>
        </v-col>

        <v-col xs="4" md="4">
          <v-card-actions>
            <v-col>
              <AddButton :product="product" :cartOnly="true" />
            </v-col>
          </v-card-actions>
        </v-col>
      </v-row>
    </transition-group>
    <v-divider />
  </v-card>

  <v-card v-if="!hasProduct()" flat class="pa-15" height="600" align="center">
    <v-card-title>Wishlist is empty...</v-card-title>
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
