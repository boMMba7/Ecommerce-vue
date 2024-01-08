<template>
  <v-app>
    <AppBar />
    <default-view @click="closeAllDrawers()" />
    <Drawers />
    <Footer />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import Footer from "@/layouts/default/Footer.vue";
import AppBar from "@/layouts/default/AppBar.vue";
import Drawers from "@/components/drawers/Drawers.vue";
import { mapActions } from "vuex";
</script>

<script>
export default {
  data() {
    return {};
  },
  components: {
    AppBar,
    Footer,
    Drawers,
  },
  methods: {
    ...mapActions("drawer", ["closeAllDrawers"]),
  },
};
</script>
