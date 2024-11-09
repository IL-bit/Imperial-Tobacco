import './feedback.scss';
import './media.scss';
import Header from '../header/header.js';
import userSvg from '../img/feedback_user.svg';
import emailSvg from '../img/feedback_email.svg';
import writeSvg from '../img/feedback_write.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SENDFORM } from '../../../middleware.js';
import Cookies from 'js-cookie';

const Feedback = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const hasFormData = Cookies.get('wasForm');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            dispatch(SENDFORM(formData));
            Cookies.set('wasForm', 'true');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };
    const isFormValid = formData.name && formData.email && formData.message;
    return(
        <div className="container-fluid" id="feedback">
            <Header/>
            {!hasFormData ? (
                <div className="row main">
                    <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-xs-12 mx-auto text-center">
                        <h1>Обратная связь</h1>
                        <p>Вы можете поделиться с нами предложениями и пожеланиями</p>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <img src={userSvg} alt="#"/>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="Имя"
                                    required
                                />
                            </div>
                            <div className="email">
                                <img src={emailSvg} alt="#"/>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="Почта"
                                    required
                                />
                            </div>
                            <div className="text">
                                <img src={writeSvg} alt="#"/>
                                <textarea 
                                    name="message"
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    id="text" 
                                    placeholder="Ваше сообщение"
                                    required
                                ></textarea>
                            </div>                                               
                        </form>
                        <button
                            onClick={handleSubmit}
                            type="submit" 
                            className={`send ${!isFormValid ? 'disactive' : ''}`} 
                            disabled={!isFormValid}
                        >отправить</button> 
                    </div>
                </div>
            ) : (
                <div className="row feedback">
                    <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-xs-12 mx-auto text-center">
                        <h1>Ваше сообщение было успешно отправлено!</h1>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Feedback;