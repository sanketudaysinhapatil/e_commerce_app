const {
    ADD_ORDER, DELET_ORDER
  } = require('../ActionsTypes');
  
  const OrderReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_ORDER:
        return [...state, action.payload];
      case DELET_ORDER:
        const deletedArray = state.filter((item, index) => {
          return index !== action.payload;
        });
        return deletedArray;
      
  
      default:
        return state;
    }
  };
  export default OrderReducer;