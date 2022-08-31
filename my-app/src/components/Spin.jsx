import Loader from 'react-loader-spinner';
import {useSelector} from "react-redux";
import {appReducer} from "../redux/redusers/appReducer";

const Spin = (props) => {

    const spinner = useSelector(state => state.appReducer.loading);


    return (
        <div className={'loader-styles'}>
            <Loader
                visible={spinner}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#264867"
                backgroundColor="#999999"/>
        </div>
    )
}


export default Spin;