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
            <h3>Name</h3>
          </v-col>

          <v-col :cols="colsPrice" align="center">
            <h3>Price</h3>
          </v-col>

          <v-col :cols="colsQuant" align="center">
            <h3>Quant.</h3>
          </v-col>

          <v-col :cols="colsTotal" align="center">
            <h3>Total.</h3>
          </v-col>
        </v-row>
        <transition-group name="fade">
          <v-row
            v-for="(product, index) in getProductsInCart"
            :key="index"
            align="center"
            class="pa-2"
          >
            <v-col :cols="colsDelete" align="center">
              <v-btn
                @click="remove(index)"
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
              <v-card-title>{{ product.name }}</v-card-title>
            </v-col>

            <v-col :cols="colsPrice" align="center">
              <v-card-text> £ {{ product.price.toFixed(2) }} </v-card-text>
            </v-col>

            <v-col :cols="colsQuant" align="center">
              <v-row align="center">
                <v-card-text class="mr-n10">
                  {{ product.quantity }}
                </v-card-text>
                <v-col class="ml-n10">
                  <v-icon
                    @click="increaseQuantity(product.id)"
                    icon="mdi-plus"
                    variant="outlined"
                    size="20"
                    color="green"
                  />
                  <v-icon
                    @click="decriseQuantity(product.id)"
                    icon="mdi-minus"
                    variant="outlined"
                    size="20"
                    color="red"
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-col :cols="colsTotal" align="center">
              <v-card-text>
                £ {{ (product.quantity * product.price).toFixed(2) }}
              </v-card-text>
            </v-col>
          </v-row>
        </transition-group>
      </v-card>
      <v-card v-if="!hasProduct()" flat class="pa-15" align="center">
        <h3>Cart is empty...</h3>
        <router-link to="./"> Back to Home Page </router-link>
      </v-card>

      <v-card v-if="hasProduct()" class="pa-10" align="right" width="400">
        <v-row justify="center">
          <v-card-title> CART TOTAL </v-card-title>
        </v-row>
        <v-row v-for="cTotal in cartTotal" :key="cTotal.text">
          <v-col>
            <v-card-title>{{ cTotal.text }} </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>£ {{ cTotal.value.toFixed(2) }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn width="200px"> Buy</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      apiURL: import.meta.env.VITE_API_URL,
      colsDelete: 2,
      colsImage: 1,
      colsName: 3,
      colsPrice: 2,
      colsQuant: 2,
      colsTotal: 2,
      shippingRate: 5,
    };
  },

  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getTotalPrice"]),
    cartTotal() {
      const totalPrice = this.getTotalPrice;
      return [
        { text: "Subtotal", value: totalPrice },
        { text: "Shipping", value: this.shippingRate },
        { text: "Total", value: totalPrice + this.shippingRate },
      ];
    },
  },

  methods: {
    ...mapActions("cart", [
      "removeProduct",
      "increaseQuantity",
      "decriseQuantity",
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },

    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
.checkout-message {
  font-size: 1.5em;
}

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
