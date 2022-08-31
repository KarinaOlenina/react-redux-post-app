import {LOADER_DISPLAY_0FF, LOADER_DISPLAY_0N} from "../actions/types";


const initialState = {
    loading: false,
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOADER_DISPLAY_0N:
            return {
                ...state,
                loading: true,   /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        case LOADER_DISPLAY_0FF:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}