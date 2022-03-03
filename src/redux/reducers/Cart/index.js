export const actionTypes = {
  addCartItem: 'addCartItem',
  removeCartItem: 'removeCartItem',
  addCartItemQty: 'addCartItemQty',
  removeCartItemQty: 'removeCartItemQty',
  clearCartItem: 'clearCartItem',
};

const initialState = {
  listCart: [],
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addCartItem:
      return {
        ...state,
        listCart: state.listCart.find(list => list.id == action.payload.id)
          ? state.listCart
          : [...state.listCart, {...action.payload, qty: 1}],
      };
    case actionTypes.removeCartItem:
      return {
        ...state,
        listCart: state.listCart.filter(list => list.id !== action.payload.id),
      };
    case actionTypes.addCartItemQty:
      return {
        ...state,
        listCart: state.listCart.map(list => {
          if (list.id === action.payload.id) {
            return {
              ...list,
              qty: list.qty + 1,
            };
          }
          return list;
        }),
      };
    case actionTypes.removeCartItemQty:
      return {
        ...state,
        listCart: state.listCart.map(list => {
          if (list.id === action.payload.id) {
            return {
              ...list,
              qty: list.qty - 1,
            };
          }
          return list;
        }),
      };
    case actionTypes.clearCartItem:
      return {
        ...state,
        listCart: [],
      };
    default:
      return state;
  }
};

export default Cart;
