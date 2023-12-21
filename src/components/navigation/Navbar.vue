<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <img src="../../assets/logo.png" width="120" />
      </v-toolbar-title>

      <NavMenu
        title="Home"
        :menuItems="categoryMenuItems"
        @click="navigateToHome"
      />

      <v-spacer></v-spacer>
      <BadgeButtons />
      <v-btn icon="mdi-menu" @click="openDrawer"> </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>Test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import BadgeButtons from "@/components/navigation/BadgeButtons.vue";
import NavMenu from "./NavMenu.vue";

export default {
  data() {
    return {
      drawer: false,
    };
  },

  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
    }),

    ...mapGetters("category", {
      categoryMenuItems: "categoryMenuItems",
    }),
  },

  components: {
    BadgeButtons,
    NavMenu,
  },

  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
    },

    navigateToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  created() {
    this.$store.dispatch("category/fetchCategories");
  },
};
</script>
