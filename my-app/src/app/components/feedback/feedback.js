import './feedback.scss';
import './media.scss';
import Header from '../header/header.js';
import userSvg from '../img/feedback_user.svg';
import emailSvg from '../img/feedback_email.svg';
import writeSvg from '../img/feedback_write.svg';

const Feedback = () => {
    return(
        <div className="container-fluid" id="feedback">
            <Header/>
            <div className="row main">
                <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-xs-12 mx-auto text-center">
                    <h1>Обратная связь</h1>
                    <p>Вы можете поделиться с нами предложениями и пожеланиями</p>
                    <form action="#">
                        <div className="name">
                            <img src={userSvg} alt="#"/>
                            <input type="text" placeholder="Имя"/>
                        </div>
                        <div className="email">
                            <img src={emailSvg} alt="#"/>
                            <input type="email" placeholder="Почта"/>
                        </div>
                        <div className="text">
                            <img src={writeSvg} alt="#"/>
                            <textarea name="textarea" id="text" placeholder="Ваше сообщение"></textarea>
                        </div>                        
                    </form>
                    <button type="submit" className="send">отправить</button>
                </div>
            </div>
        </div>
    )
}
export default Feedback;