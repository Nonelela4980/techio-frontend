import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Item,cartDataState,UpdateQuantityIF} from "../../helpers/stateInterfaces";
import { RootState } from "../store";

const storageItems=localStorage.getItem("cartItems")? localStorage.getItem("cartItems") : JSON.stringify([])

const items= typeof storageItems === 'string'? JSON.parse(storageItems):JSON.stringify([])

const initialState : cartDataState = {
    cartItems:items,
}

const cartSlice  = createSlice({
    name:"cartData",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Item>)=>{
            const index=state.cartItems.findIndex((item: Item)=>item.id===action.payload.id)
            if(index<0)
                state.cartItems.push(action.payload)
            else
            state.cartItems[index].quantity +=action.payload.quantity
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeItem:(state,action)=>{
            const index=state.cartItems.findIndex((item: Item)=>item.id===action.payload.id)
            if(index>=0){
                state.cartItems = state.cartItems.filter((item:Item)=>item.id!==action.payload.id)
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            }
        },
        updateQuantity:(state,action:PayloadAction<UpdateQuantityIF>)=>{

            const index=state.cartItems.findIndex((item: Item)=>item.id===action.payload.id)
            if(action.payload.decrement){         
                if(index>=0){
                    state.cartItems[index].quantity -=1
                    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
                }
            }
            else
            {
                if(index>=0){
                    state.cartItems[index].quantity +=1
                    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
                }
            }
        }
    }
})

export const {addToCart,removeItem,updateQuantity} =cartSlice.actions
export const cartItemsSelector = (state:RootState)=>state.cart.cartItems

export default cartSlice.reducer