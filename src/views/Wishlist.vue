<template>
  <div>
    <Wishlist />
  </div>
</template>

<script>
import Wishlist from "@/components/WishList.vue";

export default {
  data() {
    return {
      products: [],
    };
  },

  components: {
    Wishlist,
  },
};
</script>
