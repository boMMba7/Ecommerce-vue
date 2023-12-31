import products from "@/api/products";
import { useApi } from "@/compositionFunctions/useApi";

//          INITIAL STATE
const state = () => ({
  searchProducts: [],
  filterCategories: [],
  loading: false,
});

//          MUTATION
const mutations = {
  apiCallBegin(state) {
    state.loading = true;
  },
  apiCallEnded(state) {
    state.loading = false;
  },

  searchProductsChanged(state, products) {
    state.searchProducts = products;
  },
  filterCategoryChanged(state, categories) {
    state.filterCategories = categories;
  },
};

//          GETTERS
const getters = {
  getSearchProducts(state) {
    const { searchProducts, filterCategories } = state;

    if (filterCategories.length > 0) {
      const fiterProducts = searchProducts.filter((p) => {
        return filterCategories.includes(p.category_name);
      });

      return fiterProducts;
    } else {
      return searchProducts;
    }
  },

  getLoading(state) {
    return state.loading;
  },
};

//          ACTIONS
const actions = {
  async searchProducts({ commit }, criteria) {
    try {
      const productsApi = useApi(products.findProducts);

      commit("apiCallBegin");
      const result = await productsApi.request(criteria);
      commit("apiCallEnded");

      if (result.ok) {
        commit("searchProductsChanged", result.data);
      } else {
        console.log("Error searching category products on Api", result.data);
      }
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  changeCategoryFilter({ commit, state }, category) {
    const filterCategories = [...state.filterCategories];

    const index = filterCategories.indexOf(category);

    if (index !== -1) {
      // String exists, remove it
      filterCategories.splice(index, 1);

      commit("filterCategoryChanged", filterCategories);
    } else {
      // String doesn't exist, add it
      filterCategories.push(category);

      commit("filterCategoryChanged", filterCategories);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
