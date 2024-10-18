import './main.scss';
import './media.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import { useNavigate } from 'react-router-dom';
import logoGameSvg from '../img/main_logo_game.svg';
import phoneSvg from '../img/main_phone.svg';
import moreSvg from '../img/main_more.svg';
import chestSvg from '../img/main_chest.svg';
import sigarsSvg from '../img/main_sigars.svg';
import sigars375Svg from '../img/cig_375.svg';

const Main = () => {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        window.scrollTo({ top: window.scrollY + 100 * window.innerHeight / 100, behavior: 'smooth' });
    };
    

    const handleClick = (route) => {
      navigate(route);
    };
    return(
        <div className="container-fluid" id="main">
            <Header/>
            <div className="row main_section1">
                <div className="left_side_first col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <div className="game_board_first text-center">
                        <img src={logoGameSvg} alt="#"/>
                        <button className="game_button"></button>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>                    
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <img src={phoneSvg} alt="phone" className="phone"/>                    
                    <button className="more" onClick={handleMoreClick}><p>арома<br/>новинки</p><img src={moreSvg} alt="#"/></button>
                </div>
            </div>
            <Divider/>
            <div className="row main_section2">
                <div className="left_side col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <div className="game_board text-center">
                        <h1>Арома<br/>Новинки</h1>
                        <p>Открой для себя новые вкусы</p>
                        <button className="go_to" onClick={() => handleClick('/product')}>перейти</button>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <img src={sigarsSvg} alt="#" className="cigar"/>
                    <img src={sigars375Svg} alt="#" className="cigar_375"/>
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}
export default Main;