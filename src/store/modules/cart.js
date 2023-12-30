//          INITIAL STATE
const state = () => ({
  products: [],
});

// MUTATIONS
const mutations = {
  productAdded(state, product) {
    const existingProduct = state.products.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product already exists, increment the quantity
      existingProduct.quantity++;
    } else {
      // If the product doesn't exist, add it with quantity 1
      state.products.push({ ...product, quantity: 1 });
    }
  },

  // Mutation to increase the quantity of a specific product
  quantityIncreased(state, productId) {
    state.products = state.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: ++product.quantity };
      } else {
        return product;
      }
    });
  },

  // Mutation to decrease the quantity of a specific product
  quantityDecreased(state, productId) {
    const product = state.products.find((p) => p.id === productId);

    if (product) {
      // Ensure the quantity doesn't go below 1
      product.quantity = Math.max(product.quantity - 1, 1);
    } else {
      console.error("Product not found. Quantity not decreased.");
    }
  },

  productRemoved(state, index) {
    const products = state.products;

    if (index >= 0 && index < products.length) {
      products.splice(index, 1);
    } else {
      console.error("Invalid index. Element not removed.");
    }
  },
};

//          GETTERS
const getters = {
  getProductsInCart(state) {
    return state.products;
  },

  getTotalProducts(state) {
    //reduce function is used to iterate over the state.products array, accumulating the total quantity.
    //The initial value of the accumulator (total) is set to 0
    return state.products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  },

  getTotalPrice(state) {
    return state.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },
};

//          ACTIONS
const actions = {
  addProduct({ commit }, product) {
    commit("productAdded", product);
  },

  increaseQuantity({ commit }, productId) {
    commit("quantityIncreased", productId);
  },

  decriseQuantity({ commit }, productId) {
    commit("quantityDecreased", productId);
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
