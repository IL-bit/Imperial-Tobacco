import './footer.scss';
import logoSvg from '../img/footer_logo.svg';
import emailSvg from '../img/footer_email.svg';
import telegrammSvg from '../img/footer_telegramm.svg';

const Footer = () => {
    return (
        <div class="row footer">
            <div class="col-xxl-2 mx-auto">
                <div class="email">
                    <img src={emailSvg} alt="email"/>
                    <a href="#">complaints@i-tob.ru</a>                    
                    <p>Вопросы, предложения, дополнительная информация.</p>                    
                </div>
                <div class="tgbot">
                    <img src={telegrammSvg} alt="tgbot"/>
                    <a href="#">@captainjackbot</a>
                    <p>Мир Капитана<br/>и все сокровища здесь!</p>  
                </div>
                <div class="callback text-center">
                    <button>обратная связь</button>
                    <img src={logoSvg} alt="logo"/>
                    <p>© 2024 Сайт «Captain Jack»</p>
                    <ul class="text-center">
                        <li><a href="#">Правила использования сайта</a></li>
                        <li><a href="#">Политика в отношении обработки<br/>персональных данных</a></li>
                        <li><a href="#">Положение о конфиденциальности</a></li>
                        <li><a href="#">Риски, связанные со здоровьем</a></li>
                        <li><a href="#">Вопросы и ответы</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;