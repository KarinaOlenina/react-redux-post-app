import {COMMENT_CREATE} from "../actions/types";


const initialState = {
    comments: [],
}

/*reducer принимает дефолтное состояние и action, на основе полученных данных создает новое состояние*/

export const commentReducer = (state = initialState, action) => {
    console.log('commentReducer => ', action);

    return state;
    switch(action.type) {

        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data], /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        default:
            return state;
    }
}