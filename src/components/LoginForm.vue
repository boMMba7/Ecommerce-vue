<template>
  <v-sheet rounded>
    <v-form @submit.prevent="onSubmit">
      <v-text-field
        v-model="email"
        :readonly="getUserLoading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :readonly="getUserLoading"
        :rules="[required]"
        clearable
        label="Password"
        type="password"
        placeholder="Enter your password"
      ></v-text-field>

      <br />

      <v-btn
        :disabled="getUserLoading"
        :loading="getUserLoading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      >
        Sign In
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    email: null,
    password: null,
  }),

  computed: {
    ...mapGetters("user", ["getUserLoading"]),
  },

  methods: {
    ...mapActions("user", ["login"]),

    onSubmit() {
      if (this.getUserLoading) return;
      this.login({ email: this.email, password: this.password });
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
