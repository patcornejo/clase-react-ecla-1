import {
    applyMiddleware,
    combineReducers,
    configureStore,
    legacy_createStore as createStore
} from '@reduxjs/toolkit'

import {options} from './reducers'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {options}
})

export const storeLegacy = createStore(combineReducers({options}), applyMiddleware(thunk))

export type RootState = {options: string[], success: boolean}
export type AppDispatch = typeof store.dispatch
