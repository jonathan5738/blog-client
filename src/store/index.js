import { configureStore } from '@reduxjs/toolkit' 
import { accountReducer } from '../features/accounts/accountSlice'

export default configureStore({
    reducer: {
        accounts: accountReducer
    }
})