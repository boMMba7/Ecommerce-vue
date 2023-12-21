/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import store from "./store";

const app = createApp(App);

registerPlugins(app);

// using Vuex state manager
app.use(store);

app.mount("#app");
