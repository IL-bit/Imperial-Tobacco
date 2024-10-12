import './about.scss';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';

const About = () => {
    return(
        <div className="container-fluid" id="about">
            <Header/>
            <div className="row main">
                <div className="col-xxl-4 mx-auto text-center">
                    <div className="card_1">
                        <div className="head">
                            <h2>Капитан Джек —</h2>
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
            <div className="row divider"></div>
            <Footer/>
        </div>    
    )
}
export default About;