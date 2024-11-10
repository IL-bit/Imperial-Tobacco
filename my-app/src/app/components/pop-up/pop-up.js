import './pop-up.scss';
import './media.scss';
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
        <div className={isOpen ? 'show' : 'hide'} id="pop-up">
            <nav>
                <div className="about" onClick={() => handleClick('/about')}>
                    <h2>О бренде</h2>
                    <p>Узнайте историю<br/>Captain Jack</p>
                </div>
                <div className="game" onClick={() => handleClick('/game')}>
                    <h2>На абордаж!</h2>
                    <p>Вперед за сокровищами!</p>
                </div>
                <div className="product" onClick={() => handleClick('/product')}>
                    <h2>Продукция</h2>
                    <p>Познакомьтесь<br/>с исключительным качеством</p>
                </div>
                <div className="journal" onClick={() => handleClick('/journal')}>
                    <h2>Журнал</h2>
                    <p>Окунитесь в мир бренда</p>
                </div>                
            </nav>
            <div className="left_bar"></div>
            <button onClick={() => handleClick('/feedback')}>Обратная<br/>связь</button>            
        </div>
    )
}

export default PopUp;