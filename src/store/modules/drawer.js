//          INITIAL STATE
const originalDrawerState = {
  user: false,
  cart: false,
  wishlist: false,
  mobileMenu: false,
};

const state = () => ({
  drawerStates: { ...originalDrawerState },
});

//          MUTATION
const mutations = {
  drawerOpened(state, drawerName) {
    state.drawerStates[drawerName] = true;
  },

  drawerClosed(state, drawerName) {
    state.drawerStates[drawerName] = false;
  },

  allDrawerClosed(state) {
    state.drawerStates = { ...originalDrawerState };
  },
};

//          GETTERS
const getters = {
  isDrawerOpen: (state) => (drawerName) => {
    return state.drawerStates[drawerName];
  },
};

//          ACTIONS
const actions = {
  openDrawer({ commit }, drawerName) {
    commit("drawerOpened", drawerName);
  },
  closeDrawer({ commit }, drawerName) {
    commit("drawerClosed", drawerName);
  },

  closeAllDrawers({ commit }) {
    commit("allDrawerClosed");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
