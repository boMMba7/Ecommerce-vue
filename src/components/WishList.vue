<template>
  <div>
    <v-container>
      <v-card flat min-width="900" class="overflow-x-auto">
        <v-row>
          <v-col :cols="colsDelete" align="center">
            <h3 class="overflow-x-auto">Delete</h3>
          </v-col>

          <v-col :cols="colsImage" align="center">
            <h3>Image</h3>
          </v-col>

          <v-col :cols="colsName" align="center">
            <h3>Product</h3>
          </v-col>

          <v-col :cols="colsPrice" align="center">
            <h3>Price</h3>
          </v-col>

          <v-col :cols="colsQuant" align="center">
            <h3>Stoke</h3>
          </v-col>

          <v-col :cols="colsTotal" align="center">
            <h3>Add to cart</h3>
          </v-col>
        </v-row>
        <transition-group name="fade">
          <v-row
            v-for="(product, index) in getProductsInWishlist"
            :key="index"
            align="center"
            class="pa-2"
          >
            <v-col :cols="colsDelete" align="center">
              <v-btn
                @click="removeProductWishList(product.id)"
                icon="mdi-delete-forever"
                variant="outlined"
                width="30"
                height="30"
                color="red"
              />
            </v-col>
            <v-col :cols="colsImage" align="center">
              <v-img :src="baseUrl + product.imageurl" />
            </v-col>

            <v-col :cols="colsName" align="center">
              <v-card-title>{{ product.name }}</v-card-title>
            </v-col>

            <v-col :cols="colsPrice" align="center">
              <v-card-text> £ {{ product.price.toFixed(2) }} </v-card-text>
            </v-col>

            <v-col :cols="colsQuant" align="center">
              <v-row align="center">
                <v-card-text class="mr-n10"> In Stock </v-card-text>
              </v-row>
            </v-col>

            <v-col :cols="colsTotal" align="start">
              <AddButton :product="product" :cartOnly="true" />
            </v-col>
          </v-row>
        </transition-group>
      </v-card>
      <v-card v-if="!hasProduct()" flat class="pa-15" align="center">
        <h3>Cart is empty...</h3>
        <router-link to="./"> Back to Home Page </router-link>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddButton from "./AddButton.vue";
import { useBaseUrl } from "@/compositionFunctions/useBaseUrl";
export default {
  data() {
    return {
      baseUrl: useBaseUrl().baseURL,
      colsDelete: 2,
      colsImage: 1,
      colsName: 3,
      colsPrice: 2,
      colsQuant: 2,
      colsTotal: 2,
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
