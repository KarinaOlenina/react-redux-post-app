import {combineReducers} from "redux";

import {likesReducer} from "./likesReducer";
import {inputTextReducer} from "./inputTextReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputTextReducer,
})