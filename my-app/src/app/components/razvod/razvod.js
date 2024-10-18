import './razvod.scss';
import './media.scss';
import { Link } from 'react-router-dom';
import ozonSvg from '../img/razvod_ozon.svg';
import amediatekaSvg from '../img/razvod_amediateka.svg';

const Razvod = () => {
    return (
        <div className="container-fluid" id="razvod">
            <div className="row justify-content-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-xs-4 d-flex justify-content-center">
                    <img src={ozonSvg} alt="ozon" loading="lazy" className="ozon"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 text-center pc">
                    <h1>Играй<br></br>и выигрывай призы!</h1>
                    <a href="#" className="tg">перейти в Telegram-бот</a>
                    <Link to="/discl" className="site">перейти на сайт</Link>
                </div>
                <div className="col-md-4 mobile"></div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-xs-4 d-flex justify-content-center">
                    <img src={amediatekaSvg} alt="amediateka" loading="lazy" className="amediateka"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-xs-10 mobile mx-auto">
                    <h1>Играй<br></br>и выигрывай призы!</h1>
                    <a href="#" className="tg">перейти в Telegram-бот</a>
                    <Link to="/discl" className="site">перейти на сайт</Link>
                </div>
            </div>
        </div>
    )
}
export default Razvod;