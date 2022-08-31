import {INPUT_TEXT} from "../actions/types";


const initialState = {
    text: '',
}

export const inputTextReducer = (state = initialState, action) => {
    // console.log('inputTextReducer => ', action);

    switch (action.type) {

        case INPUT_TEXT:
            return {
                ...state,
                text: action.text,   /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        default:
            return state;
    }
}