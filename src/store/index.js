import { createStore, createLogger } from "vuex";
import category from "./modules/categories";
import cart from "./modules/cart";

const debug = true; // process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    category,
    cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
