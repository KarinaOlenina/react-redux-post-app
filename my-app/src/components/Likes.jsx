import {connect} from "react-redux";
import {incrementLikes, decrementLikes} from "../redux/actions/actions";

const Likes = (props) => {
    // console.log('render => ', props);

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
    // console.log('mapStateToProps => ', state);
    const {likesReducer} = state;
    return {
        likes: likesReducer.likes,
    }
}

/* 'mapDispatchToProps' - используется для отправки действий в хранилище.
   Может быть функциональным и в виде обьекта (предпочтительнее и короче)*/
const mapDispatchToProps = (dispatch) => {

    return {
        // dispatching plain actions
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);