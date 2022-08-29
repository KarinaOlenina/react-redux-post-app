import {configureStore} from "@reduxjs/toolkit";

const initialState = {
    likes: 0,
}

/* reducer - не разрешено изменять существующий state. Вместо этого они должны делать неизменяемые обновления, копируя существующие state и внося изменения в скопированные значения.
    Они не должны выполнять никакой асинхронной логики или других «побочных эффектов».*/
const reducer = (state = initialState, action) => {
    console.log('reducer => ', action);

    switch (action.type) {

        case 'INCREMENT':
            return {
                ...state,
                likes: state.likes + 1  /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        case 'DECREMENT':
            if (state.likes === 0) {
                return;
            }
            return {
                ...state,
                likes: state.likes - 1  /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
        default:
            return state;
    }
}

const store = configureStore({reducer});

export default store;