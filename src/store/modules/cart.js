//          INITIAL STATE
const state = () => ({
  products: [],
});

//          MUTATIONS
const mutations = {
  productAdded(state, product) {
    state.products.push(product);
  },

  productRemoved(state, index) {
    const products = state.products;
    // Check if the index is valid
    if (index >= 0 && index < products.length) {
      //  Array.splice .0 remove the element at the specified index
      products.splice(index, 1);
    } else {
      console.error("Invalid index. Element not removed.");
    }
  },
};

//          GETTERS
const getters = {
  getProducts(state) {
    return state.products;
  },

  getTotalProducts(state) {
    return state.products.length;
  },
};

//          ACTIONS
const actions = {
  addProduct({ commit }, product) {
    commit("productAdded", product);
  },

  removeProduct({ commit }, index) {
    commit("productRemoved", index);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
