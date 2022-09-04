import {
    LOADER_DISPLAY_0FF,
    LOADER_DISPLAY_0N,
    ERROR_DISPLAY_0N,
    ERROR_DISPLAY_0FF,
} from "../actions/types";


const initialState = {
    loading: false,
    error: null,
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

        case ERROR_DISPLAY_0N:
            return {
                ...state,
                error: action.text,   /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        case ERROR_DISPLAY_0FF:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}