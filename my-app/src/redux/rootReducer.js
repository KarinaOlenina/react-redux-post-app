import {combineReducers} from "redux";

import {likesReducer} from "./redusers/likesReducer";
import {inputTextReducer} from "./redusers/inputTextReducer";
import {commentReducer} from "./redusers/commentReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputTextReducer,
    commentReducer,
})