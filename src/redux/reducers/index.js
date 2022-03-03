import {combineReducers} from 'redux';
import Cart from './Cart';

const reducers = combineReducers({
  cart: Cart,
});

export default reducers;
