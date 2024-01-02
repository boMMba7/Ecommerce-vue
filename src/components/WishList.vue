<template>
  <div>
    <v-container>
      <v-card flat class="overflow-x-auto">
        <v-card color="accent" class="py-2">
          <v-row>
            <v-col :cols="colsDelete" align="center">
              <v-card-title>Delete</v-card-title>
            </v-col>

            <v-col :cols="colsImage" align="center">
              <v-card minWidth="90px" flat color="transparent">
                <v-card-title>Image</v-card-title>
              </v-card>
            </v-col>

            <v-col :cols="colsName" align="center">
              <v-card-title>Product</v-card-title>
            </v-col>

            <v-col :cols="colsPrice" align="center">
              <v-card-title>Price</v-card-title>
            </v-col>

            <v-col :cols="colsQuant" align="center">
              <v-card-title>Stoke</v-card-title>
            </v-col>

            <v-col :cols="colsTotal" align="center">
              <v-card-title>Add to cart</v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-card>
          <v-list>
            <transition-group name="fade">
              <v-list-item
                v-for="(product, index) in getProductsInWishlist"
                :key="index"
                align="center"
                class="pa-2"
              >
                <v-row>
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
                    <v-img :src="apiURL + product.imageurl" />
                  </v-col>

                  <v-col :cols="colsName" align="center">
                    <v-list-item-title>{{ product.name }}</v-list-item-title>
                  </v-col>

                  <v-col :cols="colsPrice" align="center">
                    <v-list-item-title>
                      £ {{ product.price.toFixed(2) }}
                    </v-list-item-title>
                  </v-col>

                  <v-col :cols="colsQuant" align="center">
                    <v-list-item-title> In Stock </v-list-item-title>
                  </v-col>

                  <v-col :cols="colsTotal" align="center" class="ms-n6">
                    <AddButton :product="product" :cartOnly="true" />
                  </v-col>
                  <v-divider class="mt-2" />
                </v-row>
                <v-divider class="mt-2" />
              </v-list-item>
            </transition-group>
          </v-list>
        </v-card>
      </v-card>
      <v-card v-if="!hasProduct()" flat class="pa-15" align="center">
        <v-card-title>Cart is empty...</v-card-title>
        <br />
        <router-link to="./"> Back to Home Page </router-link>
      </v-card>
    </v-container>
  </div>
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
