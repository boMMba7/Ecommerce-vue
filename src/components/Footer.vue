<template>
  <v-footer>
    <v-card
      flat
      tile
      class="white--text py-12 px-5"
      width="100%"
      color="#F4F5F9"
    >
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
          <div class="text-center"><span>FP</span><strong>shop</strong></div>
          <v-card-text class="mt-2">
            <div class="text-center">
              This website is for demonstration purposes only. All products
              listed here are not available for sale.
            </div>
          </v-card-text>
        </v-col>
        <div v-for="(info, i) in informations" :key="i">
          <v-col>
            <v-card-text class="white--text pt-0">
              <h3>{{ info.title }}</h3>
            </v-card-text>
            <div v-for="(content, j) in info.contents" :key="j">
              <v-card-text v-if="j === 0" class="grey--text">
                {{ content.text }}</v-card-text
              >
              <v-card-text v-else class="grey--text mt-n4">
                {{ content.text }}</v-card-text
              >
            </div>
          </v-col>
        </div>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      informations: [
        {
          title: "About",
          contents: [
            { text: "How it work", link: "" },
            { text: "Repository", link: "" },
          ],
        },
        {
          title: "Tecnology used",
          contents: [
            { text: "VueJs for frontend", link: "" },
            { text: "NodeJs for backend", link: "" },
            { text: "Sqlite for database", link: "" },
          ],
        },
        {
          title: "Contact",
          contents: [
            { text: "fabiopontesdev@gmail.com", link: "" },
            { text: "Find out more projects on Portifolio", link: "" },
          ],
        },
      ],
    };
  },
};
</script>
