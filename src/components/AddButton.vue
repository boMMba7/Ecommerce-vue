<template>
  <v-container>
    <v-card width="200" flat color="transparent">
      <v-col v-show="!cartOnly">
        <v-btn
          :prepend-icon="iconName"
          @click.stop="onPressWishlist"
          variant="plain"
          block
        >
          <template v-slot:prepend>
            <v-icon color="red"></v-icon>
          </template>

          Add to Wishlist
        </v-btn>
      </v-col>
      <v-col>
        <div class="d-none d-sm-block">
          <v-btn
            prepend-icon="mdi-cart-outline"
            class="mt-0"
            size="small"
            @click="handleaddCart"
            color="lightblue"
            block
          >
            Add to cart
          </v-btn>
        </div>
        <div class="d-flex d-sm-none">
          <v-btn
            prepend-icon="mdi-cart-outline"
            class="mt-0"
            size="small"
            @click="handleaddCart"
            color="lightblue"
            >Add</v-btn
          >
        </div>
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
      // Notify the parent component that the button is pressed
      this.$emit("button-clicked");

      if (this.iconName === "mdi-heart") {
        this.removeProductWishList(this.product.id);
      } else {
        this.addProductWishlist(this.product);
      }
    },

    handleaddCart() {
      // Notify the parent component that the button is pressed
      this.$emit("button-clicked");

      this.addProduct(this.product);
    },
  },
};
</script>
