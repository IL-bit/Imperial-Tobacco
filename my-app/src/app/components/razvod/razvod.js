import './razvod.scss';
import './media.scss';
import { Link } from 'react-router-dom';
import ozonSvg from '../img/razvod_ozon.svg';
import amediatekaSvg from '../img/razvod_amediateka.svg';

const Razvod = () => {
    return (
        <div className="container-fluid" id="razvod">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-1 col-md-2">
                    <img src={ozonSvg} alt="ozon" className="ozon"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 text-center">
                    <h1>Играй<br></br>и выигрывай призы!</h1>
                    <a href="#" className="tg">перейти в Telegram-бот</a>
                    <Link to="/discl" className="site">перейти на сайт</Link>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 text-lg-end">
                    <img src={amediatekaSvg} alt="amediateka" className="amediateka"/>
                </div>
            </div>
        </div>
    )
}
export default Razvod;