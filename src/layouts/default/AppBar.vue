<template>
  <v-card
    max-width="448"
    min-width="100"
    class="max-auto fixed-app-bar"
    color="grey-lighten-3"
  >
    <v-app-bar
      color="teal-darken"
      fixed
      scroll-behavior="collapse  elevate"
      @scroll="handleScroll"
      :style="{ maxWidth: isCollapsed ? '260px' : '100%' }"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-img v-show="!isCollapsed" src="../../assets/logo.png" width="120" />
      </template>
      <div v-show="!isCollapsed">
        <NavMenu
          title="Home"
          :menuItems="categoryMenuItems"
          @click="navigateToHome"
        />
      </div>

      <template v-slot:append>
        <BadgeButtons />
        <v-btn icon="mdi-menu" @click="openDrawer"> </v-btn>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import BadgeButtons from "@/components/navigation/BadgeButtons.vue";
import NavMenu from "@/components/navigation/NavMenu.vue";

export default {
  data() {
    return {
      drawer: false,
      isCollapsed: false,
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
    handleScroll() {
      // Check if the scrollTop is greater than a certain threshold to determine if it's collapsed
      this.isCollapsed = window.scrollY > 300;
    },
  },
  created() {
    this.$store.dispatch("category/fetchCategories");
  },
  mounted() {
    // Attach scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove scroll event listener before component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.fixed-app-bar {
  z-index: 1000;
}
</style>
