<template>
  <v-card>
    <v-navigation-drawer
      v-model="mobileMenuDrawerOpen"
      temporary
      location="right"
    >
      <v-card class="mx-auto">
        <v-list>
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            @click="navigateTo('Home')"
          />

          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Categories"
                prepend-icon="mdi-apps"
              />
            </template>

            <v-list-item
              v-for="(category, i) in categoryMenuItems"
              :key="i"
              :title="category.title"
              @click="onCategoryClick(i)"
            />
          </v-list-group>

          <v-divider class="my-4" />

          <v-list-item
            prepend-icon="mdi-heart-outline"
            title="Wishlist"
            @click="navigateTo('Wishlist')"
          >
            <template v-slot:append>
              <v-badge inline :content="wishlistTotal" color="red" />
            </template>
          </v-list-item>

          <v-list-item
            prepend-icon="mdi-cart-outline"
            title="Cart"
            @click="navigateTo('Checkout')"
          >
            <template v-slot:append>
              <v-badge inline :content="cartTotal" color="red" />
            </template>
          </v-list-item>

          <v-list-item
            prepend-icon="mdi-magnify"
            title="Search"
            @click="navigateTo('Search')"
          >
          </v-list-item>

          <v-divider class="my-4" />

          <v-list-item
            prepend-icon="mdi-account-outline"
            title="Account"
            @click="onAccounClick"
          />
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    //
  }),

  computed: {
    mobileMenuDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("mobileMenu");
    },

    ...mapGetters("category", ["categoryMenuItems"]),
    ...mapGetters("cart", { cartTotal: "getTotalProducts" }),
    ...mapGetters("wishlist", { wishlistTotal: "getTotalProducts" }),
  },

  methods: {
    ...mapActions("category", ["selectedCategory"]),
    ...mapActions("drawer", ["closeAllDrawers", "openDrawer"]),

    navigateTo(destination) {
      this.closeAllDrawers();
      this.$router.push({ name: destination });
    },

    onCategoryClick(index) {
      const category = this.categoryMenuItems[index];
      this.selectedCategory(category);
      this.navigateTo("Category");
    },

    onAccounClick() {
      this.closeAllDrawers().then(() => this.openDrawer("user"));
    },
  },
};
</script>
