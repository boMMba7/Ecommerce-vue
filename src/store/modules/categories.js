import category from "@/api/category";
import products from "@/api/products";
import { useApi } from "@/compositionFunctions/useApi";

//          INITIAL STATE
const state = () => ({
  categories: [{ title: "test" }],
  selectedCategory: null,
  selectedCategoryProducts: [],
  loading: false,
});

//          MUTATIONS
const mutations = {
  apiCallBegin(state) {
    state.loading = true;
  },
  apiCallEnded(state) {
    state.loading = false;
  },

  setCategories(state, categories) {
    state.categories = categories;
  },

  setSelectedCategories(state, category) {
    state.selectedCategory = category;
  },

  setSelectedCategoryProducts(state, categoryProducts) {
    state.selectedCategoryProducts = categoryProducts;
  },
};

//          GETTERS
const getters = {
  getSelectedCategory(state) {
    return state.selectedCategory;
  },
  /**
   * Change the Products evry time category change
   * @param {*} state
   * @returns Products of Category selected
   */
  getSelectedCategoryProducts(state) {
    return state.selectedCategoryProducts;
  },

  categoryMenuItems(state) {
    return state.categories
      .map((cat) => ({ ...cat, title: cat.category_name }))
      .filter((cat) => cat.title);
  },

  getLoading(state) {
    return state.loading;
  },
};

//          ACTIONS
const actions = {
  async fetchCategories({ commit }) {
    try {
      const categoryApi = useApi(category.getCategories);

      commit("apiCallBegin");
      const result = await categoryApi.request();
      commit("apiCallEnded");

      if (result.ok) {
        commit("setCategories", result.data);
      } else {
        console.log("Error fething categories", result.data);
      }
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  async fetchSelectedCategoryProducts({ commit }, categoryId) {
    try {
      const productsApi = useApi(products.findProducts);

      const filter = { categoryId };

      commit("apiCallBegin");
      const result = await productsApi.request(filter);
      commit("apiCallEnded");

      if (result.ok) {
        commit("setSelectedCategoryProducts", result.data);
      } else {
        console.log("Error fething category products", result.data);
      }
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  async selectedCategory({ dispatch, commit }, category) {
    commit("apiCallBegin");
    await dispatch("fetchSelectedCategoryProducts", category.id);
    commit("apiCallEnded");

    commit("setSelectedCategories", category);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
