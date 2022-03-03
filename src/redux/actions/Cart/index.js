import {actionTypes} from '../../reducers/Cart';

const addToCart = item => {
  return dispatch => {
    dispatch({
      type: actionTypes.addCartItem,
      payload: item,
    });
  };
};

const removeFromCart = id => {
  return {
    type: actionTypes.removeCartItem,
    payload: {id: id},
  };
};

const removeQtyFromCart = id => {
  return {
    type: actionTypes.removeCartItemQty,
    payload: {id: id},
  };
};

const addQtyFromCart = id => {
  return {
    type: actionTypes.addCartItemQty,
    payload: {id: id},
  };
};

const clearCart = id => {
  return {
    type: actionTypes.clearCartItem,
  };
};

export {
  addToCart,
  removeFromCart,
  removeQtyFromCart,
  addQtyFromCart,
  clearCart,
};
