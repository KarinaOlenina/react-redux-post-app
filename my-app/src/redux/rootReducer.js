import {combineReducers} from "redux";

import {likesReducer} from "./reducers/likesReducer";
import {inputTextReducer} from "./reducers/inputTextReducer";
import {commentReducer} from "./reducers/commentReducer";
import {appReducer} from "./reducers/appReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputTextReducer,
    commentReducer,
    appReducer,
})