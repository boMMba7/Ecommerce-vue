<template>
  <v-card :loading="getUserLoading">
    <v-navigation-drawer v-model="userDrawerOpen" temporary location="right">
      <v-card-text class="text--red" v-show="getUserErroMessage">{{
        getUserErroMessage
      }}</v-card-text>
      <div v-if="getUser">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          :title="getUser.firstName"
        >
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </div>
      <div v-else>
        <v-container>
          <v-card>
            <v-tabs v-model="tab" bg-color="secondary">
              <v-tab value="one">Login</v-tab>
              <v-tab value="two">Register</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one"> LOGIN... </v-window-item>

                <v-window-item value="two">
                  <RegisterForm />
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-container>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  data() {
    return {
      tab: null,
    };
  },

  components: {
    RegisterForm,
  },

  computed: {
    //must to be this way to send argument to getter using currier functions
    userDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("user");
    },

    ...mapGetters("user", ["getUser", "getUserLoading", "getUserErroMessage"]),
  },
};
</script>
