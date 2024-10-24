import './discl.scss';
import './media.scss';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';

const Discl = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
      navigate(route);
    };
    return(
        <div className="container-fluid" id="discl">
            <Header/>
            <div className="row">
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-xs-12 mx-auto text-center main">
                    <h1>доступ на веб-сайт разрешен только гражданам рф старше 18 лет, являющимся потребителями табака.</h1>
                    <p>я подтверждаю, что мне есть 18 лет<br/>и я являюсь потребителем табака.</p>
                    <button className="no" onClick={() => handleClick('/')}>нет</button>
                    <button className="yes" onClick={() => handleClick('/main')}>да</button>
                </div>
            </div>
        </div>
    )
}
export default Discl;