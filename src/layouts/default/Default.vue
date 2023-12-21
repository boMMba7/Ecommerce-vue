<template>
  <v-app>
    <Navbar />
    <default-view />
    <Footer />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import Navbar from "../../components/navigation/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
};
</script>
