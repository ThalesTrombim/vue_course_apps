export default {
  addProductToCart(ctx, payload) {
    ctx.commit('addProductToCart', payload);
  },
  removeProductFromCart(ctx, payload) {
    ctx.commit('removeProductFromCart', payload);
  },
};
