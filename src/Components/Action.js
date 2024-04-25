export const ADD = "ADD";
export const REMOVE = "REMOVE"
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const add =(item)=>{
    return{
        type: ADD,
        payload: item,
    };
};
export const remove =(itemId)=>{
    return{
        type: REMOVE,
           payload: itemId,
    };
};

export const increment = (itemId)=>{
    return{
        type: INCREMENT,
        payload: itemId,
    };
};
export const decrement = (itemId)=>{
    return{
        type: DECREMENT,
        payload: itemId,
    };
};