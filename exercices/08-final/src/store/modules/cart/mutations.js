export default {
    setCart(state,payload){
        state.cart=payload
    },
    addToCart(state, payload){
        if(state.cart.findIndex((item)=>item.id === payload.id) === -1){
            payload.qt=1;
            state.cart= [...state.cart,payload]
        } else{
            state.cart[state.cart.findIndex((item)=>item.id === payload.id)].qt +=1;
        }
    }
}