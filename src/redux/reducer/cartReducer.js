const initialData = {
  cart: 0,
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "AddToCart":
      return {
        cart: ++state.cart,
      };
      break;
    case "RemoveFromCart":
      return {
        cart: --state.cart,
      };
      break;
    default:
      return state;
  }
};

export default cartReducer;
