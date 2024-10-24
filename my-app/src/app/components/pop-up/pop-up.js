import './pop-up.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../../actions.js';
import { useNavigate } from 'react-router-dom';

const PopUp = () => {
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.pop_up);    

    const handleClick = (route) => {
      navigate(route);
      dispatch(togglePopup());
    };
    return(
        <div className={`pop-up ${isOpen ? 'show' : 'hide'}`}>
            <div className="about">
            <button onClick={() => handleClick('/about')}>about</button>
            </div>
            <div className="game">
            <button>game NOT WORKING</button>
            </div>
            <div className="product">
            <button onClick={() => handleClick('/product')}>product</button>
            </div>
            <div className="journal">
            <button onClick={() => handleClick('/journal')}>journal</button>
            </div>
        </div>
    )
}

export default PopUp;