<template>
  <div class="d-flex justify-space-around">
    <v-menu
      transition="expand-x-transition"
      open-on-hover
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-btn variant="plain" v-bind="props" append-icon="mdi-chevron-down">
          {{ title }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i">
          <div @click="onItemClick(i)">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <v-card
                v-bind="props"
                :color="isHovering ? 'primary' : undefined"
                :title="item.title"
              ></v-card>
            </v-hover>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["title", "menuItems"],

  methods: {
    ...mapActions("category", ["selectedCategory"]),

    onItemClick(index) {
      const category = this.menuItems[index];
      this.selectedCategory(category);
    },
  },
};
</script>
