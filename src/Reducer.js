export const initialState = {
    basket: [

    ],
    user: null
};

const  reducer = (state, action) =>{
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding items
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //logic for remove
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);
                if(index >= 0){
                    //item exist in the basket
                    newBasket.slice(index, 1)
                }else{
                    console.warn('Cant remove product')
                }

            return {...state, basket: newBasket}
        default  :
        return state;  
    }
}
export default reducer;