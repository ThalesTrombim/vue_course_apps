import cartActions from './actions';
import cartGetters from './getters';
import cartMutations from './mutations';

export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
