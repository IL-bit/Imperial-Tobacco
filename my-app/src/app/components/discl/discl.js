import './discl.scss';
import Header from '../header/header';
import { Link } from 'react-router-dom';

const Discl = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <div className="row">
                <div className="col-xxl-6 mx-auto text-center main">
                    <h1>доступ на веб-сайт разрешен только гражданам рф старше 18 лет, являющимся потребителями табака.</h1>
                    <p>я подтверждаю, что мне есть 18 лет и я являюсь потребителем табака.</p>
                    <Link to="/razvod" class="no">нет</Link>
                    <Link to="/main" class="yes">да</Link>
                </div>
            </div>
        </div>
    )
}
export default Discl;