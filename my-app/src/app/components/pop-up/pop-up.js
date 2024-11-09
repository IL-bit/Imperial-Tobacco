import './pop-up.scss';
import aboutSvg from '../img/menu_about.svg';
import gameSvg from '../img/menu_game.svg';
import productSvg from '../img/menu_product.svg';
import journalSvg from '../img/menu_journal.svg';
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
            <nav>
                <div className="about" onClick={() => handleClick('/about')}>
                    <h2>О бренде</h2>
                    <p>Узнайте историю<br/>Captain Jack</p>
                    <img src={aboutSvg} alt="#" />
                </div>
                <div className="game" onClick={() => handleClick('/game')}>
                    <h2>На абордаж!</h2>
                    <p>Вперед за сокровищами!</p>
                    <img src={gameSvg} alt="#" />
                </div>
                <div className="product" onClick={() => handleClick('/product')}>
                    <h2>Продукция</h2>
                    <p>Познакомьтесь<br/>с исключительным качеством</p>
                    <img src={productSvg} alt="#" />
                </div>
                <div className="journal" onClick={() => handleClick('/journal')}>
                    <h2>Журнал</h2>
                    <p>Окунитесь в мир бренда</p>
                    <img src={journalSvg} alt="#" />
                </div>                
            </nav>
            <div className="left_bar"></div>
            <button>Обратная связь</button>
        </div>
    )
}

export default PopUp;