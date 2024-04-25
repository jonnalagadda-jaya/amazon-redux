
import { ADD, REMOVE, INCREMENT, DECREMENT } from "./Action";

const initialState = {
  cartItems: [], 
  count: 0,
};

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
        const newItem = {
            ...action.payload,
            quantity: 1, // Default quantity to 1 if not provided
        };
        return {
            ...state,
            cartItems: [...state.cartItems, newItem],
        };

    case INCREMENT:
    return {
        ...state,
        cartItems: state.cartItems.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
    };

case DECREMENT:
    return {
        ...state,
        cartItems: state.cartItems.map((item) =>
            item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        ),
    };


    case REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AddReducer;
