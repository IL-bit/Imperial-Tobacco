import './razvod.scss';
import ozonSvg from '../img/razvod_ozon.svg';
import amediatekaSvg from '../img/razvod_amediateka.svg';

const Razvod = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xxl-2 offset-1">
                    <img src={ozonSvg} alt="ozon" className="img-fluid ozon"/>
                </div>
                <div className="col-xxl-6 text-center">
                    <h1>Играй<br></br>и выигрывай призы!</h1>
                    <a href="#" className="tg">перейти в Telegram-бот</a>
                    <a href="#" className="site">перейти на сайт</a>
                </div>
                <div className="col-xxl-2">
                    <img src={amediatekaSvg} alt="amediateka" className="img-fluid amediateka"/>
                </div>
            </div>
        </div>
    )
}
export default Razvod;