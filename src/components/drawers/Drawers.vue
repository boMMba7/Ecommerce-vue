<template>
  <UserDrawer />
  <CartDrawer />
  <WishListDrawer />
  <MobileMenuDrawer />
</template>
<script>
import UserDrawer from "@/components/drawers/UserDrawer.vue";
import CartDrawer from "@/components/drawers/CartDrawer.vue";
import WishListDrawer from "@/components/drawers/WishlistDrawer.vue";
import MobileMenuDrawer from "./MobileMenuDrawer.vue";

export default {
  components: {
    UserDrawer,
    CartDrawer,
    WishListDrawer,
    MobileMenuDrawer,
  },
};
</script>
