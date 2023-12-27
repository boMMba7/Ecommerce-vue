//          INITIAL STATE
const state = () => ({
  currentProduct: null,
});

//          MUTATION
const mutations = {
  currentProductChanged(state, product) {
    state.currentProduct = product;
  },
};

//          GETTERS
const getters = {
  getCurrentProduct(state) {
    return state.currentProduct;
  },
};

//          ACTIONS
const actions = {
  setCurrentProduct({ commit }, product) {
    commit("currentProductChanged", product);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
