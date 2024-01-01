import { createStore, createLogger } from "vuex";
import category from "./modules/categories";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";
import product from "./modules/product";
import search from "./modules/search";
import drawer from "./modules/drawer";
import user from "./modules/user";
import { apiActions } from "./actions/api";
import { apiPlugin } from "./pluginsMiddleware/apiCall";

const debug = process.env.NODE_ENV !== "production";

var plugins = debug ? [createLogger()] : [];
plugins = [...plugins, apiPlugin];

export default createStore({
  actions: {
    ...apiActions,
  },
  modules: {
    category,
    cart,
    drawer,
    product,
    search,
    user,
    wishlist,
  },
  strict: debug,
  plugins: plugins,
});
