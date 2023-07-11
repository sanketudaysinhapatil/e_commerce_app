// intial state and action pass to store

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} = require('../ActionsTypes');

const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deletedArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray;
    

    default:
      return state;
  }
};
export default Reducers;
