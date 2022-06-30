import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import UserReducer from './slices/userSlice'

export const store= configureStore({
    reducer:{
        cart:cartReducer,
        user:UserReducer
    }
})

export type RootState = ReturnType<typeof store.getState>