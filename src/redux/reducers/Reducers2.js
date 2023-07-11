// intial state and action pass to store

const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} = require('../ActionsTypes');

const Reducers2 = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      const deletedArray2 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray2;

    default:
      return state;
  }
};
export default Reducers2;
