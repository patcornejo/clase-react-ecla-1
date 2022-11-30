import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {options} from "./reducers";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {IResConfiguration} from "@server/interfaces/IResConfiguration";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        options
    }
})

export const storeLegacy = createStore(combineReducers({
    options
}), applyMiddleware(thunk))

// type AppDispatch = typeof storeLegacy.dispatch;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IResConfiguration> = useSelector;
