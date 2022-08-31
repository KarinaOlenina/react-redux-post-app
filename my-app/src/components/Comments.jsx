import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid';

import SingleComment from "./SingleComment";
import {commentCreate, commentsLoad} from "../redux/actions/actions";


const Comments = (props) => {
    // console.log('Comments props=> ', props);
    const [textComment, setTextComment] = useState('');

    /* useSelector() - это хук для mapStateToProps (вызывается каждый раз при изменении состояния хранилища.
       Он получает ВСЕ состояние хранилища и должен возвращать объект данных, необходимых этому компоненту)*/
    const comments = useSelector(state => {
        // console.log('redux state => ', state);
        const { commentReducer } = state;
        return commentReducer.comments;
    });
    // console.log('comments => ', comments);

    const dispatch = useDispatch();


    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id)); /* отправляет данные в action - commentCreate*/
        setTextComment('');
    }

    useEffect(() => {
dispatch(commentsLoad())
    },[])

    return (
        <div className={'card-comments'}>
            <form onSubmit={handleSubmit} className={'comments-item-create'}>
                <input type={'text'} value={textComment} onChange={handleInput}/>
                <input type={'submit'} hidden/>
            </form>
            {!!comments.length && comments.map(comment => {
               return <SingleComment key={comment.id} data={comment}/>
            })}
        </div>
    )
}

export default Comments;