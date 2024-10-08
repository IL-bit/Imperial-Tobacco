import './discl.scss';
import Header from '../header/header';

const Discl = () => {
    return(
        <div className="container-fluid">
            <Header/>
            <div className="row">
                <div className="col-xxl-6 mx-auto text-center main">
                    <h1>доступ на веб-сайт разрешен только гражданам рф старше 18 лет, являющимся потребителями табака.</h1>
                    <p>я подтверждаю, что мне есть 18 лет и я являюсь потребителем табака.</p>
                    <button class="no">нет</button>
                    <button class="yes">да</button>
                </div>
            </div>
        </div>
    )
}
export default Discl;