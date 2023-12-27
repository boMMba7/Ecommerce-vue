//          INITIAL STATE
const state = () => ({
  products: [],
});

//          MUTATIONS
const mutations = {
  productAdded(state, product) {
    state.products.push(product);
  },

  productRemoved(state, productId) {
    const productsFiltered = state.products.filter((p) => p.id !== productId);
    state.products = productsFiltered;
  },
};

//          GETTERS
const getters = {
  getProductsInWishlist(state) {
    return state.products;
  },

  getTotalProducts(state) {
    return state.products.length;
  },
};

//          ACTIONS
const actions = {
  addProductWishlist({ commit }, product) {
    commit("productAdded", product);
  },

  removeProductWishList({ commit }, productId) {
    commit("productRemoved", productId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
