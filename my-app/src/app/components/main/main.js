import './main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import { useNavigate } from 'react-router-dom';
import logoGameSvg from '../img/main_logo_game.svg';
import phoneSvg from '../img/main_phone.svg';
import moreSvg from '../img/main_more.svg';
import chestSvg from '../img/main_chest.svg';
import sigarsSvg from '../img/main_sigars.svg';

const Main = () => {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        window.scrollTo({ top: window.scrollY + 90 * window.innerHeight / 100, behavior: 'smooth' });
    };
    

    const handleClick = (route) => {
      navigate(route);
    };
    return(
        <div className="container-fluid" id="main">
            <Header/>
            <div className="row main_section1">
                <div className="col-xxl-6">
                    <div className="game_board text-center">
                        <img src={logoGameSvg} alt="#"/>
                        <button className="game_button"></button>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-5">
                    <img src={phoneSvg} alt="phone" className="phone"/>
                </div>
                <div className="col-xxl-1">
                    <button className="more" onClick={handleMoreClick}><p>арома<br/>новинки</p><img src={moreSvg} alt="#"/></button>
                </div>
            </div>
            <Divider/>
            <div className="row main_section2">
                <div className="col-xxl-6">
                    <div className="game_board text-center">
                        <p className="new">Арома<br/>Новинки</p>
                        <p>Открой для себя новые вкусы</p>
                        <button className="go_to" onClick={() => handleClick('/product')}>перейти</button>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>
                </div>
                <div className="col-xxl-6">
                    <img src={sigarsSvg} alt="#"/>
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}
export default Main;