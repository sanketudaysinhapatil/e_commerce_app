// intial state and action pass to store

const {
    ADD_ADDRESS, DELET_ADDRESS
  } = require('../ActionsTypes');
  
  const AddressReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_ADDRESS:
        return [...state, action.payload];
      case DELET_ADDRESS:
        const deletedArray = state.filter((item, index) => {
          return index !== action.payload;
        });
        return deletedArray;
      
  
      default:
        return state;
    }
  };
  export default AddressReducer;
  