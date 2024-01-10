//          INITIAL STATE
const state = () => ({
  loading: false,
  orders: [],
});

//          MUTATIONS
const mutations = {
  orderRequested(state) {
    state.loading = true;
  },

  requestedFail(state) {
    state.loading = false;
  },

  ordersRecived(state, orders) {
    state.orders = orders;
  },

  orderDetaisRecived(state, details) {
    const updatedOrders = state.orders.map((order) => {
      if (order.id === details.order_id) {
        return { ...order, details: details };
      } else {
        return { ...order };
      }
    });

    state.orders = updatedOrders;
  },
};

//          GETTERS
const getters = {
  getOrdersLoading(state) {
    return state.loading;
  },

  getOrders(state) {
    return state.orders;
  },
};

//          ACTIONS
const actions = {
  async registerOrder({ dispatch }, order) {
    try {
      const payload = {
        apiName: "order",
        funcName: "registOrder",
        args: { order: order },
        onStart: "order/orderRequested",
        onSuccess: "order/ordersRecived",
        onError: "order/requestFail",
      };

      dispatch("api/callBegan", payload, { root: true });
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  async findOrder({ dispatch }, filter) {
    try {
      const payload = {
        apiName: "order",
        funcName: "findOrder",
        args: { filter },
        onStart: "order/orderRequested",
        onSuccess: "order/ordersRecived", /// TODO new mutation
        onError: "order/requestFail",
      };

      dispatch("api/callBegan", payload, { root: true });
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },
};
