import './about.scss';
import './media.scss';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Divider from '../divider/divider.js';
import compassSvg from '../img/compass.svg';
import cubesSvg from '../img/cubes.svg';
import sigLeftSvg from '../img/sig_left.svg';
import sigRightSvg from '../img/sig_right.svg';
import telescopeSvg from '../img/telescope.svg';
import mapSvg from '../img/map.svg';
import coinsSvg from '../img/coins.svg';

const About = () => {
    return(
        <div className="container-fluid" id="about">
            <Header/>
            <div className="row main">
                <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-xs-12 mx-auto text-center align-it">
                    <div className="mobile">
                        <div className="card_1">
                            <div className="head">
                                <h2>Капитан Джек — </h2>
                            </div>
                            <div className="info">
                                <p>это собирательный образ смелого<br/>и свободолюбивого пирата,<br/>любящего приключения,<br/>эксперименты и не привыкшего<br/>скучать.</p>
                                <p>Он из тех, кто предпочтёт<br/>вступить в схватку со стихией,<br/>а не отсиживаться дома в вязаных<br/>носках у камина.</p>
                                <p>Наш морской волк знает толк<br/>в качественной выпивке и табаке.</p>
                            </div>
                            <img src={compassSvg} alt="compass" className="compass" />
                            <img src={cubesSvg} alt="cubes" className="cubes" />
                        </div>
                        <div className="card_2">
                            <div className="head">
                                <h2>Капитан бы одобрил</h2>
                            </div>
                            <div className="info">
                                <p>Капитан по достоинству<br/>оценил бы новые сигареты<br/>Сaptain Jack.</p>
                                <p>При их производстве мы<br/>используем премиальный табак<br/>Вирджиния и исключительно<br/>натуральные ароматизаторы.</p>
                            </div>
                            <img src={sigLeftSvg} alt="sigLeft" className="sigLeft" />
                            <img src={sigRightSvg} alt="sigRight" className="sigRight" />
                        </div>
                        <div className="card_3">
                            <div className="head">
                                <h2>Вперед<br/>за приключениями!</h2>
                            </div>
                            <div className="info">
                                <p>Captain Jack является символом<br/>свободы, смелости<br/>и непоколебимой решимости<br/>отправиться в новое плавание<br/>в поисках сокровищ<br/>и приключений.</p>
                            </div>
                            <img src={telescopeSvg} alt="telescope" className="telescope" />
                            <img src={coinsSvg} alt="coins" className="coins" />
                            <img src={mapSvg} alt="map" className="map" />
                        </div>                    
                    </div>
                    <div className="pc">
                        <div className="card_1">
                            <div className="head">
                                <h2>Капитан Джек — </h2>
                            </div>
                            <div className="info">
                                <p>это собирательный образ смелого<br/>и свободолюбивого пирата, любящего<br/>приключения, эксперименты и не привыкшего<br/>скучать.</p>
                                <p>Он из тех, кто предпочтёт вступить в схватку<br/>со стихией, а не отсиживаться дома в вязаных<br/>носках у камина.</p>
                                <p>Наш морской волк знает толк в качественной<br/>выпивке и табаке.</p>
                            </div>
                        </div>
                        <div className="card_2">
                            <div className="head">
                                <h2>Капитан бы одобрил</h2>
                            </div>
                            <div className="info">
                                <p>Капитан по достоинству оценил бы новые<br/>сигареты Сaptain Jack.</p>
                                <p>При их производстве мы используем<br/>премиальный табак Вирджиния<br/>и исключительно натуральные<br/>ароматизаторы.</p>
                            </div>
                        </div>
                        <div className="card_3">
                            <div className="head">
                                <h2>Вперед<br/>за приключениями!</h2>
                            </div>
                            <div className="info">
                                <p>Captain Jack является символом свободы,<br/>смелости и непоколебимой решимости<br/>отправиться в новое плавание в поисках<br/>сокровищ и приключений.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <Divider/>
            <Footer/>
        </div>    
    )
}
export default About;