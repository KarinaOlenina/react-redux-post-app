import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import uniqid from 'uniqid';

import SingleComment from "./SingleComment";
import {commentCreate} from "../redux/actions/actions";


const Comments = (props) => {
    // console.log('Comments props=> ', props);
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();


    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit textComment => ', textComment);
        const id = uniqid();
        dispatch(commentCreate(textComment, id)); /* отправляет данные в action - commentCreate*/
    }

    return (
        <div className={'card-comments'}>
            <form onSubmit={handleSubmit} className={'comments-item-create'}>
                <input type={'text'} value={textComment} onChange={handleInput}/>
                <input type={'submit'} hidden/>
            </form>
            <SingleComment/>
        </div>
    )
}

export default Comments;