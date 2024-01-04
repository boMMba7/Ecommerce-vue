<template>
  <v-card :title="title" :loading="getLoading">
    <v-row justify="center">
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-card-text>
            <p outline block class="py-5">{{ description }}</p>
          </v-card-text>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <v-expand-x-transition>
            <v-img :src="imageUrl" :width="300" aspect-ratio="16/9" cover />
          </v-expand-x-transition>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
      imageUrl: null,
      apiURL: import.meta.env.VITE_API_URL,
    };
  },

  computed: {
    ...mapGetters("category", ["getLoading", "getSelectedCategory"]),
  },

  methods: {
    onActionButtonClick() {
      // Handle order button click
      console.log("Order button clicked");
    },
  },

  watch: {
    getSelectedCategory(newState, holdState) {
      if (newState !== holdState) {
        const { category_name, description, image_url } = newState;
        this.title = category_name;
        this.description = description;
        this.imageUrl = this.apiURL + image_url;
      }
    },
  },
};
</script>

<style scoped>
.custom-card {
  background-color: #ffcc66; /* Example background color */
  margin-bottom: 16px;
}

.menu-title {
  /* Set artistic font style and color for the title */
  font-family: "YourArtisticFont", cursive; /* Example font family */
  color: #336699; /* Example font color */
}

.action-button {
  margin-left: 16px;
}
</style>
