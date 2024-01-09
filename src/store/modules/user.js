//          INITIAL STATE
const state = () => ({
  user: null,
  loading: false,
  erroMessage: null,
  successMessage: null,
});

//          MUTATIONS
const mutations = {
  userRequested(state) {
    state.loading = true;
  },
  requestedFail(state, error) {
    state.loading = false;
    state.erroMessage = error?.message;
  },

  newUserRegistered(state, data) {
    state.loading = false;
    state.successMessage = data.message;
  },

  userLoggedIn(state, user) {
    state.loading = false;
    state.user = user;
  },

  messagesClened(state) {
    state.erroMessage = null;
    state.successMessage = null;
  },
};

//          GETTERS
const getters = {
  getUser(state) {
    return state.user;
  },

  getUserLoading(state) {
    return state.loading;
  },

  getUserErroMessage(state) {
    return state.erroMessage;
  },
  getUserSuccessMessage(state) {
    return state.successMessage;
  },
};

//          ACTIONS
const actions = {
  async registerNewUser({ commit, dispatch }, userInfo) {
    try {
      const payload = {
        apiName: "userApi",
        funcName: "register",
        args: { user: userInfo },
        onStart: "user/userRequested",
        onSuccess: "user/registSuccefull",
        onError: "user/requestFail",
      };

      dispatch("api/callBegan", payload, { root: true });
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  registSuccefull({ commit }, data) {
    commit("newUserRegistered", data);
  },

  async login({ dispatch }, loginInfo) {
    try {
      const payload = {
        apiName: "auth",
        funcName: "login",
        args: { ...loginInfo },
        onStart: "user/userRequested",
        onSuccess: "user/loginSuccefull",
        onError: "user/requestFail",
      };

      dispatch("api/callBegan", payload, { root: true });
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  loginSuccefull({ commit }, data) {
    commit("userLoggedIn", data);
  },

  requestFail({ commit }, error) {
    commit("requestedFail", error);
  },

  cleanMessages({ commit }) {
    commit("messagesClened");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
