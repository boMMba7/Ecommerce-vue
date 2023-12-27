<template>
  <v-card class="mx-auto my-3" max-height="70" flat>
    <v-chip-group v-model="categories" multiple>
      <v-chip
        v-for="cat in categoryMenuItems"
        filter
        variant="outlined"
        @click="clicked(cat.title)"
      >
        {{ cat.title }}
      </v-chip>
    </v-chip-group>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    categories: [],
  }),

  computed: {
    ...mapGetters("category", {
      categoryMenuItems: "categoryMenuItems",
    }),
  },
  methods: {
    ...mapActions("search", ["changeCategoryFilter"]),

    clicked(title) {
      this.changeCategoryFilter(title);
    },
  },
};
</script>
