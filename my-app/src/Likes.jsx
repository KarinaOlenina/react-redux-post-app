import {connect} from "react-redux";

const Likes = (props) => {
    console.log('render => ', props);

    return (
        <div className={'button-controls'}>
            <button onClick={props.onIncrementLikes}> ❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}> 👎</button>
        </div>
    )
}

/* 'mapStateToProps' - вызывается каждый раз при изменении состояния хранилища.
  Он получает все состояние хранилища и должен возвращать объект данных, необходимых этому компоненту.*/
const mapStateToProps = (state) => {
    console.log('mapStateToProps => ', state);

    return {
        likes: state.likes,
    }
}

/* 'mapDispatchToProps' - используется для отправки действий в хранилище.
   Может быть функциональным и в виде обьекта (предпочтительнее и короче)*/
const mapDispatchToProps = (dispatch) => {

    return {
        // dispatching plain actions
        onIncrementLikes: () => {
            console.log('click');
            const action = {type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementLikes: () => {
            console.log('click');
            const action = {type: 'DECREMENT'};
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);