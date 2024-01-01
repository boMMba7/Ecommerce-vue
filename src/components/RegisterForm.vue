<template>
  <v-sheet>
    <form @submit.prevent="submitForm">
      <v-text-field
        v-model="state.firstName"
        :error-messages="v$.firstName.$errors.map((e) => e.$message)"
        :counter="10"
        label="First name"
        required
        @input="v$.firstName.$touch"
        @blur="v$.firstName.$touch"
      />
      <v-text-field
        v-model="state.lastName"
        :error-messages="v$.lastName.$errors.map((e) => e.$message)"
        label="Last name"
        required
        @input="v$.lastName.$touch"
        @blur="v$.lastName.$touch"
      />

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      />
      <v-text-field
        v-model="state.password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        label="Password"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      />

      <v-text-field
        v-model="state.address"
        :error-messages="v$.address.$errors.map((e) => e.$message)"
        label="Address"
        required
        @input="v$.address.$touch"
        @blur="v$.address.$touch"
      />

      <v-checkbox
        v-model="state.checkbox"
        :error-messages="v$.checkbox.$errors.map((e) => e.$message)"
        label="Do you agree?"
        required
        @change="v$.checkbox.$touch"
        @blur="v$.checkbox.$touch"
      />

      <v-btn type="submit" class="me-4" @click="v$.$validate"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-sheet>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { useStore } from "vuex";

const store = useStore();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const rules = {
  firstName: { required },
  lastName: { required },
  password: { required },
  address: { required },
  email: { required, email },
  checkbox: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}

function submitForm() {
  // Validate the form
  v$.$validate;

  // Check if the form is valid
  if (!v$.$pending && !v$.$error) {
    store.dispatch("user/registerNewUser", state);
  }
}
</script>
