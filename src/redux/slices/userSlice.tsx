import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { UserState,User } from "../../helpers/stateInterfaces";
import { RootState } from "../store";

const initialState : UserState ={
    user:null,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logIn:(state,action : PayloadAction<User>)=>{
            state.user=action.payload
        },
        logOut:(state)=>{
            state.user = null
        }
    }
})

export const {logIn,logOut} =userSlice.actions
export const userSelector = (state : RootState)=>state.user.user

export default userSlice.reducer