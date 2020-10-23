export default {
  cart(state) {
    return state.cart;
  },
  cartArticlesNumber(state) {
    return state.cart.reduce((prev, next) => prev + next.qt, 0);
  },
  getTotalCart(state){
    return state.cart.reduce((prev, next) => prev + (next.qt*next.price), 0);
  }
};
