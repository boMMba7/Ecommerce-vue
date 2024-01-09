<template>
  <v-card
    max-width="448"
    min-width="100"
    class="max-auto fixed-app-bar"
    :loading="getLoading"
  >
    <v-app-bar color="teal-darken" fixed scroll-behavior="  elevate">
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(20,198,255,.8), rgba(130,177,255,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-img
          v-show="!isCollapsed"
          src="../../assets/logo.png"
          width="120"
          @click="navigateTo('Home')"
        />
      </template>

      <v-card
        v-show="!isCollapsed"
        flat
        color="transparent"
        class="d-none d-sm-block"
      >
        <v-card-text>
          <v-row>
            <v-col>
              <v-btn @click="navigateTo('Home')"> Home </v-btn>
            </v-col>
            <v-col>
              <NavMenu title="Categories" :menuItems="categoryMenuItems" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <template v-slot:append>
        <BadgeButtons />
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import BadgeButtons from "@/components/navigation/BadgeButtons.vue";
import NavMenu from "@/components/navigation/NavMenu.vue";
import ViewBannerName from "@/components/ViewBannerName.vue";

export default {
  data() {
    return {
      drawer: false,
      isCollapsed: false,
    };
  },

  computed: {
    ...mapGetters("category", ["getLoading"]),

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
    ViewBannerName,
  },

  methods: {
    ...mapActions("drawer", ["openDrawer", "closeDrawer"]),

    navigateTo(destination) {
      this.$router.push({ name: destination });
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
