import {Actions} from "./actions/options";
import {IOptionsAction} from "@server/interfaces/IOptionsAction";

export const options = (state = [], action: IOptionsAction) => {
    switch (action.type) {
        case Actions.GET_OPTIONS: return action.payload;
        default: return state
    }
}
