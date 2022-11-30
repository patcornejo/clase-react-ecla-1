import {Actions} from "./actions";
import {AppDispatch, RootState} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const options = (state = [], action) => {
    switch (action.type) {
        case Actions.GET_OPTIONS: return action.payload;
        default: return state;
    }
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
