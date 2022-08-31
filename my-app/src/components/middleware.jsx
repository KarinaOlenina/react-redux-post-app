import {COMMENT_CREATE} from "../redux/actions/types";
import {errorOn} from "../redux/actions/actions";

const badWords = ['дурак', 'arse', 'arsehead', 'arsehole', 'ass', 'asshole', 'bastard', 'bitch', 'bloody', 'bollocks', 'brotherfucker', 'bugger', 'bullshit', 'fatherfucker', 'frigger', 'fuck'];

export const spamFilter = ({dispatch}) => {

    return function (next) {

        return function (action) {
            if (action.type === COMMENT_CREATE) {
                // console.log('SPANFILTER => ', action.data.text);
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if (hasBadWords) {
                    return dispatch(errorOn('Данные слова недопустимы в нашем сообществе!'))
                }
            }
            return next(action);
        }
    }
}