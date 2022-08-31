import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";

import {commentUpdate, commentDelete} from "../redux/actions/actions";

const SingleComment = ({data}) => {
    const {text, id} = data;
    const [commentText, setCommentText] = useState('');

    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate} className={'comments-item'}>
            <div onClick={handleDelete} className={'comments-item-delete'}>&times;</div>
            <input type={'text'} value={commentText} onChange={handleInput}/>
            <input type={'submit'} hidden/>
        </form>
    )
}

export default SingleComment;