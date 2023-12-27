<template>
  <v-app>
    <AppBar />
    <ViewBannerName />
    <default-view />
    <Footer />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";

import Footer from "@/layouts/default/Footer.vue";
import AppBar from "@/layouts/default/AppBar.vue";
import ViewBannerName from "@/components/ViewBannerName.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  components: {
    AppBar,
    Footer,
  },
  methods: {},
};
</script>
