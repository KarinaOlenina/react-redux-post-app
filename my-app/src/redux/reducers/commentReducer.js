import {COMMENT_CREATE,COMMENT_LOAD, COMMENT_DELETE, COMMENT_UPDATE } from "../actions/types";


const initialState = {
    comments: [],
}

/*reducer принимает дефолтное состояние и action, на основе полученных данных создает новое состояние*/

export const commentReducer = (state = initialState, action) => {
    // console.log('commentReducer => ', action);

    switch (action.type) {

        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data], /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }

        case COMMENT_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    text: res.name,
                    id: res.id,
                }
            })
            return {
                ...state,
                comments: commentsNew, /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }

        case COMMENT_UPDATE:
            const {data} = action;
            const {comments} = state;
            const indexItem = comments.findIndex(comment => comment.id === data.id);
            const nextComments = [
                ...comments.slice(0, indexItem),
                data,
                ...comments.slice(indexItem + 1),
            ];
            return {
                ...state,
                comments: nextComments, /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            };

        case COMMENT_DELETE:
            return (() => {
                const {id} = action;
                const {comments} = state;
                const indexItem = comments.findIndex(comment => comment.id === id);
                const nextComments = [
                    ...comments.slice(0, indexItem),
                    ...comments.slice(indexItem + 1),
                ];
                return {
                    ...state,
                    comments: nextComments, /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
                };
            })();


        default:
            return state;
    }
}