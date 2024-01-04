<template>
  <v-app>
    <AppBar />
    <default-view />
    <UserDrawer />
    <CartDrawer />
    <WishListDrawer />
    <Footer />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import Footer from "@/layouts/default/Footer.vue";
import AppBar from "@/layouts/default/AppBar.vue";
import UserDrawer from "@/components/drawers/UserDrawer.vue";
import CartDrawer from "@/components/drawers/CartDrawer.vue";
import WishListDrawer from "@/components/drawers/WishlistDrawer.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  components: {
    AppBar,
    Footer,
    UserDrawer,
    CartDrawer,
    WishListDrawer,
  },
  methods: {},
};
</script>
