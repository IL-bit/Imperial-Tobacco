import './pop-up.scss';
import { useSelector } from 'react-redux';

const PopUp = () => {
    const isOpen = useSelector((state) => state.pop_up)
    return(
        <div className={`pop-up ${isOpen ? 'show' : 'hide'}`}>
            <div className="about"></div>
            <div className="game"></div>
            <div className="product"></div>
            <div className="journal"></div>
        </div>
    )
}

export default PopUp;