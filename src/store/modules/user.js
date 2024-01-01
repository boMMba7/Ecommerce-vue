import user from "@/api/user";
import { useApi } from "@/compositionFunctions/useApi";
import { apiCallBegan } from "../actions/api";

//          INITIAL STATE
const state = () => ({
  user: null,
  loading: false,
  erroMessage: null,
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

  newUserRegistered(state, user) {
    state.loading = false;
    state.user = user;
  },
  userLoggedIn(state, user) {
    state.loading = false;
    state.user = user;
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
        onSuccess: "user/newUserCreated",
        onError: "user/requestFail",
      };

      dispatch("api/callBegan", payload, { root: true });
    } catch (error) {
      console.error("Unexpected error", error);
    }
  },

  requestFail({ commit }, error) {
    commit("requestedFail", error);
  },

  newUserCreated({ commit }, user) {
    commit("newUserRegistered", user);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
