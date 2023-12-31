<template>
  <v-card class="max-auto fixed-app-bar" height="200">
    <v-card-title class="pt-16 mt-16 text-h15 text-center mb-2">
      {{ dynamicTitle }}
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters("category", ["getSelectedCategory"]),
    dynamicTitle() {
      const page = this.$route.name;
      const categogy = this.getSelectedCategory;

      if (categogy && page === "Home") {
        return categogy.title;
      }
      return page;
    },
  },
};
</script>
