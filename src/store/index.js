import { createStore, createLogger } from "vuex";
import category from "./modules/categories";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import product from "./modules/product";
import search from "./modules/search";

const debug = import.meta.env.PROD;

export default createStore({
  modules: {
    category,
    cart,
    wishlist,
    product,
    search,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
