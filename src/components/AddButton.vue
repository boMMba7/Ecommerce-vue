<template>
  <v-container>
    <v-card width="200" flat color="transparent">
      <v-col v-show="!cartOnly">
        <v-btn
          :prepend-icon="iconName"
          @click="onPressWishlist"
          variant="plain"
        >
          <template v-slot:prepend>
            <v-icon color="red"></v-icon>
          </template>

          Add to Wishlist
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          prepend-icon="mdi-cart-outline"
          class="mt-0"
          size="small"
          @click="addProduct(product)"
        >
          Add to cart
        </v-btn>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      //
    };
  },
  props: ["product", "cartOnly"],
  computed: {
    ...mapGetters("wishlist", ["getProductsInWishlist"]),
    iconName() {
      const result = this.getProductsInWishlist.find(
        (p) => p.id === this.product.id
      );

      if (result) {
        return "mdi-heart";
      } else {
        return "mdi-heart-outline";
      }
    },
  },
  methods: {
    ...mapActions("cart", ["addProduct"]),
    ...mapActions("wishlist", ["addProductWishlist", "removeProductWishList"]),
    onPressWishlist() {
      if (this.iconName === "mdi-heart") {
        this.removeProductWishList(this.product.id);
      } else {
        this.addProductWishlist(this.product);
      }
    },
  },
};
</script>
