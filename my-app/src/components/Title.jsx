import { useDispatch, useSelector } from "react-redux";
import {inputText} from "../redux/actions/actions";


const Title = (props) => {
    // console.log('Title props =>', props);

    const text = useSelector( state => {
       const { inputTextReducer } = state;

       return inputTextReducer.text;
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        // console.log('handleChange text => ', event.target.value);
        dispatch(inputText(event.target.value))
    }

    return (
        <div className={'card-title'}>
            <div className={'card-title-top'}>
                <input type={'text'} onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;