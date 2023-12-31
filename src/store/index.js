import { createStore, createLogger } from "vuex";
import category from "./modules/categories";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import product from "./modules/product";
import search from "./modules/search";
import drawer from "./modules/drawer";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    category,
    cart,
    drawer,
    product,
    search,
    wishlist,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
