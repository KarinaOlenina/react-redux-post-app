import {DECREMENT, INCREMENT} from "./types";


const initialState = {
    likes: 0,
}

export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer => ', action);

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1  /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        case DECREMENT:
            if (state.likes === 0) {
                return {
                    ...state,
                    likes: 0  /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
                };
            } else return {
                ...state,
                likes: state.likes - 1  /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        default:
            return state;
    }
}