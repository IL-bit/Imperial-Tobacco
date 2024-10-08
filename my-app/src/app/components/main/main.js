import './main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import logoGameSvg from '../img/main_logo_game.svg';
import phoneSvg from '../img/main_phone.svg';
import moreSvg from '../img/main_more.svg';
import chestSvg from '../img/main_chest.svg';
import sigarsSvg from '../img/main_sigars.svg';

const Main = () => {
    return(
        <div className="container-fluid">
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
                    <button className="more"><p>арома<br/>новинки</p><img src={moreSvg} alt="#"/></button>
                </div>
            </div>
            <div className="row divider"></div>
            <div className="row main_section2">
                <div className="col-xxl-6">
                    <div className="game_board text-center">
                        <p className="new">Арома<br/>Новинки</p>
                        <p>Открой для себя новые вкусы</p>
                        <button className="go_to">перейти</button>
                    </div>
                    <img src={chestSvg} alt="chest" className="chest"/>
                </div>
                <div className="col-xxl-6">
                    <img src={sigarsSvg} alt="#"/>
                </div>
            </div>
            <div className="row divider"></div>
            <Footer/>
        </div>
    )
}
export default Main;