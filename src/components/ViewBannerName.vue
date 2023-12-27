<template>
  <v-card class="max-auto fixed-app-bar" height="200">
    <v-card-title class="pt-16 mt-16 text-h15 text-center mb-2">
      {{ dynamicTitle }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    dynamicTitle() {
      return this.$route.name;
    },
  },
  mounted() {
    console.log("====================================");
    console.log(this.$route);
    console.log("====================================");
  },
};
</script>
