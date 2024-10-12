import './footer.scss';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../img/footer_logo.svg';
import emailSvg from '../img/footer_email.svg';
import telegrammSvg from '../img/footer_telegramm.svg';

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };
    return (
        <div className="row footer">
            <div className="col-xxl-2 mx-auto">
                <div className="email">
                    <img src={emailSvg} alt="email"/>
                    <a href="#">complaints@i-tob.ru</a>                    
                    <p>Вопросы, предложения, дополнительная информация.</p>                    
                </div>
                <div className="tgbot">
                    <img src={telegrammSvg} alt="tgbot"/>
                    <a href="#">@captainjackbot</a>
                    <p>Мир Капитана<br/>и все сокровища здесь!</p>  
                </div>
                <div className="callback text-center">
                    <button onClick={() => handleClick('/feedback')}>обратная связь</button>
                    <img src={logoSvg} alt="logo"/>
                    <p>© 2024 Сайт «Captain Jack»</p>
                    <ul className="text-center">
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