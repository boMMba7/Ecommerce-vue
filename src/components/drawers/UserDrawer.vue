<template>
  <v-card :loading="getUserLoading">
    <v-navigation-drawer v-model="userDrawerOpen" temporary location="right">
      <v-card-text v-show="getUserErroMessage" class="text-error">
        {{ getUserErroMessage }}
      </v-card-text>
      <v-card-text v-show="getUserSuccessMessage" class="text-success">
        {{ getUserSuccessMessage }}
      </v-card-text>

      <div v-if="getUser">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          :title="`${getUser.firstName} ${getUser.lastName} `"
          :subtitle="getUser.email"
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
            <v-tabs v-model="tab" bg-color="accent">
              <v-tab value="one">Login</v-tab>
              <v-tab value="two">Register</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <LoginForm />
                </v-window-item>

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
import { mapGetters, mapActions } from "vuex";
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "../LoginForm.vue";

export default {
  data() {
    return {
      tab: null,
      timmeOut: null,
    };
  },

  beforeUnmount() {
    if (this.timmeOut) clearTimeout(this.timmeOut);
  },

  components: {
    RegisterForm,
    LoginForm,
  },

  computed: {
    //must to be this way to send argument to getter using currier functions
    userDrawerOpen() {
      return this.$store.getters["drawer/isDrawerOpen"]("user");
    },

    ...mapGetters("user", [
      "getUser",
      "getUserLoading",
      "getUserErroMessage",
      "getUserSuccessMessage",
    ]),
  },

  methods: {
    ...mapActions("user", ["cleanMessages"]),
  },

  watch: {
    getUserErroMessage(newState, holdState) {
      if (newState) {
        if (this.timmeOut) clearTimeout(this.timmeOut);

        this.timmeOut = setTimeout(() => {
          this.cleanMessages();
        }, 10000);
      }
    },

    getUserSuccessMessage(newState, holdState) {
      if (newState) {
        if (this.timmeOut) clearTimeout(this.timmeOut);

        this.timmeOut = setTimeout(() => {
          this.cleanMessages();
        }, 10000);
      }
    },
  },
};
</script>
