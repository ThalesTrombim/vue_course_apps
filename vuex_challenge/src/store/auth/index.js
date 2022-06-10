import authMutations from './mutations';
import authGetters from './getters';
import authActions from './actions.js';

export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
