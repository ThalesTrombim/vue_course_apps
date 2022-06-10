import { createStore } from 'vuex';

import authState from './auth';
import productsState from './products';
import cartState from './cart';

const store = createStore({
  modules: {
    authState,
    productsState,
    cartState,
  },
});

export default store;
