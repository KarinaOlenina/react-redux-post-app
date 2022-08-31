import {
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_LOAD,
    COMMENT_UPDATE,
    DECREMENT,
    ERROR_DISPLAY_0FF,
    ERROR_DISPLAY_0N,
    INCREMENT,
    INPUT_TEXT,
    LOADER_DISPLAY_0FF,
    LOADER_DISPLAY_0N,
} from "./types";


export const incrementLikes = () => {
    return {
        type: INCREMENT,
    }
}

export const decrementLikes = () => {
    return {
        type: DECREMENT,
    }
}


export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        text,
    }
}

/*action принимает данные переданные через dispatch и возвращает обьект*/

export const commentCreate = (text, id) => {
    return {
        type: COMMENT_CREATE,
        data: {
            text,
            id,
        }
    }
}

export const commentUpdate = (text, id) => {
    return {
        type: COMMENT_UPDATE,
        data: {
            text,
            id,
        }
    }
}

export const commentDelete = (id) => {
    return {
        type: COMMENT_DELETE,
        id,
    }
}

export const loaderOn = () => {
    return {
        type: LOADER_DISPLAY_0N,
    }
}

export const loaderOff = () => {
    return {
        type: LOADER_DISPLAY_0FF,
    }
}

export const errorOn = (text) => {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_0N,
            text,
        });
        setTimeout(() => {
            dispatch(errorOff())
        }, 2000)
    }

}

export const errorOff = () => {
    return {
        type: ERROR_DISPLAY_0FF,
    }
}

export const commentsLoad = () => {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const jsonData = await response.json();
            dispatch({
                type: COMMENT_LOAD,
                data: jsonData,
            })
            dispatch(loaderOff());
        } catch (err) {
            dispatch(errorOn('Возникла ошибка при получении данных!'));
            dispatch(loaderOff());
        }
    }
}